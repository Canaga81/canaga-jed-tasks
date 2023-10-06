const randomFack = document.getElementById( 'randomFack' );
const container = document.getElementById( 'container' );

randomFack.addEventListener( 'click', getRandomFact );

function getRandomFact () {
    fetch( 'https://catfact.ninja/fact' )
        .then( response => response.json() )
        .then( data => {
            container.innerHTML = `
                <p>${data.fact}</p>
            `
        } )
    
    .catch(error => console.error('Xeta Oldu: ' + error))
}