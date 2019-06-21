// Parent Class
class Person {

    constructor(name,age,designation,address){
        this._name = name;
        this._age = age;
        this._designation = designation;
        this._address = address;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get designation() {
        return this._designation;
    }

    set designation(value) {
        this._designation = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    getStudent(){
        let studentData = `NAME : ${this.name}
                           AGE :  ${this.age} 
                           DESIGNATION : ${this.designation}
                           ADDRESS : ${this.address}`;
        console.log(studentData);
    }
}

// Child Class
class Customer extends Person{

    constructor(name,age,designation,address,company){
        super(name,age,designation,address);
        this._company = company;
    }

    get company() {
        return this._company;
    }

    set company(value) {
        this._company = value;
    }

    getCustomer(){
        let customerData = `NAME : ${this.name}
                           AGE :  ${this.age} 
                           DESIGNATION : ${this.designation}
                           ADDRESS : ${this.address}
                           COMPANY : ${this.company}`;
        console.log(customerData);
    }
}

// Create an Object
let person1 = new Person('Rajan','25','Software Engineer','Hyderabad');
person1.getStudent();
person1.age = 26;
person1.getStudent();

// Child Class Object Creation
let customer1 = new Customer('John','45','Sales Manager','Hyderabad','Infosys');
customer1.getCustomer();


