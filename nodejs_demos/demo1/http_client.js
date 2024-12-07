var http = require('http');
var options = {
    host: 'localhost', port: '8081', path: '/test.html'
};
var callback = function(response){ 
    var body = '';
    response.on('data', function(data){
        body += data;
    });
    response.on('end',function(){
        console.log(body);
    });
    response.on('error',(error)=>{
        console.log(error);
    });
};

var req = http_request(options,callback);