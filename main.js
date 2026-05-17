const passages = {
  psalm: {
    label: "시편 23:1-6",
    keyVerse: "여호와는 나의 목자시니 내게 부족함이 없으리로다.",
    guide: "하나님의 인도와 보호를 신뢰하는 고백을 따라 오늘의 두려움과 필요를 기도로 올려드립니다."
  },
  matthew: {
    label: "마태복음 6:25-34",
    keyVerse: "너희는 먼저 그의 나라와 그의 의를 구하라.",
    guide: "염려를 내려놓고 하나님 나라의 우선순위로 하루를 재정렬합니다."
  },
  romans: {
    label: "로마서 12:1-2",
    keyVerse: "너희 몸을 하나님이 기뻐하시는 거룩한 산 제물로 드리라.",
    guide: "예배가 일상의 생각과 선택을 새롭게 하는 방식으로 이어지도록 묵상합니다."
  }
};

const storageKey = "qt-world-journal";
const form = document.querySelector("#journalForm");
const passageSelect = document.querySelector("#passageSelect");
const keyVerse = document.querySelector("#keyVerse");
const passageGuide = document.querySelector("#passageGuide");
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

function updatePassage() {
  const selected = passages[passageSelect.value];
  keyVerse.textContent = selected.keyVerse;
  passageGuide.textContent = selected.guide;
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

passageSelect.addEventListener("change", updatePassage);
form.addEventListener("submit", saveNote);
clearForm.addEventListener("click", resetForm);
printPage.addEventListener("click", () => window.print());
savedList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-id]");
  if (button) {
    deleteNote(button.dataset.id);
  }
});

initDate();
updatePassage();
renderNotes();
