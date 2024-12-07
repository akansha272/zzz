// function getData(){
//     return[
//         {name:"John", age: 25},
//         {name:"Jenny", age: 26},
//         {name:"Bob", age: 24},
//     ];
// }
// function findData(u_name){
//     const users = getData();
//     const user = users.find(user => user.name === u_name);
//     return user;
// }

// console.log(findData('John'));
/*promises
const promise = new Promise((resolve,reject)=>{});
 */
function getUsers(callback){
    // let users = [];
    setTimeout(() => {callback = ([
        {name:"John", age: 25},
        {name:"Jenny", age: 26},
        {name:"Bob", age: 24},
    ]);}, 1000);
    // return users;
}
function findUsers(u_name, callback){
    // const users=getUsers();
    getUsers((users)=>{const user = users.find(user=>user.name===u_name);
    // return user;
    callback(user);});
}

console.log(findUsers('John'))