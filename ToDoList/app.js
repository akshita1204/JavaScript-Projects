const item = document.getElementById("item"); // Removed the "#" here
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
    function(event) {
        if (event.key == "Enter") {
            addToDo(this.value);
            this.value = "";  // Clear the input after adding the todo item
        }
    }
);

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${item}
        <i class="fas fa-times"></i>
    `;
    listItem.addEventListener(
        "click",
        function()
        {
         this.classList.toggle("done")
        }
    )


    listItem.querySelector("i").addEventListener(
        "click",
        function()
        {
            listItem.remove();
        }
    )
    toDoBox.appendChild(listItem);
};

