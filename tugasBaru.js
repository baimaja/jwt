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
const siswaData = [
    {
        fullName: "Ibrahim",
        address: "Tolada City",
        contactNumber: "+62 82210394728"
    },
    {
        fullName: "Ali",
        address: "Jalan Kebon Jeruk",
        contactNumber: "+62 8123456789"
    },
    {
        fullName: "Fatima",
        address: "Jalan Mangga Dua",
        contactNumber: "+62 8123456780"
    },
    {
        fullName: "Ahmed",
        address: "Jalan Melati",
        contactNumber: "+62 8123456781"
    },
    {
        fullName: "Aisha",
        address: "Jalan Mawar",
        contactNumber: "+62 8123456782"
    }
];

// Membuat token pendaftaran libur Lebaran untuk setiap siswa
const registrationTokens = siswaData.map(siswa => {
    return createRegistrationToken(siswa.fullName, siswa.address, siswa.contactNumber);
});

// Cetak token secara teratur
console.log('Registration Tokens:');
registrationTokens.forEach((token, index) => {
    console.log(`Siswa ${index + 1}: ${token}`);
});

// Memverifikasi token pendaftaran libur Lebaran untuk setiap siswa
const decodedRegistrationTokens = registrationTokens.map(token => {
    return verifyRegistrationToken(token);
});

console.log('\nDecoded Registration Tokens:');
decodedRegistrationTokens.forEach((decodedToken, index) => {
    console.log(`Siswa ${index + 1}:`, decodedToken);
});
