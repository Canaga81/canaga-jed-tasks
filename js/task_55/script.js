//! 4. verify gmail address. (gmail addressleri sonu @gmail.com ile bitmelidir, ve ondan evvel en azi 5 simvol olmalidir. abcdf@gmail.com meselen)

let user = prompt('Emailnizi Daxil Edin: ');

if(user.length < 15 || user.endsWith('@gmail.com') === false) {
    console.log(false);
}
else {
    console.log(true);
}