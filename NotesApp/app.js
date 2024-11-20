const addbtn = document.querySelector("#addbtn");
const main = document.querySelector("#main");

// Add new note when button is clicked
addbtn.addEventListener("click", function() {
    addnote();
});

// Save all notes to localStorage
const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach(note => {
        if (note.value.trim() !== "") { // Only save non-empty notes
            data.push(note.value); // Store text of each note
        }
    });

    if (data.length === 0) {
        localStorage.removeItem("notes");
    } else {
        localStorage.setItem("notes", JSON.stringify(data)); // Save to localStorage
    }
};

// Add a new note (or load an existing note with passed text)
const addnote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="tool">  
            <i class="save fa-regular fa-floppy-disk"></i>
            <i class="trash fa-solid fa-trash"></i>   
        </div>
        <textarea>${text}</textarea>
    `;

    // Add event listener for removing the note
    note.querySelector(".trash").addEventListener("click", function() {
        note.remove();
        saveNotes(); // Re-save the updated notes after deletion
    });

    // Add event listener for saving the notes
    note.querySelector(".save").addEventListener("click", function() {
        saveNotes(); // Save notes to localStorage
    });

    main.appendChild(note);
    saveNotes(); // Save after adding a new note
};

// Load saved notes from localStorage on page load
(function() {
    const lsnotes = JSON.parse(localStorage.getItem("notes"));
    if (lsnotes) {
        lsnotes.forEach(lsnote => {
            if (lsnote.trim() !== "") { // Only add non-empty saved notes
                addnote(lsnote); // Add each saved note with its content
            }
        });
    }
})();
