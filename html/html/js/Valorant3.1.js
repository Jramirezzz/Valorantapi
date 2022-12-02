const storage = window.localStorage
const regBtn = document.getElementById('terminado')
let userList = []

function loadUsers() {
    let loadedUsers = localStorage.getItem("User");
    if (loadedUsers !== null) {
        userList = JSON.parse(loadedUsers);
    };
}
loadUsers()
function signup() {
    const name = document.getElementById("name")
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value


    const user = {
        name: name,
        email: email,
        password: password,
        isLogged: false,
        Favlist: []
    }
    userList.push(user)
    const userJsonStr = JSON.stringify(userList)
    storage.setItem("user", userJsonStr)
    

    window.location.href = './valorant1.html'

}
regBtn.addEventListener('click',register)
   

   