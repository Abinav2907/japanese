/* ═══════════════════════════════════════════════════
   JAPANESE FAREWELL GIFT — APP.JS
   All logic, translations, animations, interactions
═══════════════════════════════════════════════════ */

// ─────────────────────────────────────────────
// TRANSLATION STRINGS  (single source of truth)
// ─────────────────────────────────────────────
const T = {
  en: {
    doorCaption:    'Click the door to step inside',

    painting1Label: 'Our Memories',
    painting2Label: 'Together',

    obj1Label: 'Open the box',
    obj2Label: 'Read the letter',
    obj3Label: 'Check the books',
    obj4Label: 'A cushion memory',
    obj5Label: 'Game time!',
    obj6Label: 'Our little bonsai',

    finalBoxLabel: 'Special Box',
    lockedMsg:     'Find all the hidden messages first! ✦',

    guideIntro:  'Welcome! Let me show you around… there are memories hidden in this room for you. ✨',
    guide1:      "Let's see what's on the table! Something special might be inside that box. 📦",
    guide2:      'Look over by the window… is that a letter? 💌',
    guide3:      'Come see this stack of books in the corner! 📚',
    guide4:      'This cushion holds a warm memory… 🌸',
    guide5:      'Ah — remember our game breaks together? 🎮',
    guide6:      'One last memory on this little shelf… 🌿',
    guideFinal:  "Now that you've found them all… the special box is waiting for you. Open it! 🎁",
    guideFree:   'All memories are now unlocked! Feel free to explore. 🌸',

    msg1Title: '✦ First Impression',
    msg2Title: '✦ More Than a Sensei',
    msg3Title: '✦ Grammar Master',
    msg4Title: '✦ A Close Bond',
    msg5Title: '✦ Game Time',
    msg6Title: '✦ Unforgettable Memories',

    msg1Stamp: 'Day 1',
    msg2Stamp: 'Friend',
    msg3Stamp: '文法',
    msg4Stamp: 'Bond',
    msg5Stamp: 'Play',
    msg6Stamp: '思い出',

    msg1Text: 'The first time I met him, I thought he was a strict teacher, fully focused on the lesson — but that thought changed completely over the days that followed.',
    msg2Text: 'He is very friendly, far more than just a sensei. He gives me a friend vibe — warm, genuine, and easy to talk to.',
    msg3Text: 'He excelled in grammar, and his way of teaching it was truly excellent. Complex rules became clear and simple in his hands.',
    msg4Text: 'He became close to us in such a short period of time. It felt like we had known him for years.',
    msg5Text: 'During break time, we played games together and enjoyed every single moment. Those laughs are something I will never forget.',
    msg6Text: 'I will always cherish the wonderful memories I made with him. He is not just my Japanese sensei — he is someone who made learning Japanese a joy, and left a mark on all of us that will never fade.',

    finalTitle: 'From All of Us — Thank You, Sensei 🌸',
    finalText: [
      'You have been working so hard toward your dream of working in Japan in the animation field — and we believe in you completely. Our heartfelt congratulations and best wishes for that journey ahead.',
      'And finally… thank you, Sensei. Thank you very, very much for everything you have taught us, for the patience you showed us, for the laughter we shared. We will never, ever forget you.'
    ],
    signatureFrom: '— With love, from all your students ✦',

    sliderLeft:  '🎨 Painting Style',
    sliderRight: '📷 Original Photo',

    replayBtn: '↺ Replay Guide',
  },

  jp: {
    doorCaption:    'ドアをクリックして中に入ってください',

    painting1Label: '私たちの思い出',
    painting2Label: 'みんなで',

    obj1Label: '箱を開ける',
    obj2Label: '手紙を読む',
    obj3Label: '本を見る',
    obj4Label: 'クッションの記憶',
    obj5Label: 'ゲームタイム！',
    obj6Label: '小さな盆栽',

    finalBoxLabel: '特別な箱',
    lockedMsg:     'まず、隠されたメッセージをすべて見つけてください！ ✦',

    guideIntro:  'ようこそ！この部屋には、あなたへの思い出が隠されています。一緒に見てみましょう！✨',
    guide1:      '机の上を見てみましょう！あの箱の中に何か特別なものがあるかもしれません。📦',
    guide2:      '窓の近くを見てください…あれは手紙ですか？💌',
    guide3:      'あのコーナーにある本の山を見てみましょう！📚',
    guide4:      'このクッションには温かい思い出があります…🌸',
    guide5:      'ああ——みんなで遊んだ休憩時間を覚えていますか？🎮',
    guide6:      'あの棚に、最後の思い出があります…🌿',
    guideFinal:  'すべて見つけましたね…特別な箱があなたを待っています。開けてみてください！🎁',
    guideFree:   'すべての思い出が解放されました！自由に探索してください。🌸',

    msg1Title: '✦ 第一印象',
    msg2Title: '✦ 先生以上の存在',
    msg3Title: '✦ 文法の達人',
    msg4Title: '✦ 深い絆',
    msg5Title: '✦ ゲームタイム',
    msg6Title: '✦ 忘れられない思い出',

    msg1Stamp: '初日',
    msg2Stamp: '友達',
    msg3Stamp: '文法',
    msg4Stamp: '絆',
    msg5Stamp: '遊び',
    msg6Stamp: '思い出',

    msg1Text: '初めて会ったとき、授業に真剣に取り組む厳しい先生だと思いました。でも、日が経つにつれて、その考えはまったく変わっていきました。',
    msg2Text: '先生はとても親しみやすく、ただの先生以上の存在です。友達のような温かい雰囲気があり、気軽に話せる方でした。',
    msg3Text: '先生は文法がとても得意で、その教え方は本当に素晴らしかったです。難しいルールも、先生の手にかかれば分かりやすくなりました。',
    msg4Text: '先生はとても短い期間で私たちと仲良くなってくれました。まるで何年も前から知り合いだったような気がしました。',
    msg5Text: '休憩時間にはみんなでゲームをして、一つひとつの瞬間を楽しみました。あの笑い声は、ずっと忘れられません。',
    msg6Text: '先生と一緒に作った素晴らしい思い出は、これからもずっと大切にします。先生は日本語の先生というだけでなく、日本語学習を楽しく、忘れられないものにしてくださった特別な存在です。',

    finalTitle: 'みんなより——先生、本当にありがとうございました 🌸',
    finalText: [
      '先生はアニメーション分野で日本で働くという夢に向かって、一生懸命努力されています。その夢の実現を心よりお祝い申し上げます。これからの道も、全力で応援しています。',
      '最後に……先生、本当に、本当にありがとうございました。教えていただいたこと、見せていただいた忍耐、共に笑った時間——すべてに感謝しています。先生のことは、絶対に忘れません。'
    ],
    signatureFrom: '——愛を込めて、すべての生徒より ✦',

    sliderLeft:  '🎨 絵画スタイル',
    sliderRight: '📷 オリジナル写真',

    replayBtn: '↺ ガイドをもう一度',
  }
};

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────
const state = {
  lang:           'en',
  scene:          'door',
  found:          new Set(),   // Set<number 1–6>
  finalUnlocked:  false,
  finalViewed:    false,
  tourActive:     false,
  tourComplete:   false,
  tourStep:       'none',
  doorOpened:     false,
  sliderDragging: false,
};

// Sensei walk-spots  { left:% of viewport, floor:bool, pct:% of floor from bottom }
const SPOTS = {
  intro: { left: 47, floor: true,  pct: 15 },
  1:     { left: 40, floor: true,  pct: 15 }, // wooden box on table
  2:     { left: 12, floor: true,  pct: 55 }, // letter (left mid)
  3:     { left:  8, floor: true,  pct: 12 }, // books (left low)
  4:     { left: 68, floor: true,  pct: 12 }, // cushion (right low)
  5:     { left: 70, floor: true,  pct: 55 }, // game (right mid)
  6:     { left: 76, floor: true,  pct: 40 }, // bonsai shelf (right)
  final: { left: 47, floor: true,  pct: 72 }, // center, near final box on wall
};

// ─────────────────────────────────────────────
// TRANSLATIONS
// ─────────────────────────────────────────────
function t(key) {
  const lang = T[state.lang];
  if (lang && lang[key] !== undefined) return lang[key];
  if (T.en[key]  !== undefined)         return T.en[key];
  return key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    // Arrays are handled separately (finalText)
    if (!Array.isArray(val)) el.textContent = val;
  });
}

function setLang(lang) {
  if (state.lang === lang) return;
  state.lang = lang;

  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-jp').classList.toggle('active', lang === 'jp');
  document.getElementById('btn-en').setAttribute('aria-pressed', String(lang === 'en'));
  document.getElementById('btn-jp').setAttribute('aria-pressed', String(lang === 'jp'));

  applyTranslations();
  refreshLiveText();
}

function refreshLiveText() {
  // Speech bubble
  const bubble   = document.getElementById('sensei-bubble');
  const bubbleTxt = document.getElementById('bubble-text');
  if (!bubble.classList.contains('hidden') && bubbleTxt.dataset.key) {
    bubbleTxt.textContent = t(bubbleTxt.dataset.key);
  }

  // Open message modal
  const msgModal = document.getElementById('msg-modal');
  if (!msgModal.classList.contains('hidden') && msgModal.dataset.msgId) {
    const id = parseInt(msgModal.dataset.msgId);
    document.getElementById('msg-stamp').textContent = t('msg' + id + 'Stamp');
    document.getElementById('msg-title').textContent = t('msg' + id + 'Title');
    document.getElementById('msg-body').textContent  = t('msg' + id + 'Text');
  }

  // Open final modal
  const finalModal = document.getElementById('final-modal');
  if (!finalModal.classList.contains('hidden')) {
    document.getElementById('final-title').textContent = t('finalTitle');
    document.getElementById('final-from').textContent  = t('signatureFrom');
    renderFinalBody();
  }
}

// ─────────────────────────────────────────────
// SOUND  (Web Audio API — fail silently)
// ─────────────────────────────────────────────
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch (e) { return null; }
  }
  return audioCtx;
}

function resumeAudio() {
  const ctx = getAudioCtx();
  if (ctx && ctx.state === 'suspended') ctx.resume().catch(() => {});
}

function playSound(type) {
  const ctx = getAudioCtx();
  if (!ctx) return;
  try {
    const t0 = ctx.currentTime;

    if (type === 'door') {
      // Wooden sliding swish
      const buf  = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.55), ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        const progress = i / data.length;
        data[i] = (Math.random() * 2 - 1) * Math.exp(-progress * 9) * 0.45;
      }
      const src  = ctx.createBufferSource();
      const gain = ctx.createGain();
      src.buffer = buf;
      gain.gain.setValueAtTime(0.7, t0);
      gain.gain.linearRampToValueAtTime(0, t0 + 0.55);
      src.connect(gain); gain.connect(ctx.destination);
      src.start(t0);

    } else if (type === 'pop') {
      // Soft box-open pop
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(700, t0);
      osc.frequency.exponentialRampToValueAtTime(220, t0 + 0.14);
      gain.gain.setValueAtTime(0.35, t0);
      gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.2);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(t0); osc.stop(t0 + 0.22);

    } else if (type === 'chime') {
      // Final message — two-note gentle chime
      [523.25, 783.99].forEach((freq, i) => {
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        const start = t0 + i * 0.18;
        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(0.3, start + 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 1.4);
        osc.connect(gain); gain.connect(ctx.destination);
        osc.start(start); osc.stop(start + 1.5);
      });

    } else if (type === 'bubble') {
      // Speech bubble soft ping
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1000, t0);
      osc.frequency.exponentialRampToValueAtTime(1300, t0 + 0.05);
      gain.gain.setValueAtTime(0.12, t0);
      gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.14);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(t0); osc.stop(t0 + 0.16);
    }

  } catch (e) { /* fail silently */ }
}

// ─────────────────────────────────────────────
// SCENE TRANSITIONS
// ─────────────────────────────────────────────
function showScene(id) {
  document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
  setTimeout(() => {
    const el = document.getElementById('scene-' + id);
    if (el) el.classList.add('active');
    state.scene = id;
  }, 60);
}

// ─────────────────────────────────────────────
// SCENE 1 — DOOR
// ─────────────────────────────────────────────
function buildStars() {
  const wrap = document.getElementById('stars-wrap');
  for (let i = 0; i < 65; i++) {
    const s    = document.createElement('div');
    s.className = 'star-dot';
    const sz   = Math.random() * 2.5 + 0.6;
    s.style.cssText = [
      `width:${sz}px`,
      `height:${sz}px`,
      `top:${Math.random() * 68}%`,
      `left:${Math.random() * 100}%`,
      `animation-delay:${(Math.random() * 5).toFixed(2)}s`,
      `animation-duration:${(Math.random() * 2 + 2).toFixed(2)}s`,
    ].join(';');
    wrap.appendChild(s);
  }
}

function buildSakura() {
  const wrap   = document.getElementById('sakura-wrap');
  const glyphs = ['🌸', '🌺', '✿', '❀'];
  for (let i = 0; i < 16; i++) {
    const p    = document.createElement('div');
    p.className = 'sakura-petal';
    p.textContent = glyphs[i % glyphs.length];
    p.style.cssText = [
      `left:${(Math.random() * 105 - 5).toFixed(1)}%`,
      `font-size:${(10 + Math.random() * 10).toFixed(1)}px`,
      `animation-duration:${(6 + Math.random() * 9).toFixed(1)}s`,
      `animation-delay:${(Math.random() * 12).toFixed(1)}s`,
    ].join(';');
    wrap.appendChild(p);
  }
}

function openDoor() {
  if (state.doorOpened) return;
  state.doorOpened = true;
  resumeAudio();
  playSound('door');

  const fusuma = document.getElementById('fusuma-wrap');
  fusuma.classList.add('opening');
  fusuma.style.cursor = 'default';
  fusuma.onclick = null;

  // Fade to room scene after the door slides open
  setTimeout(() => {
    showScene('room');
    setTimeout(startTour, 600);
  }, 900);
}

// ─────────────────────────────────────────────
// SCENE 2 — PROGRESS
// ─────────────────────────────────────────────
function showProgressIndicator() {
  document.getElementById('progress-indicator').classList.remove('hidden');
}

function updateProgress() {
  const count = state.found.size;
  document.getElementById('prog-count').textContent = count + '/6';
  document.querySelectorAll('.flower-dot').forEach(dot => {
    if (state.found.has(parseInt(dot.dataset.msg))) {
      dot.classList.add('found');
    }
  });
  if (count === 6 && !state.finalUnlocked) unlockFinalBox();
}

function unlockFinalBox() {
  state.finalUnlocked = true;
  document.getElementById('final-box').classList.add('unlocked');
}

// ─────────────────────────────────────────────
// SENSEI — POSITION & SPEECH
// ─────────────────────────────────────────────
function setSenseiPosition(step) {
  const char = document.getElementById('sensei-char');
  const spot = SPOTS[step] || SPOTS.intro;

  char.classList.add('walking');
  char.style.left = spot.left + '%';

  // Room layout proportions:
  //   ceiling  ≈ 7%  of 100vh
  //   backwall ≈ 44% of 100vh
  //   floor    ≈ 49% of 100vh  (from 51% to 100%)
  // sensei-char is abs inside .room-root (h = 100vh), bottom=0 = base of viewport
  const floorH = window.innerHeight * 0.49;
  char.style.bottom = spot.floor
    ? Math.round((spot.pct / 100) * floorH * 0.88) + 'px'
    : '0px';

  setTimeout(() => char.classList.remove('walking'), 950);
}

function showBubble(key) {
  const bubble = document.getElementById('sensei-bubble');
  const txt    = document.getElementById('bubble-text');
  txt.dataset.key  = key;
  txt.textContent  = t(key);
  playSound('bubble');
  bubble.classList.remove('hidden');
}

function hideBubble() {
  document.getElementById('sensei-bubble').classList.add('hidden');
}

// ─────────────────────────────────────────────
// GUIDED TOUR
// ─────────────────────────────────────────────
const TOUR = [
  { step: 'intro', key: 'guideIntro', auto: 3200 },
  { step: 1,       key: 'guide1',     auto: 0 },
  { step: 2,       key: 'guide2',     auto: 0 },
  { step: 3,       key: 'guide3',     auto: 0 },
  { step: 4,       key: 'guide4',     auto: 0 },
  { step: 5,       key: 'guide5',     auto: 0 },
  { step: 6,       key: 'guide6',     auto: 0 },
  { step: 'final', key: 'guideFinal', auto: 0 },
];

let tourIdx = 0;

function startTour() {
  showProgressIndicator();
  state.tourActive = true;
  tourIdx = 0;
  goTourStep(0);
}

function goTourStep(idx) {
  if (idx >= TOUR.length) { enterFreeMode(); return; }

  const entry = TOUR[idx];
  state.tourStep = entry.step;

  setSenseiPosition(entry.step);

  setTimeout(() => {
    showBubble(entry.key);
    if (entry.auto > 0) {
      setTimeout(() => {
        hideBubble();
        tourIdx = idx + 1;
        goTourStep(idx + 1);
      }, entry.auto);
    }
  }, 950);
}

// Called after user clicks an object during the guided tour
function advanceTour(msgId) {
  const currentEntry = TOUR[tourIdx];
  if (state.tourActive && currentEntry && currentEntry.step === msgId) {
    hideBubble();
    setTimeout(() => {
      tourIdx++;
      goTourStep(tourIdx);
    }, 700);
  }
}

function enterFreeMode() {
  state.tourActive  = false;
  state.tourComplete = true;
  showBubble('guideFree');
  setTimeout(hideBubble, 3800);
  document.getElementById('free-mode-bar').classList.remove('hidden');
}

function replayTour() {
  document.getElementById('free-mode-bar').classList.add('hidden');
  hideBubble();
  state.tourActive = true;
  tourIdx = 0;
  goTourStep(0);
}

// ─────────────────────────────────────────────
// OBJECT CLICKS
// ─────────────────────────────────────────────
const STAMP_COLORS = {
  1: '#8b1a1a',
  2: '#1a3870',
  3: '#2a5c2a',
  4: '#6b1a6b',
  5: '#c97a10',
  6: '#1a5c5c',
};

function clickObject(id) {
  resumeAudio();

  // During guided tour, only accept the currently-expected object
  if (state.tourActive && state.tourStep !== id) {
    // Gently bounce the sensei to hint
    const char = document.getElementById('sensei-char');
    char.style.transform = 'translateX(-50%) translateY(-10px)';
    setTimeout(() => { char.style.transform = ''; }, 250);
    return;
  }

  playSound('pop');

  // Mark found
  if (!state.found.has(id)) {
    state.found.add(id);
    const el = document.getElementById('obj-' + id);
    if (el) el.classList.add('found-obj');
    updateProgress();
  }

  openMsgModal(id);
  advanceTour(id);
}

function openMsgModal(id) {
  const modal = document.getElementById('msg-modal');
  const stamp = document.getElementById('msg-stamp');
  const color = STAMP_COLORS[id] || '#8b1a1a';

  stamp.textContent        = t('msg' + id + 'Stamp');
  stamp.style.color        = color;
  stamp.style.borderColor  = color;
  stamp.style.background   = color + '18';

  document.getElementById('msg-title').textContent = t('msg' + id + 'Title');
  document.getElementById('msg-body').textContent  = t('msg' + id + 'Text');

  modal.dataset.msgId = id;
  modal.classList.remove('hidden');
}

// ─────────────────────────────────────────────
// FINAL BOX
// ─────────────────────────────────────────────
function clickFinalBox() {
  resumeAudio();

  if (!state.finalUnlocked) {
    showBubble('lockedMsg');
    // Shake the box
    const box = document.getElementById('final-box');
    box.classList.add('shake');
    setTimeout(() => { box.classList.remove('shake'); hideBubble(); }, 2600);
    return;
  }

  playSound('chime');
  state.finalViewed = true;
  openFinalModal();

  if (!state.tourComplete) {
    setTimeout(enterFreeMode, 600);
  }
}

function renderFinalBody() {
  const bodyEl  = document.getElementById('final-body');
  const paras   = t('finalText'); // Array of strings
  bodyEl.innerHTML = '';
  if (Array.isArray(paras)) {
    paras.forEach((para, i) => {
      const p = document.createElement('p');
      p.textContent = para;
      if (i > 0) p.style.marginTop = '14px';
      bodyEl.appendChild(p);
    });
  } else {
    bodyEl.textContent = paras;
  }
}

function openFinalModal() {
  const modal = document.getElementById('final-modal');
  document.getElementById('final-title').textContent = t('finalTitle');
  document.getElementById('final-from').textContent  = t('signatureFrom');
  renderFinalBody();
  modal.classList.remove('hidden');
  launchConfetti();
}

// ─────────────────────────────────────────────
// MODAL CLOSE
// ─────────────────────────────────────────────
function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

function closeOnBackdrop(e, id) {
  if (e.target.id === id) closeModal(id);
}

// ─────────────────────────────────────────────
// CONFETTI
// ─────────────────────────────────────────────
const CONFETTI_COLORS = [
  '#c9963a', '#e8c468', '#8b1a1a', '#c0392b',
  '#1a3870', '#2d8a5a', '#9b2980', '#f0c030',
  '#ff6b6b', '#4ecdc4',
];

function launchConfetti() {
  const zone = document.getElementById('confetti-zone');
  zone.innerHTML = '';
  for (let i = 0; i < 70; i++) {
    const bit   = document.createElement('div');
    bit.className = 'confetti-bit';
    const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    const cx    = ((Math.random() - 0.5) * 320).toFixed(0);
    bit.style.cssText = [
      `background:${color}`,
      `left:${(15 + Math.random() * 70).toFixed(1)}%`,
      `width:${(4 + Math.random() * 8).toFixed(1)}px`,
      `height:${(4 + Math.random() * 8).toFixed(1)}px`,
      `border-radius:${Math.random() > 0.45 ? '50%' : '2px'}`,
      `--cx:${cx}px`,
      `animation-duration:${(1.4 + Math.random() * 2).toFixed(2)}s`,
      `animation-delay:${(Math.random() * 0.6).toFixed(2)}s`,
    ].join(';');
    zone.appendChild(bit);
  }
}

// ─────────────────────────────────────────────
// PAINTING BEFORE/AFTER SLIDER
// ─────────────────────────────────────────────
const PAINTING_SRC = {
  1: 'references/painting_1.jpeg',
  2: 'references/painting_2.jpeg',
};

function openPainting(id) {
  const src = PAINTING_SRC[id];
  document.getElementById('ba-img-art').src  = src;
  document.getElementById('ba-img-orig').src = src;
  setSlider(50);
  document.getElementById('painting-overlay').classList.remove('hidden');
  initSlider();
}

function closePainting() {
  document.getElementById('painting-overlay').classList.add('hidden');
  teardownSlider();
}

function setSlider(pct) {
  pct = Math.max(3, Math.min(97, pct));
  document.getElementById('ba-divider').style.left = pct + '%';
  document.getElementById('ba-right').style.clipPath = `inset(0 0 0 ${pct}%)`;
}

let _sliderTeardown = null;

function initSlider() {
  teardownSlider();
  const wrap   = document.getElementById('ba-wrap');
  const handle = document.getElementById('ba-handle');

  const getPct = e => {
    const r = wrap.getBoundingClientRect();
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    return ((cx - r.left) / r.width) * 100;
  };

  const onDown = ()  => { state.sliderDragging = true; document.body.style.userSelect = 'none'; };
  const onUp   = ()  => { state.sliderDragging = false; document.body.style.userSelect = ''; };
  const onMove = e   => { if (!state.sliderDragging) return; e.preventDefault(); setSlider(getPct(e)); };
  const onTap  = e   => { if (e.target === handle || handle.contains(e.target)) return; setSlider(getPct(e)); };

  handle.addEventListener('mousedown',   onDown);
  handle.addEventListener('touchstart',  onDown, { passive: true });
  document.addEventListener('mousemove', onMove);
  document.addEventListener('touchmove', onMove, { passive: false });
  document.addEventListener('mouseup',   onUp);
  document.addEventListener('touchend',  onUp);
  wrap.addEventListener('click',         onTap);

  _sliderTeardown = () => {
    handle.removeEventListener('mousedown',   onDown);
    handle.removeEventListener('touchstart',  onDown);
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('mouseup',   onUp);
    document.removeEventListener('touchend',  onUp);
    wrap.removeEventListener('click',         onTap);
  };
}

function teardownSlider() {
  if (_sliderTeardown) { _sliderTeardown(); _sliderTeardown = null; }
  state.sliderDragging = false;
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildStars();
  buildSakura();
  applyTranslations();

  // Set initial lang button state
  document.getElementById('btn-en').classList.add('active');

  // Position sensei off-screen initially (slides in from right when tour starts)
  const sensei = document.getElementById('sensei-char');
  sensei.style.left   = '110%';
  sensei.style.bottom = '0px';

  // Keyboard support for door
  const fusuma = document.getElementById('fusuma-wrap');
  fusuma.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDoor(); }
  });
});
