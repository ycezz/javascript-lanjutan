// Function Expression
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Putri'));


// Arrow Function
// const tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// }
// console.log('mila');

// const tampilNama = (nama, waktu) => {
//     return `Halo, ${nama}! Selamat ${waktu}!`;
// }
// console.log(tampilNama('Putri', 'Malam'));

// Implisit return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('mila'));

// Tanpa parameter
// const tampilNama = () => 'Hello world';
// console.log(tampilNama());

let mahasiswa = ['Putri', 'Mila', 'Jiji', 'Herman'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });

// console.log(jumlahHuruf);

// menggunakan arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);

// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({ nama, jumlahHuruf: nama.length }));
console.table(jumlahHuruf);