// basic concepts 
class Student {
    constructor(name, roll) {
        this.name = name;
        this.roll = roll
    }

    getdetails() {
        console.log(`my name is ${this.name} and my roll-no is ${this.roll}`);

    }
}

let student = new Student("ohad", 146);
let student2 = new Student("Shameel", 134);
student.getdetails()
student2.getdetails();

//inheritance 

class UniversityStudent extends Student {  // Universtystudent inherits student

    constructor(name, roll, semester) {
        super(name , roll)  // calls parent(Studnet) class constructor
        this.semester = semester;
    }

    getdetails(){    //method overriding
        super.getdetails() //accessing parent class method
        console.log(`i am in ${this.semester} semester`);
    }

}

let unistd = new UniversityStudent("ohad" , 146 , 5)
unistd.getdetails();    