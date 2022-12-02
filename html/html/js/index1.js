
const storage = window.localStorage

let RecommendMovie = [
    { imgUrl: "https://media.vandal.net/m/4-2020/20204301832715_1.jpg" },
    { imgUrl: "https://www.gamerfocus.co/wp-content/uploads/2022/07/Valorant-Chamber.jpg" },
    { imgUrl: "https://d1lss44hh2trtw.cloudfront.net/assets/article/2022/07/12/valorant-reyna-kj-neon_feature.jpg" },
    { imgUrl: "https://imageio.forbes.com/specials-images/imageserve/62f1603b7374ad5d361d9c78/Key-art-for-the-Valorant-patch-5-03/960x0.jpg?format=jpg&width=960" },
    { imgUrl: "https://esports.as.com/2022/01/03/valorant/Neon-nueva-agente-VALORANT_1534656549_881090_1440x810.jpg" },
    { imgUrl: "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com//var/app/current/web/app/uploads/2021/02/VALORANT-beginners-guide-featured-image.jpg"},
    { imgUrl: "https://www.protocol.com/media-library/an-image-of-valorant-hero-jett-one-of-the-available-characters-in-the-tactical-shooter.jpg?id=26573152&width=980"},
    { imgUrl: "https://i.ytimg.com/vi/EFKuVbY3sSo/maxresdefault.jpg"},
    { imgUrl: "https://www.esportmaniacos.com/wp-content/uploads/2022/02/valorant-780x470.jpg"},
  ]
  
  RecommendMovie.forEach(movie => {

    function changeText(){
        document.getElementById("playnow").innerHTML="Play Now"
    }
    document.getElementById("row_posters").innerHTML += `
      <img id="img11"
        src="${movie.imgUrl}" onclick="movieSelected('${movie.nombre}','${movie.Descripcion}','${movie.imgUrl}')">      
    `
  })

  function login() {
    const loggedUser = storage.getItem("user")
    const user = JSON.parse(loggedUser)
    

    const userJsonStr = JSON.stringify(user)
    storage.setItem("user", userJsonStr)

    if(user.isLogged = true)
    {
        document.getElementById(`log`).innerHTML+= `
        <div id="contenedor">
        <img src="https://frikiup.co/wp-content/uploads/2022/02/002_RG_2021_FULL_LOCKUP_OFFWHITE.png" alt="" height="80px" width="285px">
        <nav class="cuadro">
        <a href="./Index.html" >Home</a>
        <a href="./val.html">Maps</a>
        <a href="./val2.html">About Us</a>
        <a href="./Profile.html"><img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="" height="50px"></a>

      </nav>
</div>`

    }else if(user.isLogged != true)
    {
        document.getElementById(`nonlog`).innerHTML+= `  
        <div id="contenedor">
        <img src="https://frikiup.co/wp-content/uploads/2022/02/002_RG_2021_FULL_LOCKUP_OFFWHITE.png" alt="" height="80px" width="285px">
        <nav class="cuadro">
        <a href="../html/Index.html" >Home</a>
        <a href="../val.html">Maps</a>
        <a href="../val2.html">About Us</a>
        <a href="../valorant1.html">Log in</a>
        <a href="../Valorant3.html">Register</a>
      </nav>
</div>`;
 }  
}

login()