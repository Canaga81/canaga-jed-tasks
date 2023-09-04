const number = prompt("Ikireqemli Eded Daxil Edin: ");

console.log(numberToText(number));

function numberToText(number) {

    const firstNum = number[0];
    const secondNum = number[1];

    let firstTextNum = '';
    let secondTextNum = '';

    switch (secondNum) {
        case '0':
            secondTextNum = '';
            break;
        case '1':
            secondTextNum = 'Bir';
            break;
        case '2':
            secondTextNum = 'Iki';
            break;
        case '3':
            secondTextNum = 'Uc';
            break;
        case '4':
            secondTextNum = 'Dord';
            break;
        case '5':
            secondTextNum = 'Bes';
            break;
        case '6':
            secondTextNum = 'Alti';
            break;
        case '7':
            secondTextNum = 'Yeddi';
            break;
        case '8':
            secondTextNum = "Sekkiz";
            break;
        case '9':
            secondTextNum = "Doqquz";
    }

    switch (firstNum) {
        case '1':
            firstTextNum = 'On';
            break;
        case '2':
            firstTextNum = 'Iyirmi';
            break;
        case '3':
            firstTextNum = 'Otuz';
            break;
        case '4':
            firstTextNum = 'Qirx';
            break;
        case '5':
            firstTextNum = 'Elli';
            break;
        case '6':
            firstTextNum = 'Altmis';
            break;
        case '7':
            firstTextNum = 'Yetmis';
            break;
        case '8':
            firstTextNum = 'Seksen';
            break;
        case '9':
            firstTextNum = 'Doxsan';
    }

    return `${firstTextNum} ${secondTextNum}`
}