
function Student(name,age,grade){
    Person.call(this, name, age); //call the parent constructor
    this.grade = grade;
}

//inherit methods from person prototype
Student.prototype = Object.create(Person.prototype);
//Add a new method to student prototype
Student.prototype.study = function(){
    console.log(`${this.name} is studying`);
};
//Creating instance of student
const s1 = new Student('dave', 20, 'A');
s1.greet(); // Inherited from Person prototype
s1.study(); // Defined in student prototype