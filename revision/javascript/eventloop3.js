console.log('Start');
const interValId = setInterval(()=>{
    console.log('Interval setInterval');
}, 0);

setTimeout(()=>{
    console.log('Timeout setTimeout');
    clearInterval(interValId);
},100);
console.log('End');