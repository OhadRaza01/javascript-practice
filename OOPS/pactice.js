//basics
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model
    }

    drive() {
        console.log('driving toyota corolla');
    }
}

let car = new Car("toyota", 2023)
car.drive();

//
class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    get fullname() {
        return `${this.first} ${this.last}`
    }
}

let person = new Person("Ohad", "Raza")
console.log(person.fullname);

//
class Student {
    constructor(marks) {
        this._marks = marks;
    }

    get marks() {
        return this._marks;
    }

    set marks(value) {
        if (value > 100 || value < 0) {
            console.log('invalid marks');
            return
        }
        else {
            this._marks = value;
        }
    }
}

let student = new Student(80);
console.log(student.marks);
student.marks = -1;
student.marks = 90;
console.log(student.marks);

//
class MathUtil {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
}
console.log(MathUtil.add(1, 2))

// medium 

class Animal {
    sound() {
        console.log('animal making sound');
    }
}

class Dog extends Animal {
    sound() {
        super.sound()
        console.log('Whaf whaww whaww');
    }
}

class Cat extends Animal {
    sound() {
        super.sound()
        console.log('meow meow meow');
    }
}

let dog = new Dog();
let cat = new Cat();
cat.sound()
dog.sound()

//

class Account {
    constructor(balance) {
        this.balance = balance;
    }

    deposite(amount) {
        return this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("can't withdraw amount")
        } else {
            console.log(`${amount} withdrawed from your account`);
            return this.balance -= amount;
        }

    }
}

let account = new Account(0);
console.log(account.balance);
account.withdraw(100)
account.deposite(1000);
console.log(account.balance);
account.withdraw(800)
console.log(account.balance);

//  

class Shape{
    area(){}
}

class Circle extends Shape{
    area(radius){
        return 2 * 3.142 * radius;
    }
}
class Rectangle extends Shape{
    area(h , w){
        return h *w
    }
}






