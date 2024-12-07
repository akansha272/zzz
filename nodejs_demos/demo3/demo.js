const repl = require('repl');
const server = repl.start('Custom repl');

server.context.myvar = 'HelloREPL';
    server.context.fun = function(name){
        return `Hello, ${name} ! Welcome to the custom REPL`;
    };

    // global variable
    global.myglobalVar = "I am a Global Variable";
    console.log(global.mygloalVar);

    console.log("__dirname", __dirname);
    console.log("__filename", __filename);

    console.log("Current Node.js Version", process.version);
    console.log("Current working directory", process.cwd())
    // =======================

    

