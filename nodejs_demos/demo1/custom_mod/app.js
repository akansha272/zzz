const math = require('./math'); //importing the custom module

// const {
//     add, subtract, multiply, divide 
// } = math 

const num1 = 20;
const num2 = 5;

console.log(`Addition  : ${math.add(num1, num2)}`);
console.log(`divide : ${math.divide(num1, num2)}`);
console.log(math.name,',',math.frmwork);

try{
    console.log(`Division by 0 : ${math.divide(num1,0)}`)
}catch(error){
    console.log(error.message);
}