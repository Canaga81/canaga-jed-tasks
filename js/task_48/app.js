//! Car constructor-u yaradin. Biz hemin constructor-u cagiranda onun modelini, 
//! istehsal ilini, sahibini verek. Ve elbette, masinin surmek, tormozlamaq kimi 
//! methodlari olmalidir ki, onlari da verin. Meselen, surmek methodunu cagirsam ekrana,  
//! ali zapi markali masinina qaz verir. 

const car = {

    model:'',
    year:0,
    owner:'',

    carInformation() {

        let model = prompt("Masinin Modelini daxil edin: ");
        let year = +prompt("Masinin ilini daxil edin: ");
        let owner = prompt("Masinin Sahibinin Ad ve Soyadini daxil edin: ");
        
        this.model = model;
        this.year = year;
        this.owner = owner;
        
    },

    drive() {
        console.log(`${this.owner} ${this.model} markali masinina qaz verir`);
    },

    brake() {
        console.log(`${this.owner} ${this.model} markali masinina tormoz verir`);
    }

}

car.carInformation();
car.drive();
car.brake();