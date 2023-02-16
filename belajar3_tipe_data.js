// ===================tipe data "undifined"===================
let x;
console.log(x);
console.log("tipe data: " + typeof(x)); // output: undefined
console.log("===================================== \n");
// ===========================================================



// ===================tipe data "number"===================
console.log("===================tipe data 'number'===================")
let a = 17;
console.log(a);
console.log("tipe data: " + typeof(a)); // output: number

let b = 17.67;
console.log(b);
console.log("tipe data: " + typeof(b)); // output: number


// percobaan operasi matematika
let c = 200
let d = 10

console.log("\n operator materimatika: +, -, *(kali), /(bagi), **(pangkat), %(modulus/sisa bagi)");
console.log("nilai c=200, nilai d=10 \n")
console.log("hasil c+d= " + (c+d)); // output: 210
console.log("hasil c-d= " + (c-d)); // output: 190
console.log("hasil c*d= " + (c*d)); // output: 2000
console.log("hasil c/d= " + (c/d)); // output: 20
console.log("hasil c**d= " + (c**d)); // 1.024e+23 karena kepanjangan hehe
console.log("hasil c%d= " + (c%d)); // output: 0


// operator increment(++) dan decrement(--)
// operator increment(++): digunakan untuk menambahkan 1 nilai ke variabel
// operator decrement(--): digunakan untuk mengurangi 1 nilai ke variabel
// ada perbedaan hasil ketika operator (++) atau (--) diletakkan di depan atau belakang variabel

console.log("\n operator increment(++) dan decrement(--) di depan atau bagian kiri variabel");
// contoh operator (++) di depan variabel
let e = 12;
console.log("nilai e awal = 12");
console.log("jika menggunakan 'console.log(12++)' maka hasilnya = ");
console.log(e++); // hasil tetap 12, karena dicetak dulu baru ditambahkan 1
// untuk menampilkan hasil akhir maka tulis "console.log(e)"
console.log(e);

// contoh operator (--) di depan variabel
let f = 13;
console.log("nilai f awal = 13");
console.log("jika menggunakan 'console.log(12--)' maka hasilnya = ");
console.log(f--); // hasil tetap 13, karena dicetak dulu baru dikurangi 1
console.log(f)

console.log("\n operator increment(++) dan decrement(--) di belakang atau bagian kanan variabel");
// contoh operator (++) di belakang variabel
let g = 15;
console.log("nilai g awal = 15");
console.log("jika menggunakan 'console.log(++15)' maka hasilnya= ");
console.log(++g); // hasilnya akan 16, karena ditambah 1 dulu baru dicetak

let h = 20;
console.log("nilai h awal = 20");
console.log("jika menggunakan 'console.log(--20)' maka hasilnya = ");
console.log(--h); // hasilnya akan 19, karena dikurang 1 dulu baru dicetak

// BigInt
// BigInt adalah tipe data untuk menyimpan bilangan dengan digit yang besar, contohnya kriptografi
// cara menggunakannya tinggal ditambahkan 'n' di belakang angka, contohnya di bawah ini
console.log("BigInt: ");
const bigInt = 29837529847652948659485648456n;
console.log(bigInt); 

// berikut adalah contoh jika tanpa menggunakan 'n' di belakang angka
console.log("Tanpa menggunakan BigInt ('n' di belakang angka): ");
const nonBigInt = 29837529847652948659485648456;
console.log(nonBigInt);
//masih ada kelanjutannya dari dikoding, jangan lupa dibuat hehehe

console.log("===========================================================");

console.log("\n\n========================Tipe Data String===================================");










