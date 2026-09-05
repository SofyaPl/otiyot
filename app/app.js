/**
 * Отиёт (Otiyot) — Карточки Молитв и Благословений
 * Интерактивное мобильное веб-приложение для изучения иврита и молитв
 */

// Базовая коллекция карточек (Стартовая колода)
const DEFAULT_CARDS = [
  {
    id: 'card-1',
    category: 'Утро',
    title: 'Моде ани (Благодарность)',
    hebrew: 'מוֹדֶה אֲנִי לְפָנֶיךָ מֶלֶךְ חַי וְקַיָּם, שֶׁהֶחֱזַרְתָּ בִּי נִשְׁמָתִי בְּחֶמְלָה, רַבָּה אֱמוּנָתֶךָ׃',
    transcription: 'Мо-де́ а-ни́ ле-фа-не́-ха, мэ́-лех хай ве-ка-я́м, ше-эхэза́рта би нишма-ти́ бе-хем-ла́, ра-ба́ эму-на-тэ́-ха.',
    translation: '«Благодарю я Тебя, Владыка живой и сущий, за то, что Ты по милосердию Своему возвратил мне душу мою. Велика вера в Тебя!»',
    breakdown: 'Произносится сразу после пробуждения, еще не вставая с кровати. Руки соединяются вместе. В женском роде произносится «Мода́ ани» (מוֹדָה אֲנִי). Имя Творца не упоминается, поэтому можно говорить до омовения рук.',
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
    this.speechRate = this.loadSpeechRate();
    // Режим озвучки Имени Творца: всегда стартует в Учебном режиме ('study') при каждом запуске приложения
    this.speechDivineMode = 'study';
  }

  loadSpeechRate() {
    try {
      const saved = localStorage.getItem('otiyot_speech_rate');
      if (saved) {
        const val = parseFloat(saved);
        if (!isNaN(val) && val >= 0.3 && val <= 1.2) return val;
      }
    } catch (e) {}
    return 0.7; // Спокойный, размеренный темп для изучения (как в Google Переводчике)
  }

  setSpeechRate(rate) {
    this.speechRate = rate;
    try {
      localStorage.setItem('otiyot_speech_rate', rate.toString());
    } catch (e) {}
  }

  loadCards() {
    try {
      const saved = localStorage.getItem('otiyot_cards_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        let updated = false;
        parsed.forEach(c => {
          if (c.id === 'card-1' && (c.title?.includes('Мода') || c.hebrew?.includes('מוֹדָה') || c.breakdown?.includes('Мода ани'))) {
            c.title = 'Моде ани (Благодарность)';
            c.hebrew = 'מוֹדֶה אֲנִי לְפָנֶיךָ מֶלֶךְ חַי וְקַיָּם, שֶׁהֶחֱזַרְתָּ בִּי נִשְׁמָתִי בְּחֶמְלָה, רַבָּה אֱמוּנָתֶךָ׃';
            c.transcription = 'Мо-де́ а-ни́ ле-фа-не́-ха, мэ́-лех хай ве-ка-я́м, ше-эхэза́рта би нишма-ти́ бе-хем-ла́, ра-ба́ эму-на-тэ́-ха.';
            c.breakdown = 'Произносится сразу после пробуждения, еще не вставая с кровати. Руки соединяются вместе. В женском роде произносится «Мода́ ани» (מוֹדָה אֲנִי). Имя Творца не упоминается, поэтому можно говорить до омовения рук.';
            updated = true;
          }
        });
        if (updated) {
          localStorage.setItem('otiyot_cards_v1', JSON.stringify(parsed));
        }
        return parsed;
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

// Переключатели режима произношения (Учебный / Молитва)
const elBtnCardModeToggle = document.getElementById('btn-card-mode-toggle');
const elBtnCardModeToggleBack = document.getElementById('btn-card-mode-toggle-back');
const elBtnModeStudy = document.getElementById('btn-mode-study');
const elBtnModePrayer = document.getElementById('btn-mode-prayer');
const elSettingsDivineModeDesc = document.getElementById('settings-divine-mode-desc');
const elSettingsDivineModeStatus = document.getElementById('settings-divine-mode-status');
const elToastNotification = document.getElementById('toast-notification');

let toastTimeout = null;
function showToast(message) {
  if (!elToastNotification) return;
  elToastNotification.textContent = message;
  elToastNotification.classList.add('show');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    elToastNotification.classList.remove('show');
  }, 2800);
}

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
const elFieldAudioUrl = document.getElementById('field-audio-url');
const elFieldAudioFilename = document.getElementById('field-audio-filename');

// Настройки
const elBtnExportJson = document.getElementById('btn-export-json');
const elBtnImportJson = document.getElementById('btn-import-json');
const elBtnResetDefault = document.getElementById('btn-reset-default');
const elBtnExportCatalog = document.getElementById('btn-export-catalog');
const elBtnDownloadAllAudio = document.getElementById('btn-download-all-audio');
const elInputSettingsBulkAudio = document.getElementById('input-settings-bulk-audio');

// Модалка массовой загрузки
const elModalBulk = document.getElementById('modal-bulk-import');
const elBtnCloseBulk = document.getElementById('btn-close-bulk');
const elBtnOpenBulk = document.getElementById('btn-open-bulk');
const elBtnOpenBulkFromList = document.getElementById('btn-open-bulk-from-list');
const elBtnSwitchToBulk = document.getElementById('btn-switch-to-bulk');
const elBtnDownloadTemplate = document.getElementById('btn-download-template');
const elInputBulkFile = document.getElementById('input-bulk-file');
const elInputBulkAudioFiles = document.getElementById('input-bulk-audio-files');
const elBulkTextInput = document.getElementById('bulk-text-input');
const elBtnBulkClear = document.getElementById('btn-bulk-clear');
const elBulkPreviewArea = document.getElementById('bulk-preview-area');
const elBulkPreviewCount = document.getElementById('bulk-preview-count');
const elBulkPreviewList = document.getElementById('bulk-preview-list');
const elBtnBulkApplyAdd = document.getElementById('btn-bulk-apply-add');
const elBtnBulkApplyAddText = document.getElementById('btn-bulk-apply-add-text');
const elBtnBulkApplyReplace = document.getElementById('btn-bulk-apply-replace');

let parsedBulkCards = [];
let previewAudioObj = null;

// Временное хранение base64 при редактировании
let tempAudioData = '';
let tempImageData = '';

// ================= ИНИЦИАЛИЗАЦИЯ И РЕНДЕРИНГ =================

function init() {
  renderCategories();
  renderCurrentCard();
  setupTouchSwipe();
  setupEventListeners();
  updateSpeechModeUI();
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
let availableVoices = [];

function updateVoices() {
  if ('speechSynthesis' in window) {
    availableVoices = window.speechSynthesis.getVoices();
  }
}
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = updateVoices;
  updateVoices();
}

function playAudioForCurrentCard() {
  const card = state.getCurrentCard();
  if (!card) return;

  // Остановить предыдущее воспроизведение
  if (currentAudioObj) {
    currentAudioObj.pause();
    currentAudioObj.currentTime = 0;
    currentAudioObj = null;
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
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

function setSpeechDivineMode(mode, showNotification = true) {
  state.speechDivineMode = mode;
  updateSpeechModeUI();

  if (showNotification) {
    if (mode === 'prayer') {
      showToast('Включён режим молитвы: Адонай / Элоhейну (до перезапуска)');
    } else {
      showToast('Включён учебный режим: А-шем / Элокейну');
    }
  }
}

function updateSpeechModeUI() {
  const isStudy = (state.speechDivineMode === 'study');

  // Бейджи на карточках (лицевая и оборотная сторона)
  [elBtnCardModeToggle, elBtnCardModeToggleBack].forEach(btn => {
    if (!btn) return;
    btn.className = `speech-mode-badge ${isStudy ? 'mode-study' : 'mode-prayer'}`;
    btn.innerHTML = isStudy
      ? '<span class="mode-badge-text">Учебный</span>'
      : '<span class="mode-badge-text">Молитва</span>';
    btn.title = isStudy
      ? 'Режим произношения: Учебный (А-шем / Элокейну). Нажмите, чтобы включить режим молитвы.'
      : 'Режим произношения: Молитва (Адонай / Элоhейну). Нажмите, чтобы вернуть учебный режим.';
  });

  // Кнопки в настройках
  if (elBtnModeStudy) {
    elBtnModeStudy.className = `divine-mode-btn ${isStudy ? 'active study-active' : ''}`;
  }
  if (elBtnModePrayer) {
    elBtnModePrayer.className = `divine-mode-btn ${!isStudy ? 'active prayer-active' : ''}`;
  }

  // Описание и статус в настройках
  if (elSettingsDivineModeDesc) {
    elSettingsDivineModeDesc.innerHTML = isStudy
      ? '<strong>Учебный режим (активен):</strong> традиционная благочестивая замена Имени (А-шем / Элокейну). Позволяет спокойно тренироваться в любом месте, в дороге и до омовения рук. Включается автоматически при каждом открытии приложения.'
      : '<strong style="color:#fca5a5;">Режим молитвы (активен):</strong> каноническое произношение Имени (Адонай / Элоhейну) для точного разучивания перед настоящей молитвой. Действует до перезапуска приложения.';
  }

  if (elSettingsDivineModeStatus) {
    elSettingsDivineModeStatus.className = `settings-divine-badge ${isStudy ? 'is-study' : 'is-prayer'}`;
    elSettingsDivineModeStatus.innerHTML = isStudy
      ? 'Учебный<br><span style="white-space:nowrap;">(А&#8209;шем)</span>'
      : 'Молитва<br><span style="white-space:nowrap;">(Адонай)</span>';
  }
}

function prepareHebrewForSpeech(text, mode = state.speechDivineMode) {
  if (!text) return '';
  let s = text;
  const isStudy = (mode === 'study');

  // 1. Замена обозначений Имени Творца:
  // В учебном режиме: «А-шем» (הַשֵּׁם)
  // В режиме молитвы: «Адонай» (אדונאי)
  const divineReplacement = isStudy ? ' הַשֵּׁם ' : ' אדונאי ';

  // Пары букв юд с любыми огласовками/дефисами: יְ‑יָ, י-י, י‑י, י־י, י״י, יי, י'י
  s = s.replace(/(^|[^\u05D0-\u05EA])\u05D9[\u0591-\u05C7\u200B-\u200F\u2010-\u2014\u05BE\-\s'\"״׳]*\u05D9[\u0591-\u05C7]*(?=[^\u05D0-\u05EA]|$)/g, '$1' + divineReplacement);

  // Тетраграмматон (יהוה)
  s = s.replace(/(^|[^\u05D0-\u05EA])\u05D9\u05D4\u05D5\u05D4(?=[^\u05D0-\u05EA]|$)/g, '$1' + divineReplacement);

  // Сокращения «А-шем» (ה' или ד')
  s = s.replace(/(^|[^\u05D0-\u05EA])[\u05D4\u05D3]['׳״](?=[^\u05D0-\u05EA]|$)/g, '$1 הַשֵּׁם ');

  // 2. Объединение благочестивых дефисов в Имени «Элоhейну» / «Элоhим» (אֱ‑לֹהֵינוּ -> אֱלֹהֵינוּ)
  s = s.replace(/(\u05D0[\u0591-\u05C7]*)[\u2010-\u2014\u05BE\-'\"״׳]+([\u0591-\u05C7]*\u05DC)/g, '$1$2');

  // В учебном режиме заменяем «hей» на «коф» (Элокейну / Элоким):
  if (isStudy) {
    s = s.replace(/([\u05D0\u05D5][\u0591-\u05C7]*\u05DC[\u0591-\u05C7\u05D5]*)\u05D4([\u0591-\u05C7]*[\u05D9\u05DD\u05DF])/g, '$1\u05E7$2');
  }

  // 3. Замена знаков конца стиха (соф пасук ׃) и разделителей на точки с пробелом для естественных пауз
  s = s.replace(/[\u05C0\u05C3׃]/g, '. ');

  // 4. Замена маккафа и дефисов между словами на пробелы
  s = s.replace(/[\u05BE\u2010-\u2014\-]/g, ' ');

  // 5. Очистка от древних знаков кантилляции (теамим 0591-05AF)
  s = s.replace(/[\u0591-\u05AF]/g, '');

  // 6. Нормализация множественных пробелов
  return s.replace(/\s+/g, ' ').trim();
}

function fallbackSpeech(hebrewText) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();

    const cleanHebrew = prepareHebrewForSpeech(hebrewText, state.speechDivineMode);
    const utter = new SpeechSynthesisUtterance(cleanHebrew);
    utter.lang = 'he-IL';

    // Выбрать специализированный голос иврита, если он доступен в системе
    if (!availableVoices || availableVoices.length === 0) {
      updateVoices();
    }
    if (availableVoices && availableVoices.length > 0) {
      const heVoice = availableVoices.find(v => v.lang === 'he-IL' || v.lang === 'he_IL' || (v.lang && v.lang.startsWith('he')));
      if (heVoice) utter.voice = heVoice;
    }

    // Спокойный, размеренный темп для изучения молитв (как в Google Переводчике, по умолчанию 0.70x)
    utter.rate = state.speechRate || 0.7;

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

function setupCategoryPicker(activeCategory = 'Утро') {
  const elCategoryChips = document.getElementById('category-quick-chips');
  const elCategorySelect = document.getElementById('field-category-select');
  const elCategoryCustomGroup = document.getElementById('custom-category-group');
  const elCategoryCustomInput = document.getElementById('field-category-custom');
  const elFieldCategory = document.getElementById('field-category');

  if (!elCategoryChips || !elCategorySelect || !elFieldCategory) return;

  const baseCategories = ['Утро', 'Еда', 'Шабат', 'Праздники', 'Буквы'];
  const userCategories = state.getCategories().filter(c => c !== 'Все');
  const allCategories = Array.from(new Set([...baseCategories, ...userCategories]));

  let currentCat = (activeCategory || 'Утро').trim();
  const isCustom = !allCategories.includes(currentCat);

  // Наполняем Select
  elCategorySelect.innerHTML = '';
  allCategories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    if (!isCustom && cat === currentCat) opt.selected = true;
    elCategorySelect.appendChild(opt);
  });

  const optCustom = document.createElement('option');
  optCustom.value = '__custom__';
  optCustom.textContent = '➕ Своя новая категория...';
  if (isCustom) optCustom.selected = true;
  elCategorySelect.appendChild(optCustom);

  // Наполняем Чипы для выбора в 1 клик на мобильном
  elCategoryChips.innerHTML = '';
  allCategories.forEach(cat => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `chip-btn ${(!isCustom && cat === currentCat) ? 'active' : ''}`;
    btn.textContent = cat;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      selectCategory(cat);
    });
    elCategoryChips.appendChild(btn);
  });

  const btnCustom = document.createElement('button');
  btnCustom.type = 'button';
  btnCustom.className = `chip-btn chip-btn-add ${isCustom ? 'active' : ''}`;
  btnCustom.textContent = '➕ Своя';
  btnCustom.addEventListener('click', (e) => {
    e.preventDefault();
    selectCategory('__custom__');
  });
  elCategoryChips.appendChild(btnCustom);

  function selectCategory(cat) {
    if (cat === '__custom__') {
      elCategorySelect.value = '__custom__';
      elCategoryCustomGroup.style.display = 'block';
      if (elCategoryCustomInput) {
        if (!isCustom) elCategoryCustomInput.value = '';
        elCategoryCustomInput.focus();
        elFieldCategory.value = elCategoryCustomInput.value.trim() || 'Разное';
      }
      elCategoryChips.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
      btnCustom.classList.add('active');
    } else {
      elCategorySelect.value = cat;
      elCategoryCustomGroup.style.display = 'none';
      elFieldCategory.value = cat;
      elCategoryChips.querySelectorAll('.chip-btn').forEach(b => {
        b.classList.toggle('active', b.textContent === cat);
      });
      btnCustom.classList.remove('active');
    }
  }

  elCategorySelect.onchange = () => {
    selectCategory(elCategorySelect.value);
  };

  if (elCategoryCustomInput) {
    elCategoryCustomInput.oninput = () => {
      if (elCategorySelect.value === '__custom__') {
        elFieldCategory.value = elCategoryCustomInput.value.trim() || 'Разное';
      }
    };
  }

  if (isCustom) {
    selectCategory('__custom__');
    if (elCategoryCustomInput) elCategoryCustomInput.value = currentCat;
    elFieldCategory.value = currentCat;
  } else {
    selectCategory(currentCat);
  }
}

function openCardEditor(card = null) {
  tempAudioData = '';
  tempImageData = '';
  if (elFieldAudioFile) elFieldAudioFile.value = '';
  if (elFieldImageFile) elFieldImageFile.value = '';
  if (elFieldAudioUrl) elFieldAudioUrl.value = '';
  if (elFieldAudioFilename) elFieldAudioFilename.textContent = '';

  if (card) {
    elFormModalTitle.textContent = 'Редактировать карточку';
    elFieldId.value = card.id;
    setupCategoryPicker(card.category);
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
      if (card.audio.startsWith('http://') || card.audio.startsWith('https://') || card.audio.startsWith('./')) {
        if (elFieldAudioUrl) elFieldAudioUrl.value = card.audio;
        if (elFieldAudioFilename) elFieldAudioFilename.textContent = 'Ссылка на MP3';
      } else {
        if (elFieldAudioFilename) elFieldAudioFilename.textContent = 'Прикреплен аудиофайл в памяти';
      }
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
    const defaultCat = state.currentCategory === 'Все' ? 'Утро' : state.currentCategory;
    setupCategoryPicker(defaultCat);
    elAudioPreviewBox.style.display = 'none';
    elImagePreviewBox.style.display = 'none';
    elBtnDeleteCardAction.style.display = 'none';
  }

  elModalForm.style.display = 'flex';
}

function handleSaveCard(e) {
  e.preventDefault();
  const id = elFieldId.value || 'card-' + Date.now();
  
  let category = elFieldCategory.value.trim();
  if (category === '__custom__') {
    const customInp = document.getElementById('field-category-custom');
    category = (customInp ? customInp.value.trim() : '') || 'Разное';
  }
  if (!category) category = 'Разное';

  const title = elFieldTitle.value.trim();
  const hebrew = elFieldHebrew.value.trim();
  const transcription = elFieldTranscription.value.trim();
  const translation = elFieldTranslation.value.trim();
  const breakdown = elFieldBreakdown.value.trim();

  let audio = tempAudioData;
  if (!audio && elFieldAudioUrl && elFieldAudioUrl.value.trim()) {
    audio = elFieldAudioUrl.value.trim();
  }

  const newCardData = {
    id,
    category,
    title,
    hebrew,
    transcription,
    translation,
    breakdown,
    audio,
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

// Преобразование загружаемых файлов в base64 и работа со звуком
function setupFileInputs() {
  if (elFieldAudioFile) {
    elFieldAudioFile.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        tempAudioData = ev.target.result;
        elAudioPreview.src = tempAudioData;
        elAudioPreviewBox.style.display = 'block';
        if (elFieldAudioUrl) elFieldAudioUrl.value = '';
        if (elFieldAudioFilename) elFieldAudioFilename.textContent = file.name;
      };
      reader.readAsDataURL(file);
    });
  }

  if (elFieldAudioUrl) {
    elFieldAudioUrl.addEventListener('input', () => {
      const url = elFieldAudioUrl.value.trim();
      if (url) {
        tempAudioData = url;
        elAudioPreview.src = url;
        elAudioPreviewBox.style.display = 'block';
        if (elFieldAudioFilename) elFieldAudioFilename.textContent = 'Введена ссылка на MP3';
      } else if (!elFieldAudioFile || !elFieldAudioFile.value) {
        tempAudioData = '';
        elAudioPreviewBox.style.display = 'none';
        if (elFieldAudioFilename) elFieldAudioFilename.textContent = '';
      }
    });
  }

  if (elBtnRemoveAudio) {
    elBtnRemoveAudio.addEventListener('click', () => {
      tempAudioData = '';
      if (elFieldAudioFile) elFieldAudioFile.value = '';
      if (elFieldAudioUrl) elFieldAudioUrl.value = '';
      if (elFieldAudioFilename) elFieldAudioFilename.textContent = '';
      elAudioPreviewBox.style.display = 'none';
    });
  }

  if (elFieldImageFile) {
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
  }

  if (elBtnRemoveImage) {
    elBtnRemoveImage.addEventListener('click', () => {
      tempImageData = '';
      if (elFieldImageFile) elFieldImageFile.value = '';
      elImagePreviewBox.style.display = 'none';
    });
  }

  if (elInputBulkAudioFiles) {
    elInputBulkAudioFiles.addEventListener('change', handleBulkAudioFiles);
  }
  if (elInputSettingsBulkAudio) {
    elInputSettingsBulkAudio.addEventListener('change', handleBulkAudioFiles);
  }
  if (elBtnDownloadAllAudio) {
    elBtnDownloadAllAudio.addEventListener('click', downloadAllRemoteAudio);
  }
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
      <div class="card-list-row-top">
        <div class="card-list-number-badge" title="Позиция #${idx + 1}">${idx + 1}</div>
        <div class="card-list-main-click" title="Нажмите, чтобы открыть эту карточку">
          <div class="card-list-title-row">
            <span class="card-list-title">${card.title}</span>
            ${idx === 0 ? '<span class="first-tag">Старт</span>' : ''}
          </div>
          <div class="card-list-sub-row">
            <span class="card-list-cat">${card.category}</span>
            <span class="card-list-sub-divider">•</span>
            <span class="card-list-hebrew-preview">${card.hebrew.replace(/[׃.]$/, '').substring(0, 32)}...</span>
          </div>
        </div>
        <div class="card-list-item-tools">
          <button class="order-btn btn-edit-item" title="Редактировать карточку">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
          </button>
          <button class="order-btn btn-delete-item" title="Удалить карточку">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      </div>
      <div class="card-list-row-bottom">
        <div class="card-list-order-hint">Позиция в списке:</div>
        <div class="card-list-order-controls">
          <button class="order-action-btn btn-top" title="Поставить на 1-е место (откроется при старте)" ${idx === 0 ? 'disabled' : ''}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"></polyline><line x1="6" y1="5" x2="18" y2="5"></line></svg>
            <span>В начало</span>
          </button>
          <button class="order-action-btn btn-up" title="Поднять выше на 1 шаг" ${idx === 0 ? 'disabled' : ''}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"></polyline></svg>
            <span>Выше</span>
          </button>
          <button class="order-action-btn btn-down" title="Опустить ниже на 1 шаг" ${idx === total - 1 ? 'disabled' : ''}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
            <span>Ниже</span>
          </button>
        </div>
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

function exportCatalogJson() {
  const catalogData = {
    version: 1,
    updatedAt: new Date().toISOString().slice(0, 10),
    cards: state.cards
  };
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(catalogData, null, 2));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute('href', dataStr);
  dlAnchor.setAttribute('download', 'prayers.json');
  document.body.appendChild(dlAnchor);
  dlAnchor.click();
  document.body.removeChild(dlAnchor);
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

// ================= СИНХРОНИЗАЦИЯ С ОБЩИМ КАТАЛОГОМ =================

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
      if (isManual) alert('В общем каталоге нет карточек.');
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
        alert(`Успешно!\nДобавлено новых молитв из общего каталога: ${newCards.length}.\nВаш порядок и добавленные карточки сохранены.`);
      } else {
        console.log(`[Auto-sync] Добавлено новых молитв из каталога: ${newCards.length}`);
      }
    } else {
      if (isManual) {
        alert(`База молитв в актуальном состоянии!\nВсе доступные молитвы из общего каталога (${repoCards.length} шт.) уже добавлены в ваш список.`);
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

// ================= МАССОВАЯ ЗАГРУЗКА ИЗ ТАБЛИЦЫ =================

let bulkOpenedFromModal = null;

function openBulkImportModal(sourceModal = null) {
  if (sourceModal) {
    bulkOpenedFromModal = sourceModal;
  } else if (elModalSettings && elModalSettings.style.display === 'flex') {
    bulkOpenedFromModal = elModalSettings;
  } else if (elModalList && elModalList.style.display === 'flex') {
    bulkOpenedFromModal = elModalList;
  } else if (elModalForm && elModalForm.style.display === 'flex') {
    bulkOpenedFromModal = elModalForm;
  }

  if (elModalSettings) elModalSettings.style.display = 'none';
  if (elModalList) elModalList.style.display = 'none';
  if (elModalForm) elModalForm.style.display = 'none';
  if (elModalBulk) {
    elModalBulk.style.display = 'flex';
    if (elBulkTextInput) elBulkTextInput.focus();
  }
}

function closeBulkImportModal() {
  if (elModalBulk) elModalBulk.style.display = 'none';
  if (previewAudioObj) {
    previewAudioObj.pause();
    previewAudioObj = null;
  }
  updateBulkPreview([]);
  if (bulkOpenedFromModal) {
    bulkOpenedFromModal.style.display = 'flex';
    bulkOpenedFromModal = null;
  }
}

function downloadExcelTemplate() {
  const bom = '\uFEFF';
  const csvContent = bom +
    'Категория;Название;Иврит с огласовками;Транскрипция;Перевод;Пояснение;Ссылка на аудио (MP3)\r\n' +
    'Утро;Моде ани;מוֹדֶה אֲנִי לְפָנֶיךָ מֶלֶךְ חַי וְקַיָּם, שֶׁהֶחֱזַרְתָּ בִּי נִשְׁמָתִי בְּחֶמְלָה, רַבָּה אֱמוּנָתֶךָ׃;Мо-де́ а-ни́ ле-фа-не́-ха, мэ́-лех хай ве-ка-я́м, ше-эхэза́рта би нишма-ти́ бе-хем-ла́, ра-ба́ эму-на-тэ́-ха.;«Благодарю я Тебя, Владыка живой и сущий, за то, что Ты по милосердию Своему возвратил мне душу мою. Велика вера в Тебя!»;Произносится сразу после пробуждения, еще не вставая с кровати. Руки соединяются вместе. В женском роде произносится «Мода́ ани» (מוֹדָה אֲנִי).;\r\n' +
    'Еда;Шеаколь;בָּרוּךְ אַתָּה יְהֹוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, שֶׁהַכֹּל נִהְיָה בִּדְבָרוֹ׃;Ба-ру́х а-та́ А-до-на́й, Э-ло-э́й-ну мэ́-лех а-о-ла́м, ше-а-ко́ль ни-йя́ бид-ва-ро́.;«Благословен Ты, Господь, Бог наш, Царь вселенной, по слову Которого возникло всё!»;Произносится перед питьем воды, чая, напитков, а также перед мясом, рыбой, сыром и яйцами.;\r\n' +
    'Шабат;Кидуш (начало);יוֹם הַשִּׁשִּׁי. וַיְכֻלּוּ הַשָּׁמַיִם וְהָאָרֶץ וְכָל צְבָאָם׃;Йом а-ши-ши́. Ва-йху-лу́ а-ша-ма́-им ве-а-а́-рец ве-холь це-ва-а́м.;«День шестой. И завершены были небо и земля, и все воинство их.»;Начало пятничного вечернего кидуша над бокалом вина или виноградного сока.;\r\n';

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'образец_таблицы_молитв.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function parseCsvOrTsv(text) {
  if (!text) return [];

  const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
  if (lines.length === 0) return [];

  let tabs = 0, semicolons = 0, commas = 0;
  for (let i = 0; i < Math.min(lines.length, 5); i++) {
    tabs += (lines[i].match(/\t/g) || []).length;
    semicolons += (lines[i].match(/;/g) || []).length;
    commas += (lines[i].match(/,/g) || []).length;
  }

  let delimiter = '\t';
  if (tabs >= semicolons && tabs >= commas && tabs > 0) delimiter = '\t';
  else if (semicolons >= commas && semicolons > 0) delimiter = ';';
  else if (commas > 0) delimiter = ',';

  const rows = [];
  let currentRow = [];
  let currentCell = '';
  let insideQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        currentCell += '"';
        i++;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === delimiter && !insideQuotes) {
      currentRow.push(currentCell.trim());
      currentCell = '';
    } else if ((char === '\r' || char === '\n') && !insideQuotes) {
      if (char === '\r' && nextChar === '\n') i++;
      currentRow.push(currentCell.trim());
      currentCell = '';
      if (currentRow.some(c => c.length > 0)) {
        rows.push(currentRow);
      }
      currentRow = [];
    } else {
      currentCell += char;
    }
  }

  if (currentCell.length > 0 || currentRow.length > 0) {
    currentRow.push(currentCell.trim());
    if (currentRow.some(c => c.length > 0)) {
      rows.push(currentRow);
    }
  }

  return rows;
}

function parseRowsToCards(rows) {
  if (!rows || rows.length === 0) return [];

  const headerKeywords = {
    category: ['категория', 'раздел', 'тема', 'category', 'group'],
    title: ['название', 'имя', 'молитва', 'заголовок', 'title', 'name'],
    hebrew: ['иврит', 'текст', 'оригинал', 'слова', 'hebrew', 'ivrit'],
    transcription: ['транскрипция', 'чтение', 'произношение', 'звучание', 'transcription'],
    translation: ['перевод', 'значение', 'русский', 'translation'],
    breakdown: ['пояснение', 'комментарий', 'правила', 'законы', 'разбор', 'описание', 'comment', 'breakdown'],
    audio: ['аудио', 'звук', 'озвучка', 'ссылка на аудио', 'мп3', 'audio', 'sound', 'voice', 'mp3', 'url', 'link']
  };

  const mapping = { category: -1, title: -1, hebrew: -1, transcription: -1, translation: -1, breakdown: -1, audio: -1 };
  let startIndex = 0;
  const firstRow = rows[0].map(c => String(c || '').toLowerCase().trim());
  let matchesCount = 0;

  for (let colIdx = 0; colIdx < firstRow.length; colIdx++) {
    const val = firstRow[colIdx];
    for (const [field, keywords] of Object.entries(headerKeywords)) {
      if (keywords.some(k => val.includes(k))) {
        if (mapping[field] === -1) {
          mapping[field] = colIdx;
          matchesCount++;
        }
      }
    }
  }

  if (matchesCount >= 2) {
    startIndex = 1;
  } else {
    mapping.category = -1; mapping.title = -1; mapping.hebrew = -1;
    mapping.transcription = -1; mapping.translation = -1; mapping.breakdown = -1; mapping.audio = -1;
  }

  const sampleRows = rows.slice(startIndex, startIndex + 10);
  const totalCols = rows[startIndex] ? rows[startIndex].length : 0;

  if (mapping.hebrew === -1) {
    let bestHebrewCol = -1;
    let maxHebrewChars = 0;

    for (let c = 0; c < totalCols; c++) {
      let hebrewChars = 0;
      sampleRows.forEach(r => {
        const cell = String(r[c] || '');
        const match = cell.match(/[\u0590-\u05FF]/g);
        if (match) hebrewChars += match.length;
      });
      if (hebrewChars > maxHebrewChars && hebrewChars >= 3) {
        maxHebrewChars = hebrewChars;
        bestHebrewCol = c;
      }
    }
    mapping.hebrew = bestHebrewCol;
  }

  if (mapping.hebrew === -1) {
    mapping.hebrew = totalCols >= 3 ? 2 : 0;
  }

  if (mapping.category === -1 && mapping.title === -1) {
    if (mapping.hebrew === 2) {
      mapping.category = 0;
      mapping.title = 1;
      mapping.transcription = 3 < totalCols ? 3 : -1;
      mapping.translation = 4 < totalCols ? 4 : -1;
      mapping.breakdown = 5 < totalCols ? 5 : -1;
      mapping.audio = 6 < totalCols ? 6 : -1;
    } else if (mapping.hebrew === 1) {
      mapping.title = 0;
      mapping.category = -1;
      mapping.transcription = 2 < totalCols ? 2 : -1;
      mapping.translation = 3 < totalCols ? 3 : -1;
      mapping.breakdown = 4 < totalCols ? 4 : -1;
      mapping.audio = 5 < totalCols ? 5 : -1;
    } else if (mapping.hebrew === 0) {
      mapping.title = 1 < totalCols ? 1 : -1;
      mapping.transcription = 2 < totalCols ? 2 : -1;
      mapping.translation = 3 < totalCols ? 3 : -1;
      mapping.breakdown = 4 < totalCols ? 4 : -1;
      mapping.audio = 5 < totalCols ? 5 : -1;
    }
  }

  const cards = [];
  for (let i = startIndex; i < rows.length; i++) {
    const row = rows[i];
    if (!row || row.every(c => !c || !String(c).trim())) continue;

    const hebrew = (mapping.hebrew >= 0 ? String(row[mapping.hebrew] || '') : '').trim();
    let title = (mapping.title >= 0 ? String(row[mapping.title] || '') : '').trim();
    let category = (mapping.category >= 0 ? String(row[mapping.category] || '') : '').trim();
    const transcription = (mapping.transcription >= 0 ? String(row[mapping.transcription] || '') : '').trim();
    const translation = (mapping.translation >= 0 ? String(row[mapping.translation] || '') : '').trim();
    const breakdown = (mapping.breakdown >= 0 ? String(row[mapping.breakdown] || '') : '').trim();
    let audio = (mapping.audio >= 0 ? String(row[mapping.audio] || '') : '').trim();

    // Авто-поиск ссылки на аудио в любой ячейке, если не была найдена колонка
    if (!audio) {
      for (let c = 0; c < row.length; c++) {
        if (c === mapping.hebrew || c === mapping.title || c === mapping.category) continue;
        const val = String(row[c] || '').trim();
        if (/^(https?:\/\/|\.\/|\/).+\.(mp3|wav|ogg|m4a|aac)($|\?)/i.test(val) || /^https?:\/\/.+/i.test(val)) {
          audio = val;
          break;
        }
      }
    }

    if (!title) {
      if (hebrew) {
        title = hebrew.split(/\s+/).slice(0, 3).join(' ');
      } else {
        title = `Молитва ${cards.length + 1}`;
      }
    }

    if (!category) {
      category = 'Молитвы';
    }

    if (hebrew || title || translation) {
      cards.push({
        id: 'card-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
        category,
        title,
        hebrew,
        transcription,
        translation,
        breakdown,
        audio,
        image: ''
      });
    }
  }

  return cards;
}

function testPlayAudio(url, btnElement) {
  if (previewAudioObj) {
    previewAudioObj.pause();
    previewAudioObj = null;
    document.querySelectorAll('.mini-play-btn').forEach(b => b.textContent = '▶️ Проверить');
    return;
  }
  try {
    previewAudioObj = new Audio(url);
    if (btnElement) btnElement.textContent = '⏹️ Стоп';
    previewAudioObj.onended = () => {
      if (btnElement) btnElement.textContent = '▶️ Проверить';
      previewAudioObj = null;
    };
    previewAudioObj.onerror = () => {
      alert('Не удалось загрузить аудио по ссылке:\n' + url + '\nУбедитесь, что ссылка прямая (на .mp3) и открывается в браузере.');
      if (btnElement) btnElement.textContent = '▶️ Проверить';
      previewAudioObj = null;
    };
    previewAudioObj.play().catch(err => {
      alert('Ошибка воспроизведения аудио: ' + err.message);
      if (btnElement) btnElement.textContent = '▶️ Проверить';
      previewAudioObj = null;
    });
  } catch (err) {
    alert('Ошибка запуска аудио: ' + err.message);
  }
}

async function downloadAllRemoteAudio() {
  const cardsWithUrls = state.cards.filter(c => c.audio && (c.audio.startsWith('http://') || c.audio.startsWith('https://') || c.audio.startsWith('./')));
  if (cardsWithUrls.length === 0) {
    alert('В карточках нет внешних интернет-ссылок на аудиофайлы.\n(Либо все аудиофайлы уже сохранены в памяти телефона, либо ссылки не указаны).');
    return;
  }

  if (!confirm(`Найдено ${cardsWithUrls.length} ${pluralizeCards(cardsWithUrls.length)} со ссылками на аудиофайлы.\nСкачать их прямо в память устройства, чтобы они воспроизводились офлайн без интернета?`)) {
    return;
  }

  let downloadedCount = 0;
  let failedCount = 0;

  for (let i = 0; i < cardsWithUrls.length; i++) {
    const card = cardsWithUrls[i];
    try {
      const res = await fetch(card.audio);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const blob = await res.blob();
      const base64Data = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = ev => resolve(ev.target.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      card.audio = base64Data;
      downloadedCount++;
    } catch (err) {
      console.warn(`Не удалось скачать аудио для «${card.title}»:`, err);
      failedCount++;
    }
  }

  state.saveCards();
  renderCurrentCard();

  let msg = `Готово!\nУспешно скачано в память: ${downloadedCount} аудио. Теперь они работают офлайн без интернета!`;
  if (failedCount > 0) {
    msg += `\nНе удалось скачать (CORS или недоступна ссылка): ${failedCount} шт. Они продолжат работать как ссылки онлайн.`;
  }
  alert(msg);
}

function handleBulkAudioFiles(e) {
  const files = Array.from(e.target.files || []);
  if (files.length === 0) return;

  const matched = [];
  const unmatched = [];
  let processed = 0;

  files.forEach((file) => {
    const rawName = file.name.replace(/\.[^/.]+$/, '').trim();
    const cleanName = rawName.toLowerCase();

    let targetCard = null;
    // 1. Точное совпадение
    targetCard = state.cards.find(c => c.title.trim().toLowerCase() === cleanName);

    // 2. Частичное совпадение (поддерживаем как «моде ани», так и «мода ани»)
    if (!targetCard) {
      const normalizedName = cleanName.replace(/мода/g, 'моде');
      targetCard = state.cards.find(c => {
        const t = c.title.trim().toLowerCase();
        const normT = t.replace(/мода/g, 'моде');
        return normalizedName.includes(normT) || normT.includes(normalizedName);
      });
    }

    // 3. По номеру (например 1.mp3 -> первая карточка)
    if (!targetCard) {
      const num = parseInt(cleanName, 10);
      if (!isNaN(num) && num >= 1 && num <= state.cards.length) {
        targetCard = state.cards[num - 1];
      }
    }

    if (targetCard) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        targetCard.audio = ev.target.result;
        matched.push(`«${targetCard.title}» (${file.name})`);
        processed++;
        checkDone();
      };
      reader.readAsDataURL(file);
    } else {
      unmatched.push(file.name);
      processed++;
      checkDone();
    }
  });

  function checkDone() {
    if (processed === files.length) {
      state.saveCards();
      renderCurrentCard();
      renderListViewItems();
      e.target.value = '';

      let message = '';
      if (matched.length > 0) {
        message += `Успешно прикреплено ${matched.length} аудио к карточкам:\n• ` + matched.join('\n• ');
      }
      if (unmatched.length > 0) {
        message += `\n\nНе удалось сопоставить ${unmatched.length} файлов (назовите файл так же, как карточку, например «Моде ани.mp3» или «1.mp3»):\n• ` + unmatched.join('\n• ');
      }
      alert(message || 'Файлы обработаны.');
    }
  }
}

function updateBulkPreview(cards) {
  parsedBulkCards = cards;
  if (!cards || cards.length === 0) {
    if (elBulkPreviewArea) elBulkPreviewArea.style.display = 'none';
    if (elBtnBulkApplyAdd) elBtnBulkApplyAdd.style.display = 'none';
    if (elBtnBulkApplyReplace) elBtnBulkApplyReplace.style.display = 'none';
    if (elBtnBulkClear) elBtnBulkClear.style.display = 'none';
    return;
  }

  if (elBulkPreviewArea) elBulkPreviewArea.style.display = 'flex';
  if (elBtnBulkApplyAdd) elBtnBulkApplyAdd.style.display = 'flex';
  if (elBtnBulkApplyReplace) elBtnBulkApplyReplace.style.display = 'flex';
  if (elBtnBulkClear) elBtnBulkClear.style.display = 'inline-block';

  if (elBulkPreviewCount) {
    elBulkPreviewCount.textContent = `Распознано: ${cards.length} ${pluralizeCards(cards.length)}`;
  }
  if (elBtnBulkApplyAddText) {
    elBtnBulkApplyAddText.textContent = `Добавить эти карточки (${cards.length} шт.) в приложение`;
  }

  if (elBulkPreviewList) {
    elBulkPreviewList.innerHTML = '';
    cards.forEach((card, idx) => {
      const item = document.createElement('div');
      item.className = 'preview-item';
      item.innerHTML = `
        <div class="preview-item-top">
          <div class="preview-item-title">
            <span>${idx + 1}.</span>
            <strong>${card.title}</strong>
          </div>
          <span class="preview-item-cat">${card.category}</span>
        </div>
        ${card.hebrew ? `<div class="preview-item-hebrew">${card.hebrew}</div>` : '<div style="color:#ef4444;font-size:11px;">⚠️ Нет текста на иврите</div>'}
        ${card.transcription ? `<div class="preview-item-trans">🔊 ${card.transcription}</div>` : ''}
        ${card.translation ? `<div class="preview-item-translat">«${card.translation}»</div>` : ''}
        ${card.audio ? `
          <div class="preview-item-audio">
            <span>🎵 Ссылка на звук:</span>
            <span class="audio-link-text" title="${card.audio}">${card.audio}</span>
            <button type="button" class="mini-play-btn" data-audio="${card.audio}">▶️ Проверить</button>
          </div>
        ` : ''}
      `;
      const playBtn = item.querySelector('.mini-play-btn');
      if (playBtn) {
        playBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          testPlayAudio(card.audio, playBtn);
        });
      }
      elBulkPreviewList.appendChild(item);
    });
  }
}

function pluralizeCards(n) {
  const rem10 = n % 10;
  const rem100 = n % 100;
  if (rem10 === 1 && rem100 !== 11) return 'карточка';
  if (rem10 >= 2 && rem10 <= 4 && (rem100 < 10 || rem100 >= 20)) return 'карточки';
  return 'карточек';
}

function handleBulkTextChange() {
  if (!elBulkTextInput) return;
  const text = elBulkTextInput.value;
  if (!text || !text.trim()) {
    updateBulkPreview([]);
    return;
  }
  const rows = parseCsvOrTsv(text);
  const cards = parseRowsToCards(rows);
  updateBulkPreview(cards);
}

function handleBulkFileInput(e) {
  const file = e.target.files[0];
  if (!file) return;

  const isExcel = file.name.endsWith('.xlsx') || file.name.endsWith('.xls');

  if (isExcel && window.XLSX) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = new Uint8Array(ev.target.result);
        const workbook = window.XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = window.XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
        if (elBulkTextInput) {
          elBulkTextInput.value = rows.map(r => (Array.isArray(r) ? r : []).join('\t')).join('\n');
        }
        const cards = parseRowsToCards(rows);
        updateBulkPreview(cards);
      } catch (err) {
        alert('Ошибка при чтении Excel файла: ' + err.message);
      }
    };
    reader.readAsArrayBuffer(file);
  } else {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target.result;
      if (elBulkTextInput) {
        elBulkTextInput.value = text;
      }
      handleBulkTextChange();
    };
    reader.readAsText(file, 'utf-8');
  }
}

function applyBulkAdd() {
  if (!parsedBulkCards || parsedBulkCards.length === 0) return;
  const addedCount = parsedBulkCards.length;
  state.cards.push(...parsedBulkCards);
  state.saveCards();
  renderCategories();
  state.currentIndex = state.cards.length - addedCount;
  renderCurrentCard();
  bulkOpenedFromModal = null;
  if (elModalBulk) elModalBulk.style.display = 'none';
  if (elBulkTextInput) elBulkTextInput.value = '';
  updateBulkPreview([]);
  alert(`Готово!\nУспешно добавлено ${addedCount} ${pluralizeCards(addedCount)}.\nОни сохранены в вашем приложении!`);
}

function applyBulkReplace() {
  if (!parsedBulkCards || parsedBulkCards.length === 0) return;
  if (confirm(`Вы уверены?\nЭто заменит ВСЕ текущие карточки на ${parsedBulkCards.length} ${pluralizeCards(parsedBulkCards.length)} из таблицы.`)) {
    state.cards = [...parsedBulkCards];
    state.saveCards();
    state.currentIndex = 0;
    renderCategories();
    renderCurrentCard();
    bulkOpenedFromModal = null;
    if (elModalBulk) elModalBulk.style.display = 'none';
    if (elBulkTextInput) elBulkTextInput.value = '';
    updateBulkPreview([]);
    alert(`Готово! В приложении теперь сохранены ${state.cards.length} ${pluralizeCards(state.cards.length)} из таблицы.`);
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

  // Переключение режима произношения (Учебный / Молитва) на карточке
  if (elBtnCardModeToggle) {
    elBtnCardModeToggle.addEventListener('click', e => {
      e.stopPropagation();
      const nextMode = state.speechDivineMode === 'study' ? 'prayer' : 'study';
      setSpeechDivineMode(nextMode, true);
    });
  }

  if (elBtnCardModeToggleBack) {
    elBtnCardModeToggleBack.addEventListener('click', e => {
      e.stopPropagation();
      const nextMode = state.speechDivineMode === 'study' ? 'prayer' : 'study';
      setSpeechDivineMode(nextMode, true);
    });
  }

  // Переключение режима в настройках
  if (elBtnModeStudy) {
    elBtnModeStudy.addEventListener('click', () => {
      setSpeechDivineMode('study', true);
    });
  }

  if (elBtnModePrayer) {
    elBtnModePrayer.addEventListener('click', () => {
      setSpeechDivineMode('prayer', true);
    });
  }

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

  // Настройка скорости речи
  const elSpeechRateSlider = document.getElementById('speech-rate-slider');
  const elSpeechRateVal = document.getElementById('speech-rate-val');
  const elBtnTestSpeechRate = document.getElementById('btn-test-speech-rate');

  if (elSpeechRateSlider) {
    elSpeechRateSlider.value = state.speechRate.toString();
    if (elSpeechRateVal) elSpeechRateVal.textContent = state.speechRate.toFixed(2) + 'x';
    elSpeechRateSlider.addEventListener('input', () => {
      const val = parseFloat(elSpeechRateSlider.value);
      state.setSpeechRate(val);
      if (elSpeechRateVal) elSpeechRateVal.textContent = val.toFixed(2) + 'x';
    });
  }

  if (elBtnTestSpeechRate) {
    elBtnTestSpeechRate.addEventListener('click', () => {
      fallbackSpeech('בָּרוּךְ אַתָּה יְ‑יָ אֱ‑לֹהֵינוּ מֶלֶךְ הָעוֹלָם');
    });
  }

  if (elBtnExportCatalog) {
    elBtnExportCatalog.addEventListener('click', exportCatalogJson);
  }

  // Модалка массовой загрузки из таблицы
  if (elBtnOpenBulk) elBtnOpenBulk.addEventListener('click', () => openBulkImportModal(elModalSettings));
  if (elBtnOpenBulkFromList) elBtnOpenBulkFromList.addEventListener('click', () => openBulkImportModal(elModalList));
  if (elBtnSwitchToBulk) elBtnSwitchToBulk.addEventListener('click', () => openBulkImportModal(elModalForm));
  if (elBtnCloseBulk) elBtnCloseBulk.addEventListener('click', closeBulkImportModal);
  if (elBtnDownloadTemplate) elBtnDownloadTemplate.addEventListener('click', downloadExcelTemplate);
  if (elInputBulkFile) elInputBulkFile.addEventListener('change', handleBulkFileInput);
  if (elBulkTextInput) {
    elBulkTextInput.addEventListener('input', handleBulkTextChange);
    elBulkTextInput.addEventListener('paste', () => setTimeout(handleBulkTextChange, 50));
  }
  if (elBtnBulkClear) {
    elBtnBulkClear.addEventListener('click', () => {
      if (elBulkTextInput) elBulkTextInput.value = '';
      updateBulkPreview([]);
    });
  }
  if (elBtnBulkApplyAdd) elBtnBulkApplyAdd.addEventListener('click', applyBulkAdd);
  if (elBtnBulkApplyReplace) elBtnBulkApplyReplace.addEventListener('click', applyBulkReplace);

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

  // Кнопка принудительного обновления и версия
  const elAppVersionBadge = document.getElementById('app-version-badge');
  if (elAppVersionBadge) {
    elAppVersionBadge.textContent = 'v16';
  }

  const elBtnForceUpdateApp = document.getElementById('btn-force-update-app');
  if (elBtnForceUpdateApp) {
    elBtnForceUpdateApp.addEventListener('click', async () => {
      elBtnForceUpdateApp.disabled = true;
      elBtnForceUpdateApp.innerHTML = '<span>⏳ Очищаем кэш и обновляем...</span>';
      showToast('Очищаем кэш и загружаем обновление...');

      try {
        if ('serviceWorker' in navigator) {
          const registrations = await navigator.serviceWorker.getRegistrations();
          for (let reg of registrations) {
            await reg.unregister();
          }
        }
        if ('caches' in window) {
          const keys = await caches.keys();
          for (let k of keys) {
            await caches.delete(k);
          }
        }
      } catch (err) {
        console.warn('Ошибка при очистке кэша:', err);
      }

      setTimeout(() => {
        const cleanUrl = window.location.pathname + '?reload=' + Date.now();
        window.location.href = cleanUrl;
      }, 500);
    });
  }

  // Закрытие по клику на фон
  [elModalList, elModalForm, elModalSettings, elModalBulk].forEach(m => {
    if (!m) return;
    m.addEventListener('click', e => {
      if (e.target === m) {
        if (m === elModalBulk) {
          closeBulkImportModal();
        } else {
          m.style.display = 'none';
        }
      }
    });
  });

  // Клавиатура для компьютера (Стрелки влево/вправо и Пробел для переворота, Escape для закрытия окон)
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (elModalBulk && elModalBulk.style.display === 'flex') {
        closeBulkImportModal();
      } else if (elModalForm && elModalForm.style.display === 'flex') {
        elModalForm.style.display = 'none';
      } else if (elModalSettings && elModalSettings.style.display === 'flex') {
        elModalSettings.style.display = 'none';
      } else if (elModalList && elModalList.style.display === 'flex') {
        elModalList.style.display = 'none';
      }
      return;
    }
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

