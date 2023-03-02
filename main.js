const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIconShopingCar = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDescktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuIconShopingCar.addEventListener('click', toggleCarritoAside);

/*Estas funciones es para hacer click Menu mobile y carrito de compras y que aparescan y desaparescan*/
function toggleDescktopMenu(){
    desktopMenu.classList.toggle('inactive');

}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    aside.classList.toggle('inactive');
}

/* Funciones para que no se choquen los menus       */

menuIconShopingCar.addEventListener('click', showMobileMenu);

function showMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    

};

menuHamIcon.addEventListener('click', showasideMenu);

function showasideMenu(){
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}
