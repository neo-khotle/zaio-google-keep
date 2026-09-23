//The main function
function saveNote(event) {
    //to prevent the default action of the close button refreshing the page
    if (event) event.preventDefault();
console.log("1. Close button clicked!");
    const{title, note} = readInput();
console.log("2. Inputs read:", { title, note });
    // Prevent saving empty notes
    if (!title.trim() && !note.trim()) {
      resetAndCloseForm();
      return;
    }

    //saves note on computer
    saveNoteOnComputer(title, note);
    const noteElement = createElement(title, note);
console.log("3. Created HTML element:", noteElement);
    displayNote(noteElement);

    //Reset form inputs and toggle back to inactive form
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

function createElement(title, note, id = Date.now()){

    // 1. Create title element (only if title text exists)
    const titleElement = document.createElement("h3");
    titleElement.textContent = title || ""; 

    // 2. Create note paragraph element (only if note text exists)
    const noteElement = document.createElement("p");
    noteElement.textContent = note || "";
    
    // Create a delete icon/button
    const deleteBtn = document.createElement("span");
    deleteBtn.className = "delete-btn"; //"material-symbols-outlined delete-btn hover";
    deleteBtn.textContent = "delete";

    // 3. Create the container div
    const containerElement = document.createElement("div");
    containerElement.className = "note-card";
    
    // 3. Attach click event listener to delete this specific card
    deleteBtn.onclick = function(event) {
        event.stopPropagation(); // Prevents triggering other card clicks
        deleteNote(containerElement, id);
    };

    // 4. Append children safely
    if (title) containerElement.appendChild(titleElement);
    if (note) containerElement.appendChild(noteElement);
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
  if (formElement) {
      formElement.reset();
  }

  // Hide active form, show inactive form
  if (activeFormContainer && inactiveFormContainer) {
    activeFormContainer.style.display = "none";
    inactiveFormContainer.style.display = "block";
  }
}

// Save notes permanently using browser localStorage
function saveNoteOnComputer(title, note) {
  // Retrieve existing saved notes array, or create an empty array if none exists
  const existingNotes = JSON.parse(localStorage.getItem("myNotes")) || [];

 // Create new note object
    const newNote = {
        title: title,
        note: note,
        id: Date.now()
    };

    // Adds new note to list
    existingNotes.push(newNote);

  // Save updated array back to localStorage as JSON
  localStorage.setItem("myNotes", JSON.stringify(existingNotes));
}


// Helper function to load and display saved notes on page startup
function loadSavedNotes() {
    const savedData = localStorage.getItem("myNotes");
    let existingNotes = [];

    if (savedData) {
        existingNotes = JSON.parse(savedData);
    }

    // Loop through saved notes array
    for (let i = 0; i < existingNotes.length; i++) {
        const savedNote = existingNotes[i];
        const noteElement = createElement(savedNote.title, savedNote.note, savedNote.id);
        displayNote(noteElement);
    }
}

// Run the loadSavedNotes function automatically when page finishes loading
window.onload = loadSavedNotes;


// // Alternative to automatically display saved notes when the page loads
// document.addEventListener("DOMContentLoaded", () => {
//   const existingNotes = JSON.parse(localStorage.getItem("myNotes")) || [];
  
//   existingNotes.forEach(savedNote => {
//     const noteElement = createElement(savedNote.title, savedNote.note);
//     displayNote(noteElement);
//   });
// });

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
  const updatedNotes = existingNotes.filter(note =>
    note.id !== noteId
  );

  // Save the updated list back to localStorage
  localStorage.setItem("myNotes", JSON.stringify(updatedNotes));
}