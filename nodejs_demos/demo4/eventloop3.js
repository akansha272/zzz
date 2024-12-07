//const fs = require('fs');
//console.log("Start");
setTimeout(()=>{
    console.log("Timer 1 Expired");
}, 0);

setImmediate(()=>{
    console.log("Immediate 1 executed");
    setTimeout(()=>{
        console.log("Timer imme Expired");
    }, 0);
});

setTimeout(()=>{
    setImmediate(()=>{
        console.log("Immediate 2 executed");
    });
    console.log("Timer 2 expired");
},200);

// fs.readFile(__filename, ()=> {
//     console.log("File read ompleted");
// });

// console.log("End");