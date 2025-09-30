formCallButtons = document.querySelectorAll(".cta");
modalForm = document.querySelector(".modal-form");
formCloseButton = document.querySelector(".modal-form__close-button");

formCallButtons.forEach(btn => { 
    btn.addEventListener('click', ()=> {
        modalForm.classList.add('modal-form--active')
    })
});

formCloseButton.addEventListener("click", () => {
    modalForm.classList.remove("modal-form--active")
})