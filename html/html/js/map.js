const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const valid = urlParams.get('uuid')
const map = document.getElementById(`mapa`)
const urlbase = 'https://valorant-api.com/v1/maps/'

async function getmapInfo(url){
    let response = await fetch(url);
    let data = await response.json();

    console.log(data)


map.innerHTML += `
    <div>
        <h1 class="M">${data.data.displayName}</h1>
    </div>
    <div class="parrafo ">
            <img class="Ra" src="${data.data.splash}" alt="">
            <p class="JR">${data.data.displayName} es un mapa que está en las coordenadas ${data.data.coordinates} en donde dos equipos luchan a muerte por defender o atacar los sites A (en las cordenadas X ${data.data.callouts[9].location.x} Y ${data.data.callouts[9].location.y}) y B (en las cordenadas X ${data.data.callouts[19].location.x} Y ${data.data.callouts[19].location.y}) </p>
            <img class="Ram" src="${data.data.displayIcon}">
       <a href="#boton"><button class="boton">
            <img src="imagen/Save.png" height="50px" width="50px" alt="">
        </button></a>
    </div>
`
}
async function getallmapInfo(){
    let url = urlbase + valid;
    await getmapInfo(url)
}


getallmapInfo()