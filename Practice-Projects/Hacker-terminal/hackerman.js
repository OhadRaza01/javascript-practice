function hacker(msg) {
    let r = Math.floor(Math.random() * 7 + 2);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(msg)
            console.log(r);
        }, r * 1000);
    })
}

let arr = [
    "*** SYSTEM BOOTING...***",
    "*** CONNECTING TO SECURE SERVER...***",
    "*** BYPASSING FIREWALL...***",
    "*** ENCRYPTION KEYS LOCATED...***",
    "*** CONNECTION ESTABLISHED SUCCESSFULLY***"
];

let display = document.getElementById("display")
async function main() {
    for (let msgs of arr) {
        let msg = await hacker(msgs);        
        await typeWriter(msg , display)
    }
}
main();

async function typeWriter(text , element){
    element.textContent = ""
    for(let chr of text){
        element.textContent += chr;
        await new Promise(resolve => setTimeout(resolve, 50)); // 50ms wait after appending a character
    }
}