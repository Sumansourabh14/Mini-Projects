const open = document.querySelector('.open-menu');
const close = document.querySelector('.close-menu');
const navMenu = document.querySelector('.menu');

open.addEventListener('click', () => {
    navMenu.classList.add('show');
    close.classList.remove('hide');
    open.classList.add('hide');
})

close.addEventListener('click', () => {
    navMenu.classList.remove('show');
    open.classList.remove('hide');
    close.classList.add('hide');
})