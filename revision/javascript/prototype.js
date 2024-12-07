//constructor function
function Person(name,age){
    this.name = name;
    this.age = age;
}

//adding a method to the prototype
Person.prototype.greet = function(){
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
}

//create instance of the person object
const p1 = new Person('Alice', 32);
const p2 = new Person('Bon', 30);

console.log(Object.getPrototypeOf(Person));
console.log(p1.__proto__);

//accessing the prototype method
p1.greet();p2.greet();