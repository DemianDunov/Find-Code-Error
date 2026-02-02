const questions = [
  {
    code: [
      'getKeyBtn.onclick = () => {',
      '  const resultBox = document.getlementById("resultBox");',
      '  const keyText = document.getElementById("keyText").innerText;',
      '  document.getElementById("overlay").classList.remove("hidden");',
      '  resu1tBox.classList.add("act1ve");',
      '};',
      '',
      'document.getElementById("closeBtn").onclick = () => {',
      '  document.getElementById("overlay").classList.add("hidden");',
      '  document.getElementById("resultBox").classList.remove("active");',
      '};'
    ],
    answer: "N1e103T=L03110"
  },
  {
    code: [
      '<meta http-equiv="Content-Type" content="text/html; chArset=utf-8" />',
      '<link href="bitnami.css" mEdia="all" rel="Stylesheet" type="text/css" />',
      '<link href="/dashboard/stylesheets/all.css" rel="stylesh7et" type="text/css" />'
    ],
    answer: "AE7"
  },
  {
    code: [
      'getKeybtn.onclick = () => {',
  'document.getelementById("keyText").innerText = generateKey();',
  'document.getElementById("overLay").classList.rem0ve("hidd3n");',
'};',

'documenT.getElementById("closeBtn").onclick = () ==> {',
  'document.getElementById("overlay").classList.add("hidden");',
'};',

'document.getElem3ntById("copyBtn").onclicK = () => {',
  'navigator.clipboard.writeText(',
    'document.getElementById("keyText").innerText',
 ');'
    ],
    answer: "beL03T=3K"
  },
 {
    code: [
      'getKeyBtN.onClick = () =>> {',
      '  c0nst resultBoX = document.getlementById("resultBLx");',
      '  const keyText = document.getElementById("keyTeXt").innertext;',
      '  document.getElementById("overlay").classList.remove("hidden");',
      '  resultBox.classList.add("acTive");',
      '};',
      '',
      'document.getElemeNtById("clos3Btn").onclick = () => {',
      '  document.getElementById("overlay").classList,add("hidd3n");',
      '  d0cument.getElementById("resultBox").classList.remoVe("active"):',
      '};'
    ],
    answer: "NC>0XLXTN3,30V:"
  },

  {
    code: [
      'startBtn.addEventListener("cl1ck", () => {',
      '  const t1merText = document.getElem3ntById("timerText");',
      '  let t0talTime = 60;',
      '  t1merText.innerText = t0talTime;',
      '  gameSt4rt();',
      '});',
      '',
      'function gameSt4rt() {',
      '  document.bOdy.classList.add("playing");',
      '}'
    ],
    answer: "11301044O"
  },

  {
    code: [
      'document.getElementById("subm1tBtn").onclick = () => {',
      '  const userN4me = document.getElementById("userName").value;',
      '  const passW0rd = document.getElementById("passwOrd").value;',
      '  if (userN4me !== "" && passW0rd !== "") {',
      '    document.getElementById("formWrap").classList.rem0ve("h1dden");',
      '  }',
      '};',
      '',
      'docuMent.getElementById("cancelBtn").onclick = () => {',
      '  document.getElementById("formwrap").classList.add("hidden");',
      '};'
    ],
    answer: "1N4W0ON4W0W01M"
  },

  {
    code: [
      'copyBtn.onclick = () => {',
      '  const tExt = document.getElemEntById("resu1t").innerText;',
      '  navigator.clipb0ard.writeText(',
      '    tExt',
      '  );',
      '  document.getElementById("notifBox").classList.add("sh0w");',
      '};'
    ],
    answer: "EE10E0"
  },

  {
    code: [
      'document.getElementById("themeBtn").addEventListener("cl1ck", () => {',
      '  document.bOdy.classList.t0ggle("dark-m0de");',
      '  document.getElementById("themeText").innerText = "D4rk";',
      '});'
    ],
    answer: "O004"
  },

  {
    code: [
      'window.addEventListener("r3size", () => {',
      '  const scr33nW = window.innerW1dth;',
      '  document.getElementById("screenText").innerText = scr33nW;',
      '});'
    ],
    answer: "333WW133W"
  },

  {
    code: [
      'document.getElementById("pl4yBtn").onclick = () => {',
      '  st4rtG4me();',
      '};',
      '',
      'function st4rtG4me() {',
      '  document.getElementById("scr33n").classList.add("act1ve");',
      '  document.getElementById("menuBox").classList.rem0ve("hiddEn");',
      '}'
    ],
    answer: "44G4330E"
  },

  {
    code: [
      'document.getElementById("togGleBtn").onclick = () => {',
      '  const pan3l = document.getElementById("pan3l");',
      '  pan3l.classList.t0ggle("0pen");',
      '};'
    ],
    answer: "G33300"
  },

  {
    code: [
      'document.getElementById("g3nBtn").onclick = () => {',
      '  const kEy = gener4teKey();',
      '  document.getElementById("keyText").innerText = kEy;',
      '  document.getElementById("keyBox").classList.add("act1ve");',
      '};'
    ],
    answer: "3E4E1"
  },

  {
    code: [
      'resetBtn.onclick = () => {',
      '  document.getElementById("scoreText").innerText = "0";',
      '  document.getElementById("timeText").innerText = "00";',
      '  document.getElementById("overLay").classList.rem0ve("sh0w");',
      '  document.bOdy.classList.rem0ve("game0ver");',
      '};'
    ],
    answer: "00O00"
  },
  {
    code: [
      '<bOdy class="min-h-screen bg-gr4y-100 flex items-cent3r justify-center">',
      '  <diV class="conta1ner p-6 bg-wh1te rounded sh4dow">',
      '    <h1 class="text-3xl font-b0ld mb-4">Title</h1>',
      '    <p class="text-gr4y-600">Content</p>',
      '  </diV>',
      '</bOdy>'
    ],
    answer: "O43V144VO"
  },

  {
    code: [
      '<sty1e->',
      '  bOdy { backgr0und-c0lor: #f3f4f6; }',
      '  .conta1ner { max-w1dth: 600px; marg1n: aut0; }',
      '</style>'
    ],
    answer: "1O001110"
  },

  {
    code: [
      'document.getElementById("saveBtn").addEventListener("cl1ck", () => {',
      '  const valuE = document.getElem3ntById("inputText").value;',
      '  localSt0rage.setItem("d4ta", valuE);',
      '  document.getElementById("notif").classList.add("sh0w");',
      '});'
    ],
    answer: "1E304E0"
  },

  {
    code: [
      '<form meth0d="pOst" actIon="save.pHp">',
      '  <input typE="tExt" name="userN4me">',
      '  <butt0n type="subm1t">Send</button>',
      '</form>'
    ],
    answer: "0OIHEN401"
  },

  {
    code: [
      '<?pHp',
      '  $us3r = $_P0ST["user"];',
      '  if ($us3r !== "") {',
      '    ech0 "Hell0";',
      '  }',
      '?>'
    ],
    answer: "H30300"
  },

  {
    code: [
      'window.addEventListener("scr011", () => {',
      '  const scY = window.scr0llY;',
      '  if (scY > 1O0) {',
      '    document.getElementById("navBar").classList.add("f1xed");',
      '  }',
      '});'
    ],
    answer: "011Y0Y"
  },

  {
    code: [
      '<div class="grid gr1d-cols-3 g4p-4">',
      '  <div class="bg-b1ue-500 p-4 text-wh1te">A</div>',
      '  <div class="bg-gr33n-500 p-4 text-wh1te">B</div>',
      '  <div class="bg-r3d-500 p-4 text-wh1te">C</div>',
      '</div>'
    ],
    answer: "141333"
  },

  {
    code: [
      '<scrIpt>',
      '  let c0unt = 0;',
      '  setInterv4l(() => {',
      '    c0unt++;',
      '    document.getElementById("c0unter").innerText = c0unt;',
      '  }, 1O00);',
      '</script>'
    ],
    answer: "I04000"
  },

  {
    code: [
      '<ul class="1ist-disc pl-6">',
      '  <lI class="mB-2">Item 1</li>',
      '  <li clasS="mb-2">Item 2</li>',
      '  <li class="mb-2">Item 3</li>',
      '</ul>'
    ],
    answer: "1IBS"
  },

  {
    code: [
      '<?pHp',
      '  $sc0re = 1O;',
      '  if ($sc0re >= 1O) {',
      '    ech0 "<p class=\'text-gr33n-500\'>Win</p>";',
      '  }',
      '?>'
    ],
    answer: "H00033"
  },
  {
     code: [
      '<Body class="Min-h-screen bg-gray-100 flex items-center justifY-center">',
      '  <d1v class="container p-6 bg-wh1te rounded shadow">',
      '    <h1 class="text-3xl font-bolD mb-4">Title</h1>',
      '    <p class="text-gray-600">Content</p>',
      '  </div>',
      '</b0dy>'
    ],
    answer: "BMY1D0"
  }

];

let pool = [...questions];
let activeQuestion = null;
let level = 0;
let timeLeft = 90;
let timer = null;
let gameOver = false;

const codeEl = document.getElementById("code");
const timeEl = document.getElementById("time");
const levelEl = document.getElementById("level");
const answerEl = document.getElementById("answer");
const messageEl = document.getElementById("message");
const checkBtn = document.getElementById("checkBtn");

function getRandomQuestion() {
  const index = Math.floor(Math.random() * pool.length);
  return pool.splice(index, 1)[0];
}

function renderCode() {
  codeEl.textContent = activeQuestion.code.join("\n");
  levelEl.textContent = level;
}

function startTimer() {
  timeLeft = 90;
  timeEl.textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      endGame("GAME OVER. Anda Kalah Silahkan Coba Lagi.");
    }
  }, 1000);
}

function endGame(text) {
  clearInterval(timer);
  gameOver = true;
  messageEl.textContent = text;
  messageEl.style.color = "red";
  answerEl.disabled = true;
  checkBtn.disabled = true;
}

checkBtn.addEventListener("click", () => {
  if (gameOver) return;

  const userAnswer = answerEl.value.trim().toUpperCase();

  if (userAnswer === activeQuestion.answer) {
    clearInterval(timer);
    messageEl.textContent = "BENER. OTAK LO JALAN.";
    messageEl.style.color = "lime";

    setTimeout(nextQuestion, 1200);
  } else {
    messageEl.textContent = "SALAH. TELITI, BEGO.";
    messageEl.style.color = "orange";
    timeLeft -= 3;
  }
});

function nextQuestion() {
  if (pool.length === 0) {
    endGame("SELESAI. SEMUA SOAL KELAR.");
    return;
  }

  level++;
  activeQuestion = getRandomQuestion();
  answerEl.value = "";
  messageEl.textContent = "";
  answerEl.disabled = false;
  checkBtn.disabled = false;
  gameOver = false;

  renderCode();
  startTimer();
}
nextQuestion();
