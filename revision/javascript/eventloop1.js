console.log('Start');

setTimeout(()=>{
    console.log('inside set timeout 1');
},0);

setTimeout(()=>{ //macrotasks
    console.log('inside set timeout 2');
},0);

Promise.resolve().then(()=>{ //microtask queue (promise handler)
    console.log('inside promise 1')
})

console.log('End');