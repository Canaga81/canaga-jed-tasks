function money() {
    let rubl = +prompt("Pul birimi olaraq Rubl Daxil Edin: ");
    let dollar = +prompt("Pul birimi olaraq Dollar $ Daxil Edin: ");

    let cevDollar = dollar * 75;

    let sum = rubl + cevDollar;

    console.log(sum);
}

money();