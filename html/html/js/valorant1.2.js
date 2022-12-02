const storage = window.localStorage
const logBtn = document.getElementById('LoginBtn')
let userList = []
function loadUsers() {

    let loadedUsers = localStorage.getItem("user");
    if (loadedUsers !== null) {
        userList = JSON.parse(loadedUsers);
    };
    //console.log("load users:", userList);
}
loadUsers(); //primera carga de users

function login() {
    const loggedUser = storage.getItem("user")
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = JSON.parse(loggedUser)

    for (let i = 0; i < userList.length; i++) {
        if(userList[i].email === email && userList[i].password === password) {
            userList[i].isLogged = true
            let json = JSON.stringify(userList);
            localStorage.setItem("user", json)
            
            window.location.href = './Index.html'
        }
    }
    if (userList[i].email===email){

    }else{
        alert("Your email is wrong")
        return true;
    }
    if (user.password===password){

    }else{
        alert("Your password is wrong")
        return true;
    }
}
logBtn.addEventListener('click', login)
