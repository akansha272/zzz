//custom event
 
const EventEmitter = require('events');
 
const myEmi = new EventEmitter();
 
myEmi.on('welcome', (name)=>{
    console.log("welcome to my event" , name);
});
 
myEmi.emit('welcome', 'Node js');