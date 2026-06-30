/* =======================================================
   JAPANESE FAREWELL - APP.JS
   Translations | Guided Tour | Audio | Slider Controls
======================================================= */

const T = {
  en: {
    doorTitle: "Thank You, Sripal Sensei",
    doorSubtitle: "A farewell gift from your students",
    doorCaption: "Click the door to step inside",
    painting1Label: "Our Memories",
    painting2Label: "Together",
    obj1Label: "Open the box",
    obj2Label: "Read the letter",
    obj3Label: "Check the books",
    obj4Label: "A cushion memory",
    obj5Label: "Game time!",
    obj6Label: "Our little bonsai",
    finalBoxLabel: "Special Gift",
    lockedMsg: "Find all hidden messages first! \u2756",
    guideIntro: "Welcome! I'll show you around \u2014 there are memories hidden just for you. \u2728",
    guide1: "Look at the table \u2014 something special might be inside that wooden box! \u{1F4E6}",
    guide2: "Over by the window\u2026 is that a letter? \u{1F4E5}",
    guide3: "Come see this stack of books in the corner! \u{1F4DA}",
    guide4: "This cushion holds a warm memory\u2026 \u{1F338}",
    guide5: "Ah \u2014 remember our game breaks together? \u{1F3AE}",
    guide6: "One last memory on that little shelf\u2026 \u{1F33F}",
    guideFinal: "You found them all! The special box is waiting for you. Open it! \u{1F381}",
    guideFree: "All memories unlocked! Feel free to explore. \u{1F338}",
    msg1Title: "\u2756 First Impression",
    msg2Title: "\u2756 More Than a Sensei",
    msg3Title: "\u2756 Grammar Master",
    msg4Title: "\u2756 A Close Bond",
    msg5Title: "\u2756 Game Time",
    msg6Title: "\u2756 Unforgettable Memories",
    msg1Stamp: "Day 1",
    msg2Stamp: "Friend",
    msg3Stamp: "\u6587\u6cd5",
    msg4Stamp: "Bond",
    msg5Stamp: "Play",
    msg6Stamp: "\u601d\u3044\u51fa",
    msg1Text: "The first time I met him, I thought he was a strict teacher, fully focused on the lesson \u2014 but that impression changed completely over the days that followed.",
    msg2Text: "He is very friendly, far more than just a sensei. He gives a warm, genuine friend vibe that makes you feel at ease.",
    msg3Text: "He excelled at teaching grammar, and his method was truly excellent. Complex rules became clear and simple in his hands.",
    msg4Text: "He became close to all of us in such a short time. It felt like we had known him for years.",
    msg5Text: "During break time, we played games together and enjoyed every single moment. Those laughs are something I will never forget.",
    msg6Text: "I will always cherish the wonderful memories made with him. He is not just a Japanese sensei \u2014 he made learning a joy, and left a mark on all of us that will never fade.",
    finalTitle: "From All of Us \u2014 Thank You, Sensei \u{1F338}",
    finalText: [
      "You have been working so hard toward your dream of working in Japan in the animation field \u2014 and we believe in you completely. Our heartfelt congratulations and best wishes for that journey ahead.",
      "And finally\u2026 thank you, Sensei. Thank you very, very much for everything you have taught us, for the patience you showed, for the laughter we shared. We will never, ever forget you."
    ],
    signatureFrom: "\u2014 With love, from all your students \u2756",
    sliderLeft: "\u{1F3A8} Painting Style",
    sliderRight: "\u{1F4F1} Original Photo",
    replayBtn: "\u21BA Replay Guide"
  },
  jp: {
    doorTitle: "Sripal \u5148\u751f\u3001\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3057\u305f",
    doorSubtitle: "\u751f\u5f92\u4e00\u540c\u3088\u308a",
    doorCaption: "\u30c5\u30a2\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u4e2d\u306b\u5165\u3063\u3066\u304f\u3060\u3055\u3044",
    painting1Label: "\u79c1\u305f\u3061\u306e\u601d\u3044\u51fa",
    painting2Label: "\u307f\u3093\u306a\u3067",
    obj1Label: "\u7bb1\u3092\u958b\u3051\u308b",
    obj2Label: "\u624b\u7d19\u3092\u8aad\u3080",
    obj3Label: "\u672c\u3092\u898b\u308b",
    obj4Label: "\u30af\u30c3\u30b7\u30e7\u30f3\u306e\u8a18\u61b6",
    obj5Label: "\u30b2\u30fc\u30e0\u30bf\u30a4\u30e0\uff01",
    obj6Label: "\u5c0f\u3055\u306a\u76c6\u683d",
    finalBoxLabel: "\u7279\u5225\u306a\u8d05\u308a\u7269",
    lockedMsg: "\u96a0\u3055\u308c\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u3059\u3079\u3066\u898b\u3064\u3051\u3066\u304f\u3060\u3055\u3044\uff01 \u2756",
    guideIntro: "\u3085\u3046\u3053\u305d\uff01\u3053\u306e\u90e8\u5c4b\u306b\u306f\u3001\u3042\u306a\u305f\u3078\u306e\u601d\u3044\u51fa\u304c\u96a0\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u2728",
    guide1: "\u673a\u306e\u4e0a\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\uff01\u3042\u306e\u6728\u7bb1\u306e\u4e2d\u306b\u4f55\u304b\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u{1F4E6}",
    guide2: "\u7a93\u306e\u8fd1\u304f\u3092\u898b\u3066\u304f\u3060\u3055\u3044\u2026\u3042\u308c\u306f\u624b\u7d19\u3092\u3059\u304b\uff1f\u{1F4E5}",
    guide3: "\u3042\u306e\u30b3\u30fc\u30ca\u30fc\u306b\u3042\u308b\u672c\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\uff01\u{1F4DA}",
    guide4: "\u3053\u306e\u30af\u30c3\u30b7\u30e7\u30f3\u306e\u306b\u306f\u6e29\u304b\u3044\u601d\u3044\u51fa\u304c\u3042\u308a\u307e\u3059\u2026\u{1F338}",
    guide5: "\u307f\u3093\u306a\u3067\u904a\u3093\u3060\u4f11\u61a9\u6642\u9593\u3092\u899a\u3048\u3066\u3044\u307e\u3059\u304b\uff1f\u{1F3AE}",
    guide6: "\u3042\u306e\u68da\u306b\u3001\u6700\u5f8c\u306e\u601d\u3044\u51fa\u304c\u3042\u308a\u307e\u3059\u2026\u{1F33F}",
    guideFinal: "\u3059\u3079\u3066\u898b\u3064\u3051\u307e\u3057\u305f\u306d\uff01\u7279\u5225\u306a\u7bb1\u3092\u958b\u3051\u3066\u307f\u3066\u304f\u3060\u3055\u3044\uff01\u{1F381}",
    guideFree: "\u3059\u3079\u3066\u306e\u601d\u3044\u51fa\u304c\u89e3\u653e\u3055\u308c\u307e\u3057\u305f\uff01\u81ea\u7531\u306b\u63a2\u7d22\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u{1F338}",
    msg1Title: "\u2756 \u7b2c\u4e00\u5370\u8c61",
    msg2Title: "\u2756 \u5148\u751F\u4ee5\u4e0a\u306e\u5b58\u5728",
    msg3Title: "\u2756 \u6587\u6cd5\u306e\u9054\u4eba",
    msg4Title: "\u2756 \u6df1\u3044\u7d46",
    msg5Title: "\u2756 \u30b2\u30fc\u30e0\u30bf\u30a4\u30e0",
    msg6Title: "\u2756 \u5f58\u308c\u3089\u308c\u306a\u3044\u601d\u3044\u51fa",
    msg1Stamp: "\u521d\u65e5",
    msg2Stamp: "\u53cb\u905dac",
    msg3Stamp: "\u6587\u6cd5",
    msg4Stamp: "\u7d46",
    msg5Stamp: "\u904a\u3073",
    msg6Stamp: "\u601d\u3044\u51fa",
    msg1Text: "\u521d\u3081\u3066\u4f1a\u3063\u305f\u3068\u304d\u3001\u53b3\u3057\u3044\u51fa\u751f\u3060\u3068\u601d\u3044\u307e\u3057\u305f\u3002\u3067\u3082\u3001\u65e5\u304c\u7d4c\u3064\u306b\u3064\u308c\u3066\u305d\u306e\u8003\u3048\u306f\u307e\u3063\u305f\u304f\u5909\u308f\u308a\u307e\u3057\u305f\u3002",
    msg2Text: "\u5148\u751f\u306f\u3068\u3066\u3082\u89aa\u3057\u307f\u3084\u3059\u304f\u3002\u305f\u3060\u306e\u5148\u751f\u4ee5\u4e0a\u306e\u5b58\u5728\u3067\u3059\u3002\u53cb\u905dac\u306e\u3088\u3046\u306a\u6e29\u304b\u3044\u963b\u56f2\u6c17\u304c\u3042\u308a\u307e\u3057\u305f\u3002",
    msg3Text: "\u5148\u751f\u306f\u6587\u6cd5\u306e\u6559\u3048\u65b9\u304c\u7d20\u6674\u3089\u3057\u304b\u3063\u305f\u3067\u3059\u3002\u96e3\u3057\u3044\u30eb\u30fc\u30eb\u3085\u3002\u5148\u751f\u306e\u624b\u306b\u304b\u304b\u308c\u3070\u5206\u304b\u308a\u3084\u3059\u304f\u306a\u308a\u307e\u3057\u305f\u3002",
    msg4Text: "\u5148\u751f\u306f\u3068\u3066\u3082\u77ed\u3044\u671f\u9593\u3067\u79c1\u305f\u3061\u3068\u4ef2\u826f\u304f\u306a\u3063\u3066\u304f\u308c\u307e\u3057\u305f\u3002\u4f55\u5e74\u3082\u524d\u304b\u3089\u77e5\u308a\u5408\u3044\u306e\u3088\u3046\u306a\u6c17\u304f\u3057\u307e\u3057\u305f\u3002",
    msg5Text: "\u4f11\u61a9\u6642\u9593\u306b\u306f\u307f\u3093\u306a\u3067\u30b2\u30fc\u30e0\u3092\u3057\u3066\u3002\u4e00\u3064\u3072\u3068\u3064\u306e\u75ac\u9593\u3092\u697d\u3057\u307f\u307e\u3057\u305f\u3002\u3042\u306e\u7b11\u3044\u58f0\u306f\u5f58\u308c\u3089\u308c\u307e\u3059\u3093\u3002",
    msg6Text: "\u5148\u751f\u3068\u4e00\u7dd2\u306b\u4f5c\u3063\u305f\u7d20\u6674\u3089\u3057\u3044\u601d\u3044\u51fa\u306f\u3001\u305a\u3063\u3068\u5927\u5207\u306b\u3057\u307e\u3059\u3002\u5148\u751f\u306f\u65e5\u672c\u8a9e\u5b66\u7fd2\u3092\u697d\u3057\u304f\u3057\u3066\u304f\u3060\u3055\u3063\u305f\u7279\u5225\u306a\u5b58\u5728\u3067\u3059\u3002",
    finalTitle: "\u307f\u3093\u306a\u3088\u308a\u2014\u2014\u5148\u751f\u3002\u672c\u5f53\u306b\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3045\u307e\u3057\u305f \u{1F338}",
    finalText: [
      "\u5148\u751f\u306f\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5206\u91ce\u3067\u65e5\u672c\u3067\u50cd\u304f\u3068\u3045\u3046\u5922\u306b\u5411\u304b\u3063\u3066\u52aa\u529b\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u5922\u306e\u5b9f\u73fe\u3092\u5fc3\u3088\u308a\u304a\u4e5e\u3044\u7533\u3057\u4e0a\u3052\u307e\u3059\u3002\u3053\u308c\u304b\u3089\u306e\u9053\u3082\u3001\u5168\u529b\u3067\u5fc5\u63f4\u3057\u3066\u3044\u307e\u3059\u3002",
      "\u6700\u5f8c\u306b\u2026\u2026\u5148\u751f\u3002\u6700\u5f8c\u306b\u672c\u5f53\u3001\u6700\u5f8c\u306b\u672c\u5f53\u306b\u3042\u308a\u304c\u3068\u3066\u3054\u3056\u3044\u307e\u3057\u305f\u3002\u6559\u3048\u3066\u3044\u305f\u3060\u3044\u305f\u3053\u3068\u3001\u307f\u305b\u3066\u3044\u305d\u3060\u3044\u305f\u5fcd\u8010\u3001\u5171\u306b\u7b11\u3063\u305f\u6642\u9593\u2014\u2014\u3059\u3079\u3066\u306b\u611f\u8b1d\u3057\u3066\u3044\u307e\u3059\u3002\u5148\u751f\u306e\u3053\u3068\u306f\u7d76\u5b3e\u306b\u5f58\u308c\u307e\u305b\u3093\u3002"
    ],
    signatureFrom: "\u2014\u2014\u611b\u3092\u8fbc\u3081\u3066\u3001\u3059\u3079\u3066\u306e\u751f\u5f92\u3088\u308a \u2756",
    sliderLeft: "\u{1F3A8} \u7d75\u753b\u30b9\u30bf\u30a4\u30eb",
    sliderRight: "\u{1F4F1} \u30aa\u30ea\u30b8\u30ca\u30eb\u5199\u771f",
    replayBtn: "\u21BA \u30ac\u30a4\u30c9\u3092\u3082\u3046\u4e00\u5ea6"
  }
};

const S = {
  lang: 'en',
  found: new Set(),
  unlocked: false,
  toured: false,
  step: 'none',
  doorOpen: false,
  drag: false
};

const POS = {
  intro: { l: 48, p: 12 },
  1: { l: 42, p: 12 },
  2: { l: 26, p: 55 },
  3: { l: 22, p: 10 },
  4: { l: 69, p: 10 },
  5: { l: 71, p: 55 },
  6: { l: 78, p: 32 },
  final: { l: 48, p: 72 }
};

const STAMP_CLR = {
  1: '#8b1a1a',
  2: '#1a3870',
  3: '#2a5c2a',
  4: '#6b1a6b',
  5: '#c97a10',
  6: '#1a5c5c'
};

function tr(k) {
  const v = (T[S.lang] || T.en)[k];
  return (v !== undefined) ? v : (T.en[k] !== undefined ? T.en[k] : k);
}

function applyAll() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = tr(el.dataset.i18n);
    if (!Array.isArray(v)) el.textContent = v;
  });
}

function setLang(lang) {
  if (S.lang === lang) return;
  S.lang = lang;
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-jp').classList.toggle('active', lang === 'jp');
  applyAll();
  refreshLive();
}

function refreshLive() {
  const bub = document.getElementById('s-bubble');
  const txt = document.getElementById('s-text');
  if (!bub.classList.contains('hidden') && txt.dataset.key) {
    txt.textContent = tr(txt.dataset.key);
  }
  const mm = document.getElementById('msg-modal');
  if (!mm.classList.contains('hidden') && mm.dataset.id) {
    renderMsg(parseInt(mm.dataset.id));
  }
  if (!document.getElementById('final-modal').classList.contains('hidden')) {
    renderFinal();
  }
}

let aCtx = null;
function getAC() {
  if (!aCtx) {
    try {
      aCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch(e) {}
  }
  return aCtx;
}
function wakeAudio() {
  const c = getAC();
  if (c && c.state === 'suspended') {
    c.resume().catch(() => {});
  }
}

function snd(type) {
  const ctx = getAC();
  if (!ctx) return;
  try {
    const t0 = ctx.currentTime;
    if (type === 'door') {
      const b = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * 0.55), ctx.sampleRate);
      const d = b.getChannelData(0);
      for(let i = 0; i < d.length; i++) {
        d[i] = (Math.random() * 2 - 1) * Math.exp(-i / d.length * 9) * 0.45;
      }
      const s = ctx.createBufferSource(), g = ctx.createGain();
      s.buffer = b;
      g.gain.setValueAtTime(0.7, t0);
      g.gain.linearRampToValueAtTime(0, t0 + 0.55);
      s.connect(g);
      g.connect(ctx.destination);
      s.start(t0);
    } else if (type === 'pop') {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(700, t0);
      o.frequency.exponentialRampToValueAtTime(220, t0 + 0.14);
      g.gain.setValueAtTime(0.35, t0);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.22);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(t0);
      o.stop(t0 + 0.25);
    } else if (type === 'chime') {
      [523, 784].forEach((f, i) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'triangle';
        o.frequency.value = f;
        const s = t0 + i * 0.18;
        g.gain.setValueAtTime(0, s);
        g.gain.linearRampToValueAtTime(0.3, s + 0.06);
        g.gain.exponentialRampToValueAtTime(0.001, s + 1.5);
        o.connect(g);
        g.connect(ctx.destination);
        o.start(s);
        o.stop(s + 1.6);
      });
    } else if (type === 'bubble') {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(1000, t0);
      o.frequency.exponentialRampToValueAtTime(1350, t0 + 0.06);
      g.gain.setValueAtTime(0.12, t0);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.14);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(t0);
      o.stop(t0 + 0.17);
    }
  } catch(e) {}
}

function buildStars() {
  const w = document.getElementById('stars-wrap');
  if (!w) return;
  for (let i = 0; i < 70; i++) {
    const el = document.createElement('div');
    el.className = 'star';
    const sz = Math.random() * 2.5 + 0.5;
    el.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random()*68}%;left:${Math.random()*100}%;animation-delay:${(Math.random()*5).toFixed(2)}s;animation-duration:${(Math.random()*2+2).toFixed(2)}s`;
    w.appendChild(el);
  }
}

function buildSakura() {
  const w = document.getElementById('sakura-wrap');
  if (!w) return;
  const g = ['\uD83C\uDF38', '\uD83C\uDF3A', '\u273F', '\u2740'];
  for (let i = 0; i < 18; i++) {
    const el = document.createElement('div');
    el.className = 'petal-el';
    el.textContent = g[i % g.length];
    el.style.cssText = `left:${(Math.random()*108-4).toFixed(1)}%;font-size:${(9+Math.random()*11).toFixed(1)}px;animation-duration:${(7+Math.random()*10).toFixed(1)}s;animation-delay:${(Math.random()*14).toFixed(1)}s`;
    w.appendChild(el);
  }
}

function openDoor() {
  if (S.doorOpen) return;
  S.doorOpen = true;
  wakeAudio();
  snd('door');
  const fw = document.getElementById('fusuma');
  if (fw) {
    fw.classList.add('opening');
    fw.onclick = null;
  }
  setTimeout(() => {
    document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
    setTimeout(() => {
      document.getElementById('scene-room').classList.add('active');
      setTimeout(startTour, 550);
    }, 60);
  }, 900);
}

function showProgress() {
  const pb = document.getElementById('progress-bar');
  if (pb) pb.classList.remove('hidden');
}

function updateProgress() {
  const n = S.found.size;
  const countEl = document.getElementById('pt-count');
  if (countEl) countEl.textContent = n + '/6';
  document.querySelectorAll('.pt').forEach(p => {
    if (S.found.has(parseInt(p.dataset.msg))) {
      p.classList.add('found');
    }
  });
  if (n === 6 && !S.unlocked) {
    unlockBox();
  }
}

function unlockBox() {
  S.unlocked = true;
  const fb = document.getElementById('final-box');
  if (fb) fb.classList.add('unlocked');
}

function moveSensei(step) {
  const el = document.getElementById('sensei');
  if (!el) return;
  const pos = POS[step] || POS.intro;
  el.classList.add('walking');
  el.style.left = pos.l + '%';
  const floorH = window.innerHeight * 0.49;
  el.style.bottom = Math.round((pos.p / 100) * floorH * 0.88) + 'px';
  setTimeout(() => el.classList.remove('walking'), 950);
}

function showBubble(key) {
  const bub = document.getElementById('s-bubble');
  const txt = document.getElementById('s-text');
  if (!bub || !txt) return;
  txt.dataset.key = key;
  txt.textContent = tr(key);
  snd('bubble');
  bub.classList.remove('hidden');
}

function hideBubble() {
  const bub = document.getElementById('s-bubble');
  if (bub) bub.classList.add('hidden');
}

const TOUR = [
  { step: 'intro', key: 'guideIntro', auto: 0 },
  { step: 1, key: 'guide1', auto: 0 },
  { step: 2, key: 'guide2', auto: 0 },
  { step: 3, key: 'guide3', auto: 0 },
  { step: 4, key: 'guide4', auto: 0 },
  { step: 5, key: 'guide5', auto: 0 },
  { step: 6, key: 'guide6', auto: 0 },
  { step: 'final', key: 'guideFinal', auto: 0 }
];
let tIdx = 0, tActive = false;

function startTour() {
  showProgress();
  tActive = true;
  tIdx = 0;
  runStep(0);
}

function runStep(i) {
  if (i >= TOUR.length) {
    freeMode();
    return;
  }
  const e = TOUR[i];
  S.step = e.step;
  moveSensei(e.step);
  setTimeout(() => {
    showBubble(e.key);
    if (e.auto > 0) {
      setTimeout(() => {
        hideBubble();
        tIdx = i + 1;
        runStep(i + 1);
      }, e.auto);
    }
  }, 950);
}

function advanceTour(id) {
  if (!tActive) return;
  const cur = TOUR[tIdx];
  if (cur && cur.step === id) {
    hideBubble();
    setTimeout(() => {
      tIdx++;
      runStep(tIdx);
    }, 700);
  }
}

function freeMode() {
  tActive = false;
  S.toured = true;
  showBubble('guideFree');
  setTimeout(hideBubble, 3800);
  const fb = document.getElementById('free-bar');
  if (fb) fb.classList.remove('hidden');
}

function replayTour() {
  const fb = document.getElementById('free-bar');
  if (fb) fb.classList.add('hidden');
  hideBubble();
  tActive = true;
  tIdx = 0;
  runStep(0);
}

function clickObject(id) {
  wakeAudio();
  if (tActive && S.step !== id) {
    if (S.step === 'intro' && id === 1) {
      hideBubble();
      tIdx = 1;
      S.step = 1;
    } else {
      const c = document.getElementById('sensei');
      if (c) {
        c.style.transition = 'none';
        c.style.transform = 'translateX(-50%) translateY(-10px)';
        setTimeout(() => {
          c.style.transition = '';
          c.style.transform = 'translateX(-50%)';
        }, 240);
      }
      return;
    }
  }
  snd('pop');
  if (!S.found.has(id)) {
    S.found.add(id);
    const objEl = document.getElementById('obj-' + id);
    if (objEl) objEl.classList.add('found-obj');
    updateProgress();
  }
  openMsg(id);
  advanceTour(id);
}

function openMsg(id) {
  renderMsg(id);
  const modal = document.getElementById('msg-modal');
  if (modal) {
    modal.dataset.id = id;
    modal.classList.remove('hidden');
  }
}

function renderMsg(id) {
  const stmp = document.getElementById('msg-stamp');
  if (stmp) {
    const clr = STAMP_CLR[id] || '#8b1a1a';
    stmp.textContent = tr('msg' + id + 'Stamp');
    stmp.style.color = clr;
    stmp.style.borderColor = clr;
    stmp.style.background = clr + '1a';
  }
  const title = document.getElementById('msg-title');
  if (title) title.textContent = tr('msg' + id + 'Title');
  const body = document.getElementById('msg-body');
  if (body) body.textContent = tr('msg' + id + 'Text');
}

function clickFinalBox() {
  wakeAudio();
  if (!S.unlocked) {
    showBubble('lockedMsg');
    const b = document.getElementById('final-box');
    if (b) {
      b.classList.add('shake');
      setTimeout(() => {
        b.classList.remove('shake');
        hideBubble();
      }, 2800);
    }
    return;
  }
  snd('chime');
  renderFinal();
  const fm = document.getElementById('final-modal');
  if (fm) fm.classList.remove('hidden');
  launchConfetti();
  if (!S.toured) {
    setTimeout(freeMode, 600);
  }
}

function renderFinal() {
  const title = document.getElementById('final-title');
  if (title) title.textContent = tr('finalTitle');
  const sig = document.getElementById('final-sig');
  if (sig) sig.textContent = tr('signatureFrom');
  const bd = document.getElementById('final-body');
  if (bd) {
    bd.innerHTML = '';
    const paras = tr('finalText');
    (Array.isArray(paras) ? paras : [paras]).forEach((p, i) => {
      const el = document.createElement('p');
      el.textContent = p;
      if (i > 0) el.style.marginTop = '14px';
      bd.appendChild(el);
    });
  }
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('hidden');
}

function closeBg(e, id) {
  if (e.target.id === id) {
    closeModal(id);
  }
}

function launchConfetti() {
  const z = document.getElementById('confetti-zone');
  if (!z) return;
  z.innerHTML = '';
  const CC = ['#c9963a', '#e8c468', '#8b1a1a', '#c0392b', '#1a3870', '#2d8a5a', '#9b2980', '#f0c030', '#ff6b6b', '#4ecdc4'];
  for (let i = 0; i < 72; i++) {
    const b = document.createElement('div');
    b.className = 'confetti-bit';
    const cx = ((Math.random() - 0.5) * 320).toFixed(0);
    b.style.cssText = `background:${CC[Math.floor(Math.random() * CC.length)]};left:${(15+Math.random()*70).toFixed(1)}%;width:${(4+Math.random()*8).toFixed(1)}px;height:${(4+Math.random()*8).toFixed(1)}px;border-radius:${Math.random()>.45?'50%':'2px'};--cx:${cx}px;animation-duration:${(1.4+Math.random()*2).toFixed(2)}s;animation-delay:${(Math.random()*.6).toFixed(2)}s`;
    z.appendChild(b);
  }
}

function openPainting(id) {
  const art = document.getElementById('ba-art');
  const orig = document.getElementById('ba-orig');
  if (art) art.src = 'references/cartoon_image_' + id + '.jpeg';
  if (orig) orig.src = 'references/painting_' + id + '.jpeg';
  setSlider(50);
  const ov = document.getElementById('painting-ov');
  if (ov) ov.classList.remove('hidden');
  initSlider();
}

function closePainting() {
  const ov = document.getElementById('painting-ov');
  if (ov) ov.classList.add('hidden');
  killSlider();
}

function closePaintingOnBg(e) {
  if (e.target.id === 'painting-ov') {
    closePainting();
  }
}

function setSlider(pct) {
  pct = Math.max(3, Math.min(97, pct));
  const line = document.getElementById('ba-line');
  const right = document.getElementById('ba-right');
  if (line) line.style.left = pct + '%';
  if (right) right.style.clipPath = `inset(0 0 0 ${pct}%)`;
}

let sliderKill = null;
function initSlider() {
  killSlider();
  const w = document.getElementById('ba-wrap');
  const h = document.getElementById('ba-handle');
  if (!w || !h) return;
  const pct = e => {
    const r = w.getBoundingClientRect();
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    return ((cx - r.left) / r.width) * 100;
  };
  const dn = () => {
    S.drag = true;
    document.body.style.userSelect = 'none';
  };
  const up = () => {
    S.drag = false;
    document.body.style.userSelect = '';
  };
  const mv = e => {
    if (!S.drag) return;
    e.preventDefault();
    setSlider(pct(e));
  };
  const tap = e => {
    if (e.target === h || h.contains(e.target)) return;
    setSlider(pct(e));
  };
  h.addEventListener('mousedown', dn);
  h.addEventListener('touchstart', dn, { passive: true });
  document.addEventListener('mousemove', mv);
  document.addEventListener('touchmove', mv, { passive: false });
  document.addEventListener('mouseup', up);
  document.addEventListener('touchend', up);
  w.addEventListener('click', tap);
  sliderKill = () => {
    h.removeEventListener('mousedown', dn);
    h.removeEventListener('touchstart', dn);
    document.removeEventListener('mousemove', mv);
    document.removeEventListener('touchmove', mv);
    document.removeEventListener('mouseup', up);
    document.removeEventListener('touchend', up);
    w.removeEventListener('click', tap);
  };
}

function killSlider() {
  if (sliderKill) {
    sliderKill();
    sliderKill = null;
  }
  S.drag = false;
}

document.addEventListener('DOMContentLoaded', () => {
  buildStars();
  buildSakura();
  applyAll();
  const btnEn = document.getElementById('btn-en');
  if (btnEn) btnEn.classList.add('active');

  const sen = document.getElementById('sensei');
  if (sen) {
    sen.style.left = '110%';
    sen.style.bottom = '0px';
  }

  const fw = document.getElementById('fusuma');
  if (fw) {
    fw.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDoor();
      }
    });
  }
});
