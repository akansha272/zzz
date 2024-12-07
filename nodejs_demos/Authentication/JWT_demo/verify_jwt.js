//when the client sends JWT token in the Authorization header, ther server verifies the token to authenticate the user
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';
//function to verify the jwt
const verifyToken =(token)=>{
    jwt.verify(token, secretKey, (err,decode)=>{
        if(err){
            console.log('Invalid Token', err);
            return;
        }
        console.log('Decode user data :', decode)
    })
};
//example token(in reality, this comes from a request header)
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJVc2VyMSIsImlhdCI6MTczMzEyNTAyMSwiZXhwIjoxNzMzMTI4NjIxfQ.5s_sP3VLqNBuEfUefijg55L1u7VrFfo89uSv2pG_jY4'
verifyToken(token)