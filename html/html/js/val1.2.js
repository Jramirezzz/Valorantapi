const storage = window.localStorage

function login() {
    const loggedUser = storage.getItem("user")
    const user = JSON.parse(loggedUser)
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    //Comprobante de que todos los espacios se llenen con la información adecuada 

    if (email == ""){
        alert("You have to write an Email");
        return true;
    }
    if (password == ""){
        alert("You have to write a Password");
        return true;
    }
    if (user.email===email){

    }else{
        alert("Your email is wrong")
        return true;
    }
    if (user.password===password){

    }else{
        alert("Your password is wrong")
        return true;
    }
    if(user.email === email && user.password === password) {
        // Actualizo al usuario como "Logueado"
        user.isLogged = true
        const userJsonStr = JSON.stringify(user)
        storage.setItem("user", userJsonStr)
        
        // Navego a la main
        window.location.href = './LP 2.html'
    }else{
        alert("You are not registered")
        return true;
    }
    // TODO: Handle error

}