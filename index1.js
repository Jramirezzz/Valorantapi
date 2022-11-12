let data = [
    {
        img: "https://media.vandal.net/m/4-2020/20204301832715_1.jpg",
        img: "https://www.gamerfocus.co/wp-content/uploads/2022/07/Valorant-Chamber.jpg",
        img: "https://d1lss44hh2trtw.cloudfront.net/assets/article/2022/07/12/valorant-reyna-kj-neon_feature.jpg",
        img: "https://imageio.forbes.com/specials-images/imageserve/62f1603b7374ad5d361d9c78/Key-art-for-the-Valorant-patch-5-03/960x0.jpg?format=jpg&width=960",
        img: "https://www.prosiebengames.de/sites/prosiebengames/files/styles/bg_content_full_image/public/2020-06/valorant_gamedetail_hauptbild_neu.jpg?itok=BKslLjJk",
        img: "https://esports.as.com/2022/01/03/valorant/Neon-nueva-agente-VALORANT_1534656549_881090_1440x810.jpg",
        img: "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com//var/app/current/web/app/uploads/2021/02/VALORANT-beginners-guide-featured-image.jpg",
        img: "https://www.protocol.com/media-library/an-image-of-valorant-hero-jett-one-of-the-available-characters-in-the-tactical-shooter.jpg?id=26573152&width=980",
        img: "https://i.ytimg.com/vi/EFKuVbY3sSo/maxresdefault.jpg",
        img: "https://www.esportmaniacos.com/wp-content/uploads/2022/02/valorant-780x470.jpg"
    }]

    data.forEach(movie => {
        document.getElementById("row_posters").innerHTML += `
        <img src="${movie.img}"
        
        `
      })