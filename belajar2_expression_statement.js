// membuat variabel
// berikut adalah 2 contoh membuat variabel yang saya coba

// contoh 1
let firstName; 
firstName = "Gilang";

// contoh 2
let lastName = "Cool";

console.log(firstName);
console.log(lastName);


//==========================================Penggunaan expression dan Statement==========================================
// rumusnya adalah "statement = expression"

// contoh 1, yang salah:
// coba hapus tanda "//" pada kode di bawah untuk mengaktifkannya
// let fullName = let lastName;
// salah karena  statement "let fullName" diisi dengan "let lastName" yang merupakan expression

// contoh 2.1, yang benar:
let fullName = (firstName + " " + lastName + " Slebew");
console.log(fullName);
// benar karena statement "let fullName" diisi dengan expression "(firstName + lastName + "Slebew)"

// contoh 2.2:
let fullNameManual = ("Gilang " + "Agung " + "Saputra");
console.log(fullNameManual);
// benar karena statement "fullNameManual" diisi dengan expression ("Gilang" + "Agung" + "Saputra")


// percobaan dengan "const"
// "const" merupakan variabel yang di dalamnya tidak dapat diubah
const nilai = 1000;
console.log(nilai);

// percobaan mengubah isi dari "const nilai"
nilai = 2500;
console.log(nilai);
// kode di atas jika dijalankan akan terjadi error
