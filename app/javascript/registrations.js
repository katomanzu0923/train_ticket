jQuery(function(){
	jQuery(window).scroll(function (){
			jQuery('.list').each(function(){
					var elemPos = jQuery(this).offset().top;
					var scroll = jQuery(window).scrollTop();
					var windowHeight = jQuery(window).height();
					if (scroll > elemPos - windowHeight + 100){
							jQuery(this).addClass('scrollin');
					}
			});
	});
	jQuery(window).scroll();
});