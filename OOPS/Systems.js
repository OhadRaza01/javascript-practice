//bank system
class Customer {
    constructor(name, account) {
        this.name = name;
        this.account = account;
    }
}

class Account {
    constructor(balance) {
        this._balance = balance;
    }
    deposite(amount) {
        return this._balance += amount;
    }
    withdraw(amount) {
        if (amount > this._balance) {
            console.log("can't withdraw amount")
        } else {
            console.log(`${amount} withdrawed from your account`);
            return this._balance -= amount;
        }
    }

    get balance() {
        return this._balance;
    }
}

class Bank{
    constructor(arr){
        this.arr = arr;
    }
    addCustomer(customer){
        this.arr.push(customer)
    }
    showAllCustomers(){
        for(let c of this.arr){
            console.log(c.name);
        }
    }
}

let arr  = [new Customer("ohad" , new Account(10000)) , new Customer("shameel" , new Account(10000))]
let bank = new Bank(arr);
let zayan = new Customer("zayan" , new Account(15000))
bank.addCustomer(zayan);
bank.showAllCustomers();

console.log(zayan.account.balance);
zayan.account.withdraw(5000);
console.log(zayan.account.balance);




