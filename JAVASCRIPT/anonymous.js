let x = function(){
    console.log("It will not run");
}
// anonymous function

function welcome(wish){
    console.log(wish(),"everyone");
}
welcome(function(){
    return "good morning all!!"
})

setTimeout(function() {
    console.log("Hello World");
}, 5000);

// IIFE-immediately invoked function expression (it'll run as soon as it is declared/created/defined)
(function(p){
    alert(p);
})('Hi everyone ');

// regular function
let m1=function(n1,n2){
    return n1*n2;
}

// arrow function
let m2=(n1,n2) => {return n1*n2};

const w = (name='Robot') => `Hello, ${name}`;
console.log(w('John'));
console.log(w());

// arrow function with this

const group ={
    member:['sheena','reena'],
    groupName:'India',
    groupMsg : function(){
        this.member.forEach((mem)=>{
            console.log(`${mem} is in group ${this.groupName}`)
        })
    }
}

group.groupMsg(); //lexically binds 'this' to the group object context

//Javascript Object -----
const student = {
    firstName: "Ram",
    rollNo: 200,
    subject: 'Computer Science',
    displayInfo: function(){
        consome.log("This is the info about the student");
    }
};
 student.firstName = "damini";
 student.lastName = "Gupta";
 student.skill = "Java";
 student.displayInfo();
 console.log(student);

