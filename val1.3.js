function fetchAsync() {
    const url = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=10'
    fetch(url)
        .then(response => {
            response.json().then(data => {
                data.forEach(information => {
                    document.getElementById("contenedor").innerHTML += `
                    <img class="im1" src="${information.splash}"" > 
                    `
                  })
                console.log(data)
            })
        })
}
fetchAsync()