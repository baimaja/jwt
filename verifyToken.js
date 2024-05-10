const jwt = require('jsonwebtoken');
const secretkey ='smktibazma';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMzQsInVzZXJuYW1lIjoiSWJyYWhpbSBKaGkiLCJrZWxhcyI6IlhJIiwiaWF0IjoxNzE0NjMzMDk1fQ.RXIAtXEz0GkD7ZosF3bLJuW25JjOuXrQ2pguFF_uinQ'

jwt.verify(token, secretkey,(err, decoded)=>{
    if(err){
    console.error(err);
    }else{
        console.log('token is valid');
        delete decoded.iat;
        console.log(decoded);
    }
    })