$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});


$(document).ready(function () {
    
    if($(window).width() > 768){
        'use strict';

        var c, currentScrollTop = 0,
            navbar = $('nav');

        $(window).scroll(function () {
            var a = $(window).scrollTop();
            var b = navbar.height();
        
            currentScrollTop = a;
        
            if (c < currentScrollTop && a > 0) {
                $('.navbar').fadeOut();
            } else if (c > currentScrollTop && !(a <= 0)) {
            $('.navbar').fadeIn();
            }
            c = currentScrollTop;
        });
    }
  });

