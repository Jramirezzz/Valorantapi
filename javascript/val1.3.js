function fetchAsync() {
    const url = 'https://valorant-api.com/v1/maps'
    fetch(url)
        .then(response => {
            response.json().then(data => {
                Object.forEach(information => {
                    document.getElementById("contenedor").innerHTML += `
                    <img class="im1" src="${information.splash}"" > 
                    `
                  })
                console.log(data)
            })
        })
}
fetchAsync()
