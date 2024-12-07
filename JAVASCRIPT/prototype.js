let emp = {name:"Raj"} //[[prototype:Object]]
emp.toString();

const day=new Date();
let object = day;

do{
    object=Object.getPrototypeOf(object);
    console.log(object);
}while(object);
// const myObj= {
//     name:"John",
//     welcome(){
//         console.log(`Welcome to my home ${this.name}`);
//     }
// };

//myObj.welcome();

function Employee(name,designation,yearOfBirth){
    this.name=name;
    this.designation=designation;
    this.yearOfBirth=yearOfBirth;
}

Employee.prototype.calculateAge = function(){
    console.log('The Current Age is: '+(2024-this.yearOfBirth));
}
console.log(Employee.prototype);

let emp1 = new Employee('Alex', 'Junior tester', 1995);
console.log(emp1);
console.log(emp1.calculateAge());

let emp2 = new Employee('Dexter', 'senior tester', 1990);
console.log(emp2);
console.log(emp2.calculateAge());

let emp3 = new Employee('Anna', 'Junior HR', 1998);
console.log(emp3);
console.log(emp3.calculateAge());

function Car(){
    this.name="Mustang";
}
Car.prototype.color = "red";

let C1 = new Car();

console.log(`color of car before change ${C1.color}`)
//access prototype object of C1
console.log(Object.getPrototypeOf(C1));
Car.prototype.color="White";
//{color:red}
let c2 = new Car();
console.log(`Color of c1 after change ${C1.color}`);
console.log(`color of car on c2 ${c2.color}`);