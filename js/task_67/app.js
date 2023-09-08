let array = [
    [50, 60, 60, 60, 70, 60, 60, 60, 90, 60, 60, 70],
    [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
    [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
    [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
];

let rub = +prompt('1, 2, 3 ve ya 4-cu rubu daxil edin: ');
let sum3 = [];

for (let i = 0; i < array.length; i++) {
    
    let sum = 0;

    if (rub === 1) {
        b = array[i].splice(0, 3);
    }
    else if (rub === 2) {
        b = array[i].splice(3, 3);
    }
    else if (rub === 3) {
        b = array[i].splice(6, 3);
    }
    else if (rub === 4) {
        b = array[i].splice(9, 3);
    }
    else {
        alert("Duzgun Reqem Daxil Edin !");
    }

    for (let j = 0; j < b.length; j++) {

        sum += b[j];

    }

    sum3.push(sum);

}

switch (rub) {

    case 1:
        for (let i = 0; i < sum3.length; i++) {
            console.log(`Isci Sirasi ${i + 1}. Rub ${rub}. Rub Uzre Iscinin Umumi Maasi ${sum3[i]}`);
        }
        break;
    case 2:
        for (let i = 0; i < sum3.length; i++) {
            console.log(`Isci Sirasi ${i + 1}. Rub ${rub}. Rub Uzre Iscinin Umumi Maasi ${sum3[i]}`);
        }
        break;
    case 3:
        for (let i = 0; i < sum3.length; i++) {
            console.log(`Isci Sirasi ${i + 1}. Rub ${rub}. Rub Uzre Iscinin Umumi Maasi ${sum3[i]}`);
        }
        break;
    case 4:
        for (let i = 0; i < sum3.length; i++) {
            console.log(`Isci Sirasi ${i + 1}. Rub ${rub}. Rub Uzre Iscinin Umumi Maasi ${sum3[i]}`);
        }
        break;
    default:
        console.log('Bele Reqem Daxil Etmeyin !');
        break;

}