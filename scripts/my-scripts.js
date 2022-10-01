// function showMenu(){
//     var menu = document.getElementById("menu");
//     var btn = document.getElementById("menu-btn");
//     if (menu.style.width == 0){
//         menu.style.width = "260px";
//         btn.classList.toggle("fa-x")

//     } else{
//         menu.style.width = 0;
//         btn.classList.toggle("")
//     } 
// }


$(document).ready(function(){
        $('.button').click(function(){
            $('.menu-div').toggleClass('animate');

        });
    });
