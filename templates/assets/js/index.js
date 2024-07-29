$(function(){
	var ww = $(window).width();
	
	var swiper0 = new Swiper('.index-banner .swiper-container', {
      	spaceBetween: 30,
      	effect: 'fade',
      	loop: true,
		autoplay: {
		    delay: 4000,//4秒切换一次
		},
      	pagination: {
        	el: '.index-banner .swiper-pagination',
        	clickable: true,
      	},
      	navigation: {
	        nextEl: '.index-banner .swiper-button-next',
	        prevEl: '.index-banner .swiper-button-prev',
	   	},
    });
    
    var swiper1 = new Swiper('.index1 .swiper-container', {
    	slidesPerView: 4,
    	loop: true,
    	breakpoints: { 
		    767: {  //当屏幕宽度大于等于767
		      	slidesPerView: 1,
		    },
		    991: {  //当屏幕宽度大于等于991
		      	slidesPerView: 2,
		    },
		    1199: {  //当屏幕宽度大于等于1199 
		      	slidesPerView: 3,
		    },
		    1449: {  //当屏幕宽度大于等于1449
		      	slidesPerView: 3,
		    }
		},
		autoplay: {
		    delay: 2000,//2秒切换一次
		},
		navigation: {
	        nextEl: '.index1 .swiper-button-next',
	        prevEl: '.index1 .swiper-button-prev',
	   	},
    });
    
    if(ww>=768){
    	var swiper2 = new Swiper('.index6 .swiper-container', {
	    	slidesPerView: 3,
	    	slidesPerColumn: 1,
	    	spaceBetween: 47,
	    	breakpoints: { 
			    767: {  //当屏幕宽度大于等于767
			      	slidesPerView: 1,
			      	slidesPerColumn: 3,
	    			spaceBetween: 20,
			    },
			    991: {  //当屏幕宽度大于等于991
			      	slidesPerView: 2,
			      	slidesPerColumn: 1,
	    			spaceBetween: 20,
			    },
			    1199: {  //当屏幕宽度大于等于1199 
			      	slidesPerView: 3,
			      	slidesPerColumn: 1,
	    			spaceBetween: 20,
			    },
			    1449: {  //当屏幕宽度大于等于1449
			      	slidesPerView: 3,
			      	slidesPerColumn: 1,
	    			spaceBetween: 20,
			    }
			},
			autoplay: {
			    delay: 6000,//6秒切换一次
			},
			navigation: {
		        nextEl: '.index6 .swiper-button-next',
		        prevEl: '.index6 .swiper-button-prev',
		   	},
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