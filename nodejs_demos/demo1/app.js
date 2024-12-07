//load the http module to create an HTTP server
const http = require('http');

const hostname = '127.0.0.1'; //localhost

const port = 3000;

//create server
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeaader('Contact-Type','text/plain');
    res.end('Hello world!\n');
});

server.listen(port, hostname, ()=> {
    console.log(`server running at http: \\${hostname} : ${port}/`)
});