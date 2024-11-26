const menuActive = document.querySelector('.BreadCrumb__menu-active');
const burger = document.querySelector('.menu__burger-button');
const menuClose = document.querySelector('.BreadCrumb__menu-close');

function toggleMenu() {
    menuActive.classList.toggle('menu__hide-menu');
}

burger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);
