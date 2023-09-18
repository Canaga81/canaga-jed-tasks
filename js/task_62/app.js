// A: excellent ✨
//! 8.Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın. 
//! Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.

function isvalidNumber(number) {
    if(number.length === 12) {
        if(number.startsWith('+7') ) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

console.log(isvalidNumber('+71234567890'));
// console.log(isvalidNumber('+71234567895'));
// console.log(isvalidNumber('71234567895'));
// console.log(isvalidNumber('+51234567895'));
