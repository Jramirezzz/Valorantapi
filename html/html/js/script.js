const fetchData = async () => {
    const url = 'https://valorant-api.com/v1/maps'
    // Get the list from the api
    const data = await fetch(url)
    data.data.forEach(information => {
        document.getElementById("pcontainer").innerHTML += `
        <img id="img11"
      src="${information.imgUrl}" onclick="movieSelected('${movie.nombre}','${movie.Descripcion}','${movie.imgUrl}')">

        ` 
      })
    // Convert to json
    const dataJson = await data.json()
    // Print the results
    console.log(dataJson)
}
fetchData()

