var carouse_height = $('.top-bar').height();
$(window).scroll(function (){
    if ($(this).scrollTop() > carouse_height) {
        $('.navigation').addClass('fixed-nav');
        // $('.main').css('margin-top', 51);
    }else {
        $('.navigation').removeClass('fixed-nav');
        // $('.main').css('margin-top', 0);
    }
});
