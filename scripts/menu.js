menuButton = document.querySelector('.navigation__menu-button');
collapseMenu = document.querySelector('.collapse-menu');
closeButton = document.querySelector('.collapse-menu__close-button');
collapseMenuOverlay = document.querySelector('.collapse-menu__overlay');
collapseMenuLinks = document.querySelectorAll('.collapse-menu__button');


menuButton.addEventListener('click', () => {
    collapseMenu.classList.add('collapse-menu--active');
    collapseMenuOverlay.classList.add('collapse-menu__overlay--active');
    }
)

closeButton.addEventListener('click', () => {
    collapseMenu.classList.remove('collapse-menu--active');
    collapseMenuOverlay.classList.remove('collapse-menu__overlay--active');
    }
)

collapseMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        collapseMenu.classList.remove('collapse-menu--active');
        collapseMenuOverlay.classList.remove('collapse-menu__overlay--active');
    })
})

collapseMenuOverlay.addEventListener('click', () => {
    collapseMenu.classList.remove('collapse-menu--active');
    collapseMenuOverlay.classList.remove('collapse-menu__overlay--active');
}
)