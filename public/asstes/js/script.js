var swiper = new Swiper('.mySwiper-1', {
  slidesPerView: 1.1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3500,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
var swiper = new Swiper('.hero-slider-js', {
  spaceBetween: 20,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  breakpoints: {
    420: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
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
var swiper = new Swiper('.slider-cat', {
  spaceBetween: 20,
  // loop:true,
  speed: 2000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  breakpoints: {
    420: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    813: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1366: {
      slidesPerView: 5,
    },
    1440: {
      slidesPerView: 5,
    },
    1500: {
      slidesPerView: 5,
    },
    1700: {
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
    clickable: true,
  },
});

var swiper = new Swiper('.carte-slider', {
  spaceBetween: 20,
  // loop:true,
  speed: 2000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  breakpoints: {
    420: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
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

var swiper = new Swiper('.brandslider', {
  spaceBetween: 20,
  // slidesPerView: 1.1,
  // centeredSlides: true,

  // loop:true,
  speed: 1000,
  autoplay: {
    delay: 2000,
    // disableOnInteraction: true,
  },
  breakpoints: {
    420: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    813: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1366: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 4,
    },
    1600: {
      slidesPerView: 4,
    },
  },
});
