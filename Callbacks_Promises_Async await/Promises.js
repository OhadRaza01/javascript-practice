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