// load script function using promises (function from callbacks.js);
function loadscript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = src;
        document.head.appendChild(script)
        script.onload = () => resolve(1)
        script.onerror = () => reject(0)
    })
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js").then((value) => {
    console.log(value);
}).catch(() => {
    console.log("cat load script");
})


//Callback hell solution using Promises Chaining

function doTask(task, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(task)
        }, time);
    })
}

doTask("step1", 1000).then((value) => {
    console.log(value);
    return doTask("step2", 2000);
}).then((value) => {
    console.log(value);
    return doTask("step3", 3000)
}).then((value) => {
    console.log(value);
}).catch((err) => {
    console.log('sorry');
})