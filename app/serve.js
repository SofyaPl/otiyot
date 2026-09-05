const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

let INITIAL_PORT = parseInt(process.env.PORT, 10) || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.m4a': 'audio/mp4'
};

function getAllIps() {
  const interfaces = os.networkInterfaces();
  const ips = [];
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        ips.push({ name, address: iface.address });
      }
    }
  }
  // Приоритет отдаем домашней Wi-Fi сети 192.168.x.x
  ips.sort((a, b) => {
    if (a.address.startsWith('192.168.')) return -1;
    if (b.address.startsWith('192.168.')) return 1;
    if (a.address.startsWith('10.')) return 1;
    if (b.address.startsWith('10.')) return -1;
    return 0;
  });
  return ips;
}

function startServer(port) {
  const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url.split('?')[0]);

    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        filePath = path.join(__dirname, 'index.html');
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end('Server Error');
          return;
        }
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'no-cache'
        });
        res.end(content);
      });
    });
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      startServer(port + 1);
    } else {
      console.error('Ошибка сервера:', err);
    }
  });

  server.listen(port, '0.0.0.0', () => {
    const ips = getAllIps();
    const primaryIp = ips[0] ? ips[0].address : 'localhost';
    console.log('\n======================================================');
    console.log('   ✡  Приложение «ОТИЁТ» запущено и готово к работе!  ');
    console.log('======================================================\n');
    console.log(`На компьютере откройте:   http://localhost:${port}`);
    console.log(`\nНа телефоне (в том же домашнем Wi-Fi):`);
    console.log(`👉 http://${primaryIp}:${port}\n`);
    if (ips.length > 1) {
      console.log(`(Запасные сетевые адреса, если включен VPN):`);
      ips.slice(1).forEach(item => {
        console.log(`   http://${item.address}:${port} (${item.name})`);
      });
      console.log('');
    }
    console.log('Подсказка: на телефоне откройте эту ссылку в браузере');
    console.log('(Safari или Chrome) и добавьте на экран «Домой»!');
    console.log('======================================================\n');
  });
}

startServer(INITIAL_PORT);
