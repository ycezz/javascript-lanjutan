const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Filter angka >= 3 menggunakan for
// const filteredArray = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     filteredArray.push(angka[i]);
//   }
// }

// console.log(filteredArray); // Output: [8, 9, 9, 4, 3, 2, 9]

// Filter angka >= 3 menggunakan filter()
// const filteredArray = angka.filter(a => a >= 3);
// console.log(filteredArray); // Output: [8, 9, 9, 4, 3, 2, 9]

// map
// kalikan semua angka dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka); // Output: [-2, 16, 18, 2, 8, -10, -8, 6, 4, 18]

// reduce
// jumlahkan seluruh elemen pada array
// 0 -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(newAngka);

// Method Chaining (metod berantai)
// Cari angka >5 
// Kalikan 3
// Jumlahkan
const hasil = angka.filter(a => a > 5) // 8, 9, 9
                .map(a => a * 3) // 24, 27, 27
                .reduce((acc, cur) => acc + cur); // 78
console.log(hasil);