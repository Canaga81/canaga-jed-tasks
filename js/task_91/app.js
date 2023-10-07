const country = document.getElementById( "country" );


fetch( 'https://restcountries.com/v3.1/name/azerbaijan' )
    .then( response => response.json() )
    .then( data => {
        const myData = data[0];
        console.log( myData );

        country.innerHTML = `
            <img src="${myData.flags.png}" alt="">
            <p>${ myData.name.common }</p>
            <p>${myData.continents[0]}</p>
            <p>${myData.area}</p>
            <p>${myData.fifa}</p>
            <p>${myData.region}</p>
            <p>${myData.capital}</p>
            <img src="${myData.coatOfArms.png}" alt="">
        `;
        
    } )
    .catch( ( error ) => console.log( error ) );

//! Datalari Gormek Olmur,Qarisiq Siralanib :(