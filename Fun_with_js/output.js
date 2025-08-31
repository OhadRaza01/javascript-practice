// function test() {
//     let x = 1;
//     if (true) {
//         let x = 2;
//         console.log(x);
//     }
//     console.log(x);
// }
// test();

// let arr = [1, 2, 3, 4, 5];

// console.log(arr.filter(e => e % 2 == 0));
// console.log(arr.reduce((a, b) => a + b));


// let person = {
//     name: "Ali",
//     age: 21,
//     greet() {
//         return "Hello " + this.name;
//     }
// };
// console.log(person.greet());

// console.log(5 > 4 && 3 < 2);
// console.log(5 > 4 || 3 < 2);
// console.log(!false);

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data loaded")
//     }, 2000);
// })
// p.then((value) => {
//     console.log(value);
// })

// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout");
// }, 0);

// console.log("End");

// let fruits = ["apple", "banana"];
// let new_fruits = [...fruits, "mango"]
// console.log(new_fruits);

// password generator
// function genratePassword(length = 8) {
//     const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
//     let password = "";
//     for (let i = 0; i < length; i++) {
//         let rindex = Math.floor(Math.random() * chars.length + 1);
//         password += chars[rindex]
//     }
//     return password;
// }

// console.log(genratePassword(12));

// const obj = {
//     name: "Ohad",
//     greet: function () {
//         console.log(this.name);
//     }
// };

// setTimeout(obj.greet, 1000);


// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");


let a = setTimeout(() => {
    console.log('hello');
}, 2000);

clearTimeout(a)
