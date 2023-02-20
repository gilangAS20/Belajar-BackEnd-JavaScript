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

// penggunaan BigInt pada nilai yang kecil
console.log("\n Penggunaan BigInt pada nilai kecil:");

const smallBigInt = 2n;
console.log(smallBigInt);

// Contoh operasi matematika dengan BitInt
console.log("\n Contoh operasi matematika dengan BigInt: ");

const bigIntPertama = 7n;
const bigIntKedua = 2n;
console.log("bigIntPertama bernilai:");
console.log(bigIntPertama);
console.log("bigIntKedua bernilai: ");
console.log(bigIntKedua);

console.log("Hasil tambah: ")
console.log(bigIntPertama + bigIntKedua);
console.log("Hasil kurang: ")
console.log(bigIntPertama - bigIntKedua);
console.log("Hasil kali: ")
console.log(bigIntPertama * bigIntKedua);
console.log("Hasil bagi: ")
console.log(bigIntPertama / bigIntKedua);
console.log("Hasil modulo: ")
console.log(bigIntPertama % bigIntKedua);
console.log("Hasil pangkat: ")
console.log(bigIntPertama ** bigIntKedua);

console.log("===========================================================");

console.log("\n\n========================Tipe Data String===================================");
console.log("String merupakan tipe data berisi teks, dibuat dengan tanda ('   ') atau petik dua ");

console.log("Contohnya: ");
console.log("variabel Nama berisi = 'Gilang'");
let Nama = "Gilang";
console.log("Hasilnya: ");
console.log(Nama);
console.log("tipe datanya: " + typeof(Nama));

// Penggunaan tanda petik bergantian
console.log("\n Tanda petik juga bisa digunakan bergantian, berikut contohnya:");
const kataKata = "Gilang berkata, 'aku akan punya pekerjaan yang santai dan WFA'";
const pernyataan = 'Yosi berkata, "aku akan menjadi programmer yang sukses"';
console.log(kataKata);
console.log(pernyataan);

// Masalah dan solusi untuk tanda petik bergantian
console.log("\n Terdapat masalah ketika tanda petik bergantian");
//console.log('Gilang berkata, "let's do it"');
// kode di atas akan error karena petik paling luar adalah petik 1
// dan di tengah kata terdapat petik 1 lagi, maka petik di tengah dianggap kalimat telah selesai
// sedangkan setelah petik 1 di tengah masih ada kata lagi, berikut adalah solusinya
console.log("Solusinya: \n");

// Solusi 1
console.log("1. Gunakan bentuk petik yang berbeda dengan petik paling luar");
console.log("Gilang berkata, 'Let's do it'");

// Solusi 2
console.log("2. Gunakan tanda backslise sebelum petik di tengah ditambahkan");
console.log('Gilang berkata, "Let\'s do it"');

// String concatenation
console.log("\n Contoh String concatenation: ");

const namaAwal = "Gilang";
const namaTengah = "Agung";
const namaAkhir = "Saputra";
const namaLengkap = namaAwal + namaTengah + namaAkhir;
console.log("namaAwal = 'Gilang', namaTengah = 'Agung', namaAkhir = 'Saputra'");
console.log("Hasil String concatenation: ");
console.log(namaLengkap);

// String Interpolation
// String Interpolation yaitu memasukkan variabel ke template string
console.log("\n Contoh String Interpolation: ");
const namaDepan = "Gilang";
console.log(`variabel namaDepan = ${namaDepan}, hasilnya adalah:`);
console.log(`halo gais nama aku ${namaDepan}`);
// Catatan, untuk melakukan String Interpolation harus pakai tanda (``), bukan ('')

console.log("===========================================================");

console.log("\n\n========================Tipe Data Boolean===================================");
console.log("Boolean tipe data yang cuman punya 2 nilai yaitu 'true' dan 'false'");
console.log("Contoh: ");

let nilaiSatu = true;
let nilaiDua = false;
console.log(`nilaiSatu = ${nilaiSatu}, nilaiDua = ${nilaiDua}`);

console.log(typeof(nilaiSatu));
console.log(typeof(nilaiDua));

// Boolean dapat digunakan untuk melakukan cek kondisi / perbandingan
console.log("\n Contoh perbandingan dengan Boolean: ");
let angkaPertama = 20;
let angkaKedua = 10;
console.log(`variabel 'angkaPertama = 20', 'angkaKedua = 10'`);
console.log("angkaPertama > angkaKedua:");
let perbandinganSatu = angkaPertama > angkaKedua;
console.log(perbandinganSatu);

console.log("angkaPertama < angkaKedua:");
let perbandinganDua = angkaPertama < angkaKedua;
console.log(perbandinganDua);

console.log("===========================================================");

console.log("\n\n========================Tipe Data Null===================================");
// Null adalah tipe data yang mirip dengan undefined, tapi null ini memang diisi ke variabel sebagai null
// sedangkan undefined itu variabel tapi tidak punya isi
console.log("Contoh penggunaan Null: ");
let nilaiAwal = null;
console.log(nilaiAwal);

console.log("===========================================================");

console.log("\n\n========================Tipe Data Symbol===================================");
// Tipe data Symbol berfungsi sebagai identifier yang unik, meskipun isi dari 2 variabel sama,
// jika dicek hasilnya akan 'false'
console.log("Contoh penggunaan Symbol: ");

const idSatu = Symbol("slebew");
const idDua = Symbol("slebew");

console.log(`variabel 'idSatu' adalah Symbol("slebew"), 'idDua' = Symbol("slebew")`);
console.log("Cek apakah hasilnya sama:");
console.log(idSatu == idDua);

console.log("===========================================================");









