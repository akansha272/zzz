const counterModule = require('./file1');
console.log(counterModule.increment()); //prints 1
console.log(counterModule.increment()); //prints 2

console.log(global.config.appName);
console.log(global.config.version);
console.log(global.config.port);