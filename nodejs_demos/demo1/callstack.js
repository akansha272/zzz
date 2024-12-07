function firstFun(){
    console.log("First function started");
    secondFun();
    console.log('First function ended');
}

function secondFun(){
    console.log("Second function started");
}

firstFun();