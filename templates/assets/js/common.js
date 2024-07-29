$(function(){
	$('header .header-icon').click(function(){
		var tc = $(this).parent('header').attr('class');
		if(tc=='header-click'){
			$(this).parent('header').removeClass('header-click');
		}else{
			$(this).parent('header').addClass('header-click');
		};
	});
	
	$('.chat-online .chat-button').click(function(){
		$(this).siblings('.chat-content').fadeIn();
	});
	
	$('.chat-content span').click(function(){
		$(this).parent('.chat-content').hide();
	});
	
	$(window).scroll(function(){
		roll();
	});
	roll();
	function roll(){
		if($(window).scrollTop()>50){
			$('header').addClass('header-roll');
		}else{
			$('header').removeClass('header-roll');
		};
	};
})