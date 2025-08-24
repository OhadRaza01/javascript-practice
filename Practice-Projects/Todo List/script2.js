const newlist = document.getElementById("addlist");
const storecards = document.querySelector(".storecards");
const inputlistname = document.querySelector(".inputlistname");
const createlist = document.getElementById("createlist");
const listnameInput = document.getElementById("listname");

// ---------- Helper: Render list -------------
function createListElement(name) {
    let newdiv = document.createElement("div");
    newdiv.innerHTML = `
        <div class="list">
            <div class="listheader">
                <p>${name}</p>
            </div>
            <hr>
            <button class="addcard"><span>+</span> Add card</button>
        </div>
    `;
    storecards.insertBefore(newdiv, inputlistname);
}

// ---------- Load from localStorage on page load ----------
window.addEventListener("DOMContentLoaded", () => {
    let savedLists = JSON.parse(localStorage.getItem("lists")) || [];
    savedLists.forEach(name => createListElement(name));
});

// ---------- Show input instead of button ----------
newlist.addEventListener("click", () => {
    newlist.replaceWith(inputlistname);
    inputlistname.style.display = "flex";
});

// ---------- Create list and save in localStorage ----------
createlist.addEventListener("click", () => {
    let listname = listnameInput.value.trim();

    if (!listname) {
        console.log("pagal hai kia");
        return;
    }

    let lists = document.querySelectorAll(".list").length;
    if (lists >= 5) {
        alert("not more than five lists");
        return;
    }

    // Add new list in UI
    createListElement(listname);

    // Save in localStorage
    let savedLists = JSON.parse(localStorage.getItem("lists")) || [];
    savedLists.push(listname);
    localStorage.setItem("lists", JSON.stringify(savedLists));

    // Reset input
    listnameInput.value = "";
    inputlistname.replaceWith(newlist);
    newlist.style.display = "block";
});