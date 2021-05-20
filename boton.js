$(document).ready(function() {

    $('.icon-chevron-small-up').click(function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.icon-chevron-small-up').slideDown(300);
        } else {
            $('.icon-chevron-small-up').slideUp(300);
        }
    });

});