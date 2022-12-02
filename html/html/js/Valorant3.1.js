const storage = window.localStorage

function signup() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    // TODO: Validate empty and correct fields
    const user = {
        name: name,
        email: email,
        password: password,
        isLogged: false
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
    // TODO: Refactor for the use of a list of users
    // Validar que el usario no este previamente registrado
}
const userJson = localStorage.getItem("user")
// Parse the json string into a map (object)
const userParsed = JSON.parse(userJson);
console.log(userParsed)