const burgerMenuBtn = document.querySelector('.burger-menu-btn')
const burgerMenuBtnIcon = document.querySelector('.burger-menu-btn i')
const burgerMenu = document.querySelector('.burger-menu')

burgerMenuBtn.onclick = function() {
    burgerMenu.classList.toggle('open')
    const isOpen = burgerMenu.classList.contains('open')
    burgerMenuBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-burger'
    
}