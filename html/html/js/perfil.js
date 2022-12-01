const userJson = localStorage.getItem("user")
// Parse the json string into a map (object)
const userParsed = JSON.parse(userJson);

console.log(userParsed)

var email = userParsed.email
var name = userParsed.name
console.log(email)
console.log(name)
document.getElementById("correo").innerHTML = email;
document.getElementById("name").innerHTML = name;
   
