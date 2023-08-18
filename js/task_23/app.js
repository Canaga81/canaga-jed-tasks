let height = prompt("Boy Ölçünüzü Yaziniz(metr): ");
let weight = prompt("Çəkinizi Yaziniz(kg): ");

let calculator = weight / (height ** 2);


if(calculator < 18.5) {
    console.log("Ariqdir !");
}
else if(calculator < 25) {
    console.log("Normal Beden Olcusune Sahibdir !");
}
else if(calculator < 30) {
    console.log("Kokdur !");
}
else {
    console.log("Obezdir !");
}