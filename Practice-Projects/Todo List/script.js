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
    savedLists.push(listname);
    localStorage.setItem("lists", JSON.stringify(savedLists));

    document.getElementById("listname").value = "";
    inputlistname.style.display = "none";
    newlistbtn.style.display = "block"

});

//load data from local storage
window.addEventListener("DOMContentLoaded", () => {
    let list = JSON.parse(localStorage.getItem("lists")) || [];
    list.forEach(name => {
        List_creation(name);
    });
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
                        </div>`;

    storecards.insertBefore(newdiv, inputlistname)

    const addCardBtn = newdiv.querySelector(".addcard");
    const taskInputBox = newdiv.querySelector(".taskinput");

    addCardBtn.addEventListener("click", () => {
        addCardBtn.style.display = "none";
        taskInputBox.style.display = "flex";
    });
}