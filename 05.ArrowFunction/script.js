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

// let mahasiswa = ['Putri', 'Mila', 'Jiji', 'Herman'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });

// console.log(jumlahHuruf);

// menggunakan arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);

// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({ nama, jumlahHuruf: nama.length }));
// console.table(jumlahHuruf);

// Konsep this pada Arrow function
// Constructor function
// const Mahasiswa = function() {
//     this.nama = 'Putri';
//     this.umur = 32;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const Putri = new Mahasiswa();

// Arrow function
// const Mahasiswa = function() {
//     this.nama = 'Putri';
//     this.umur = 32;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const Putri = new Mahasiswa();

// Object literal
// const mhs1 = {
//     nama: 'Putri',
//     umur: 32,
//     sayHello: () => {
//         // console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//         console.log(this);
//     }
// }

// const Mahasiswa = function() {
//     this.nama = 'Putri';
//     this.umur = 32;
//     this.sayHello =  function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }

// const Putri = new Mahasiswa();


const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle('size');
    setTimeout(() => {
        this.classList.toggle('caption');
    }, 600);
})








