// A: excellent ✨
// let str = "Alion";

// let netice = str.replace(str[0], '');

// console.log(netice);

// 3. removeCharacterFromString("Alion","A") -> "lion" . bele bir funksiya yazin, sozden character silme. Alion sozu verdik ve A characteri verdik, sozden A-ni sildi. 

function removeCharacterFromString(soz,herf) {

    return soz.slice(0,soz.indexOf(herf)) + soz.slice(soz.indexOf(herf)+1,soz.length)
    
}

console.log(removeCharacterFromString("Alion","A"));
