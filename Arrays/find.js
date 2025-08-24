const arr = [{name:"ohad"} ,{name :"shameel"} ,{name :"zayan"}]
let myname = "shameel"
console.log(arr.find(e=>{
        return e.name === myname;
}));