$(function(){
    var swiper0 = new Swiper('.details-swiper .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 13,
        autoplay: {
            delay: 5000,//5秒切换一次
        },
        navigation: {
            nextEl: '.details-swiper .swiper-button-next',
            prevEl: '.details-swiper .swiper-button-prev',
        },
    });
})