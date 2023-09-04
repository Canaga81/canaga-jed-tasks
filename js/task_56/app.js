//! 1.İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin. Bu rəqəmi üçrəqəmli olana qədər, 7 artırın. Son dəyəri konsola çıxarın.

let userNumber = +prompt("Iki Reqemli Eded Daxil Edin: ");

while(userNumber < 100 || userNumber > 999) { //! <==
    userNumber += 7;
}

console.log(userNumber);


//! Chatgpt'den komek aldim ancaq isareledigim yerin mentiqini tutmadim :| 