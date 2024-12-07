console.log('Start');

setTimeout(()=>{
    console.log('inside set timeout 1 (Macrotask 1)');
},0);

setTimeout(()=>{ //macrotasks
    console.log('inside set timeout 2 (Macrotask 2)');
},0);

Promise.resolve().then(()=>{ 
    console.log('inside promise 1 (Microtask 1)')
})

Promise.resolve().then(()=>{ 
    console.log('inside promise 2 (Microtask 2)')
})

console.log('End');