const person = {
    title:{
        doctor:"Doc",
        Engineer:"Eng",
        Teacher:"Tea"
    },
    name:["Sajal","Badal","Sumi"],
    age:[22,23,25],
    bio: function(){
        console.log(`{this.name[0]} {this.name[1]} {this.name[2]} is ${this.age[0]} ${this.age[1]} ${this.age[2]} years old`)
    },
    intro: function(){
        console.log(`Hello! Everyone I am {this.name[0]} {this.name[1]} {this.name[2]}`)
     },
 };
 person.title.doctor;
 person.bio();
 person.intro();

//  -----------------------------------------

// Constructors

let s1 = {
    name:"Raj",
    intro(){
        console.log(`Hello! Everyone I am ${this.name}`);
    },
};
let s2 = {
    name:"Raj",
    intro(){
        console.log(`Hello! Everyone I am ${this.name}`);
    },
};

function createPerson(name){
    const obj={};
    obj.name = name;
    obj.intro = function(){
        console.log(`Hello! Everyone I am ${this.name}`);
    };
    return obj;
};
const mona = createPerson("Mona");
mona.intro();

const sona = createPerson("Sona");
sona.intro();

// real constructor
function Person(name){
    this.name = name;
    this.intro = function(){
        console.log(`Hello! Everyone I am ${this.name}`);
    };
};
const m = new Person("Mona");
m.intro();

const s = new Person("Sona");
s.intro();

function Employee(name,id,skill,experience,salary){
    this.name = name;
    this.id = id;
    this.skill = skill;
    this.experience=experience;
    this.salary = salary;
    console.log(`Salary: ${this.salary}`)
    if(experience>=10){
        this.salary = salary*1.2;
        console.log(`Salary after increment ${this.salary}`);
    }
};

const e = new Employee("a",17171717,"Java",10,10000);

const o1 = new Object({name:"Amit", age:30});

const o2 = new String("Jhone");

const o3 = new Number(768);

const o4 = new Boolean(true);
console.log(o1);
console.log(o2);
console.log(o3);