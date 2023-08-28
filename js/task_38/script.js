let eded_1 = +prompt("Eded Daxil Edin: ");
let eded_2 = +prompt("Eded Daxil Edin: ");
let operator = prompt("Operator Daxil Edin: ");

function calc(eded_1, eded_2, operator) {
    switch(operator) {
        case "+":
            console.log(eded_1 + eded_2);
            break;
        case "-":
            console.log(eded_1 - eded_2);
            break
        case "*":
            console.log(eded_1 * eded_2);
            break;
        case "/":
            console.log(eded_1 / eded_2);
            break;
    }
}
calc(eded_1, eded_2, operator);