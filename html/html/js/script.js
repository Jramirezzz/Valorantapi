const productsContainerDiv = document.getElementById("pcontainer")
var productListHtml = ""

function fetchAsync() {
    const url = 'https://valorant-api.com/v1/maps'
    console.log(url)
    fetch(url)
        .then(response => {
            response.json().then(data => {
                data.data.forEach(information => {
                    document.getElementById("pcontainer").innerHTML += `
                    <a href="map.html?uuid=${information.uuid}"><img class="img" src="${information.splash}"" ></a>
                    `
                  })
                console.log(data)
                
            })
        })
        
}
fetchAsync()
