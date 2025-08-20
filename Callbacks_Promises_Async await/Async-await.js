// async/await is used for handling asynchronous operations in JavaScript in a cleaner and more readable way.

//Promise methods
// Promise.all          Parallel execution of promises rejected if any one promises fails
// Promise.allSettled   Return the results either promises resolves or rejects.
// Promise.race         Return the result or first promises that settles (Resolve/Reject)
// Promise.any          Resolve on first success/ Rejected if all promises fails.

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: `User ${userId}` })
            }
            else {
                reject("invalid user id")
            }
        }, 2000);
    })
}

async function main() {
    try {
        let a1 = await fetchUserData(1); //await keyword can only be used inside async function
        console.log(a1);

        let a2 = await fetchUserData(2);
        console.log(a2);

        let a3 = await fetchUserData(0);
        console.log(a3);
    }
    catch (error) {
        console.log(error);
    }
}

main();

// real use example. fetching api

async function fetchAPI(){
    let res = await fetch(`https://dummyjson.com/quotes`); //fetch returns a promise
    let data = await res.json(); // parsing into json (JS object notation) also returns a promise
    return data;
}

async function Response(){
    try{
        let data = await fetchAPI(); // wait for promise to be setteled
    console.log(data);
    }
    catch(error){
        console.log('error fetching data');
    }
    
}

Response();

