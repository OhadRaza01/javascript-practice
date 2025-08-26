//script
const newlistbtn = document.getElementById("addlist");
const storecards = document.querySelector(".storecards");
const inputlistname = document.querySelector(".inputlistname")
const addlistbtn = document.getElementById("createlist")

//create list button
newlistbtn.addEventListener("click", () => {
    newlistbtn.style.display = "none";
    inputlistname.style.display = "flex"
})

// add list button action
addlistbtn.addEventListener("click", () => {
    let listname = document.getElementById("listname").value

    if (!listname) {
        console.log('pagal hai kia');
        return;
    }

    let lists = document.querySelectorAll(".list").length;

    if (lists >= 5) {
        alert("not more than five lists")
        inputlistname.style.display = "none"
        newlistbtn.style.display = "block"
        return;
    }

    List_creation(listname);

    // saving listsname to the local storage
    let savedLists = JSON.parse(localStorage.getItem("lists")) || [];
    let obj = { name: listname, tasks: [] }
    savedLists.push(obj);
    localStorage.setItem("lists", JSON.stringify(savedLists));

    document.getElementById("listname").value = "";
    inputlistname.style.display = "none";
    newlistbtn.style.display = "block"

});

//load data from local storage
window.addEventListener("DOMContentLoaded", () => {
    let list = JSON.parse(localStorage.getItem("lists")) || [];
    list.forEach(obj => {
        List_creation(obj.name);
    });
    const savedTheme = localStorage.getItem("theme") || "blue";
    document.body.className = "theme-" + savedTheme;
    themeSelect.value = savedTheme;
});

//create new html element for list
function List_creation(name) {
    let newdiv = document.createElement("div");
    newdiv.innerHTML = `<div class="list">
                            <div class="listheader">
                                <p>${name}</p>
                            </div>
                            <hr>
                            <button class="addcard"><span>+</span> Add card</button>
                            <div class="taskinput">
                                <input class="inputtaskname" type="text" placeholder="Enter task">
                                <button class="addtask">Add</button>
                            </div>
                            <div class= "container"></div>
                        </div>`;

    storecards.insertBefore(newdiv, inputlistname)

    const addCardBtn = newdiv.querySelector(".addcard");
    const taskInputBox = newdiv.querySelector(".taskinput");
    const inputtaskname = newdiv.querySelector(".inputtaskname");
    const addtask = newdiv.querySelector(".addtask")
    const container = newdiv.querySelector(".container");

    addCardBtn.addEventListener("click", () => {
        addCardBtn.style.display = "none";
        taskInputBox.style.display = "flex";
    });

    addtask.addEventListener("click", () => {

        let task = inputtaskname.value;
        if (!task) {
            return
        }
        addCardBtn.style.display = "flex"
        taskInputBox.style.display = "none"

        let savedlists = JSON.parse(localStorage.getItem("lists")) || [];
        let currentList = savedlists.find(l => l.name === name);
        if (currentList) {
            currentList.tasks.push(task)
        } else {
            savedlists.task.push({ name, task: [task] });
        }

        localStorage.setItem("lists", JSON.stringify(savedlists));
        console.log(savedlists);
        inputtaskname.value = "";
        location.reload();

    });

    let savedlists = JSON.parse(localStorage.getItem("lists")) || [];
    let currentList = savedlists.find(l => l.name === name);
    if (currentList && currentList.tasks.length > 0) {
        currentList.tasks.forEach(task => appendTask(container, task))
    }
}


let dragItem = null;
function appendTask(container, task) {
    container.style.display = "flex"
    container.style.flexDirection = "column";
    container.style.gap = "5px"
    let div = document.createElement("div")
    div.className = "newtask"
    div.draggable = true;
    div.textContent = task
    container.appendChild(div);

    div.addEventListener("dragstart", () => {
        setTimeout(() => {
            div.style.display = "none"
            dragItem = div;
        }, 0);
    })
    div.addEventListener("dragend", () => {
        dragItem = null;
        div.style.display = "block"
    })

    if (!container.dataset.dropbound) {
        container.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        container.addEventListener("drop", (e) => {
            e.preventDefault();
            if (dragItem) {
                // Step 1: Find dragged task text
                let taskText = dragItem.textContent;

                // Step 2: Update localStorage
                let savedlists = JSON.parse(localStorage.getItem("lists")) || [];

                // Remove from old list
                savedlists.forEach(list => {
                    list.tasks = list.tasks.filter(t => t !== taskText);
                });

                // Find current container’s list name
                let listHeader = container.closest(".list").querySelector(".listheader p").textContent;
                let currentList = savedlists.find(l => l.name === listHeader);

                if (currentList) {
                    currentList.tasks.push(taskText);
                }

                // Save again
                localStorage.setItem("lists", JSON.stringify(savedlists));

                // Step 3: Append in DOM
                container.appendChild(dragItem);
            }
        });

        container.dataset.dropbound = "true"; // mark so we don’t add twice
    }
}

const themeSelect = document.getElementById("themeSelect");

themeSelect.addEventListener("change", () => {
    const selectedTheme = themeSelect.value;
    document.body.className = "theme-" + selectedTheme;
    localStorage.setItem("theme", selectedTheme);
});