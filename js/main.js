

function getApi(done){

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
    .then(response => response.json())
    .then(data => {
        done(data)
    });

}

getApi(data =>{

    console.log(data)
    data.results.forEach(personaje => {

        const tarjeta = document.createRange().createContextualFragment(`
        <article class="tarjeta">
            <div class="img">
                <img src="${personaje.image}" alt="pesonaje">
            </div>
            <div class="info">
                <h2>${personaje.name}</h2>
                <p>${personaje.species}</p>
                <p id="status" class="status">${personaje.status}</p>
                <p>${personaje.location.name}</p>
            </div>
        </article>
        
        `)

        const main = document.getElementById('main');

        main.append(tarjeta);
    });


})