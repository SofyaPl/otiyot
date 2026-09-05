@echo off
chcp 65001 > nul
title Отиёт — Карточки Молитв и Благословений
cd /d "%~dp0app"
echo Запуск локального сервера...
start http://localhost:3000
node serve.js
pause
