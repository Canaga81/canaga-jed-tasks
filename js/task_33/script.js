// A: u r best, milord 👑
let eded = +prompt("Eded Daxil Edin: ");
let sum = 0;
let step = 0

for(i=100; i<1000; i++) {
    if(i % eded === 0) {
        sum += i;
        step++;
    }
}

console.log(sum + " " + step);
