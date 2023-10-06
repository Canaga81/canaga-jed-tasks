fetch( 'https://api.github.com/users/Ali-GreenHeart' )
    .then( response => response.json() )
    .then( data => {
        const userData = document.getElementById( 'userData' );
        userData.innerHTML = `
            <img src="${ data.avatar_url }" alt="GitHub Avatar">
            <p>Istiadeci adi: ${ data.login }</p>
            <p>Repo Sayi: ${ data.repos_url }</p>
            <p>Follower sayi: ${ data.followers }:</p>
            <p>Following sayi: ${ data.following }</p>
        `;

        fetch( data.followers_url )
            .then( response => response.json() )
            .then( followers => {
                const followersDiv = document.getElementById( 'followers' );
                followersDiv.innerHTML = '<h2>Takipcilerin</h2>'

                followers.forEach( ( follower ) => {
                    followersDiv.innerHTML += `
                    <div>
                        <img src="${follower.avatar_url}" alt="Github Avatar">
                        <p>Takipcinin adi: ${follower.login}</p>
                    </div>
                    `
                })
            } )
        
        fetch( data.repos_url )
            .then( response => response.json() )
            .then( repos => {
                const reposDiv = document.getElementById( 'repos' );
                reposDiv.innerHTML = '<h2>Repos Adlari</h2>'
                
                for ( let i = 0; i < 10 && i < repos.length; i++ ) {
                    reposDiv.innerHTML += `
                        <p>Repo Adi: ${repos[i].name}</p>
                    `
                }
            })
    } )
    .catch(error => console.error('Hata: ' + error))