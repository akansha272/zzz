const fs = require('fs');
const path = require('path');

const currentDir = process.cwd();
const filePath = path.join(currentDir, 'file.txt');

    fs.writeFile(filePath, 'Hello', (err)=>{
        if(err){
            console.error(err);
            return;
        }
        console.log('File has been written successfully');
        fs.readFile(filePath, 'utf-8', (err, data)=>{
            if(err) {
                console.error(err);
                return;
            }
            console.log('File Content :', data);
        })
    });