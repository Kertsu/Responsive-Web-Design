function showMenu(){
    document.getElementById("menu").style.width = "260px";
    var element = document.getElementById("menu-btn");
    element.classList.toggle("fa-x");
}
function closeMenu(){
    document.getElementById("menu").style.width = "0";
}