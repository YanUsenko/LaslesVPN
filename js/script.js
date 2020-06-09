const menuBtn = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".mobile-menu_nav");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("active");
});

$(document).ready(function(){
    $('.slider').slick({
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: '.arrows-prev',
        nextArrow: '.arrows-next',
        dots: true,
        appendDots: '.dots',
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
    });
});