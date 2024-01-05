
//СВАЙПЕР
window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  resizableSwiper("(max-width: 767px)", ".slider-1", {
    loop: false,
    spaceBetween: 16,
    slidesPerView: 1.3,
    pagination: {
      el: ".section-brands__swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      340: {
        slidesPerView: 1.3,
      },
      360: {
         slidesPerView: 1.5 
        },
      450:{ slidesPerView: 2,},
      550:{ slidesPerView: 2.3,},
      570: { slidesPerView: 2 },
      650:{ slidesPerView: 2.8,},
      700:{ slidesPerView: 4,}
    },
  });
});

// КНОПКА
let expendedContent = document.querySelector('.swiper');
let openButton = document.querySelector('.section-brands-button');
let textButton = document.querySelector('.brands-button_text');
let svgArrows = document.querySelector('.brands-button__svg-arrows');
let check= false;

openButton.addEventListener('click', function (evt) {
  if (!check){
  expendedContent.classList.add('brands__swiper--hidden');
  textButton.textContent= "Скрыть";
  svgArrows.classList.add('brands-button__svg-arrows--hide');
 check=true;
} else {
  expendedContent.classList.remove('brands__swiper--hidden');
  textButton.textContent= "Показать все"; 
  check=false;
  svgArrows.classList.remove('brands-button__svg-arrows--hide');
}}
);
