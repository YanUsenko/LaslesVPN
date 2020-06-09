const menuBtn = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".mobile-menu_nav");
const menuLine = document.querySelector(".focus_line");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("active");
});

menuBtn.addEventListener("click", function() {
    menuLine.classList.toggle("line-focus");
});

document.querySelector(".mobile-menu-button").onclick = function(){
    this.classList.toggle("focus");
}

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