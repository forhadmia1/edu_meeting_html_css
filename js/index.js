// mobile menu function
const menu = document.getElementById('menu-bar')
const menuContainer = document.getElementById('mobile-menu')
let ishide = false;

menu.addEventListener('click', (e) => {
    ishide = !ishide;
    if (ishide) {
        menuContainer.style.display = 'none'
    } else {
        menuContainer.style.display = 'block'
    }
})

document.getElementById('body').addEventListener('click', () => {
    ishide = false;
    menuContainer.style.display = 'none'
})


