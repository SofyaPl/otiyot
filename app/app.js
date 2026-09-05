/**
 * Отиёт (Otiyot) — Карточки Молитв и Благословений
 * Интерактивное мобильное веб-приложение для изучения иврита и молитв
 */

// Базовая коллекция карточек (Стартовая колода)
const DEFAULT_CARDS = [
  {
    id: 'card-1',
    category: 'Утро',
    title: 'Мода ани (Благодарность)',
    hebrew: 'מוֹדָה אֲנִי לְפָנֶיךָ מֶלֶךְ חַי וְקַיָּם, שֶׁהֶחֱזַרְתָּ בִּי נִשְׁמָתִי בְּחֶמְלָה, רַבָּה אֱמוּנָתֶךָ׃',
    transcription: 'Мо-да́ а-ни́ ле-фа-не́-ха, мэ́-лех хай ве-ка-я́м, ше-эхэза́рта би нишма-ти́ бе-хем-ла́, ра-ба́ эму-на-тэ́-ха.',
    translation: '«Благодарю я Тебя, Владыка живой и сущий, за то, что Ты по милосердию Своему возвратил мне душу мою. Велика вера в Тебя!»',
    breakdown: 'Женская форма (мода). Произносится сразу после пробуждения, еще не вставая с кровати. Руки соединяются вместе. Имя Творца не упоминается, поэтому можно говорить до омовения рук.',
    audio: '',
    image: ''
  },
  {
    id: 'card-2',
    category: 'Утро',
    title: 'Омовение рук (Нетилат ядаим)',
    hebrew: 'בָּרוּךְ אַתָּה יְ‑יָ אֱ‑לֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ עַל נְטִילַת יָדָיִם׃',
    transcription: 'Бару́х Ата́ А-дона́й, Э-логей́ну Ме́лех а-ола́м, аше́р кидша́ну бе-мицвота́в ве-цива́ну аль нетила́т яда́йим.',
    translation: '«Благословен Ты, Г-сподь, Б-г наш, Владыка вселенной, освятивший нас Своими заповедями и повелевший нам омывать руки».',
    breakdown: 'Попеременное омовение: правая-левая-правая-левая-правая-левая до запястья. Благословение произносится пока руки влажные перед вытиранием полотенцем.',
    audio: '',
    image: ''
  },
  {
    id: 'card-3',
    category: 'Еда',
    title: 'Шеаколь (Напитки, сыр, рыба, яйца, мясо)',
    hebrew: 'בָּרוּךְ אַתָּה יְ‑יָ אֱ‑לֹהֵינוּ מֶלֶךְ הָעוֹלָם, שֶׁהַכֹּל נִהְיָה בִּדְבָרוֹ׃',
    transcription: 'Бару́х Ата́ А-дона́й, Э-логей́ну Ме́лех а-ола́м, ше-ако́ль нийя́ би-дваро́.',
    translation: '«Благословен Ты, Г-сподь, Б-г наш, Владыка вселенной, по чьему слову возникло все».',
    breakdown: 'Главное благословение на первый утренний глоток воды, чай, кофе, а также на любую пищу, не растущую из земли (молочные продукты, рыба, яйца, мясо, грибы).',
    audio: '',
    image: ''
  },
  {
    id: 'card-4',
    category: 'Еда',
    title: 'Борей при а-эц (Плоды деревьев)',
    hebrew: 'בָּרוּךְ אַתָּה יְ‑יָ אֱ‑לֹהֵינוּ מֶלֶךְ הָעוֹלָם, בּוֹרֵא פְּרִי הָעֵץ׃',
    transcription: 'Бару́х Ата́ А-дона́й, Э-логей́ну Ме́лех а-ола́м, бо-ре́й при а-э́ц.',
    translation: '«Благословен Ты, Г-сподь, Б-г наш, Владыка вселенной, творящий плод дерева».',
    breakdown: 'Произносится перед вкушением фруктов, растущих на многолетних деревьях: яблоки, груши, апельсины, персики, виноград, оливки, орехи.',
    audio: '',
    image: ''
  },
  {
    id: 'card-5',
    category: 'Еда',
    title: 'Борей при а-адама (Плоды земли и овощи)',
    hebrew: 'בָּרוּךְ אַתָּה יְ‑יָ אֱ‑לֹהֵינוּ מֶלֶךְ הָעוֹלָם, בּוֹרֵא פְּרִי הָאֲדָמָה׃',
    transcription: 'Бару́х Ата́ А-дона́й, Э-логей́ну Ме́лех а-ола́м, бо-ре́й при а-адама́.',
    translation: '«Благословен Ты, Г-сподь, Б-г наш, Владыка вселенной, творящий плод земли».',
    breakdown: 'Овощи (огурцы, помидоры, морковь), зелень, ягоды (клубника, малина), а также бананы, дыни и арбузы (поскольку они не растут на деревьях).',
    audio: '',
    image: ''
  },
  {
    id: 'card-6',
    category: 'Еда',
    title: 'Амоци лехем (Хлеб)',
    hebrew: 'בָּרוּךְ אַתָּה יְ‑יָ אֱ‑לֹהֵינוּ מֶלֶךְ הָעוֹלָם, הַמּוֹצִיא לֶחֶם מִן הָאָרֶץ׃',
    transcription: 'Бару́х Ата́ А-дона́й, Э-логей́ну Ме́лех а-ола́м, а-моци́ ле́хем мин а-а́рец.',
    translation: '«Благословен Ты, Г-сподь, Б-г наш, Владыка вселенной, извлекающий хлеб из земли».',
    breakdown: 'Самое главное благословение трапезы. Освобождает от благословений почти всю остальную еду во время обеда. Перед ним обязательно делается омовение рук (Нетилат ядаим).',
    audio: '',
    image: ''
  },
  {
    id: 'card-7',
    category: 'Шабат',
    title: 'Зажигание субботних свечей',
    hebrew: 'בָּרוּךְ אַתָּה יְ‑יָ אֱ‑לֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ לְהַדְלִיק נֵר שֶׁל שַׁבָּת׃',
    transcription: 'Бару́х Ата́ А-дона́й, Э-логей́ну Ме́лех а-ола́м, аше́р кидша́ну бе-мицвота́в ве-цива́ну леадли́к нер шель Шаба́т.',
    translation: '«Благословен Ты, Г-сподь, Б-г наш, Владыка вселенной, освятивший нас Своими заповедями и повелевший нам зажигать субботние свечи».',
    breakdown: 'Главная женская субботняя заповедь. Свечи зажигают за 18-20 минут до захода солнца в пятницу. Женщина зажигает минимум 2 свечи, прикрывает глаза ладонями и произносит благословение.',
    audio: '',
    image: ''
  },
  {
    id: 'card-8',
    category: 'День',
    title: 'Ашер яцар (Благодарность за здоровье тела)',
    hebrew: 'בָּרוּךְ אַתָּה יְ‑יָ אֱ‑לֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר יָצַר אֶת הָאָדָם בְּחָכְמָה, וּבָרָא בוֹ נְקָבִים נְקָבִים חֲלוּלִים חֲלוּלִים׃',
    transcription: 'Бару́х Ата́ А-дона́й, Э-логей́ну Ме́лех а-ола́м, аше́р яца́р эт а-ада́м бе-хохма́, у-вара́ во некави́м некави́м, халули́м халули́м...',
    translation: '«Благословен Ты, Г-сподь, Б-г наш, Владыка вселенной, создавший человека в мудрости и сотворивший в нем органы и полости...»',
    breakdown: 'Произносится после каждого посещения уборной и омовения рук. Одно из важнейших ежедневных благословений, напоминающее о чуде исправной работы человеческого тела.',
    audio: '',
    image: ''
  },
  {
    id: 'card-9',
    category: 'День',
    title: 'Тфилат а-Дерех (Молитва в дорогу)',
    hebrew: 'יְהִי רָצוֹן מִלְּפָנֶיךָ יְ‑יָ אֱ‑לֹהֵינוּ וֵאלֹהֵי אֲבוֹתֵינוּ, שֶׁתּוֹלִיכֵנוּ לְשָׁלוֹם וְתַצְעִידֵנוּ לְשָׁלוֹם, וְתַגִּיעֵנוּ לִמְחוֹז חֶפְצֵנוּ לְחַיִּים וּלְשִׂמְחָה וּלְשָׁלוֹם׃',
    transcription: 'Йехи́ рацо́н ми-лефане́ха А-дона́й Э-логей́ну ве-Логей авоте́йну, ше-толихе́ну ле-шало́м, ве-тацъиде́ну ле-шало́м, ве-тагие́ну ли-мхо́з хефце́йну ле-хаи́м у-ле-симха́ у-ле-шало́м...',
    translation: '«Да будет воля Твоя, Г-сподь, Б-г наш и Б-г отцов наших, чтобы Ты вел нас с миром, и направил стопы наши с миром, и довел нас до цели нашего пути ради жизни, радости и мира...»',
    breakdown: 'Произносится при выезде за пределы города (в дорогу, путешествие, на поездку или перелет).',
    audio: '',
    image: ''
  },
  {
    id: 'card-10',
    category: 'Основы',
    title: 'Шма Исраэль (Слушай, Израиль)',
    hebrew: 'שְׁמַע יִשְׂרָאֵל, יְ‑יָ אֱ‑לֹהֵינוּ, יְ‑יָ אֶחָד׃',
    transcription: 'Шма, Исраэ́ль: А-дона́й Э-логей́ну, А-дона́й Эха́д!',
    translation: '«Слушай, Израиль: Г-сподь — Б-г наш, Г-сподь — один!»',
    breakdown: 'Главнейшая декларация еврейской веры. Произносится утром и перед отходом ко сну. При произнесении глаза закрывают правой рукой, концентрируясь на единстве Творца.',
    audio: '',
    image: ''
  }
];

// Хранилище состояния
class AppState {
  constructor() {
    this.cards = this.loadCards();
    this.currentCategory = 'Все';
    this.currentIndex = 0;
    this.isFlipped = false;
  }

  loadCards() {
    try {
      const saved = localStorage.getItem('otiyot_cards_v1');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Ошибка чтения localStorage', e);
    }
    return DEFAULT_CARDS;
  }

  saveCards() {
    try {
      localStorage.setItem('otiyot_cards_v1', JSON.stringify(this.cards));
    } catch (e) {
      console.error('Ошибка записи localStorage', e);
    }
  }

  getFilteredCards() {
    if (this.currentCategory === 'Все') {
      return this.cards;
    }
    return this.cards.filter(c => c.category === this.currentCategory);
  }

  getCurrentCard() {
    const list = this.getFilteredCards();
    if (list.length === 0) return null;
    if (this.currentIndex >= list.length) {
      this.currentIndex = 0;
    }
    return list[this.currentIndex];
  }

  getCategories() {
    const set = new Set();
    this.cards.forEach(c => {
      if (c.category) set.add(c.category.trim());
    });
    return ['Все', ...Array.from(set)];
  }
}

const state = new AppState();

// DOM элементы
const elCategoryBar = document.getElementById('categories-bar');
const elFlashcard = document.getElementById('current-flashcard');
const elCardStage = document.getElementById('card-stage');
const elCardCounter = document.getElementById('card-counter');
const elDotsIndicator = document.getElementById('dots-indicator');

// Элементы карточки (Front)
const elCardCatLabel = document.getElementById('card-cat-label');
const elCardTitleText = document.getElementById('card-title-text');
const elCardHebrewText = document.getElementById('card-hebrew-text');
const elCardMediaFront = document.getElementById('card-media-front');
const elBtnPlayAudio = document.getElementById('btn-play-audio');
const elBtnPlayAudioBack = document.getElementById('btn-play-audio-back');
const elBtnEditCard = document.getElementById('btn-edit-card');
const elBtnEditCardBack = document.getElementById('btn-edit-card-back');

// Элементы карточки (Back)
const elCardBack = document.querySelector('.card-back');
const elBackScrollContent = document.querySelector('.back-scroll-content');
const elCardBackCatLabel = document.getElementById('card-back-cat-label');
const elCardTranscriptionText = document.getElementById('card-transcription-text');
const elCardTranslationText = document.getElementById('card-translation-text');
const elCardBreakdownText = document.getElementById('card-breakdown-text');

function resetBackScroll() {
  if (elBackScrollContent) elBackScrollContent.scrollTop = 0;
  if (elCardBack) elCardBack.scrollTop = 0;
  requestAnimationFrame(() => {
    if (elBackScrollContent) elBackScrollContent.scrollTop = 0;
    if (elCardBack) elCardBack.scrollTop = 0;
  });
}

// Навигация
const elBtnPrev = document.getElementById('btn-prev-card');
const elBtnNext = document.getElementById('btn-next-card');

// Модалки
const elModalList = document.getElementById('modal-list-view');
const elModalForm = document.getElementById('modal-card-form');
const elModalSettings = document.getElementById('modal-settings');

// Кнопки открытия модалок
const elBtnListView = document.getElementById('btn-list-view');
const elBtnAddCard = document.getElementById('btn-add-card');
const elBtnSettings = document.getElementById('btn-settings');

// Кнопки закрытия
const elBtnCloseList = document.getElementById('btn-close-list');
const elBtnCloseForm = document.getElementById('btn-close-form');
const elBtnCloseSettings = document.getElementById('btn-close-settings');

// Форма
const elCardForm = document.getElementById('card-editor-form');
const elFieldId = document.getElementById('field-card-id');
const elFieldCategory = document.getElementById('field-category');
const elFieldTitle = document.getElementById('field-title');
const elFieldHebrew = document.getElementById('field-hebrew');
const elFieldTranscription = document.getElementById('field-transcription');
const elFieldTranslation = document.getElementById('field-translation');
const elFieldBreakdown = document.getElementById('field-breakdown');
const elFieldAudioFile = document.getElementById('field-audio-file');
const elAudioPreview = document.getElementById('form-audio-preview');
const elAudioPreviewBox = document.getElementById('audio-preview-container');
const elBtnRemoveAudio = document.getElementById('btn-remove-audio');
const elFieldImageFile = document.getElementById('field-image-file');
const elImagePreview = document.getElementById('form-image-preview');
const elImagePreviewBox = document.getElementById('image-preview-container');
const elBtnRemoveImage = document.getElementById('btn-remove-image');
const elBtnDeleteCardAction = document.getElementById('btn-delete-card-action');
const elFormModalTitle = document.getElementById('form-modal-title');

// Настройки
const elBtnExportJson = document.getElementById('btn-export-json');
const elBtnImportJson = document.getElementById('btn-import-json');
const elBtnResetDefault = document.getElementById('btn-reset-default');

// Временное хранение base64 при редактировании
let tempAudioData = '';
let tempImageData = '';

// ================= ИНИЦИАЛИЗАЦИЯ И РЕНДЕРИНГ =================

function init() {
  renderCategories();
  renderCurrentCard();
  setupTouchSwipe();
  setupEventListeners();
  // Мягкая фоновая проверка обновлений базы при запуске с интернетом
  setTimeout(() => {
    syncCardsWithRepo(false);
  }, 1000);
}

function renderCategories() {
  const categories = state.getCategories();
  elCategoryBar.innerHTML = '';
  
  categories.forEach(cat => {
    const chip = document.createElement('button');
    chip.className = `category-chip ${cat === state.currentCategory ? 'active' : ''}`;
    chip.textContent = cat;
    chip.addEventListener('click', () => {
      state.currentCategory = cat;
      state.currentIndex = 0;
      state.isFlipped = false;
      renderCategories();
      renderCurrentCard();
    });
    elCategoryBar.appendChild(chip);
  });
}

function updateCardContent() {
  const filtered = state.getFilteredCards();
  const card = state.getCurrentCard();

  if (!card) {
    elCardCounter.textContent = '0 из 0';
    elCardTitleText.textContent = 'Нет карточек';
    elCardHebrewText.textContent = 'В этой категории пусто. Нажмите «+», чтобы добавить первую карточку!';
    elCardTranscriptionText.textContent = '';
    elCardTranslationText.textContent = '';
    elCardBreakdownText.textContent = '';
    elDotsIndicator.innerHTML = '';
    return;
  }

  elCardCounter.textContent = `${state.currentIndex + 1} из ${filtered.length}`;
  
  // Заполнение Front
  elCardCatLabel.textContent = card.category || 'Общее';
  elCardTitleText.textContent = card.title;
  elCardHebrewText.textContent = card.hebrew;

  // Изображение
  if (card.image) {
    elCardMediaFront.style.display = 'flex';
    elCardMediaFront.innerHTML = `<img src="${card.image}" alt="${card.title}">`;
  } else {
    elCardMediaFront.style.display = 'none';
    elCardMediaFront.innerHTML = '';
  }

  // Заполнение Back
  elCardBackCatLabel.textContent = card.category || 'Перевод';
  elCardTranscriptionText.textContent = card.transcription || 'Транскрипция не заполнена';
  elCardTranslationText.textContent = card.translation || 'Перевод не заполнен';
  elCardBreakdownText.textContent = card.breakdown || '';

  // Обновление точек
  renderDots(filtered.length, state.currentIndex);
}

function resetCardToFront() {
  state.isFlipped = false;
  elFlashcard.style.transition = 'none';
  elFlashcard.classList.remove('is-flipped');
  void elFlashcard.offsetWidth; // Принудительный reflow для мгновенного сброса
  elFlashcard.style.transition = '';
}

function renderCurrentCard() {
  resetCardToFront();
  resetBackScroll();
  updateCardContent();
}

function renderDots(total, current) {
  elDotsIndicator.innerHTML = '';
  if (total <= 1) return;

  const maxDots = Math.min(total, 9);
  for (let i = 0; i < maxDots; i++) {
    const dot = document.createElement('div');
    dot.className = `dot ${i === current ? 'active' : ''}`;
    elDotsIndicator.appendChild(dot);
  }
}

// ================= НАВИГАЦИЯ И ПЕРЕВОРОТ =================

function flipCard() {
  state.isFlipped = !state.isFlipped;
  elFlashcard.classList.toggle('is-flipped', state.isFlipped);
}

let isNavigating = false;

function changeCard(direction) {
  const filtered = state.getFilteredCards();
  if (filtered.length <= 1 || isNavigating) return;

  isNavigating = true;

  // Остановить звук, если играл
  if (currentAudioObj) {
    currentAudioObj.pause();
    currentAudioObj.currentTime = 0;
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  const outClass = direction === 'next' ? 'slide-out-left' : 'slide-out-right';
  const inClass = direction === 'next' ? 'slide-in-right' : 'slide-in-left';

  elCardStage.classList.add(outClass);

  setTimeout(() => {
    if (direction === 'next') {
      state.currentIndex = (state.currentIndex + 1) % filtered.length;
    } else {
      state.currentIndex = (state.currentIndex - 1 + filtered.length) % filtered.length;
    }

    // Всегда открываем новую карточку на лицевой стороне (иврит)
    resetCardToFront();
    resetBackScroll();
    updateCardContent();

    elCardStage.classList.remove(outClass);
    elCardStage.classList.add(inClass);

    setTimeout(() => {
      elCardStage.classList.remove(inClass);
      isNavigating = false;
    }, 200);
  }, 160);
}

function nextCard() {
  changeCard('next');
}

function prevCard() {
  changeCard('prev');
}

// ================= АУДИОПРОИГРЫВАТЕЛЬ =================

let currentAudioObj = null;

function playAudioForCurrentCard() {
  const card = state.getCurrentCard();
  if (!card) return;

  // Остановить предыдущее воспроизведение
  if (currentAudioObj) {
    currentAudioObj.pause();
    currentAudioObj.currentTime = 0;
  }

  // 1. Если есть прикрепленный аудиофайл (base64 или URL)
  if (card.audio) {
    try {
      currentAudioObj = new Audio(card.audio);
      currentAudioObj.play().catch(err => {
        console.warn('Не удалось воспроизвести прикрепленный звук', err);
        fallbackSpeech(card.hebrew);
      });
      return;
    } catch (e) {
      console.warn(e);
    }
  }

  // 2. Встроенный синтезатор речи (Web Speech API) для иврита
  fallbackSpeech(card.hebrew);
}

function fallbackSpeech(hebrewText) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    // Очистить текст от огласовок для более стабильного произношения синтезатором
    const cleanHebrew = hebrewText.replace(/[\u0591-\u05C7]/g, '');
    const utter = new SpeechSynthesisUtterance(cleanHebrew);
    utter.lang = 'he-IL';
    utter.rate = 0.85; // Чуть медленнее для четкости
    window.speechSynthesis.speak(utter);
  } else {
    alert('Чтобы слушать произношение, вы можете прикрепить MP3 файл через кнопку редактирования карточки (карандаш)!');
  }
}

// ================= СВАЙПЫ ДЛЯ ТЕЛЕФОНА (TOUCH GESTURES) =================

function setupTouchSwipe() {
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  elCardStage.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  elCardStage.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    // Игнорируем вертикальный скролл
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
      if (diffX < 0) {
        // Свайп влево — следующая карточка
        nextCard();
      } else {
        // Свайп вправо — предыдущая карточка
        prevCard();
      }
    }
  }
}

// ================= РЕДАКТИРОВАНИЕ И ДОБАВЛЕНИЕ КАРТОЧЕК =================

function openCardEditor(card = null) {
  tempAudioData = '';
  tempImageData = '';
  elFieldAudioFile.value = '';
  elFieldImageFile.value = '';

  if (card) {
    elFormModalTitle.textContent = 'Редактировать карточку';
    elFieldId.value = card.id;
    elFieldCategory.value = card.category;
    elFieldTitle.value = card.title;
    elFieldHebrew.value = card.hebrew;
    elFieldTranscription.value = card.transcription || '';
    elFieldTranslation.value = card.translation || '';
    elFieldBreakdown.value = card.breakdown || '';
    
    // Аудио
    if (card.audio) {
      tempAudioData = card.audio;
      elAudioPreview.src = card.audio;
      elAudioPreviewBox.style.display = 'block';
    } else {
      elAudioPreviewBox.style.display = 'none';
    }

    // Картинка
    if (card.image) {
      tempImageData = card.image;
      elImagePreview.src = card.image;
      elImagePreviewBox.style.display = 'block';
    } else {
      elImagePreviewBox.style.display = 'none';
    }

    elBtnDeleteCardAction.style.display = 'block';
  } else {
    elFormModalTitle.textContent = 'Новая карточка';
    elCardForm.reset();
    elFieldId.value = '';
    elFieldCategory.value = state.currentCategory === 'Все' ? 'Еда' : state.currentCategory;
    elAudioPreviewBox.style.display = 'none';
    elImagePreviewBox.style.display = 'none';
    elBtnDeleteCardAction.style.display = 'none';
  }

  elModalForm.style.display = 'flex';
}

function handleSaveCard(e) {
  e.preventDefault();
  const id = elFieldId.value || 'card-' + Date.now();
  const category = elFieldCategory.value.trim() || 'Разное';
  const title = elFieldTitle.value.trim();
  const hebrew = elFieldHebrew.value.trim();
  const transcription = elFieldTranscription.value.trim();
  const translation = elFieldTranslation.value.trim();
  const breakdown = elFieldBreakdown.value.trim();

  const newCardData = {
    id,
    category,
    title,
    hebrew,
    transcription,
    translation,
    breakdown,
    audio: tempAudioData,
    image: tempImageData
  };

  const existingIdx = state.cards.findIndex(c => c.id === id);
  if (existingIdx >= 0) {
    state.cards[existingIdx] = newCardData;
  } else {
    state.cards.push(newCardData);
  }

  state.saveCards();
  elModalForm.style.display = 'none';
  renderCategories();
  renderCurrentCard();
}

function deleteCardById(id, title) {
  if (!id) return;
  if (confirm(`Вы точно хотите удалить карточку «${title || 'Без названия'}»?`)) {
    state.cards = state.cards.filter(c => c.id !== id);
    if (state.cards.length === 0) {
      state.cards = [...DEFAULT_CARDS];
    }
    state.saveCards();
    if (state.currentIndex >= state.cards.length) {
      state.currentIndex = Math.max(0, state.cards.length - 1);
    }
    renderCategories();
    renderCurrentCard();
    renderListViewItems();
  }
}

function handleDeleteCard() {
  const id = elFieldId.value;
  if (!id) return;
  const card = state.cards.find(c => c.id === id);
  const title = card ? card.title : '';
  deleteCardById(id, title);
  elModalForm.style.display = 'none';
}

// Преобразование загружаемых файлов в base64
function setupFileInputs() {
  elFieldAudioFile.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      tempAudioData = ev.target.result;
      elAudioPreview.src = tempAudioData;
      elAudioPreviewBox.style.display = 'block';
    };
    reader.readAsDataURL(file);
  });

  elBtnRemoveAudio.addEventListener('click', () => {
    tempAudioData = '';
    elFieldAudioFile.value = '';
    elAudioPreviewBox.style.display = 'none';
  });

  elFieldImageFile.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      tempImageData = ev.target.result;
      elImagePreview.src = tempImageData;
      elImagePreviewBox.style.display = 'block';
    };
    reader.readAsDataURL(file);
  });

  elBtnRemoveImage.addEventListener('click', () => {
    tempImageData = '';
    elFieldImageFile.value = '';
    elImagePreviewBox.style.display = 'none';
  });
}

// ================= СПИСОК ВСЕХ КАРТОЧЕК И ПЕРЕМЕЩЕНИЕ =================

function moveCard(fromIndex, toIndex) {
  if (fromIndex < 0 || fromIndex >= state.cards.length) return;
  if (toIndex < 0 || toIndex >= state.cards.length) return;
  if (fromIndex === toIndex) return;

  const currentCard = state.getCurrentCard();
  const [movedCard] = state.cards.splice(fromIndex, 1);
  state.cards.splice(toIndex, 0, movedCard);
  state.saveCards();

  // Сохраняем указатель на текущую карточку
  if (currentCard) {
    const filtered = state.getFilteredCards();
    const newIdx = filtered.findIndex(c => c.id === currentCard.id);
    state.currentIndex = newIdx >= 0 ? newIdx : 0;
  }

  renderCategories();
  renderCurrentCard();
  renderListViewItems();
}

function renderListViewItems() {
  const container = document.getElementById('cards-list-container');
  container.innerHTML = '';

  const list = document.createElement('div');
  list.className = 'cards-list-items';

  const total = state.cards.length;

  state.cards.forEach((card, idx) => {
    const item = document.createElement('div');
    item.className = `card-list-item ${idx === 0 ? 'is-first' : ''}`;
    item.setAttribute('draggable', 'true');
    item.dataset.index = idx;

    item.innerHTML = `
      <div class="card-list-number-badge" title="Позиция #${idx + 1}">${idx + 1}</div>
      <div class="card-list-main-click" title="Открыть карточку">
        <div class="card-list-info">
          <div class="card-list-title-row">
            <span class="card-list-title">${card.title}</span>
            ${idx === 0 ? '<span class="first-tag">Старт</span>' : ''}
          </div>
          <span class="card-list-cat">${card.category}</span>
        </div>
        <div class="card-list-hebrew-preview">${card.hebrew.substring(0, 14)}...</div>
      </div>
      <div class="card-list-order-actions">
        <button class="order-btn btn-top" title="Сделать первой (на 1-е место при запуске)" ${idx === 0 ? 'disabled' : ''}>
          🔝
        </button>
        <button class="order-btn btn-up" title="Поднять выше" ${idx === 0 ? 'disabled' : ''}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"></polyline></svg>
        </button>
        <button class="order-btn btn-down" title="Опустить ниже" ${idx === total - 1 ? 'disabled' : ''}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
        <button class="order-btn btn-edit-item" title="Редактировать карточку">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
        </button>
        <button class="order-btn btn-delete-item" title="Удалить карточку">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </div>
    `;

    // Клик на карточку — открыть её в галерее
    const clickArea = item.querySelector('.card-list-main-click');
    clickArea.addEventListener('click', () => {
      state.currentCategory = card.category;
      renderCategories();
      const filtered = state.getFilteredCards();
      const newIdx = filtered.findIndex(c => c.id === card.id);
      state.currentIndex = newIdx >= 0 ? newIdx : 0;
      renderCurrentCard();
      elModalList.style.display = 'none';
    });

    // Кнопки перемещения
    const btnTop = item.querySelector('.btn-top');
    const btnUp = item.querySelector('.btn-up');
    const btnDown = item.querySelector('.btn-down');

    btnTop.addEventListener('click', (e) => {
      e.stopPropagation();
      moveCard(idx, 0);
    });

    btnUp.addEventListener('click', (e) => {
      e.stopPropagation();
      moveCard(idx, idx - 1);
    });

    btnDown.addEventListener('click', (e) => {
      e.stopPropagation();
      moveCard(idx, idx + 1);
    });

    const btnEditItem = item.querySelector('.btn-edit-item');
    const btnDeleteItem = item.querySelector('.btn-delete-item');

    btnEditItem.addEventListener('click', (e) => {
      e.stopPropagation();
      elModalList.style.display = 'none';
      openCardEditor(card);
    });

    btnDeleteItem.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteCardById(card.id, card.title);
    });

    // Drag and Drop (для мыши и десктопа)
    item.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', idx);
      item.classList.add('is-dragging');
    });

    item.addEventListener('dragend', () => {
      item.classList.remove('is-dragging');
    });

    item.addEventListener('dragover', (e) => {
      e.preventDefault();
      item.classList.add('drag-over');
    });

    item.addEventListener('dragleave', () => {
      item.classList.remove('drag-over');
    });

    item.addEventListener('drop', (e) => {
      e.preventDefault();
      item.classList.remove('drag-over');
      const fromIdx = parseInt(e.dataTransfer.getData('text/plain'), 10);
      if (!isNaN(fromIdx)) {
        moveCard(fromIdx, idx);
      }
    });

    list.appendChild(item);
  });

  container.appendChild(list);
}

function openListView() {
  renderListViewItems();
  elModalList.style.display = 'flex';
}

// ================= РЕЗЕРВНОЕ КОПИРОВАНИЕ / JSON =================

function exportCardsToJson() {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state.cards, null, 2));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute('href', dataStr);
  dlAnchor.setAttribute('download', `otiyot_backup_${new Date().toISOString().slice(0, 10)}.json`);
  dlAnchor.click();
}

function importCardsFromJson(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const parsed = JSON.parse(ev.target.result);
      if (Array.isArray(parsed)) {
        state.cards = parsed;
        state.saveCards();
        renderCategories();
        renderCurrentCard();
        alert('Карточки успешно восстановлены из файла!');
        elModalSettings.style.display = 'none';
      }
    } catch (err) {
      alert('Ошибка при чтении файла JSON: некорректный формат.');
    }
  };
  reader.readAsText(file);
}

function resetToDefaults() {
  if (confirm('Сбросить все карточки к стандартному набору? Ваши изменения будут заменены.')) {
    state.cards = DEFAULT_CARDS;
    state.saveCards();
    renderCategories();
    renderCurrentCard();
    elModalSettings.style.display = 'none';
  }
}

// ================= СИНХРОНИЗАЦИЯ БАЗЫ С GITHUB =================

async function syncCardsWithRepo(isManual = false) {
  try {
    const res = await fetch(`./prayers.json?t=${Date.now()}`);
    let repoCards = [];
    if (res.ok) {
      const data = await res.json();
      repoCards = Array.isArray(data.cards) ? data.cards : (Array.isArray(data) ? data : []);
    } else {
      repoCards = DEFAULT_CARDS;
    }

    if (repoCards.length === 0) {
      if (isManual) alert('В базе репозитория нет карточек.');
      return;
    }

    const existingIds = new Set(state.cards.map(c => c.id));
    const newCards = repoCards.filter(c => !existingIds.has(c.id));

    if (newCards.length > 0) {
      state.cards.push(...newCards);
      state.saveCards();
      renderCategories();
      renderCurrentCard();

      if (isManual) {
        alert(`Успешно!\nДобавлено новых молитв из базы: ${newCards.length}.\nВаш порядок и добавленные карточки сохранены.`);
      } else {
        console.log(`[Auto-sync] Добавлено новых молитв из базы: ${newCards.length}`);
      }
    } else {
      if (isManual) {
        alert(`База молитв в актуальном состоянии!\nВсе доступные молитвы из репозитория (${repoCards.length} шт.) уже добавлены в ваш список.`);
      }
    }
  } catch (err) {
    console.warn('Ошибка синхронизации с базой:', err);
    if (isManual) {
      const existingIds = new Set(state.cards.map(c => c.id));
      const newCards = DEFAULT_CARDS.filter(c => !existingIds.has(c.id));
      if (newCards.length > 0) {
        state.cards.push(...newCards);
        state.saveCards();
        renderCategories();
        renderCurrentCard();
        alert(`Добавлено ${newCards.length} стандартных молитв из встроенной базы.`);
      } else {
        alert('Все доступные молитвы уже есть в вашем списке.');
      }
    }
  }
}

// ================= EVENT LISTENERS =================

function setupEventListeners() {
  // Клик по карточке для переворота (кроме клика по кнопкам внутри)
  elFlashcard.addEventListener('click', e => {
    if (e.target.closest('.audio-btn') || e.target.closest('.edit-btn') || e.target.closest('a')) {
      return;
    }
    flipCard();
  });

  // Навигация кнопками
  elBtnPrev.addEventListener('click', e => {
    e.stopPropagation();
    prevCard();
  });

  elBtnNext.addEventListener('click', e => {
    e.stopPropagation();
    nextCard();
  });

  // Воспроизведение звука
  elBtnPlayAudio.addEventListener('click', e => {
    e.stopPropagation();
    playAudioForCurrentCard();
  });

  elBtnPlayAudioBack.addEventListener('click', e => {
    e.stopPropagation();
    playAudioForCurrentCard();
  });

  // Редактирование текущей карточки
  elBtnEditCard.addEventListener('click', e => {
    e.stopPropagation();
    openCardEditor(state.getCurrentCard());
  });

  if (elBtnEditCardBack) {
    elBtnEditCardBack.addEventListener('click', e => {
      e.stopPropagation();
      openCardEditor(state.getCurrentCard());
    });
  }

  // Модалка списка
  elBtnListView.addEventListener('click', openListView);
  elBtnCloseList.addEventListener('click', () => elModalList.style.display = 'none');

  // Модалка добавления
  elBtnAddCard.addEventListener('click', () => openCardEditor(null));
  elBtnCloseForm.addEventListener('click', () => elModalForm.style.display = 'none');
  elCardForm.addEventListener('submit', handleSaveCard);
  elBtnDeleteCardAction.addEventListener('click', handleDeleteCard);

  // Модалка настроек
  elBtnSettings.addEventListener('click', () => elModalSettings.style.display = 'flex');
  elBtnCloseSettings.addEventListener('click', () => elModalSettings.style.display = 'none');
  elBtnExportJson.addEventListener('click', exportCardsToJson);
  elBtnImportJson.addEventListener('change', importCardsFromJson);
  elBtnResetDefault.addEventListener('click', resetToDefaults);

  const elBtnSyncRepo = document.getElementById('btn-sync-repo');
  if (elBtnSyncRepo) {
    elBtnSyncRepo.addEventListener('click', () => syncCardsWithRepo(true));
  }

  const elBtnPwaInstall = document.getElementById('btn-pwa-install');
  if (elBtnPwaInstall) {
    elBtnPwaInstall.addEventListener('click', async () => {
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        const choice = await deferredInstallPrompt.userChoice;
        if (choice.outcome === 'accepted') {
          deferredInstallPrompt = null;
          elBtnPwaInstall.style.display = 'none';
          elModalSettings.style.display = 'none';
        }
      } else {
        alert('Чтобы установить без значка Chrome:\nВ меню Chrome (три точки справа вверху) выберите «Установить приложение».');
      }
    });
  }

  // Закрытие по клику на фон
  [elModalList, elModalForm, elModalSettings].forEach(m => {
    m.addEventListener('click', e => {
      if (e.target === m) m.style.display = 'none';
    });
  });

  // Клавиатура для компьютера (Стрелки влево/вправо и Пробел для переворота)
  window.addEventListener('keydown', e => {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
    if (e.code === 'Space') {
      e.preventDefault();
      flipCard();
    } else if (e.code === 'ArrowRight') {
      nextCard();
    } else if (e.code === 'ArrowLeft') {
      prevCard();
    }
  });

  setupFileInputs();
}

// PWA установка (WebAPK без значка Chrome)
let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const btnInstall = document.getElementById('btn-pwa-install');
  if (btnInstall) {
    btnInstall.style.display = 'flex';
  }
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  const btnInstall = document.getElementById('btn-pwa-install');
  if (btnInstall) {
    btnInstall.style.display = 'none';
  }
});

// Запуск приложения
document.addEventListener('DOMContentLoaded', init);

// Регистрация Service Worker для работы оффлайн
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(err => {
      console.log('SW registration error:', err);
    });
  });
}

