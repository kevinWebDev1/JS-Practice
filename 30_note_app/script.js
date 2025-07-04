const form = document.querySelector("#form");
const addNoteBtn = document.querySelector("#add-note");
const warning = document.querySelector("#warning");
const titleInput = document.querySelector("#title-input");
const contentInput = document.querySelector("#content-input");
const notesContainer = document.querySelector("#notes-container");
const searchBar = document.querySelector(".search-bar");

let timeout;

window.onload = () => displayNotes();

searchBar.addEventListener("input", () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    searchByTitle();
  }, 300);
});

addNoteBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (!title || !content) {
    showMessage("One or both input fields are empty!", "error");
    return;
  }

  addNote();
  showMessage("Note added successfully!", "success");
});

function showMessage(message, type) {
  warning.textContent = message;
  warning.className = ""; // reset
  warning.classList.add("message", type);

  warning.style.visibility = "visible";

  if (type === "success") {
    setTimeout(() => {
      warning.style.visibility = "hidden";
      warning.textContent = "";
    }, 2000);
  }
}

function addNote() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  let id = 0;

  const note = {
    id: id,
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
    timing: getDateTime(),
    isPinned: false,
  };
  notes.push(note);
  id++;
  localStorage.setItem("notes", JSON.stringify(notes));
  titleInput.value = "";
  contentInput.value = "";
  displayNotes();
}

function deleteNote(e) {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  const selectedNote = e.target.parentElement.parentElement;
  const indexId = selectedNote.dataset.key;

  const newNotes = notes.filter((note) => note.id !== Number(indexId));

  localStorage.setItem("notes", JSON.stringify(newNotes));
  displayNotes();
}

function displayNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  console.log("re-rendered");

  notesContainer.innerHTML = ""; // re-render

  if (notes.length === 0) {
    notesContainer.innerHTML = "<p>No notes yet...</p>";
    return;
  }

  notes.forEach((note) => {
    const noteCard = document.createElement("div");
    noteCard.classList.add("note-card");
    noteCard.setAttribute("data-key", note.id);

    const noteHeader = document.createElement("div");
    noteHeader.classList.add("note-header");

    const noteFooter = document.createElement("div");
    noteFooter.classList.add("note-footer");

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = note.title;

    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = note.content;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", (e) => deleteNote(e));

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", (e) => editNote(e));

    const pinBtn = document.createElement("button");
    pinBtn.classList.add("pin");
    pinBtn.textContent = note.isPinned ? "Unpin" : "Pin";

    pinBtn.addEventListener("click", (e) => pinNote(e));

    const date = document.createElement("div");
    date.classList.add("date");
    date.textContent = note.timing;

    notesContainer.appendChild(noteCard);
    noteCard.appendChild(noteHeader);
    noteCard.appendChild(noteFooter);

    noteHeader.appendChild(title);
    noteHeader.appendChild(date);

    noteFooter.appendChild(content);
    noteFooter.appendChild(editBtn);
    noteFooter.appendChild(pinBtn);
    noteFooter.appendChild(deleteBtn);
  });

  searchByTitle();
}

function getDateTime() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  Date.prototype.today = function () {
    return (
      (this.getDate() < 10 ? "0" : "") +
      this.getDate() +
      " " +
      months[this.getMonth()] +
      " " +
      this.getFullYear()
    );
  };
  Date.prototype.timeNow = function () {
    return this.toLocaleString("en-US", { timeStyle: "short" });
  };

  const date = new Date();
  return date.today() + " at " + date.timeNow();
}

// Adding a search bar to filter notes by title.
function searchByTitle() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const searchText = searchBar.value.toLowerCase().trim();

  notesContainer.innerHTML = "";
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchText)
  );

  if (filteredNotes.length === 0) {
    notesContainer.innerHTML = "No Notes found!";
  } else {
    filteredNotes.forEach((note) => {
      const noteCard = document.createElement("div");
      noteCard.classList.add("note-card");
      noteCard.setAttribute("data-key", note.id);

      const noteHeader = document.createElement("div");
      noteHeader.classList.add("note-header");

      const noteFooter = document.createElement("div");
      noteFooter.classList.add("note-footer");

      const title = document.createElement("div");
      title.classList.add("title");
      title.innerHTML = regexMatcher(searchText, note.title);

      const content = document.createElement("div");
      content.classList.add("content");
      content.textContent = note.content;

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", (e) => deleteNote(e));

      const editBtn = document.createElement("button");
      editBtn.classList.add("edit");
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", (e) => editNote(e));

      const pinBtn = document.createElement("button");
      pinBtn.classList.add("pin");
      pinBtn.textContent = note.isPinned ? "Unpin" : "Pin";
      pinBtn.addEventListener("click", (e) => pinNote(e));

      const date = document.createElement("div");
      date.classList.add("date");
      date.textContent = note.timing;

      notesContainer.appendChild(noteCard);
      noteCard.appendChild(noteHeader);
      noteCard.appendChild(noteFooter);

      noteHeader.appendChild(title);
      noteHeader.appendChild(date);

      noteFooter.appendChild(content);
      noteFooter.appendChild(editBtn);
      noteFooter.appendChild(pinBtn);
      noteFooter.appendChild(deleteBtn);
    });
  }
}

function regexMatcher(searchText, title) {
  const pattern = new RegExp(searchText, "gi");
  const matchedText = title.match(pattern)[0];

  return title.replace(pattern, `<mark>${matchedText}</mark>`);
}

function editNote(e) {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  const selectedNote = e.target.parentElement.parentElement;
  const header = selectedNote.firstChild;
  const footer = selectedNote.lastChild;

  const targetElement = footer.firstChild.nextSibling;

  if (
    targetElement.classList.contains("edit") &&
    targetElement.textContent === "Save"
  ) {
    notes.forEach((note) => {
      if (note.id === Number(selectedNote.dataset.key)) {
        note.title = header.firstChild.value;
        note.content = footer.firstChild.value;
      }
    });

    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
  } else {
    footer.firstChild.nextSibling.textContent = "Save";
  }

  const inputTitle = document.createElement("input");
  inputTitle.type = "text";
  inputTitle.classList.add("title-input");
  inputTitle.value = header.firstChild.textContent;

  const inputContent = document.createElement("textarea");
  inputContent.type = "text";
  inputContent.classList.add("content-input");
  inputContent.value = footer.firstChild.textContent;

  header.firstChild.replaceWith(inputTitle);
  footer.firstChild.replaceWith(inputContent);
}

function pinNote(e) {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const selectedNote = e.target.parentElement.parentElement;

  if (e.target.textContent === "Unpin") {
    notes.forEach((note, index) => {
      if (note.id === Number(selectedNote.dataset.key)) {
        note.isPinned = false;
        const value = notes.splice(index, 1)[0];
        const unpinIndex = notes.findIndex((note) => !note.isPinned);
        if(unpinIndex !== -1) {
          notes.splice(unpinIndex, 0, value);
        } else {
          notes.push(value);
        }
        localStorage.setItem("notes", JSON.stringify(notes));
      }
    });

    displayNotes();
    return;
  }

  notes.forEach((note,index) => {
    if (note.id === Number(selectedNote.dataset.key)) {
      note.isPinned = !note.isPinned;
      const value = notes.splice(index, 1)[0];
      notes.unshift(value);
    }
  });

  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

function add10Notes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  for (let i = 0; i < 10; i++) {
    notes.push({
      id: i,
      title: "Note " + (i + 1),
      content: "This is my Note " + (i + 1),
      timing: getDateTime(),
    });
  }
  localStorage.setItem("notes", JSON.stringify(notes));
}

// add10Notes()
