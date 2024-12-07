const jwt = require('jsonwebtoken');

//user data
const user = {id:1, username:"User1"};

//secret key used to sign the jwt
const secretKey = 'your-secret-key';

const token = jwt.sign({id:user.id, username:user.username},secretKey,{expiresIn:'1h'})

console.log(token);