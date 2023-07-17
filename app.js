const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function scrollFunction() {
    document.documentElement.style.scrollBehavior = "smooth";
  }

function copy() {
    var copyText = document.querySelector("#email"); 
    copyText.select(); document.execCommand("copy");
}
document.querySelector("#copy").addEventListener("click", copy);