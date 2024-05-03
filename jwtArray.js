const jwt = require('jsonwebtoken');
const sKey = 'secret';

function createToken(id, names, grade, address, hobby) {
    const data = { id, names, grade, address, hobby };
    return jwt.sign(data, sKey);
}

const dataSiswa = [{
        id: 1,
        names: 'Ibrahim',
        grade: 'XI SIJA',
        address: 'Ciampea',
        hobby: ['coding', 'Game']
    },
    {
        id: 2,
        names: 'baim',
        grade: 'XI SIJA',
        address: 'Purwokerto',
        hobby: ['Cinema', 'Game']
    },
    {
        id: 3,
        names: 'brayen',
        grade: 'XI SIJA',
        address: 'Purwokerto',
        hobby: ['Cinema', 'Game']
    }
]

const arrTokens = [];

dataSiswa.forEach(siswa => {
  const token = createToken(siswa.id, siswa.names, siswa.grade, siswa.address, siswa.hobby);
  arrTokens.push(token);
});

//lakukan perulangan arrTokens
arrTokens.forEach((token, index) =>{
    console.log(`Siswa dengan id ${index + 1}: menggunakan token: ${token}\n`);
});
