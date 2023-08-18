//! If ve Else ile duzeldilen Calculator
// A: 
let num_1 = +prompt("1'ci Reqem: ");
let num_2 = +prompt("2'ci Reqem: ");
let operator = prompt(`Operatorlar:
+. Cem
-. Ferq
*. Hasil
/. Qismet`);

if(operator === "+") {
    console.log(num_1 + num_2);
}
else if(operator === "-") {
    console.log(num_1 - num_2);
}
else if(operator === "*") {
    console.log(num_1 * num_2);
}
else if(operator === "/") {
    console.log(num_1 / num_2);
}
else {
    console.log("Bele Isare Yoxdur !");
}

//! Switch Case ile duzeldilen Calculator

// let num_1 = +prompt("1'ci Reqem: ");
// let num_2 = +prompt("2'ci Reqem: ");
// let operator = prompt(`Operatorlar:
// +. Cem
// -. Ferq
// *. Hasil
// /. Qismet`);

// switch(operator) {
//     case "+":
//         console.log(num_1 + num_2);
//         break;
//     case "-":
//         console.log(num_1 - num_2);
//         break;
//     case "*":
//         console.log(num_1 * num_2);
//         break;
//     case "/":
//         console.log(num_1 / num_2);
//         break;
//     default:
//         console.log("Bele bir Isare Yoxdur !");
// }
