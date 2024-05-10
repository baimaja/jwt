const jwt = require('jsonwebtoken');

// Definisikan secretkey
const secretkey = 'smktibazma';

function createToken(name, classes, address, hobby){
    const data = {name, classes, address, hobby};
    return jwt.sign(data, secretkey);
}

function verify(token){
    try {
        const decoded = jwt.verify(token, secretkey);
        delete decoded.iat;
        return decoded;
    } catch (err) {
        console.error(err);
        return null;
    }
}

const siswa = {
    name: "ibrahim",
    classes:"XI",
    address:"tolada city",
    hobby: ["coding php", "coding js", "coding express"]
}

//membuat token siswa
const token = createToken(
    siswa.name,
    siswa.classes,
     siswa.address,
      siswa.hobby

)
console.log('token:', token)

//veerify token
const decodedSiswa = verify(token);
console.log('decodedSiswa:', decodedSiswa);
