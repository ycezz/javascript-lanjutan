// Cara untuk membuat Object pada javascript
// 1. Object Literal
// PROBLEM: tidak efektif untuk object yang banyak.
// let mahasiswa = {
//     nama : 'Putri',
//     energy: 10,
//     makan: function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
// }

// let mahasiswa2 = {
//     nama : 'Jiji',
//     energy: 20,
//     makan: function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
// }

// 2. Function Declaration

// const methodMahasiswa = {

//     makan: function(porsi) {
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },

//     main: function (jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, selamat main!`);
//     },

//     tidur: function(jam) {
//         this.energy += jam *2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// };
// function Mahasiswa(nama, energy) {
//     let mahasiswa = {}
//         mahasiswa.nama = nama;
//         mahasiswa.energy = energy;
//         mahasiswa.makan = methodMahasiswa.makan;
//         mahasiswa.main = methodMahasiswa.main;
//         mahasiswa.tidur = methodMahasiswa.tidur;

//         return mahasiswa;
// }

// let putri = Mahasiswa('Putri', 10);
// let Jiji = Mahasiswa('Jiji', 12);


// 3. Constructor Function 
// keyword new
// function Mahasiswa(nama, energy) {
//         this.nama = nama;
//         this.energy = energy;

//         this.makan = function(porsi) {
//             this.energy += porsi;
//             console.log(`Halo ${this.nama}, selamat makan!`)
//         };

//         this.main = function (jam) {
//             this.energy -= jam;
//             console.log(`Halo ${this.nama}, selamat main!`)
//         }
// }

// Constructor function versi prototype inheritance
// function Mahasiswa(nama, energy) {
//         this.nama = nama;
//         this.energy = energy;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energy += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// };

// Mahasiswa.prototype.main = function (jam) {
//     this.energy -= jam;
//     return `Halo ${this.nama}, selamat main!`;
// };

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energy += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
// };

// let putri = new Mahasiswa('Putri', 10);

// versi Class
// class Mahasiswa {
//     constructor(nama, energy) {
//         this.nama = nama;
//         this.energy = energy;
//     }

//     makan(porsi) {
//         this.energy += porsi;
//         return `Halo ${this.nama}, selamat makan!`;
//     }

//     main(jam) {
//         this.energy -= jam;
//         return `Halo ${this.nama}, selamat main!`;
//     }

//     tidur(jam) {
//         this.energy += jam * 2;
//         return `Halo ${this.nama}, selamat tidur!`;
//     }
// }

// let putri = new Mahasiswa('Putri', 10);
// let jiji = new Mahasiswa('Jiji', 12);


// 4. Object.create
// function Mahasiswa(nama, energy) {
//     let mahasiswa = Object.create(methodMahasiswa);
//         mahasiswa.nama = nama;
//         mahasiswa.energy = energy;

//         return mahasiswa;
// }

// let putri = Mahasiswa('Putri', 10);
// let Jiji = Mahasiswa('Jiji', 12);


