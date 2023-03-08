// ================If Else Statement================
console.log("================If Else Statement================ \n\n");
// If-Else Statement berfungsi untuk mengambil sebuah keputusan berdasarkan kondisi tertentu



// Contoh 1
console.log("Contoh 1 : \n");

let isRain = true;
console.log("Persiapan sebelum berangkat aktivitas \n");
console.log("Apakah hujan? ", isRain);

if (isRain) {
    console.log("Bawa payung atau jas hujan");
}
else {
    console.log("Tidak perlu bawa payung, tapi untuk jaga-jaga oke saja")
}
console.log("Hati-hati di jalan ya \n\n");



// Contoh 2
console.log("Contoh 2 : \n");
let nilai = 65;
console.log("Nilai Anda adalah ", nilai);

if (nilai >= 70){
    console.log("Selamat!, Anda lulus dengan nilai "+ nilai +", aman kok");
}
else if (nilai >= 65) {
    console.log("Anda lulus dengan nilai "+ nilai +", namun baiknya ikut remidi");
}
else{
    console.log("Maaf Anda tidak lulus, nilai Anda "+ nilai +", jangan lupa ikut remidi ya");
}

console.log("\n");



// Contoh 3
console.log("Contoh 3 : \n");

let language = "Indonesia";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
} else if(language == "Indonesia") {
  	greeting
}

console.log(greeting);
console.log("\n");



// Contoh 4 (Truthy & Falsy)
console.log("Contoh 4 (Truthly & Falsy) : \n");
let nama = "Gilang";

if (nama) {
    console.log(`Halo, nama kamu adalah ${nama}`);
}
else {
    console.log("Wah nama kamu belum diisi nih!")
}