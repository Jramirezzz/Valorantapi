function logout() {
    for (let index = 0; index < userList.length; index++) {
        if (User[index].isLogged == true) {
            User[index].isLogged = false;
            logout();
            window.location.href = './Index.html'
        }
    }

}