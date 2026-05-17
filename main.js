const passages = {
  psalm: {
    label: "시편 23:1-6",
    keyVerse: "여호와는 나의 목자시니 내게 부족함이 없으리로다.",
    guide: "하나님의 인도와 보호를 신뢰하는 고백을 따라 오늘의 두려움과 필요를 기도로 올려드립니다.",
    explanation: "다윗은 하나님을 목자로 고백하며 공급, 회복, 인도, 보호를 노래합니다. 환경이 평안할 때뿐 아니라 사망의 골짜기 같은 순간에도 주께서 함께하신다는 믿음이 본문의 중심입니다.",
    verses: [
      "여호와는 나의 목자시니 내게 부족함이 없으리로다",
      "그가 나를 푸른 초장에 누이시며 쉴만한 물가로 인도하시는도다",
      "내 영혼을 소생시키시고 자기 이름을 위하여 의의 길로 인도하시는도다",
      "내가 사망의 음침한 골짜기로 다닐찌라도 해를 두려워하지 않을 것은 주께서 나와 함께 하심이라 주의 지팡이와 막대기가 나를 안위하시나이다",
      "주께서 내 원수의 목전에서 내게 상을 베푸시고 기름으로 내 머리에 바르셨으니 내 잔이 넘치나이다",
      "나의 평생에 선하심과 인자하심이 정녕 나를 따르리니 내가 여호와의 집에 영원히 거하리로다"
    ]
  },
  matthew: {
    label: "마태복음 6:25-34",
    keyVerse: "너희는 먼저 그의 나라와 그의 의를 구하라.",
    guide: "염려를 내려놓고 하나님 나라의 우선순위로 하루를 재정렬합니다.",
    explanation: "예수님은 먹고 입는 문제에 붙잡힌 마음을 하나님 아버지의 돌보심으로 돌이키십니다. 본문은 무책임하게 살라는 말이 아니라, 염려가 아닌 신뢰 안에서 먼저 하나님 나라를 구하라는 초대입니다.",
    verses: [
      "그러므로 내가 너희에게 이르노니 목숨을 위하여 무엇을 먹을까 무엇을 마실까 몸을 위하여 무엇을 입을까 염려하지 말라 목숨이 음식보다 중하지 아니하며 몸이 의복보다 중하지 아니하냐",
      "공중의 새를 보라 심지도 않고 거두지도 않고 창고에 모아 들이지도 아니하되 너희 천부께서 기르시나니 너희는 이것들보다 귀하지 아니하냐",
      "너희 중에 누가 염려함으로 그 키를 한 자나 더할 수 있느냐",
      "또 너희가 어찌 의복을 위하여 염려하느냐 들의 백합화가 어떻게 자라는가 생각하여 보라 수고도 아니하고 길쌈도 아니하느니라",
      "그러나 내가 너희에게 말하노니 솔로몬의 모든 영광으로도 입은 것이 이 꽃 하나만 같지 못하였느니라",
      "오늘 있다가 내일 아궁이에 던지우는 들풀도 하나님이 이렇게 입히시거든 하물며 너희일까보냐 믿음이 적은 자들아",
      "그러므로 염려하여 이르기를 무엇을 먹을까 무엇을 마실까 무엇을 입을까 하지 말라",
      "이는 다 이방인들이 구하는 것이라 너희 천부께서 이 모든 것이 너희에게 있어야 할 줄을 아시느니라",
      "너희는 먼저 그의 나라와 그의 의를 구하라 그리하면 이 모든 것을 너희에게 더하시리라",
      "그러므로 내일 일을 위하여 염려하지 말라 내일 일은 내일 염려할 것이요 한 날 괴로움은 그 날에 족하니라"
    ]
  },
  romans: {
    label: "로마서 12:1-2",
    keyVerse: "너희 몸을 하나님이 기뻐하시는 거룩한 산 제물로 드리라.",
    guide: "예배가 일상의 생각과 선택을 새롭게 하는 방식으로 이어지도록 묵상합니다.",
    explanation: "바울은 하나님의 자비를 받은 성도의 삶을 예배로 설명합니다. 예배는 특정 시간의 의식에 머물지 않고, 세상의 방식에서 벗어나 마음이 새로워지고 하나님의 뜻을 분별하는 일상으로 확장됩니다.",
    verses: [
      "그러므로 형제들아 내가 하나님의 모든 자비하심으로 너희를 권하노니 너희 몸을 하나님이 기뻐하시는 거룩한 산 제사로 드리라 이는 너희의 드릴 영적 예배니라",
      "너희는 이 세대를 본받지 말고 오직 마음을 새롭게 함으로 변화를 받아 하나님의 선하시고 기뻐하시고 온전하신 뜻이 무엇인지 분별하도록 하라"
    ]
  }
};

const storageKey = "qt-world-journal";
const form = document.querySelector("#journalForm");
const passageSelect = document.querySelector("#passageSelect");
const keyVerse = document.querySelector("#keyVerse");
const passageGuide = document.querySelector("#passageGuide");
const passageExplanation = document.querySelector("#passageExplanation");
const scriptureText = document.querySelector("#scriptureText");
const ttsStatus = document.querySelector("#ttsStatus");
const playTts = document.querySelector("#playTts");
const pauseTts = document.querySelector("#pauseTts");
const stopTts = document.querySelector("#stopTts");
const savedList = document.querySelector("#savedList");
const todayDate = document.querySelector("#todayDate");
const dayName = document.querySelector("#dayName");
const printPage = document.querySelector("#printPage");
const clearForm = document.querySelector("#clearForm");

const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric"
});

const dayFormatter = new Intl.DateTimeFormat("ko-KR", {
  weekday: "long"
});

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[character]);
}

function getNotes() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } catch {
    return [];
  }
}

function setNotes(notes) {
  localStorage.setItem(storageKey, JSON.stringify(notes));
}

function getSelectedPassage() {
  return passages[passageSelect.value];
}

function renderScripture(selected) {
  scriptureText.innerHTML = selected.verses
    .map((verse, index) => `
      <p><span class="verse-number">${index + 1}</span>${escapeHtml(verse)}</p>
    `)
    .join("");
}

function getReadableScripture(selected) {
  return `${selected.label}. ${selected.verses
    .map((verse, index) => `${index + 1}절. ${verse}`)
    .join(" ")}`;
}

function updatePassage() {
  const selected = getSelectedPassage();
  stopReading();
  keyVerse.textContent = selected.keyVerse;
  passageGuide.textContent = selected.guide;
  passageExplanation.textContent = selected.explanation;
  renderScripture(selected);
}

function resetForm() {
  form.reset();
  document.querySelectorAll("[data-check]").forEach((checkbox) => {
    checkbox.checked = false;
  });
  updatePassage();
}

function createSummary(note) {
  const pieces = [note.observation, note.meaning, note.application, note.prayer]
    .filter(Boolean)
    .join(" ");

  if (!pieces) {
    return "아직 기록된 내용이 없습니다.";
  }

  return pieces.length > 150 ? `${pieces.slice(0, 150)}...` : pieces;
}

function renderNotes() {
  const notes = getNotes();
  savedList.innerHTML = "";

  if (notes.length === 0) {
    const empty = document.createElement("article");
    empty.className = "saved-entry";
    empty.innerHTML = `
      <div>
        <h3>저장된 묵상이 없습니다</h3>
        <p>오늘 말씀을 묵상하고 첫 노트를 남겨보세요.</p>
      </div>
    `;
    savedList.append(empty);
    return;
  }

  notes.forEach((note) => {
    const entry = document.createElement("article");
    entry.className = "saved-entry";
    entry.innerHTML = `
      <div>
        <time datetime="${escapeHtml(note.createdAt)}">${dateFormatter.format(new Date(note.createdAt))} · ${escapeHtml(note.passage)}</time>
        <h3>${escapeHtml(note.title || "제목 없는 묵상")}</h3>
        <p>${escapeHtml(createSummary(note))}</p>
      </div>
      <button class="delete-note" type="button" data-id="${escapeHtml(note.id)}">삭제</button>
    `;
    savedList.append(entry);
  });
}

function saveNote(event) {
  event.preventDefault();
  const data = new FormData(form);
  const selected = passages[passageSelect.value];
  const note = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    passage: selected.label,
    title: data.get("title").trim(),
    observation: data.get("observation").trim(),
    meaning: data.get("meaning").trim(),
    application: data.get("application").trim(),
    prayer: data.get("prayer").trim()
  };

  const hasContent = [note.title, note.observation, note.meaning, note.application, note.prayer].some(Boolean);
  if (!hasContent) {
    form.querySelector("#title").focus();
    return;
  }

  setNotes([note, ...getNotes()].slice(0, 20));
  renderNotes();
  resetForm();
}

function deleteNote(id) {
  setNotes(getNotes().filter((note) => note.id !== id));
  renderNotes();
}

function initDate() {
  const now = new Date();
  todayDate.textContent = dateFormatter.format(now);
  dayName.textContent = dayFormatter.format(now);
}

function setTtsState(state) {
  playTts.classList.toggle("is-active", state === "playing");
  pauseTts.classList.toggle("is-active", state === "paused");
  ttsStatus.textContent = {
    idle: "읽기 대기",
    playing: "읽는 중",
    paused: "일시정지",
    unsupported: "TTS 미지원"
  }[state];
}

function getKoreanVoice() {
  const voices = speechSynthesis.getVoices();
  const koreanVoices = voices.filter((voice) => voice.lang.toLowerCase().startsWith("ko"));

  if (koreanVoices.length === 0) {
    return null;
  }

  const softVoiceHints = [
    "female",
    "woman",
    "natural",
    "neural",
    "premium",
    "google",
    "microsoft",
    "yuna",
    "sora",
    "sunhi",
    "heami",
    "kyung"
  ];

  return koreanVoices
    .map((voice) => {
      const name = `${voice.name} ${voice.voiceURI}`.toLowerCase();
      const score = softVoiceHints.reduce((total, hint) => (
        name.includes(hint) ? total + 1 : total
      ), voice.lang === "ko-KR" ? 2 : 0);

      return { voice, score };
    })
    .sort((first, second) => second.score - first.score)[0].voice;
}

function stopReading() {
  if (!("speechSynthesis" in window)) {
    return;
  }

  speechSynthesis.cancel();
  setTtsState("idle");
}

function readSelectedPassage() {
  if (!("speechSynthesis" in window)) {
    setTtsState("unsupported");
    return;
  }

  if (speechSynthesis.paused) {
    speechSynthesis.resume();
    setTtsState("playing");
    return;
  }

  speechSynthesis.cancel();
  const selected = getSelectedPassage();
  const utterance = new SpeechSynthesisUtterance(getReadableScripture(selected));
  const voice = getKoreanVoice();

  utterance.lang = "ko-KR";
  utterance.rate = 0.82;
  utterance.pitch = 0.92;
  utterance.volume = 0.92;

  if (voice) {
    utterance.voice = voice;
  }

  utterance.onstart = () => setTtsState("playing");
  utterance.onend = () => setTtsState("idle");
  utterance.onerror = () => setTtsState("idle");

  speechSynthesis.speak(utterance);
}

function pauseReading() {
  if (!("speechSynthesis" in window)) {
    setTtsState("unsupported");
    return;
  }

  if (speechSynthesis.speaking && !speechSynthesis.paused) {
    speechSynthesis.pause();
    setTtsState("paused");
  }
}

passageSelect.addEventListener("change", updatePassage);
form.addEventListener("submit", saveNote);
clearForm.addEventListener("click", resetForm);
printPage.addEventListener("click", () => window.print());
playTts.addEventListener("click", readSelectedPassage);
pauseTts.addEventListener("click", pauseReading);
stopTts.addEventListener("click", stopReading);
window.addEventListener("beforeunload", stopReading);
if ("speechSynthesis" in window) {
  speechSynthesis.addEventListener("voiceschanged", () => {
    getKoreanVoice();
  });
}
savedList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-id]");
  if (button) {
    deleteNote(button.dataset.id);
  }
});

initDate();
updatePassage();
renderNotes();
