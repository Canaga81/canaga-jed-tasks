fetch( 'https://restcountries.com/v3.1/name/azerbaijan' )
    .then( response => response.json() )
    .then( data => {
        const countryDiv = document.getElementById( 'country' );
        countryDiv.innerHTML = `
            <img src="${data.flag}" alt="">
            <p>${data[0]}</p>
            <p></p>
        `
    } )
    
//! Datalari Gormek Olmur,Qarisiq Siralanib :(