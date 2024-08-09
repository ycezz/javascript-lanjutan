// Destructuring Variables / Assignment

// Destructuring Array
// const perkenalan = ['Halo', 'nama', 'saya', 'Putri'];

// skip items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//     return [1, 2];
// }

// const [a, b]= coba();
// console.log(a);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);


// Destructuring Object
// const mhs = {
//     nama : 'Putri',
//     umur : 32
// }

// const {nama, umur} = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object
// ({ nama, umur } = { nama : 'Putri', umur : 32 });

// console.log(nama);

// Assign ke variabel baru
// const mhs = {
//     nama : 'Putri',
//     umur : 32
// }

// const { nama: n, umur: u } = mhs;
// console.log(u);

// Memberikan Default Value
// const mhs = {
//     nama : 'Putri',
//     umur : 32,
//     email: 'putri@example.com'
// }

// const { nama, umur, email = 'email@example.com' } = mhs;
// console.log(email);

// Memberi nilai default + assign ke variabel baru
// const mhs = {
//     nama : 'Putri',
//     umur : 32,
//     email: 'putri@example.com'
// }

// const { nama: n, umur: u, email: e = 'email@example.com' } = mhs;
// console.log(e);

// Rest Parameter
// const mhs = {
//     nama : 'Putri',
//     umur : 32,
//     email: 'putri@example.com'
// }

// const { nama, ...value } = mhs;
// console.log(value);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//     id: 123,
//     nama : 'Putri',
//     umur : 32,
//     email: 'putri@example.com'
// }

// function getIdMhs({ id, nama }) {
//     return nama;
// }
// console.log(getIdMhs(mhs));

// Destructuring function

// function penjumlahanPerkalian(a, b) {
//     return [a + b, a * b];
// }

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a /b];
// }

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);
// console.log(bagi);

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);

// console.log(kurang);

// Destructuring function arguments
const mhs1 = {
    nama: 'Putri',
    umur: 32,
    email: 'putri@example.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 90
    }
}

// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));

function cetakMhs({ nama, umur, nilai: {tugas, uts, uas} }) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));

