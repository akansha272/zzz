let names = ["john", "aina", "Tom", "Tim", "Bella"];
//extract
names.pop();
console.log("After Extraction :", names);
//insert
names.push('Jenny')
console.log("After Insertion :", names);
//first element of an array
names.shift();
console.log("Shift Method :", names);
//add element at the beginning of the arrat
names.unshift("Rose");
//splice - returns the removed element => array.splice(index, howmany, element)
names.splice(2,1);
console.log("splice :", names);
//Non-Destructive methods
let job =["dev","tester","ui-dev","program-manager","senior-manager","lead"]
//concatenate
let info=names.concat(job);
console.log("Concatenated Array :", info)
names.concat("Isha");
names.concat(job,"Scrum Master");
console.log("Concatenated Array :", names);
//slice
const name = names.slice(0,3);
console.log("Slice :",name)
const name1 = names.slice(-4,-2);
console.log("Slice with negative index :", name1);
const nums = [1,2,3,4,5,6,7];
nums.fill("*",2,5);
console.log("Fill :", nums)
let data = ['A','B','C','D','E'];
let joinName = data.join();
console.log("Join :", joinName);
let joinName1 = data.join('-');
console.log("Join :", joinName1);
console.log(names.includes("Rose"));
console.log(names.includes("Rose", 3));
let students = [
    {name:"John", age:20},
    {name:"Aina", age:22},
    {name:"Tom", age:21},
    {name:"Tim", age:24},
    {name:"Jim", age:19},
    {name:"Jam", age:23},
];
const checkStudent = (student)=>{
    if(student.name === "Tom"){
        return student;
    }
};
console.log(students.find(checkStudent).age);

console.log(job.indexOf(3));
console.log(job.indexOf(3,-1));