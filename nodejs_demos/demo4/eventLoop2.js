console.log("Start");
 
setTimeout(function f1(){
    console.log("f1");
},6000);
 
setTimeout(function b1(){
    console.log("b1");
},2000);
 
setTimeout(function b2(){
    console.log("b2");
},0);
 
for(const value of['A','B']){
    console.log(value);
}
function T(){
    console.log("T");
}
 
T();