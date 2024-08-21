$(function(){
    var ww = $(window).width();

    $(".foundry3-list").panel({iWheelStep:32});

    var swiper0 = new Swiper('.foundry2-swiper .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 33,
        breakpoints: {
            767: {  //当屏幕宽度大于等于767
                slidesPerView: 2,
                spaceBetween: 15,
                slidesPerColumn: 2,
            },
            991: {  //当屏幕宽度大于等于991
                slidesPerView: 2,
            },
            1199: {  //当屏幕宽度大于等于1199
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1449: {  //当屏幕宽度大于等于1449
                slidesPerView: 4,
                spaceBetween: 20,
            }
        },
        autoplay: {
            delay: 5000,//5秒切换一次
        },
        navigation: {
            nextEl: '.foundry2-swiper .swiper-button-next',
            prevEl: '.foundry2-swiper .swiper-button-prev',
        },
    });

    var swiper1 = new Swiper('.foundry3-swiper .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            767: {  //当屏幕宽度大于等于767
                slidesPerView: 2,
                spaceBetween: 15,
            }
        },
        autoplay: {
            delay: 5000,//5秒切换一次
        },
        scrollbar: {
            el: '.foundry3-swiper .swiper-scrollbar',
        },
    });

    if(ww>=1200){
        $('.foundry3-list ul li').click(function(){
            var _src = $(this).children('img').attr('src');
            var _title = $(this).children('img').attr('title');
            $(this).addClass('active').siblings().removeClass('active');
            $('.foundry3-left .left-img img').attr('src',_src);
            $('.foundry3-left span').text(_title);
        });
    }else{
        $('.foundry3-swiper a').click(function(){
            var _src = $(this).children('img').attr('src');
            var _title = $(this).children('img').attr('title');
            $(this).addClass('active');
            $(this).parent('.swiper-slide').siblings().children('a').removeClass('active');
            $('.foundry3-left .left-img img').attr('src',_src);
            $('.foundry3-left span').text(_title);
        });
    };

    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 100,
        mobile: true,
        live: true,
    });
    wow.init();
})