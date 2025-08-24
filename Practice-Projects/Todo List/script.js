//script

const newlist = document.getElementById("addlist");
const storecards = document.querySelector(".storecards");
const inputlistname = document.querySelector(".inputlistname")
newlist.addEventListener("click", () => {
    newlist.style.display = "none";
    inputlistname.style.display = "flex"
})


let createlist = document.getElementById("createlist")

createlist.addEventListener("click", () => {
    let listname = document.getElementById("listname").value

    if (!listname) {
        console.log('pagal hai kia');
        return;
    }

    let lists = document.querySelectorAll(".list").length;

    if (lists >= 5) {
        alert("not more than five lists")
        return;
    }

    let newdiv = document.createElement("div");
    newdiv.innerHTML = `<div class="list">
                <div class="listheader">
                    <p>${listname}</p>
                </div>
                <hr>
                <button class="addcard"><span>+</span> Add card</button>
            </div>`;
    storecards.insertBefore(newdiv , inputlistname)
    document.getElementById("listname").value = "";
    inputlistname.style.display = "none"; 
    newlist.style.display = "block"; 
    
});

