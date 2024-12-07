function fun1(name, callback){
    console.log('Hello');
    setTimeout(() => {
        callback(name);
    }, 2000); 
}

function callme(name){
    console.log('Callback Function');
    console.log('Hey my name is ', name);
}

//fun1('Preeti', callme);
setTimeout(fun1,2000,'Preeti', callme);