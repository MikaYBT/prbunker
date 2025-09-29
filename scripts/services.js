// document.addEventListener('DOMContentLoaded', function () {
//   const info = document.querySelector('.services__info');
//   const section = document.querySelector('.services');
//   const infoHeight = info.offsetHeight;

//   function onScroll() {
//     const sectionRect = section.getBoundingClientRect();
//     const windowHeight = window.innerHeight;

//     if (sectionRect.top > windowHeight / 2 - infoHeight / 2) {
//       // Before section reaches center
//       info.classList.remove('services__info--fixed');
//     } else if (sectionRect.bottom < windowHeight / 2 + infoHeight / 2) {
//       // After section leaves center
//       info.classList.remove('services__info--fixed');
//     } else {
//       // While section is in center
//       info.classList.add('services__info--fixed');
//     }
//   }

//   window.addEventListener('scroll', onScroll);
//   window.addEventListener('resize', onScroll);
//   onScroll();
// });