//when a user logs in and provides thei password you need to compre the entered password with the stored hash in the database 

const bcrypt = require('bcryptjs');
const storeHash = '$2a$10$y0.ePpWMCSVr8Ri5wu1sHO2pBfjMMLnBNUQhY2GFtPupETGSV3DRy';
const passwordtoComp = 'mypass123';

bcrypt.compare(passwordtoComp, storeHash, (err,isMatch)=>{
    if(err) throw err;

    if(isMatch){
        console.log('Password is Correct');
    }else{
        console.log('Password is incorrect');
    }
});