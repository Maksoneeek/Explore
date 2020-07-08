
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu,.header__logo').toggleClass('active');
        $('body').toggleClass('lock')
    });
});

$(document).ready(function () {
    $('.review__slider').slick({
        arrows: false,
        
        slidesToShow: 1,

    });
});

