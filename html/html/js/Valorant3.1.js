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

    if (name == ""){
        alert("You have to write a name");
        return true;
    }
    if (email == ""){
        alert("You have to write an Email");
        return true;
    }
    if(email.includes("@")& email.includes(".")){

    }else{
        alert("You have to write a correct Email");
        return true;
    }
    if (password == ""){
        alert("You have to write a Password");
        return true;
    }
    if (password.length < 4){
        alert("You have to write a Password with that have more than four characters");
        return true; 
    }
    
    const userJsonStr = JSON.stringify(user)
    storage.setItem("user", userJsonStr)
    

    window.location.href = './valorant1.html'

}
regBtn.addEventListener('click',register)
   

   