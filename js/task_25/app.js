//! Yontem 1

// let cins = prompt("Cins olaraq k(Kisi) ve ya q(Qadin) Yaziniz: ");
// let ad = prompt("Adinizi Yaziniz: ");


// function formal(cins, ad) {
//     if(cins === 'k' || cins === "K") {
//         console.log(`Salam cenab ${ad}`);
//     }
//     else if(cins === 'q' || cins === "Q") {
//         console.log(`Salam xanim ${ad}`);
//     }
//     else {
//         console.log(`Azerbaycanda bele bir cins yoxdur !`);
//     }
// }


// formal(cins, ad);



//! Yontem 2

let cins = prompt("Cins olaraq k(Kisi) ve ya q(Qadin) Yaziniz: ");
let ad = prompt("Adinizi Yaziniz: ");


function makeFormal(cins){

    if(cins === 'K'  || cins === 'k') {
        return (ad) => {
            console.log(`Salam cenab ${ad}`);
        }
    }
    else if(cins === 'Q' || cins === 'q') {
        return (ad) => {
            console.log(`Salam xanim ${ad}`);
        }
    }
    else {
        console.log(`Azerbaycanda bu cins yoxdur`);
    }

}


const forPerson = makeFormal(cins);

forPerson(ad);


//! Muellim ozum etmemisem, videodan baxib bezi deyisiklikler etmisem :)