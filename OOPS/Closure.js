//lexical scoping 
function outer(){
    let name = "ohad"
    function inner(){  // have access of name, can use name of parent function
        console.log(name);
    }
    name = "shameel"
    inner();
}
outer();

//closure
// returning an inner function, it will have access to any variable defined in its immediate parent.

function outer2(){
    let name = "ohad";
    function inner2(){
        console.log(name);
    }
    return inner2; // here the function return with its lexical scope 
}

let myfunc = outer2();
myfunc();
