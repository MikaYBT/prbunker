// hero

// const hero = document.querySelector(".hero");
// heightDif = 0;

// if (window.scrollY < 1000){
//     window.addEventListener("scroll", ()=>{
//         hero.style.clipPath = `inset(0 0 ${0.4*window.scrollY}px 0)`;
// });
// };

// // services

// const serivcesGrid = document.querySelector(".services__grid")
// const servicesGridHeader = document.querySelector(".services__info")
// const servicesOverlay = document.querySelectorAll(".services__card-overlay");
// const servicesEllipses = document.querySelectorAll(".services__card-ellipses");

// function servicesAnimations(){
//     const windowHeight = window.innerHeight;
//     servicesOverlay.forEach(card => {
//         const position = card.getBoundingClientRect();
//         centerDif = Math.abs((position.top + position.height / 2) - windowHeight/2)
//         opacity = ((centerDif / (windowHeight / 2)))**2;
//         card.style.opacity = Math.max(0, Math.min(1, opacity))
//     })
//     servicesEllipses.forEach(ellipse => {
//         const position = ellipse.getBoundingClientRect();
//         centerDif = (position.top + position.height / 2) - windowHeight/2
//         rotation = (centerDif / (windowHeight / 2)) * 20 + 30
//         ellipse.style.transform = `rotate(${rotation}deg)`
//     })
//     gridPosition = servicesGridHeader.getBoundingClientRect();
//     if (window.innerWidth > 768){
//         const gridDif = Math.abs((gridPosition.top + gridPosition.height / 2) - windowHeight/2)
//         gridOpacity = 1 - ((gridDif/ (windowHeight/2)))**3 + 0.1;
//     }
//     else{
//         const gridDif = Math.abs(0 - Math.abs((gridPosition.top))) 
//         gridOpacity = 1 - ((gridDif / windowHeight))**2 + 0.1;
//     }

//     serivcesGrid.style.opacity = Math.max(0, Math.min(1, gridOpacity));

// }

// window.addEventListener('scroll', servicesAnimations);
// window.addEventListener('resize', servicesAnimations)

// //advantages

// // const map = document.querySelector(".advantages__map");
// // // const advantagesBg = document.querySelector(".advantages__bg");
// // const advantagesBlock = document.querySelectorAll(".advantages__card")
// // const advantagesImage = document.querySelectorAll(".advantages__image")

// // function advantagesAnimations(){
// //     const windowHeight = window.innerHeight;
// //     mapPosition = map.getBoundingClientRect();
// //     mapDif = (mapPosition.top + mapPosition.height /2) - windowHeight /2
// //     mapOpacity = 1.5 - (Math.abs(mapDif) / (windowHeight/2))
// //     map.style.opacity = Math.max(0, Math.min(1, mapOpacity))
// //     if (mapDif < 1){
// //         map.style.clipPath = `inset(0 0 ${Math.abs(mapDif)*0.2}px 0 round 16px)`;
// //     }

// //     // bgPosition = map.getBoundingClientRect();
// //     // bgDif = (bgPosition.top + bgPosition.height /2) - windowHeight /2
// //     // bgTransform = 1 - (Math.abs(bgDif / windowHeight / 2))
// //     // advantagesBg.style.transform = `translate(-50%, ${-50*bgTransform}%)`
// //     advantagesBlock.forEach(card => {
// //         blockPosition = card.getBoundingClientRect();
// //         blockDif = Math.abs((blockPosition.top + blockPosition.height / 2) - windowHeight/2)
// //         blockOpacity = 1 - (blockDif / windowHeight / 2)*2 + 0.1
// //         card.style.opacity = Math.max(0, Math.min(1, blockOpacity))
// //     })
// //     advantagesImage.forEach(card => {
// //         blockPosition = card.getBoundingClientRect();
// //         blockDif = ((blockPosition.top + blockPosition.height / 2) - windowHeight/2)
// //         blockTransform = 1 - (blockDif / windowHeight / 2)
// //         if (window.innerWidth > 1024){
// //             card.style.transform = `translate(0%, ${-50*blockTransform + 40}%)`
// //         }
// //         else if (window.innerWidth > 768){
// //             card.style.transform = `translate(0%, ${-50*blockTransform}%)`
// //         }
// //         else {
// //             card.style.transform = `translate(0%, ${-50*blockTransform + 50}%)`
// //         }

// //     })

// // }

// // window.addEventListener('scroll', advantagesAnimations);
// // window.addEventListener('resize', advantagesAnimations);

// //about us

// const aboutUs = document.querySelector('.about-us__story')
// const aboutUsLogo = document.querySelector('.about-us__logo')
// const aboutUsCarousel = document.querySelector('.about-us__carousel')

// function aboutUsAnimations(){
//     const windowHeight = window.innerHeight;
//     storyPosition = aboutUs.getBoundingClientRect();
//     storyDif = (storyPosition.top + storyPosition.height / 2 ) - windowHeight/2
//     storyOpacity = 1 - (Math.abs(storyDif) / windowHeight / 2)*2 + 0.1;
//     aboutUs.style.opacity = Math.max(0, Math.min(1, storyOpacity));
//     logoTransform = storyDif / windowHeight / 2
//     aboutUsLogo.style.transform = `translate(0, ${0 - 250*logoTransform}%)`

//     carouselPosition = aboutUsCarousel.getBoundingClientRect();
//     carouselDif = Math.abs((carouselPosition.top + carouselPosition.height / 2) - windowHeight/2)
//     carouselOpacity = 1 - (carouselDif / windowHeight/2)
//     aboutUsCarousel.style.opacity = Math.max(0, Math.min(1, carouselOpacity))

// }

// window.addEventListener('scroll', aboutUsAnimations);

// //footer

// const footer = document.querySelector(".footer__wrapper")

// function footerAnimations(){
//     const windowHeight = window.innerHeight
//     footerPosition = footer.getBoundingClientRect();
//     footerDif = (footerPosition.top + footerPosition.height/2) - windowHeight / 2
//     footerClip = (Math.abs(footerDif) / windowHeight/2)
//     footer.style.clipPath = `inset(${300*footerClip}px 0 0 0)` 
// }

// window.addEventListener('scroll', footerAnimations)

//Fade on scroll

const animationFadeOnScrollArray = document.querySelectorAll(".animation__scroll--fade");

function animationFadeOnScroll() {
    animationFadeOnScrollArray.forEach(object => {
        objectRect = object.getBoundingClientRect();
        if (objectRect.bottom > -100 && objectRect.top < window.innerHeight + 100) {
            objectDif = Math.abs((objectRect.top + objectRect.height / 2) - window.innerHeight / 2);
            objectRatio = Math.max(1, Math.min(1.8, objectRect.height * objectRect.width / (window.innerHeight * window.innerWidth)));
            objectOpacity = 1 * objectRatio - (objectDif / window.innerHeight / 2)*1.2**4;
            object.style.opacity = Math.max(0, Math.min(1, objectOpacity))
        }
    });
};

window.addEventListener('scroll', animationFadeOnScroll);

const animationFadeInverseOnScrollArray = document.querySelectorAll(".animation__scroll--fade-inverse");

function animationFadeInverseOnScroll() {
    animationFadeInverseOnScrollArray.forEach(object => {
        objectRect = object.getBoundingClientRect();
        if (objectRect.bottom > -100 && objectRect.top < window.innerHeight + 100) {
            objectDif = Math.abs((objectRect.top + objectRect.height / 2) - window.innerHeight / 2);
            objectRatio = Math.max(1, Math.min(1.5, objectRect.height * objectRect.width / (window.innerHeight * window.innerWidth)));
            objectOpacity = (objectDif / window.innerHeight / 2) * 3;
            object.style.opacity = Math.max(0, Math.min(1, objectOpacity))
        }
    });
};

window.addEventListener('scroll', animationFadeInverseOnScroll);

//Clip path on scroll

const animationClipBottomOnScrollArray = document.querySelectorAll(".animation__scroll--clip-bottom");

function animationClipBottomOnScroll() {
    animationClipBottomOnScrollArray.forEach(object => {
        objectRect = object.getBoundingClientRect();
        if (objectRect.bottom > -100 && objectRect.top < window.innerHeight + 100) {
            objectDif = Math.abs((objectRect.top + objectRect.height / 2) - window.innerHeight / 2);
            objectRatio = Math.max(1, Math.min(1.5, objectRect.height * objectRect.width / (window.innerHeight * window.innerWidth)));
            objectClip = (objectDif / window.innerHeight / 2);
            computedObject = window.getComputedStyle(object);
            objectBorderRadius = computedObject.getPropertyValue('border-radius');
            object.style.clipPath = `inset(0 0 ${objectClip * 300}px 0 round ${objectBorderRadius})`
        }
    })
}

window.addEventListener('scroll', animationClipBottomOnScroll);

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

//rotation on scroll

const animationRotateOnScrollArray = document.querySelectorAll(".animation__scroll--rotation");

function animationRotateOnScroll() {
    animationRotateOnScrollArray.forEach(object => {
        objectRect = object.getBoundingClientRect();
        if (objectRect.bottom > -100 && objectRect.top < window.innerHeight + 100) {
            objectDif = ((objectRect.top + objectRect.height / 2) - window.innerHeight / 2);
            objectRatio = Math.max(1, Math.min(1.5, objectRect.height * objectRect.width / (window.innerHeight * window.innerWidth)));
            objectRotation = 1 - (objectDif / window.innerHeight / 2);
            object.style.transform = `rotate(${objectRotation * 45}deg)`
        }

    })
}

window.addEventListener('scroll', animationRotateOnScroll);

//move on scroll

const animationMoveYOnScrollArray = document.querySelectorAll('.animation__scroll-move-y');

function animationMoveYOnScroll() {

    animationMoveYOnScrollArray.forEach((object) => {
        objectRect = object.getBoundingClientRect();
        if (objectRect.bottom > -100 && objectRect.top < window.innerHeight + 100) {
            objectDif = ((objectRect.top + objectRect.height / 2) - window.innerHeight / 2);
            objectRatio = Math.max(1, Math.min(1.5, objectRect.height * objectRect.width / (window.innerHeight * window.innerWidth)));
            objectTransform = 1 - (objectDif / window.innerHeight / 2);
            if (window.innerWidth > 1024) {
                object.style.transform = `translate(0%, ${-50 * objectTransform + 40}%)`
            }
            else if (window.innerWidth > 768) {
                object.style.transform = `translate(0%, ${-50 * objectTransform}%)`
            } else {
                object.style.transform = `translate(0%, ${-50 * objectTransform + 50}%)`
            }
            
        }
    });

}

window.addEventListener('scroll', animationMoveYOnScroll);


const animationMoveYInverseOnScrollArray = document.querySelectorAll('.animation__scroll-move-y-inverse');

function animationMoveYInverseOnScroll() {

    animationMoveYInverseOnScrollArray.forEach((object) => {
        objectRect = object.getBoundingClientRect();
        if (objectRect.bottom > -100 && objectRect.top < window.innerHeight + 100) {
            objectDif = ((objectRect.top + objectRect.height / 2) - window.innerHeight / 2);
            objectRatio = Math.max(1, Math.min(1.5, objectRect.height * objectRect.width / (window.innerHeight * window.innerWidth)));
            objectTransform = (objectDif / window.innerHeight / 2);
            object.style.transform = `translate(0%, ${-250 * objectTransform}%)`
            
        }
    });

}

window.addEventListener('scroll', animationMoveYInverseOnScroll);


// const animationFade = new IntersectionObserver ((entries) => {
//     entries.forEach((entry) => {
//         if (!entry.isIntersecting){
//             return;
//         } else {
//             entryRect = entry.boundingClientRect;
//             entryDif = (entryRect.top + entryRect.height/2) - window.innerHeight / 2;
//             entryOpacity = 1 - (entryDif / window.innerHeight / 2);
//             entry.target.style.opacity = Math.max(0, Math.min(1, entryOpacity));
//             console.log(Math.max(0, Math.min(1, entryOpacity)));
//         }
//     });
// });

// const animationFadeObjects = document.querySelectorAll(".animation--fade");

// animationFadeObjects.forEach((object) => {
//     animationFade.observe(object);
// })

