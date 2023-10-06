fetch( 'https://api.github.com/users/Ali-GreenHeart' )
    .then( response => response.json() )
    .then( data => {
        const userData = document.getElementById( 'userData' );

        userData.innerHTML = `
            <img src="${ data.avatar_url }" alt="">
            <p>Istifadeci Adi: ${ data.login }</p>
            <p>Repo Sayi: ${ data.public_repos }</p>
            <p>Follower Sayi: ${ data.followers }</p>
            <p>Following Sayi: ${ data.following }</p>
        `;

        fetch( data.followers_url )
            .then( response => response.json() )
            .then( followers => {
                const followersDiv = document.getElementById( 'followers' );
                followersDiv.innerHTML = `<h2>Takipciler</h2>`;

                followers.forEach( ( follower ) => {
                    followersDiv.innerHTML += `
                    <div>
                        <p>${ follower.login }</p>
                        <img src="${ follower.avatar_url }" alt="">
                    </div>
                    `;
                } );
            } );

        fetch( data.repos_url )
            .then( response => response.json() )
            .then( repos => {
                const reposDiv = document.getElementById( 'repos' );
                reposDiv.innerHTML = '<h2>Repos Adlari</h2>';

                for ( let i = 0; i < 10 && i < repos.length; i++ ) {
                    reposDiv.innerHTML += `
                        <p>Repo Adi: ${ repos[i].name }</p>
                    `;
                }
            } );
    } )
    .catch( error => console.error( 'Hata: ' + error ) );