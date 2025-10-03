const formCallButtons = document.querySelectorAll(".cta");
const modalForm = document.querySelector(".modal-form");
const formCloseButton = document.querySelector(".modal-form__close-button");
const modalFormOverlay = document.querySelector(".modal-form__overlay")


formCallButtons.forEach(btn => { 
    btn.addEventListener('click', ()=> {
        modalForm.classList.add('modal-form--active')
        modalFormOverlay.classList.add('modal-form__overlay--active')
    })
});

formCloseButton.addEventListener("click", () => {
    modalForm.classList.remove("modal-form--active")
     modalFormOverlay.classList.remove('modal-form__overlay--active')
})

modalFormOverlay.addEventListener("click", ()=>{
     modalForm.classList.remove("modal-form--active")
     modalFormOverlay.classList.remove('modal-form__overlay--active')
    
})