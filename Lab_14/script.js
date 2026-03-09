
const heroSwiper = new Swiper(".heroSwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});
const testimonialsSwiper = new Swiper(".testimonialsSwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});