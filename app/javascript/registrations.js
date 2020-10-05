$(function(){
	$(window).scroll(function (){
			$('.list').each(function(){
					var elemPos = jQuery(this).offset().top;
					var scroll = jQuery(window).scrollTop();
					var windowHeight = jQuery(window).height();
					if (scroll > elemPos - windowHeight + 100){
							$(this).addClass('scrollin');
					}
			});
	});
	$(window).scroll();
});