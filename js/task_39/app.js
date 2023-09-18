// A: done as 🐉
let eded = +prompt("Eded Daxil Edin: ");

function isLucky(eded) {

    let sonEded = eded % 10;
    eded = Math.floor(eded / 10);

    let besinciEded = eded % 10;
    eded = Math.floor(eded / 10);

    let dorduncuEded = eded % 10;
    eded = Math.floor(eded / 10);

    let ucuncuEded = eded % 10;
    eded = Math.floor(eded / 10);

    let ikinciEded = eded % 10;
    eded = Math.floor(eded / 10);

    let birinciEded = eded % 10;
    eded = Math.floor(eded / 10);


    if (sonEded + besinciEded + dorduncuEded === ucuncuEded + ikinciEded + birinciEded) {
        console.log(true);
    }
    else {
        console.log(false);
    }

}

isLucky(eded);
