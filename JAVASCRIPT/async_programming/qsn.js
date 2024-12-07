// create 3 functions fun1, fun2, fun3, 1 is calling 2 and 2 is calling 3 


function fun1(callback) {
    console.log("Inside fun1");
    callback(fun2);  
}

function fun2(callback) {
    console.log("Inside fun2");
    callback();  
}

function fun3() {
    console.log("Inside fun3");
}

// Start the function chain by calling fun1 and passing fun2 as the callback
fun1(function() {
    fun2(function() {
        fun3();
    });
});