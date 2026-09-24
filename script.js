// Show the active form
function openActiveForm() {
    const activeFormContainer = document.querySelector(".active-form");
    const inactiveFormContainer = document.querySelector(".inActive-form");

    activeFormContainer.style.display = "block";
    inactiveFormContainer.style.display = "none";
}


// // Show the inactive form
// function closeActiveForm() {
//     const activeFormContainer = document.querySelector(".active-form");
//     const inactiveFormContainer = document.querySelector(".inActive-form");

//     activeFormContainer.style.display = "none";
//     inactiveFormContainer.style.display = "block";
// }

document.addEventListener("click", function (event) {

    const activeFormContainer = document.querySelector(".active-form");

    // Check if active form is currently visible
    if (activeFormContainer.style.display === "none") {

        // Check if user clicked outside the active form
        if (!activeFormContainer.contains(event.target)) {

            const { title, note } = readInput();

            // Only close if the form is empty
            if (!title.trim() && !note.trim()) {
                resetAndCloseForm();
            }
        }
    }
});


//The main function
function saveNote(event) {
    event.preventDefault();

    const { title, note } = readInput();

    // Don't save completely empty notes
    if (!title.trim() && !note.trim()) {
        resetAndCloseForm();
        return;
    }

    const id = Date.now();

    // Save note to localStorage
    saveNoteOnComputer(title, note, id);

    // Create and display note
    const noteElement = createElement(title, note, id);
    displayNote(noteElement);

    resetAndCloseForm();
}



//The helper functions
function readInput(){
    

    // Make sure these IDs match your HTML <input id="title"> and <textarea id="note">
    const titleElement = document.getElementById("title");
    const noteElement = document.getElementById("note");

    const title = titleElement ? titleElement.value : "";
    const note = noteElement ? noteElement.value : "";

    return { title, note };

}

function createElement(title, note, id){

    const containerElement = document.createElement("div");
    containerElement.className = "note-card";

    if (title) {
        const titleElement = document.createElement("h3");
        titleElement.textContent = title;
        containerElement.appendChild(titleElement);
    }

    if (note) {
        const noteElement = document.createElement("p");
        noteElement.textContent = note;
        containerElement.appendChild(noteElement);
    }

    const deleteBtn = document.createElement("span");
    deleteBtn.className = "material-symbols-outlined delete-btn";
    deleteBtn.textContent = "delete";

    deleteBtn.onclick = function (event) {
        event.stopPropagation();
        deleteNote(containerElement, id);
    };

    containerElement.appendChild(deleteBtn);

    return containerElement;
}

function displayNote(noteElement){
    //identify where its going
    const listElement = document.getElementById("notes");
    listElement.appendChild(noteElement);
}




// Clear inputs and toggle forms back to inactive state
function resetAndCloseForm() {
  const form = document.getElementById("note-form");
  const activeFormContainer = document.querySelector(".active-form");
  const inactiveFormContainer = document.querySelector(".inActive-form");

  // Clear form inputs
  if (form) {
      form.reset();
  }

  // Hide active form, show inactive form
  if (activeFormContainer && inactiveFormContainer) {
    activeFormContainer.style.display = "none";
    inactiveFormContainer.style.display = "block";
  }
}

// Save notes permanently using browser localStorage
function saveNoteOnComputer(title, note ,id) {
  // Retrieve existing saved notes array, or create an empty array if none exists
  const existingNotes = JSON.parse(localStorage.getItem("myNotes")) || [];

 // Create new note object
    const newNote = {
        title: title,
        note: note,
        id: id
    };

    // Adds new note to list
    existingNotes.push(newNote);

  // Save updated array back to localStorage as JSON
  localStorage.setItem("myNotes", JSON.stringify(existingNotes));
}


// Helper function to load and display saved notes on page startup
function loadSavedNotes() {
    const existingNotes = JSON.parse(localStorage.getItem("myNotes")) || [];

    existingNotes.forEach(function (savedNote) {
        const noteElement = createElement(
            savedNote.title,
            savedNote.note,
            savedNote.id
        );

        displayNote(noteElement);
    });
}


function deleteNote (noteCardElement, noteId) {
  // To remove the HTML element from the page immediately
  noteCardElement.remove();

  // Remove the note from localStorage
  deleteNoteFromComputer(noteId);
}

function deleteNoteFromComputer(noteId) {
  // Get stored notes array from localStorage
  const existingNotes = JSON.parse(localStorage.getItem("myNotes")) || [];

  // Keep all notes EXCEPT the one with the deleted ID
  const updatedNotes = existingNotes.filter(function (note) {
        return note.id !== noteId;
    });

  // Save the updated list back to localStorage
  localStorage.setItem("myNotes", JSON.stringify(updatedNotes));
}

// Run the loadSavedNotes function automatically when page finishes loading
window.onload = loadSavedNotes;