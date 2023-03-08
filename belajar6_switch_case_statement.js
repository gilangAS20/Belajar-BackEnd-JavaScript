// Switch Case Statement
console.log("================Switch Case Statement================ \n\n");

let bahasa = "Indonesia";
let salam = null;

switch (bahasa) {
    case "Inggris":
        salam = "Good Morning!";
        break;
    
    case "Perancis":
        salam = "Bonjour!";
        break;

    case "Indonesia":
        salam = "Selamat Pagi!";
        break;

    case "Jepang":
        salam = "Ohayou Gozaimasu!";
        break;

    default:
        salam = "It's another language, sorry";
}

console.log(salam);
