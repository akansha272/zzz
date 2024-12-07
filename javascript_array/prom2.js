// let myYes = new Promise((resolve, reject)=>{
//     let student;
//     setTimeout(()=>{
//         student = "learn javascript";
//         if(student){
//             resolve(student);
//         }
//         else{
//             reject();
//         }
//     })
// })

// let myPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){resolve("Javascript Promise")}, 3000);
// });
// myPromise.then(function(value){
//     console.log(value);
// });

function checkMail() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve("Mail received");
        }
        else {
            reject("Mail not received");
        }
    });
}

checkMail().then((mail) => {
    console.log(mail)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("Check completed");
});

const p1 = Promise.resolve(555);
p1.then((v) => {
    console.log(v);
});

let count = new Promise(function)