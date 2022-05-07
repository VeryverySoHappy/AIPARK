var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  loop: true,
  autoplay: {
    delay: 25000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function () {
      $('.swiper-slide').addClass('changed');
      $('.custom-fraction .current').text(this.realIndex + 1);
      $('.custom-fraction .all').text(this.loopedSlides);
    },

    slideChangeTransitionStart: function () {
      $('.swiper-slide').addClass('changing');
      $('.swiper-slide').removeClass('changed');
      $('.custom-fraction .current').text(this.realIndex + 1);
    },

    slideChangeTransitionEnd: function () {
      $('.swiper-slide').removeClass('changing');
      $('.swiper-slide').addClass('changed');
    }
  },
});

// section3 swiper start
var swiper = new Swiper(".section4 .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 90,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})
// section3 swiper end