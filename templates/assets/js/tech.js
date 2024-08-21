$(function(){
    var ww = $(window).width();

    $(".tech2-list").panel({iWheelStep:32});

    $('.tech2-list ul li').click(function(){
        var _src = $(this).children('img').attr('src');
        var _title = $(this).children('img').attr('title');
        $(this).addClass('active').siblings().removeClass('active');
        $('.tech2-left .left-img img').attr('src',_src);
        $('.tech2-left span').text(_title);
    });

    var swiper0 = new Swiper('.tech2-swiper .swiper-container', {
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
            el: '.tech2-swiper .swiper-scrollbar',
        },
    });

    if(ww>=1200){
        $('.tech2-list ul li').click(function(){
            var _src = $(this).children('img').attr('src');
            var _title = $(this).children('img').attr('title');
            $(this).addClass('active').siblings().removeClass('active');
            $('.tech2-left .left-img img').attr('src',_src);
            $('.tech2-left span').text(_title);
        });
    }else{
        $('.tech2-swiper a').click(function(){
            var _src = $(this).children('img').attr('src');
            var _title = $(this).children('img').attr('title');
            $(this).addClass('active');
            $(this).parent('.swiper-slide').siblings().children('a').removeClass('active');
            $('.tech2-left .left-img img').attr('src',_src);
            $('.tech2-left span').text(_title);
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