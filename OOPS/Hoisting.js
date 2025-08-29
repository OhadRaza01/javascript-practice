//hoisting in javascript

greet();

function greet(){    // hoisted to the top before execution.
    console.log("greet");
}

console.log(a)
// console.log(b);

var a = 9;  //functions and variable decleration are hoisted at the top not initialization
// let b = 10; //error

// let and cosnt have same behavior

// in case of functions expressions

console.log(x);
const x = ()=>{
    console.log('hello');  
}
// var x = function(){
//     console.log('hello'); hoist to the top
// }
