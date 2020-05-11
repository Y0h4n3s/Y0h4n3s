const burger = document.querySelector('.burger');
const nav = document.querySelector('ul');
const closeSrc = 'images/icon-close.svg';
const burgerSrc = 'images/icon-hamburger.svg';

burger.addEventListener('click', () => {
    console.log(burger);
    let navVisible = nav.style.display === 'flex';
    if (navVisible) {
        nav.style.display = 'none';
        burger.src = burgerSrc;
    } else {
        nav.style.display = 'flex';
        burger.src = closeSrc;
        console.log(burgerSrc + "  " + closeSrc);
    }
});