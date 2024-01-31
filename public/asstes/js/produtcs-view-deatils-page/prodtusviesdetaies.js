const swiper = new Swiper('.mySwiper', {
  spaceBetween: 10,
  breakpoints: {
    420: {
      slidesPerView: 4,
    },
    640: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
    },
    813: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1366: {
      slidesPerView: 5,
    },
    1440: {
      slidesPerView: 5,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// var swiper = new Swiper(".mySwiper", {
//   cssMode: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   mousewheel: true,
//   keyboard: true,
// });
