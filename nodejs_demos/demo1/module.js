const fs = require('fs');
//D:\nodefile.txt
// fs.mkdir('./myfolder', (err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Folder created');
//     }
// })
 

fs.writeFile('./myfolder/nodefile.txt', '', (err)=>{
    if(err) {
        console.log(err);
        return;
    }
    else {
        console.log('File created')
    }
})