// ======================Operator===========================
console.log("======================Operator===========================")

// 1. Assignment Operator
console.log("1. Assignment Operator \n")
// Assignment operator adalah operator untuk melakukan inisialisasi
// contoh: x = y, maka variabel "x" akan bernilai "y"

let x = 20;
let y = 45;

console.log("Nilai x adalah "+ x);
console.log("Nilai y adalah " + y);
x += y; // kode di samping sama dengan x = x + y
console.log("Nilai x sekarang adalah " + x);
console.log(x+" Slebew");

let a = 10;
let b = 5;
console.log("Nilai a adalah " + a);
console.log("Nilai b adalah " + b);

let tambah = (a += b);
console.log("Nilai (a +=b ) adalah " + tambah);

let kurang = (a -= b);
console.log("Nilai (a -= b) adalah " + kurang);

let kali = (a *= b);
console.log("Nilai (a *= b) adalah " + kali);

let bagi = (a /= b);
console.log("Nilai (a /= b) adalah " + bagi);

let modulo = (a %= b);
console.log("Nilai (a %= b) adalah " + modulo);

console.log("================================================= \n");

// 2. Comparison Operator
console.log("2. Comparison Operator");
// terdapat beberapa operator untuk perbandingan, yaitu:
// (==) untuk membandingkan kedua nilai apakah sama (namun tidak identik)
// (!=) untuk membandingkan kedua nilai apakah tidak sama (namun tidak identik)
// (===) untuk membandingkan kedua nilai apakah sama (namun identik), kedua nilai dan tipe data juga sama
// (!==) untuk membandingkan kedua nilai apakah tidak identik
// (>) untuk membandingkan apakah nilai pertama lebih besar dari nilai kedua
// (>=) untuk membandingkan apakah nilai pertama lebih besar atau sama dengan nilai kedua
// (<) untuk membandingkan apakah nilai pertama lebih kecil dari nilai kedua
// (<=) untuk membandingkan apakah nilai pertama lebih kecil atau sama dengan nilai kedua

let nilaiSatu = 10;
let nilaiDua = 12;
console.log("Nilai dari variabel 'nilaiSatu' = ", nilaiSatu);
console.log("Nilai dari variabel 'nilaiDua' = ", nilaiDua);
console.log("");
console.log("Apakah nilaiSatu == nilaiDua? ", nilaiSatu == nilaiDua);
console.log("Apakah nilaiSatu != nilaiDua? ", nilaiSatu != nilaiDua);
console.log("Apakah nilaiSatu === nilaiDua? ", nilaiSatu === nilaiDua);
console.log("Apakah nilaiSatu !== nilaiDua? ", nilaiSatu !== nilaiDua);
console.log("Apakah nilaiSatu > nilaiDua? ", nilaiSatu > nilaiDua);
console.log("Apakah nilaiSatu >= nilaiDua? ", nilaiSatu >= nilaiDua);
console.log("Apakah nilaiSatu < nilaiDua? ", nilaiSatu < nilaiDua);
console.log("Apakah nilaiSatu <= nilaiDua? ", nilaiSatu <= nilaiDua);
console.log("");

let sebuahString = '10';
let sebuahNumber = 10;
console.log("Nilai dari variabel 'sebuahString' = ", sebuahString);
console.log("Nilai dari variabel 'sebuahNumber' = ", sebuahNumber);
console.log("");
console.log("Apakah sebuahString == sebuahNumber? ", sebuahString == sebuahNumber);
console.log("Apakah sebuahString === sebuahNumber? ", sebuahString === sebuahNumber);
console.log("variabel 'sebuahString' dan 'sebuahNumber' memiliki tipe data beda, meskipun isinya sama")
console.log("");

let sebuahString2 = '10';
let sebuahString3 = '10';
console.log("Nilai dari variabel 'sebuahString2' = ", sebuahString2);
console.log("Nilai dari variabel 'sebuahString3' = ", sebuahString3);
console.log("");
console.log("Apakah sebuahString2 == sebuahString3? ", sebuahString2 == sebuahString3);
console.log("Apakah sebuahString2 === sebuahString3? ", sebuahString2 === sebuahString3);
console.log("variabel 'sebuahString2' dan 'sebuahString3' memiliki tipe data dan nilai yang sama")

console.log("================================================= \n");

// 2. Logical Operator
console.log("2. Logical Operator");
// terdapat beberapa operator untuk melakukan operasi logika, yaitu:
// (&&) untuk operasi AND, jika kedua nilai bernilai true, maka hasil akan dikembalikan true
// (||) untuk operasi OR, jika salah satu bernilai true, maka hasil akan dikembalikan true
// (1) untuk operasi NOT, jika bernilai true, maka hasil akan dikembalikan false, dan sebaliknya

let nilaiTiga = 10;
let nilaiEmpat = 12;
console.log("");
console.log("Nilai variabel 'nilaiTiga' = ", nilaiTiga);
console.log("Nilai variabel 'nilaiEmpat' = ", nilaiEmpat);
console.log("");

console.log("=Operator 'AND'=");
console.log("Apakah nilaiTiga == 10 && nilaiEmpat == 12? ", nilaiTiga == 10 && nilaiEmpat == 12);
console.log("Apakah nilaiTiga > nilaiEmpat && nilaiTiga < nilaiEmpat? ", nilaiTiga > nilaiEmpat && nilaiTiga < nilaiEmpat); // bernilai false karena kedua perbandingan tidak memenuhi syarat 'AND'
console.log("Apakah nilaiTiga > 1 && nilaiEmpat > 1? ", nilaiTiga > 1 && nilaiEmpat > 1); // bernilai true karena kedua perbandingan memenuhi syarat 'AND'
console.log("");

console.log("=Operator 'OR'=");
console.log("Apakah nilaiTiga == 10 || nilaiEmpat == 13? ", nilaiTiga == 10 || nilaiEmpat == 13); // bernilai true karena salah satu memenuhi nilai true dalam operasi 'OR'
console.log("");

console.log("=Operator 'NOT'=");
console.log("Apakah nilaiTiga tidak < 9 ?", !(nilaiTiga < 9)); // jawabannya true, karena kebalikan dari false (nilaiTiga tidak < 9)
console.log("Apakah tidak(nilaiTiga > 1 && nilaiTiga < 20)? ", !(nilaiTiga > 1 && nilaiTiga < 20)); // bernilai false keduanya bernilai true tapi diberi tanda (!) artinya kebalikannya



