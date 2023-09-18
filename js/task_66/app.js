// A: cool 😎
//! Yol-1

function multiply(arr) {

    let hasil = 1;

    for(const reqem of arr) {

        hasil *= reqem;

    }

    return hasil;

}

console.log(multiply([1, 2, 3]));
console.log(multiply([1, 2, 3, 6, 3, 9]));

//! Yol-2

// function multiply(arr) {

//     let hasil = 1;

//     for(let i=0; i<arr.length; i++) {

//         hasil *= arr[i];

//     }

//     return hasil;

// }

// console.log(multiply([1, 2, 3]));
// console.log(multiply([1, 2, 3, 6, 3, 9]));
