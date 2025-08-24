//script
const newlistbtn = document.getElementById("addlist");
const storecards = document.querySelector(".storecards");
const inputlistname = document.querySelector(".inputlistname")

newlistbtn.addEventListener("click", () => {
    newlistbtn.style.display = "none";
    inputlistname.style.display = "flex"
})


const createlistbtn = document.getElementById("createlist")

createlistbtn.addEventListener("click", () => {
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

    let savedLists = JSON.parse(localStorage.getItem("lists")) || [];
    savedLists.push(listname);
    localStorage.setItem("lists", JSON.stringify(savedLists));

    document.getElementById("listname").value = "";
    inputlistname.style.display = "none";
    newlistbtn.style.display = "block"

});

window.addEventListener("DOMContentLoaded", () => {
    let list = JSON.parse(localStorage.getItem("lists")) || [];
    list.forEach(name => {
        List_creation(name);
    });
});


function List_creation(name) {
    let newdiv = document.createElement("div");
    newdiv.innerHTML = `<div class="list">
                <div class="listheader">
                    <p>${name}</p>
                </div>
                <hr>
                <button class="addcard"><span>+</span> Add card</button>
            </div>`;
    storecards.insertBefore(newdiv, inputlistname)
}



