// 1)
function sayHello(callback) {
    console.log("hello");
    callback()
}

sayHello(() => {
    console.log("how are you");
})

// 2)

function printNumber(num, callback) {
    console.log(num);
    callback(num);
}

printNumber(2, (num) => {
    console.log(num ** 2);
})

// real usage
function loadscript(src , callback){
    let script = document.createElement("script")
    script.src = src;
    script.onload= ()=> callback(null)
    script.onerror= () => callback(new Error("cant load script"))
    document.head.appendChild(script)
}

function afterload(error){
    if(error){
        console.log(error.message);
    }
    else{
        console.log("success");
    }
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" , afterload)



/*
// call back hell
function doTask(task, time, callback) {
    setTimeout(() => {
        console.log(task)
        callback()
    }, time);
}

doTask("Step 1", 1000, () => {
    doTask("Step 2", 2000, () => {
        doTask("Step 3", 3000, () => {
            console.log("All steps complete!");
        });
    });
});
*/