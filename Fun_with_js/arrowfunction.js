//arrow function in javascript
console.log(this);

let obj = {
    name:"ohad",
    job:"Fullstack-Developer",
    age:20,
    show:function(){
        setTimeout(()=>{
            console.log(this);
            console.log(`name : ${this.name}\njob : ${this.job}\nage: ${this.age}`);
        }, 2000);
    }
}

obj.show();

