// let promise = new Promise(function(res,rej){
//     setTimeout(()=>{
//         res('Success')
//     },1000)
// });

let prom = new Promise((resolve, reject)=>{
    let success = true;
    if(success){
        resolve("Promise resolved");
    }else{
        reject("Promise rejected");
    }
});
prom.then(result=> console.log(result));
prom.catch(error => console.log(error));

//=================================

let fetchDatra = (ms)=>{return new Promise((resolve,reject)=>{
    if(ms>0){
        setTimeout(()=>resolve('Task Completed!'), ms);
    }else{
        reject('invalid time :(');
    }
});};

fetchDatra(2000)
.then(result => console.log(result))
.catch(error => console.log(error))