// A: cool 😎
function isvalidnumber(phoneNumber) {
    if (phoneNumber.length === 11 && phoneNumber.charAt(0) === "+7") {
        console.log(true);
    } else {
        console.log(false);
    }
}

// Test

const phoneNumber = "+79123456789";

isvalidnumber(phoneNumber)  // true

//! Yaza Bilmedim :(
