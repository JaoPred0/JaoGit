function toggleMenu() {
    let menuShow = document.getElementById("menuShow");
    let menuList = document.getElementById("menuList");

    if (menuShow.style.display === "none" || menuShow.style.display === "") {
        menuShow.style.display = "block";
        menuList.style.display = "none";
    } else {
        menuShow.style.display = "none";
        menuList.style.display = "block";
    }
}