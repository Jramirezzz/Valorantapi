const userJson = localStorage.getItem("user")
const storage = window.localStorage
const userParsed = JSON.parse(userJson);

console.log(userParsed)

var email = userParsed.email
var name = userParsed.name
document.getElementById("correo").innerHTML = email;
document.getElementById("name").innerHTML = name;
console.log(email)
console.log(name)

   
