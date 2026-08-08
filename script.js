//The main function
function saveNote() {
    //step 1
    const{title, note} = readInput();
    //save note on computer
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


