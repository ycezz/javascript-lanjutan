// function init() {
//     // let nama = 'Putri';
//     return function (nama) {
//         console.log(nama);
//     }
//     return tampilNama;
// }
// let panggilNama = init();
// panggilNama('Putri');
// panggilNama('Mila');

// Alasan menggunakan closure

// - Untuk membuat function factories
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Andi');
// selamatMalam('Budi');

// console.dir(selamatMalam);

let add = (function() {
    let counter = 0;
    return function(){
        return ++counter;
    } 
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());