const productsContainerDiv = document.getElementById("pcontainer")
var productListHtml = ""
const AllMaps = [];

async function getMap(url) {
    let response = await fetch(url);
    let data = await response.json();
    AllMaps.push(data)
}

async function getAllMaps() {
    for (i = 1; i < 9; i++) {
    }
}

function fetchAsync() {
    const url = 'https://valorant-api.com/v1/maps'
    console.log(url)
    fetch(url)
        .then(response => {
            response.json().then(data => {
                data.data.forEach(information => {
                    document.getElementById("pcontainer").innerHTML += `

                    <a href="map.html?uuid=${information.uuid}"><img class="img" src="${information.splash}""></a><a href="#boton"><button class="boton"><img id="sv" src="imagen/Save.png" onClick="AddFav(${information.uuid})"{"height="30px" width="30px">
                    </button></a>
                    
                    `
                  })
                console.log(data)
                
            })
        })
}
fetchAsync()

getAllMaps();
console.log(AllMaps)
let userList = []
function loadUsers() {
    let user = localStorage.getItem("user");
    if (user !== null) {
        userList = JSON.parse(user);
    };
    console.log("user:", userList);
}
loadUsers(); //primera carga de users

function AddFav(id) {
    //console.log("loque", id)
    for (let i = 0; i < AllMaps.length; i++) {
        //console.log(allPokemons[i].id)
        if (AllMaps[i].id == id) {
            //console.log("Estees", allPokemons[i])
            //console.log("userList", userList)
            for (let e = 0; e < userList.length; e++) {
                //console.log(userList[e])
                if (userList[e].isLogged == true) {

                    userList[e].Favlist.push(AllMaps[i])
                    //console.log(userList[e].Favlist)
                    let json = JSON.stringify(userList);
                    localStorage.setItem("user", json);
                }
            }
        }
    }
}
