const http = require('http');

const requestListener = ((req,res)=>{
    res.writeHead(200,{'Content-Type':'textplain'});
    res.end('Hello');
});

const server = http.createServer(requestListener);

server.listen(3000, ()=>{
    console.log(`server is running on port 3000 `)
})
