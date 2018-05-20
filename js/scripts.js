$(document).ready(function($) {
    var windowEl = $(window);
    var windowW = windowEl.width();
    var beforeWidth = $(this).width();
    var slideTotal = $('.total-slide');
    var slideCurrent = $('.current-slide');
    var slickElement = $('.slider');

    // обновление страницы при масштабировании
    $(window).resize(function() {
        var afterWidth = $(this).width();
        if (afterWidth != beforeWidth) {
            location.reload()
        }
    })

    //smooth anchor
    $(".home-button").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
        return false;
    });

    // меню
    if (windowW < 767) {
        $('.hamburger').on('click', function(event) {
            event.preventDefault();
            $('.menu').toggleClass('open');
            $('.hamburger').toggleClass('cross');

        });

        $(".menu>ul>li>a, .home-button").on("click", function(event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 500);
            $('.menu').removeClass('open');
            $('.hamburger').removeClass('cross');
            return false;
        });

    } else {
        $('.hamburger').on('click', function(event) {
            event.preventDefault();
            $('.menu>ul').slideToggle();
            $('.hamburger').toggleClass('cross');
        });

        $(".menu>ul>li>a, .home-button").on("click", function(event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 500);
            $('.menu>ul').slideUp();
             $('.hamburger').removeClass('cross');
            return false;
        });

    }

    // слайдер
    slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        slideCurrent.text('0' + i) + slideTotal.text('0' + slick.slideCount);
    });

    slickElement.slick({
        dots: false,
        arrow: true
    });

    /*Динамическая подсветка пинов*/

    $(window).scroll(function() {
        $('.magic').each(function() {
            var window_top = $(window).scrollTop();
            var div_top = $(this).offset().top;
            var div_1 = $(this).attr('id');
            if (window_top > div_top - 200) {
                $('.pins').find('div').removeClass('active');
                $('.pins').find('div[class="' + div_1 + '"]').addClass('active');
            } else {
                $('.pins').find('div[class="' + div_1 + '"]').removeClass('active');
            };
        });
    });

    /*цвет гамбургера при скролле*/
    $(window).scroll(function() {
        var scr = $(this).scrollTop();
        var about = $('#about').offset();ы
        if (scr >= about['top']) {
            $('.hamburger').addClass('hamburger-scroll', 300);
            $('.pins').addClass('pins-scroll', 300);
        } else {
            $('.hamburger').removeClass('hamburger-scroll', 300);
            $('.pins').removeClass('pins-scroll', 300);
        }
    });

});