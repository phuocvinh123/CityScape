document.addEventListener("DOMContentLoaded", function () {
  var countElement = document.querySelector(".count-animate");

  var targetNumber = 4000;
  var currentNumber = 0;
  var increment = Math.ceil(targetNumber / 100);

  var interval = setInterval(function () {
    countElement.textContent = currentNumber.toLocaleString() + "+";

    if (currentNumber >= targetNumber) {
      clearInterval(interval);
    }

    currentNumber += increment;
  }, 10);
});

// import { animationSlide } from "./gasp.ts";

const setupSwiper = () => {
  console.log(123123);
  const defaultSetting = {
    loop: true,
    autoHeight: true,
    spaceBetween: 30,
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   clickable: true
    // },
    // on: {
    //   init: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
    //   slideChangeTransitionStart: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
    // },
    autoplay: {
      delay: 5000,
    },
  };
  // new Swiper(".mySwiper", {
  //   ...defaultSetting,
  //   slidesPerView: 3,
  // });

  new Swiper(".mySwiper", {
    ...defaultSetting,
    slidesPerView: 3,
    navigation: false,
  });

  new Swiper(".mySwiperContent", {
    ...defaultSetting,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  });
};
setupSwiper();
