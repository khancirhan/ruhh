import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('#exploreSwiper', {
    spaceBetween: 16,
    slidesPerView: 1,
    breakpoints: {
        // when window width is >= 320px
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
});
