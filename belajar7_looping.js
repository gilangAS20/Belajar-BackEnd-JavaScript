//===========Looping================
console.log("================Looping================ \n\n");


// Contoh Looping dengan "For"
console.log("Contoh Looping dengan 'For'");
let nilai = 0;
for (nilai; nilai < 10; nilai++) 
{
    console.log(nilai);
}

console.log("\n")
// Contoh Looping dengan "For of"
console.log("Contoh Looping dengan 'For of'");
let myArray = ["gilang", "agung", "saputra", "anjay", "meledak", "bummmm"];
for (const arrayItem of myArray) 
{
    console.log(arrayItem);
}

console.log("\n");
// Contoh Looping dengan "While" dan "Do While"
console.log("Contoh looping dengan 'While' dan 'Do While'");
console.log("  While");
let angka = 0;
while(angka <= 10)
{
    console.log("nilai:", angka);
    angka++;
}

console.log("\n");

console.log("  Do While"); // kalo do while, dia dijalankan setidaknya 1x sblm cek kondisi boolean-nya
let angkaDua = 0;
do
{
    console.log("nilai", angkaDua);
    angkaDua++;
}
while(angkaDua >= 10); // variabel 'angkaDua' bernilai 0, tapi kondisi while di angkaDua >=10, jadi gak akan masuk loop tapi tetap dijalankan 1x

