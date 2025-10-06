
//Fade on scroll

const animationFadeOnScrollArray = document.querySelectorAll(".animation__scroll--fade");

function animationFadeOnScroll() {
    animationFadeOnScrollArray.forEach(object => {
        objectRect = object.getBoundingClientRect();
        if (objectRect.bottom > -100 && objectRect.top < window.innerHeight + 100) {
            objectDif = Math.abs((objectRect.top + objectRect.height / 2) - window.innerHeight / 2) / (window.innerHeight / 2);
            objectRatio = Math.max(1, objectRect.height * objectRect.width / (window.innerHeight * window.innerWidth));
            objectOpacity = objectRatio*3 - objectDif*1.8 - (window.innerHeight/objectRect.height)/3
            console.log(objectRatio)
            object.style.opacity = objectOpacity 
        }
    });
};

window.addEventListener('scroll', animationFadeOnScroll);

const animationFadeInverseOnScrollArray = document.querySelectorAll(".animation__scroll--fade-inverse");

function animationFadeInverseOnScroll() {
    animationFadeInverseOnScrollArray.forEach(object => {
        objectRect = object.getBoundingClientRect();
        if (objectRect.bottom > -100 && objectRect.top < window.innerHeight + 100) {
            objectDif = Math.abs((objectRect.top + objectRect.height / 2) - window.innerHeight / 2)  / (window.innerHeight / 2);
            objectRatio = Math.max(1, objectRect.height * objectRect.width / (window.innerHeight * window.innerWidth));
            objectOpacity = objectDif/1.5
            console.log(objectRatio)
            object.style.opacity = objectOpacity 
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
