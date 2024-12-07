//Let's create an application that processes user and their associated actions (regiter user, logging in) by using event

const EventEmitter = require('events');

//create an instance of EventEmitter
class UserEvents extends EventEmitter{}

const userE = new UserEvents();

//register
userE.on('register',(userData)=>{
    console.log(`User registered : ${userData.name}`);
    setTimeout(() => {
        console.log(`Welcome mail sent to: ${userData.email}`);
        userE.emit('login',newUser);
    }, 2000);
});

//logging
userE.on('login',(userData)=>{
    console.log(`User logged in : ${userData.name}`);
});

//emitting events
const newUser = {name:'John Doe', email:'johndoe@hotmail.com'};
userE.emit('register',newUser);