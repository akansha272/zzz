// /*promises
// const promise = new Promise((resolve,reject)=>{});
//  */
// let win = true;

// function getUsers() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (win) {
//                 resolve([
//                     { name: "John", age: 25 },
//                     { name: "Jenny", age: 26 },
//                     { name: "Bob", age: 24 },
//                 ]);
//             }
//             else {
//                 reject('Error');
//             }
//         }, 1000);
//     });
// }

// function fulfill(users) {
//     console.log(users);
// }

// function reject(error) {
//     console.log(error);
// }
// const prom = getUsers();
// prom.then(fulfill, reject);


let win = false ;

function getUsers(){
  return new Promise((resolve , reject )=>{
    setTimeout(()=>{ 
        if(win){
        resolve([   {name: 'John', age: 25},
        {name: 'Jane', age: 30},
        {name: 'Bob', age: 35} 
    ]); 
}else{
        reject('Error');}
    }, 1000);
  });
}

function fullfill(users){
    console.log(users);
}

function reject(error){
    console.log(error);
}
const prom = getUsers();
prom.then(fullfill , reject);



  
        
  
 