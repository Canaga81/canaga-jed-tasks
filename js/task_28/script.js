let sum = 0

for(let i=100; i<1000; i++) {
    if(i % 3 === 0 && i % 7 === 0) {
        sum += i
    }
}

console.log(sum);