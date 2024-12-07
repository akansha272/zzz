const bcrypt = require('bcryptjs');

const password = 'mypass123';

//generate a salt (round control the complexity)
bcrypt.genSalt(10, (err,salt)=>{
    if(err) console.log(err);
    bcrypt.hash(password, salt,(err,hashedPassword)=>{
        if(err) throw err;
        console.log('Hashed password', hashedPassword);
    });
});