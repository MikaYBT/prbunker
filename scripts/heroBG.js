const heroVideo = document.querySelector(".hero__video");
const heroInfo = document.querySelector(".hero__info");

function heroSize(){
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    heroInfoRect = heroInfo.getBoundingClientRect();
    sizeRatio = heroInfoRect.height/windowHeight;
    heroVideo.style.height = `${(1-sizeRatio)*145}%`;
    if (heroInfoRect.width < windowWidth){
        heroVideo.classList.add("hero__video--cover");
    }
    else {heroVideo.classList.remove("hero__video--cover"); }
}

window.addEventListener("DOMContentLoaded", heroSize);
window.addEventListener("resize", heroSize);

