$(document).ready(function(){
        $('.button').click(function(){
            $('.menu-div').toggleClass('animate');
            $('.fas').toggleClass('xbutton');
        });
    });

$(document).ready(function(){
    $('.fa-moon').click(function(){
        $(this).toggleClass('light');
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() <= 0){
            $('#header').css('box-shadow', 'none') 
        } else{
           $('#header').css('box-shadow','-21.213px 21.213px 30px 0px rgb(158 158 158 / 30%)')
        }
    });
    });

