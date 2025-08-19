let promise = new Promise((resolve , reject)=>{
    setTimeout(() => {
        resolve("resolved")
    }, 1000);
})

promise.then((value)=>{
    console.log(value);   // want to show the status of promise
})

promise.then(()=>{
    console.log("a random task");  //Any random task i want to done after promise resolved
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("another task")
        },2000)
    })
}).then((value)=>{
    console.log(value);
})