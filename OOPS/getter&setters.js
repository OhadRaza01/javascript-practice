//you can use getters and setters to apply some rules and regulation as shown blow
class User {
  constructor(name) {
    this._name = name; 
  }

  get name(){
    return this._name;
  }

  // setter for when we update our value after constructor initialization
  set name(value){
    if(value.length<3){
        console.log('name is too short');
        return
    }else{
        this._name = value;
    }
  }
}

class ProUser extends User{}

let user = new User("ohad");
user.name = "oh";
user.name = "ohadraza";
console.log(user.name);


//instance of keyword to check an object is an instance of a class or not (true / false)
let pu = new ProUser("ohad");

console.log(user instanceof User); //true
console.log(pu instanceof User); //true because prouser extends user
console.log(pu instanceof ProUser); //true
console.log(user instanceof ProUser); //false