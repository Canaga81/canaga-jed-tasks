const existsAndTruthy = () => {

    const obj = {
        a:1,
        b:2,
        c:null,
        d:undefined
    }

    for(let key in obj) {
        if(obj[key] === null) {
            console.log(false);
        }
        else if(obj[key] === undefined) {
            console.log(false);
        }
        else {
            console.log(true);
        }
        
    }

}

existsAndTruthy()