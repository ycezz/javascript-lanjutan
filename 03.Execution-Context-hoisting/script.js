// Execution Context, Hoisting & Scope

// var nama = 'putri';
// console.log(nama);


// creation phase pada Global Context
// nama var = undefined
// nama function fn()
// hoisting
// window = global object
// this = window

// execution  phase

// console.log(sayHello());

// var nama = 'Putri';
// var umur = 32;

// function sayHello(){
//     return `Halo, nama saya ${nama}, saya ${umur} tahun. `;
// }

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = 'Putri Mila';
// var username = '@putrimiila';

// function cetakURL(){
//     console.log(arguments[0]);
//     var instagramURL = 'http://instagram.com';
//     return instagramURL + username;
// }

// console.log(cetakURL('@jiji'));


function satu() {
    var nama = 'Putri';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Jiji';
satu();
dua('Doddy');
console.log(nama);

// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }

//         c();
//     }

//     b();
// }

// a();