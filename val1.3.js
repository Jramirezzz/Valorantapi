const fetchData = async () => {
    const url = 'https://valorant-api.com/v1/maps'
    // Get the list from the api
    const data = await fetch(url)
    // Convert to json
    const dataJson = await data.json()
    // Print the results
    console.log(dataJson)
}