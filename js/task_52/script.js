// A: live legend 🐱‍💻
let str = 'Alion GreenHeart';


function nameFormat(str) {

    let netice = str.replace(str.slice(6, str.length), "G.");

    return netice;

}

console.log(nameFormat(str));
