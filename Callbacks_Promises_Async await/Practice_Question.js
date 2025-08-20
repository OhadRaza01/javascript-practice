// Question:
// Create a function `fetchData()` that returns a Promise. 
// Inside it, generate a random number between 1 and 100.
// - If the number is even, resolve the promise with the message: "Even number found: X"
// - If the number is odd, reject the promise with the message: "Odd number found: X"
// Handle the result using `.then()` and `.catch()`.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let x = Math.floor(Math.random() * 100 + 1)
            if (x % 2 == 0) {
                resolve("Even number found:" + x)
            } else {
                reject("Odd number Found:" + x)
            }
        }, 2000);
    })
}

fetchData().then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
})

// Question:
// Create a function `fetchUserData(userId)` that returns a Promise. 
// - After 2 seconds, it should simulate fetching user data. 
// - If the userId is greater than 0, resolve with an object like: { id: userId, name: "User <id>" } 
// - If the userId is 0 or negative, reject with an error message: "Invalid user ID".
//
// Now:
// 1. Call `fetchUserData(1)` and log the result using `.then()`.
// 2. After that, fetch another user `fetchUserData(2)` and log the result.
// 3. Add `.catch()` to handle any errors.

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


fetchUserData(1).then((value) => {
    console.log(value);
    return fetchUserData(2)
}).then((value)=>{
    console.log(value);
    return fetchUserData(-1)
}).then((value)=>{
    console.log(value);
}).catch((err)=>{
    console.log(err);
})

// same solution with callback decreases readability (Callback hell)

// function fetchUserData(userId,callback) {
//     setTimeout(() => {
//         if (userId > 0) {
//             let result = { id: userId, name: `User ${userId}` }
//             console.log(result);
//             callback();
//         }
//         else {
//             console.log("invalid user id");
//         }
//     }, 2000);
// }

// fetchUserData(1 , ()=>{
//     fetchUserData(2 , ()=>{
//         fetchUserData(-1 , ()=>{
//             console.log('all process finished');
//         })
//     })
// })