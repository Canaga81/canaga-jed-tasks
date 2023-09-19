/* Object */

/* Object => Melumatlarin toplu sekilde verilmesidir. Bunun sayesinde web saytlarda esasen Back-End terefde api-lerin yaradilmasinda 
istifade olunur */

const obj = {
    a: 1,
    b: 2,
    c: 3
};

/* Bu Kod meselesinde gorduyumuz kimi obj constla teyin edilib. Let ile'de teyin edile biler eger basqa yerde istifade olunduqda bezi
problemler cixacaqdir. Burda 'a' key'idir. 1 ise key'e daxil olan melumatlari bildirir. Bunu kodu esasen sebetlerin yaradilmasinda gore bilerik.
Obyektlerde hemde this deye funksiyada var. Obyekt icinde yazilan kodu tapmaq ucun this'den istifade edilir */

var user = {
    firstName: "Ali",
    lastName: "Nemet",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log( user.fullName() ); // "John Doe"


/* Function */

/* Function => Kodlarin bir araya yigilmasinda istifade olunur.Kod tekrarinin qarsini almaq ucun lazimdir.Meselen eger bir Web Sitede 6 yerde 
calculator yazmaliyiqsa ve bunu functionla yazmasaq bu hemenki kodu 6 defe tekrar yazmaq mecburiyyetinde qalacayiq. Bu da kodda qarisiqliq yaradar
ve developerin vaxtini cox aparacaqdir. Ancaq bu kod parcasi sayesinde sadece teyin edici kodu 6 yere yazmaqla (yeni calculatorun kodunun hamisini
yazmamaqla) qisa sekilde yazmaq olar. Meselen: */

function sum () {
    let a = 10;
    let b = 15;

    let sum = a + b;

    return sum;
}

console.log( sum() );

const kalem = () => {
    let a = 10;
    let b = 15;

    let sum = a + b;

    return sum;
};
kalem();

function create () {
    let a = 10;
    let b = 15;

    let sum = a + b;

    return sum;
}

create();

// Arrow Function'dur bu

back = (a, b) => {

    let sum = a + b;

    return sum;
}
    
console.log(back(10, 15, sum));


/* Heap / Stack */

/* Stack muveqqeti melumatlari burda saxlanilir.Ancaq Heap'da Boyuk Melumatlar saxlanilir. Heap'la Stack'in arasindaki ferqler: */

/* Bu stack'dir.Cunki bu beraberdir */;

let a = 5;
let b = a;

/* Bu heap'dir cunki bele yazilanda beraber olmaz. */

let c = 5;
let d = 5;


/* Font Case Defination */

/* Upper Case (Boyuk Herf) => Herf'leri boyudur. */
"HELLO WORLD"
/* Lower Case (Kiçik Herf) => Herf'leri kicildir. */
"hello world"
/* Title Case (Başlık Herfi) => Her kelimenin ilk olan herflerini boyudur. */
"The Quick Brown Fox"
/* Sentence Case (Cümlenin Başlangıc Herfi) => Cumlenin basindaki olan herfi boyudur. */
"The quick brown fox"
/* Camel Case => Her sozun herfini boyuk sekilde yazir ve arada hec bir bosluq vermir. Ilk'de yaranan herfi boyutmur. */
"camelCaseExample"
/* Pascal Case => Camel Case'ye benzeyir ancaq cumlede en basta olan herfi boyuk edir. */
"PascalCaseExample"