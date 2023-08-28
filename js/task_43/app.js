let metn = "Paris cox gozel seherdir";

let metnArr = metn.split('');
let sum = 0;

metnArr.forEach((herf) => {
    if((/[a-zA-Z0-9]/).test(herf)) {
        sum += 1;
    }
});

console.log(sum);