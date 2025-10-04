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

function servicesAnimations(){
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
    if (window.innerWidth > 768){
        const gridDif = Math.abs((gridPosition.top + gridPosition.height / 2) - windowHeight/2)
        gridOpacity = 1 - ((gridDif/ (windowHeight/2)))**3 + 0.1;
    }
    else{
        const gridDif = Math.abs(0 - Math.abs((gridPosition.top))) 
        gridOpacity = 1 - ((gridDif / windowHeight))**2 + 0.1;
    }
    
    serivcesGrid.style.opacity = Math.max(0, Math.min(1, gridOpacity));

}

window.addEventListener('scroll', servicesAnimations);
window.addEventListener('resize', servicesAnimations)

//advantages

const map = document.querySelector(".advantages__map");
// const advantagesBg = document.querySelector(".advantages__bg");
const advantagesBlock = document.querySelectorAll(".advantages__card")
const advantagesImage = document.querySelectorAll(".advantages__image")

function advantagesAnimations(){
    const windowHeight = window.innerHeight;
    mapPosition = map.getBoundingClientRect();
    mapDif = (mapPosition.top + mapPosition.height /2) - windowHeight /2
    mapOpacity = 1.5 - (Math.abs(mapDif) / (windowHeight/2))
    map.style.opacity = Math.max(0, Math.min(1, mapOpacity))
    if (mapDif < 1){
        map.style.clipPath = `inset(0 0 ${Math.abs(mapDif)*0.2}px 0 round 16px)`;
    }

    // bgPosition = map.getBoundingClientRect();
    // bgDif = (bgPosition.top + bgPosition.height /2) - windowHeight /2
    // bgTransform = 1 - (Math.abs(bgDif / windowHeight / 2))
    // advantagesBg.style.transform = `translate(-50%, ${-50*bgTransform}%)`
    advantagesBlock.forEach(card => {
        blockPosition = card.getBoundingClientRect();
        blockDif = Math.abs((blockPosition.top + blockPosition.height / 2) - windowHeight/2)
        blockOpacity = 1 - (blockDif / windowHeight / 2)*2 + 0.1
        card.style.opacity = Math.max(0, Math.min(1, blockOpacity))
    })
    advantagesImage.forEach(card => {
        blockPosition = card.getBoundingClientRect();
        blockDif = ((blockPosition.top + blockPosition.height / 2) - windowHeight/2)
        blockTransform = 1 - (blockDif / windowHeight / 2)
        if (window.innerWidth > 1024){
            card.style.transform = `translate(0%, ${-50*blockTransform + 40}%)`
        }
        else if (window.innerWidth > 768){
            card.style.transform = `translate(0%, ${-50*blockTransform}%)`
        }
        else {
            card.style.transform = `translate(0%, ${-50*blockTransform + 50}%)`
        }
        
    })

}

window.addEventListener('scroll', advantagesAnimations);
window.addEventListener('resize', advantagesAnimations);