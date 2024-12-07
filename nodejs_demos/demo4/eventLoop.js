const fs = require('fs');
console.log("Start");
setTimeout(()=>{
    console.log("Timer 1 Expired");
}, 50);

setImmediate(()=>{
    console.log("Immediate 1 executed");
});

fs.readFile(__filename, ()=> {
    console.log("File read ompleted");
    
});

setTimeout(()=>{
    console.log("Timer 2 expired");
},100);

console.log("End");