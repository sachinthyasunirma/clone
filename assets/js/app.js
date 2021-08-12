const menu = document.querySelector('#down');
const menulink = document.querySelector('.navbar__menu__items');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menulink.classList.toggle('active');
    console.log("active");
});