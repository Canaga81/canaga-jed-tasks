let a = +prompt("Reqem Yaziniz: ");
let b = +prompt("Reqem Yaziniz: ");
let c = +prompt("Reqem Yaziniz: ");


// console.log(Math.max(a,b,c));

if(a>b) {
    if(a>c) {
        console.log(`En Boyuyu ${a}`);
    }
}
else if(b>a) {
    if(b>c) {
        console.log(`En Boyuyu ${b}`);
    }
}
else if(c>a) {
    if(c>b) {
        console.log(`En Boyuyu ${c}`);
    }
}
else {
    console.log("Reqemler Tam Verilmeyib !");
}