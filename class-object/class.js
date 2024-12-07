class Employee{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    disp(){
        console.log(`Hello my name is ${this.name} and I am ${this.age}`);
    }
}

let e1 = new Employee("Radha",22);
let e2 = new Employee("Sumit", 23);
e1.disp(); e2.disp();