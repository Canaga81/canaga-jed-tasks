// A: cool 😎
let eded = +prompt("Eded Daxil Edin: ");
let onluq = Math.floor(eded/10) * 10;
let teklik = eded % 10;

console.log(getnum(onluq) + " " + getnum(teklik));

function getnum(eded) {
    switch(eded) {
        case 0:
            return "sifir"
        case 1:
            return "bir"
        case 2:
            return "iki"
        case 3:
            return "uc"
        case 4:
            return "dord"
        case 5:
            return "bes"
        case 6:
            return "alti"
        case 7:
            return "yeddi"
        case 8:
            return "sekkiz"
        case 9:
            return "doqquz"
        case 10:
            return "on"
        case 20:
            return "iyirmi"
        case 30:
            return "otuz"
        case 40:
            return "qirx"
        case 50:
            return "elli"
        case 60:
            return "altmis"
        case 70:
            return "yetmis"
        case 80:
            return "seksen"
        case 90:
            return "doxsan"
    }
}
