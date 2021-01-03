const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__mobile-nav");
const menuLine = document.querySelector(".active-link");
const body = document.querySelector("body");
const menuLink = document.querySelector(".header__mobile-link");
const menuLink2 = document.querySelector(".header__mobile-link-2");
const menuLink3 = document.querySelector(".header__mobile-link-3");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuLine.classList.toggle("line-focus");
    body.classList.toggle("hidden");
});

menuLink.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuLine.classList.toggle("line-focus");
    
});
menuLink2.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuLine.classList.toggle("line-focus");
    
});
menuLink3.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuLine.classList.toggle("line-focus");
    
});

document.querySelector(".mobile-menu-button").onclick = function(){
    this.classList.toggle("focus");
}