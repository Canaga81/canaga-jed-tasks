const carSelect = document.getElementById( 'carSelect' );
const cars = [
    { value: 'audi', text: 'Audi' },
    { value: 'mercedes', text: 'Mercedes' },
    { value: 'BMW', text: 'BMW' },
    { value: 'Lexus', text: 'Lexus' },
    { value: 'Hyundai', text: 'Hyundai' },
    { value: 'Kia', text: 'Kia' },
];

carSelect.addEventListener( 'change', () => {

    const selectValue = carSelect.value;
    const selectedCar = cars.find( ( car ) => car.value === selectValue );
    
    if ( selectedCar ) {
        alert( `Secdiyiniz masinin adi ${ selectedCar.value }` );
    }
    else {
        alert( `Bele bir masin qarajinizda yoxdur ! Kasifff` );
    }
    
} );

//! Suali Tam Olaraq Anlamamisdim deye Chatgpt'den yardim aldim :)