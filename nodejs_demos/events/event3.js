//Let's use the event to listen to file changes, such when file is read or written to
//import fs module
const fs = require('fs');

//fs.createReadStream()-create readable stream from the file
const readStream = fs.createReadStream('example.txt', 'utf8');

//data event is emitted each time a chunk of data is read from the file callback will execute to process that chunk
readStream.on('data', (chunk)=>{
    console.log('new data chunk is received', chunk);
});

//listen for end event, triggered when the file has been fully read
readStream.on('end', ()=>{
    console.log('File Reading Completed !');
});

//listen for error, event which triggered in case of error 
readStream.on('error', (err)=>{
    console.log('Error reading file', err);
});