const jwt = require('jsonwebtoken');

// Definisikan secretkey
const secretkey = 'your_secret_key_here';

// Fungsi untuk membuat token JWT untuk pendaftaran libur Lebaran
function createRegistrationToken(fullName, address, contactNumber) {
    const registrationData = { fullName, address, contactNumber };
    return jwt.sign(registrationData, secretkey, { expiresIn: '24h' });
}

// Fungsi untuk memverifikasi token JWT pendaftaran libur Lebaran
function verifyRegistrationToken(token) {
    try {
        const decoded = jwt.verify(token, secretkey);
        return decoded;
    } catch (err) {
        console.error(err);
        return null;
    }
}

// Data siswa
const siswaData = {
    fullName: "Ibrahim",
    address: "Tolada City",
    contactNumber: "+62 82210394728"
};

// Membuat token pendaftaran libur Lebaran
const registrationToken = createRegistrationToken(siswaData.fullName, siswaData.address, siswaData.contactNumber);
console.log('Registration Token:', registrationToken);

// Memverifikasi token pendaftaran libur Lebaran
const decodedRegistrationToken = verifyRegistrationToken(registrationToken);
console.log('Decoded Registration Token:', decodedRegistrationToken);
