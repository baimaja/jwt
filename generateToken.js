const jwt = require('jsonwebtoken');
const secretkey ='smktibazma';
const payload = {userId: 1234, username: "Ibrahim Jhi", kelas: "XI"};


const generateToken = jwt.sign(payload, secretkey);
console.log(generateToken);