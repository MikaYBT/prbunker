/*
* Soft.js v.0.0.1
*
* @author Mnogolika
* @license MIT
*/

//Fade on scroll

const animationFadeOnScrollArray = document.querySelectorAll(".animation__scroll--fade");

function animationFadeOnScroll() {
    animationFadeOnScrollArray.forEach(object => {
        objectRect = object.getBoundingClientRect();
        const fadePower = 3;
        if (objectRect.bottom > -100 && objectRect.top < window.innerHeight + 100) {
            objectDif = 0;
            if (objectRect.bottom < (fadePower*100)){
                objectDif = Math.abs((objectRect.bottom - (fadePower*100)) / (fadePower*100));
                console.log(objectDif)
            } else if (objectRect.top > window.innerHeight - (fadePower*100)){
                objectDif = Math.abs((objectRect.top - (window.innerHeight-(fadePower*100))) / (window.innerHeight-(fadePower*100)));
                console.log(objectDif)
            }
            objectOpacity = Math.max(0, Math.min(1, 1 - objectDif**(fadePower/2)));
            object.style.opacity = objectOpacity;
        }
    });
};

window.addEventListener('scroll', animationFadeOnScroll);
window.addEventListener("resize", animationFadeOnScroll);

const animationFadeInverseOnScrollArray = document.querySelectorAll(".animation__scroll--fade-inverse");

function animationFadeInverseOnScroll() {
    animationFadeInverseOnScrollArray.forEach(object => {
        objectRect = object.getBoundingClientRect();
        const fadePower = 4;
        if (objectRect.bottom > -100 && objectRect.top < window.innerHeight + 100) {
            objectDif = 0;
            if (objectRect.bottom < (fadePower*100)){
                objectDif = Math.abs((objectRect.bottom - (fadePower*100)) / (fadePower*100));
                console.log(objectDif)
            } else if (objectRect.top > window.innerHeight - (fadePower*100)){
                objectDif = Math.abs((objectRect.top - (window.innerHeight-(fadePower*100))) / (window.innerHeight-(fadePower*100)));
                console.log(objectDif)
            }
            objectOpacity = Math.max(0, Math.min(1, objectDif**(fadePower/2)));
            object.style.opacity = objectOpacity;
        }
    });
};

window.addEventListener('scroll', animationFadeInverseOnScroll);
window.addEventListener("resize", animationFadeInverseOnScroll);

//Clip path on scroll

const animationClipBottomOnScrollArray = document.querySelectorAll(".animation__scroll--clip-bottom");

function animationClipBottomOnScroll() {
    animationClipBottomOnScrollArray.forEach(object => {
        objectRect = object.getBoundingClientRect();
        if (objectRect.bottom > -100) {
            objectDif = (objectRect.top + objectRect.height / 2) - window.innerHeight / 2;
            objectRatio = Math.max(1, Math.min(1.5, objectRect.height * objectRect.width / (window.innerHeight * window.innerWidth)));
            objectClip = (objectDif / window.innerHeight / 2);
            computedObject = window.getComputedStyle(object);
            objectBorderRadius = computedObject.getPropertyValue('border-radius');
            object.style.clipPath = `inset(0 0 ${-objectClip * 300}px 0 round ${objectBorderRadius})`
        }
    })
}

window.addEventListener('scroll', animationClipBottomOnScroll);
window.addEventListener("resize", animationClipBottomOnScroll);

const animationClipTopOnScrollArray = document.querySelectorAll(".animation__scroll--clip-top");

function animationClipTopOnScroll() {
    animationClipTopOnScrollArray.forEach(object => {
        objectRect = object.getBoundingClientRect();
        if (objectRect.bottom > -100 && objectRect.top < window.innerHeight + 100) {
            objectDif = Math.abs((objectRect.top + objectRect.height / 2) - window.innerHeight / 2);
            objectRatio = Math.max(1, Math.min(1.5, objectRect.height * objectRect.width / (window.innerHeight * window.innerWidth)));
            objectClip = (objectDif / window.innerHeight / 2);
            object.style.clipPath = `inset(${objectClip * 300}px 0 0 0)`
        }
    })
}

window.addEventListener('scroll', animationClipTopOnScroll);
window.addEventListener("resize", animationClipTopOnScroll);

//rotation on scroll

const animationRotateOnScrollArray = document.querySelectorAll(".animation__scroll--rotation");

function animationRotateOnScroll() {
    animationRotateOnScrollArray.forEach(object => {
        objectRect = object.getBoundingClientRect();
        if (objectRect.bottom > -100 && objectRect.top < window.innerHeight + 100) {
            objectDif = ((objectRect.top + objectRect.height / 2) - window.innerHeight / 2);
            objectRatio = Math.max(1, Math.min(1.5, objectRect.height * objectRect.width / (window.innerHeight * window.innerWidth)));
            objectRotation = 1 - (objectDif / window.innerHeight / 2);
            object.style.transform = `rotate(${objectRotation * 45 - 45}deg)`
        }

    })
}

window.addEventListener('scroll', animationRotateOnScroll);
window.addEventListener("resize", animationRotateOnScroll);

//move on scroll

const animationMoveYOnScrollArray = document.querySelectorAll('.animation__scroll-move-y');

function animationMoveYOnScroll() {

    animationMoveYOnScrollArray.forEach((object) => {
        objectRect = object.getBoundingClientRect();
        if (objectRect.bottom > -100 && objectRect.top < window.innerHeight + 100) {
            objectDif = ((objectRect.top + objectRect.height / 2) - window.innerHeight / 2);
            objectRatio = Math.max(1, Math.min(1.5, objectRect.height * objectRect.width / (window.innerHeight * window.innerWidth)));
            objectTransform = 1 - (objectDif / (window.innerHeight / 2));
            object.style.transform = `translate(0%, ${-10 * objectTransform}%)`
        }
    });

}

window.addEventListener('scroll', animationMoveYOnScroll);
window.addEventListener("resize", animationMoveYOnScroll);


const animationMoveYInverseOnScrollArray = document.querySelectorAll('.animation__scroll-move-y-inverse');

function animationMoveYInverseOnScroll() {

    animationMoveYInverseOnScrollArray.forEach((object) => {
        objectRect = object.getBoundingClientRect();
        if (objectRect.bottom > -100 && objectRect.top < window.innerHeight + 100) {
            objectDif = ((objectRect.top + objectRect.height / 2) - window.innerHeight / 2);
            objectRatio = Math.max(1, Math.min(1.5, objectRect.height * objectRect.width / (window.innerHeight * window.innerWidth)));
            objectTransform = 1 - (objectDif / (window.innerHeight / 2));
            object.style.transform = `translate(0%, ${50 * objectTransform}%)`
        }
    });

}

window.addEventListener('DOMContentLoaded', animationMoveYInverseOnScroll);
window.addEventListener('scroll', animationMoveYInverseOnScroll);
window.addEventListener("resize", animationMoveYInverseOnScroll);


//map

const mapGradient = document.querySelector('.advantages__map-gradient');
const mapTrackers = document.querySelectorAll('.advantages__tracking');

function mapAnimation() {
    mapGradientRect = mapGradient.getBoundingClientRect();
    mapTrackers.forEach(tracker => {
        trackerRect = tracker.getBoundingClientRect();
        if (
            mapGradientRect.x > (trackerRect.x - window.innerWidth*0.20) &&
            mapGradientRect.x < (trackerRect.x + window.innerWidth*0.05)
        ) {
            tracker.style.transform = "scale(1.2, 1.2)";
        } else {
            tracker.style.transform = "scale(1, 1)";
        }
    });
    requestAnimationFrame(mapAnimation);
}

mapAnimation();