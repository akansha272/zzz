//Let see how Node js can handle HTTP request and responses asynchronously using Events
const http = require('http');
const EventEmitter = require('events');

const server = http.createServer((req,res)=>{
    const myEmi = new EventEmitter();//this instance is used to emit and listen to custom events inside the server's request handling process
    myEmi.on('request', ()=>{
        console.log('Request Received');
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.write('Hello, this is an event-driven HTTP server!');
        res.end();
    });
    //emitting a custom event to signal that a request has been received
    myEmi.emit('request');
});

server.listen(3000, ()=>{
    console.log('Server is running.');
})