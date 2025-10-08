const heroVideo = document.querySelector(".hero__video");
const heroInfo = document.querySelector(".hero__info");

function heroSize(){
    const windowHeight = window.innerHeight;
    heroInfoRect = heroInfo.getBoundingClientRect();
    sizeRatio = heroInfoRect.height/windowHeight;
    heroVideo.style.height = `${(1-sizeRatio)*130}%`
}

window.addEventListener("DOMContentLoaded", heroSize);
window.addEventListener("resize", heroSize);

