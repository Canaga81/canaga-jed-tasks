const calculate = {

    ed1: 0,
    ed2: 0, 

    read() {

        let eded1 = +prompt("Eded Daxil edin: ");
        let eded2 = +prompt("Eded Daxil edin: ");
        this.ed1 = eded1;
        this.ed2 = eded2;

    },

    sum() {
        console.log(this.ed1 + this.ed2);
    },

    multiply() {
        console.log(this.ed1 * this.ed2);
    },

    divide() {
        console.log(this.ed1 / this.ed2);
    },

    subtract() {
        console.log(this.ed1 - this.ed2);
    }

}

calculate.read();
calculate.sum();
calculate.multiply();
calculate.divide();
calculate.subtract();