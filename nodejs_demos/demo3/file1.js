let counter = 0;
    module.exports.increment = function(){
        counter++;
        return counter;
    };

globalThis.config = {
    appName: "myApp",
    version : "1.0.0",
    port : 3000
}