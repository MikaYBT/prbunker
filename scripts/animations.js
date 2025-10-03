// hero

const hero = document.querySelector(".hero");
heightDif = 0;

if (window.scrollY < 1000){
    window.addEventListener("scroll", ()=>{
        hero.style.clipPath = `inset(0 0 ${0.4*window.scrollY}px 0)`;
});
};

// services

const serivcesGrid = document.querySelector(".services__grid")
const servicesGridHeader = document.querySelector(".services__info")
const servicesOverlay = document.querySelectorAll(".services__card-overlay");
const servicesEllipses = document.querySelectorAll(".services__card-ellipses");

function servicesOverlayAnimation(){
    const windowHeight = window.innerHeight;
    servicesOverlay.forEach(card => {
        const position = card.getBoundingClientRect();
        centerDif = Math.abs((position.top + position.height / 2) - windowHeight/2)
        opacity = ((centerDif / (windowHeight / 2)))**2;
        card.style.opacity = Math.max(0, Math.min(1, opacity))
    })
    servicesEllipses.forEach(ellipse => {
        const position = ellipse.getBoundingClientRect();
        centerDif = (position.top + position.height / 2) - windowHeight/2
        rotation = (centerDif / (windowHeight / 2)) * 20 + 30
        ellipse.style.transform = `rotate(${rotation}deg)`
    })
    gridPosition = servicesGridHeader.getBoundingClientRect();
    gridDif = Math.abs((gridPosition.top + gridPosition.height / 2) - windowHeight/2)
    gridOpacity = 1 - ((gridDif/ (windowHeight/2)))**3 + 0.1;
    serivcesGrid.style.opacity = Math.max(0, Math.min(1, gridOpacity));

}

window.addEventListener('scroll', servicesOverlayAnimation);
