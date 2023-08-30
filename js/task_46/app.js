//! Yol 1

// const existsAndTruthy = () => {

//     const obj = {
//         a:1,
//         b:2,
//         c:null,
//         d:undefined
//     }

//     for(let key in obj) {
//         if(obj[key] === null) {
//             console.log(false);
//         }
//         else if(obj[key] === undefined) {
//             console.log(false);
//         }
//         else {
//             console.log(true);
//         }
        
//     }

// }

// existsAndTruthy()

//! Yol 2

const existsAndTruthy = (obj, propertyName) => {
    if(obj[propertyName]) {
        return true;
    }
    else {
        return false;
    }
}

console.log(existsAndTruthy({a:1,b:2,c:3},'b')); // true
console.log(existsAndTruthy({x:'a',y:null,z:'c'},'y'));  // false (obyektde 'y' var amma falsy-di ona gore false)
console.log(existsAndTruthy({x:'a',b:'b',z:undefined},'z'));  // false  (obyektde 'z' yoxdu ona gore false)