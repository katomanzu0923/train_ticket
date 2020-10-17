//info alert(zh)
$(function (){
	$(document).ready( function(){
		let url = location.pathname
		if (url == "/tokai_info") {
			$(".info_zh_alert").hide().slideDown(500);
		}
	})
});

$(function(){
	$(".info_zh_alert_sub").on("click", function(){
		$(".info_zh_alert").slideUp(500);
	})
});

//info alert(en)
$(function (){
	$(document).ready( function(){
		let url = location.pathname
		if (url == "/tokai_info") {
			$(".info_en_alert").hide().slideDown(500);
		}
	})
});

$(function(){
	$(".info_en_alert_sub").on("click", function(){
		$(".info_en_alert").slideUp(500);
	})
});

