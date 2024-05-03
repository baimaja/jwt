const jwt = require('jsonwebtoken');

// Definisikan secretkey
const secretkey = 'your_secret_key_here';

// Fungsi untuk membuat token JWT untuk jadwal kegiatan libur Lebaran
function createActivityScheduleToken(prayerTime, mealTime, familyTime) {
    const scheduleData = { prayerTime, mealTime, familyTime };
    return jwt.sign(scheduleData, secretkey, { expiresIn: '24h' });
}

// Fungsi untuk memverifikasi token JWT jadwal kegiatan libur Lebaran
function verifyActivityScheduleToken(token) {
    try {
        const decoded = jwt.verify(token, secretkey);
        return decoded;
    } catch (err) {
        console.error(err);
        return null;
    }
}

// Data jadwal kegiatan
const activityScheduleData = {
    prayerTime: "07:00 AM",
    mealTime: "12:30 PM",
    familyTime: "05:00 PM"
};

// Membuat token jadwal kegiatan libur Lebaran
const activityScheduleToken = createActivityScheduleToken(
    activityScheduleData.prayerTime,
    activityScheduleData.mealTime,
    activityScheduleData.familyTime
);
console.log('Activity Schedule Token:', activityScheduleToken);

// Memverifikasi token jadwal kegiatan libur Lebaran
const decodedActivityScheduleToken = verifyActivityScheduleToken(activityScheduleToken);
console.log('Decoded Activity Schedule Token:', decodedActivityScheduleToken);
