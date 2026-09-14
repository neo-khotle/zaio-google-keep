//The main function
function saveNote() {
    //step 1
    const{title, note} = readInput();
    //save note on computer
    saveNoteOnComputer(title, note);
    //step 2
    const noteHTMLElement = createElement(title, note);
    //step 3
    displayNote(noteHTMLElement);
}



//The helper functions
function readInput(){
    //Read title
    const titleElement = document.getElementById("title");
    const title = titleElement.value;

    //Read note
    const noteElement = document.getElementById("note");
    const note = noteElement.value;

    return{title, note};

}

function createdElement(title, note){
    const titleElement = document.createElement("h3");
    //console.log(titleElement);
    titleElement.textContent = title; 
    console.log(titleElement);

    const noteElement = document.createElement("p");
    noteElement.textContent = note;

    const containerElement = document.createElement("div");
    containerElement.appendChild(titleElement);
    containerElement.appendChild(noteElement);

    return containerElement;
}

function displayNote(noteElement){
    //identify where its going
    const listElement = document.getElementById("notes");
    listElement.appendChild(noteElement);
}

function thisFunctionIsGoingToRunWhenIStartThePage(){
//okay now read everything you've stored before and display them onthe page

    const notes = [{title: 'Title 1', note: 'Note 1'}, {title: "Title 2", note: "Note 2"}];

    for (note of notes) {
        const noteElement = createElement(note.title, note.note);
        displayNote(noteElement);
    }
}


thisFunctionIsGoingToRunWhenIStartThePage();