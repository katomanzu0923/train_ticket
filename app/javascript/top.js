//日本語ボタン
$(function() {
	$(".top_jp_path").on("mouseover", function() {
		$(this).css({"filter": "opacity(0%)"})
		$(".top_jp_click_path").css({"filter": "opacity(100%)"})
		$(".top_en_path").css({"filter": "opacity(30%)"})
		$(".top_zh_path").css({"filter": "opacity(30%)"})
	}).on("mouseout", function() {
		$(this).css({"filter": "opacity(100%)"})
		$(".top_en_path").css({"filter": "opacity(100%)"})
		$(".top_zh_path").css({"filter": "opacity(100%)"})
		$(".top_jp_click_path").css({"filter": "opacity(100%)"})
		$(".click_jp_top").fadeOut(500);
	})
});
//英語ボタン
$(function() {
	$(".top_en_path").on("mouseover", function() {
		$(this).css({"filter": "opacity(0%)"})
		$(".top_en_click_path").css({"filter": "opacity(100%)"})
		$(".top_jp_path").css({"filter": "opacity(30%)"})
		$(".top_jp_click_path").css({"filter": "opacity(0%)"})
		$(".top_zh_path").css({"filter": "opacity(30%)"})
		$(".top_zh_click_path").css({"filter": "opacity(0%)"})
		$(".top_jp_main_message").css({"filter": "opacity(0%)"})
		$(".top_jp_sub_message").css({"filter": "opacity(0%)"})
		$(".top_en_main_message").css({"filter": "opacity(100%)"})
		$(".top_en_sub_message").css({"filter": "opacity(100%)"})
		$(".top_jp_icon").css({"filter": "opacity(0%)"})
		$(".top_en_icon").css({"filter": "opacity(100%)"})
		$(".top_jp_2_icon").css({"filter": "opacity(0%)"})
		$(".top_en_2_icon").css({"filter": "opacity(100%)"})	
		$(".nav_toggle i").css({"background-color":"rgba(255, 0, 0, 0.438)"})
		$(".jp_header").css({"border-bottom": "thick double rgba(255, 0, 0, 0.438)"})
		$(".top_jp_background").fadeOut(0);
		$(".top_zh_background").fadeOut(0);
		$(".top_en_background").fadeIn(0);
	}).on("mouseout", function() {
		$(this).css({"filter": "opacity(300%)"})
		$(".top_jp_path").css({"filter": "opacity(100%)"})
		$(".top_zh_path").css({"filter": "opacity(100%)"})
		$(".top_en_click_path").css({"filter": "opacity(0%)"})
		$(".top_jp_main_message").css({"filter": "opacity(100%)"})
		$(".top_jp_sub_message").css({"filter": "opacity(100%)"})
		$(".top_en_main_message").css({"filter": "opacity(0%)"})
		$(".top_en_sub_message").css({"filter": "opacity(0%)"})
		$(".top_jp_icon").css({"filter": "opacity(100%)"})
		$(".top_en_icon").css({"filter": "opacity(0%)"})
		$(".top_jp_2_icon").css({"filter": "opacity(100%)"})
		$(".top_en_2_icon").css({"filter": "opacity(0%)"})
		$(".nav_toggle i").css({"background-color":"rgba(0, 0, 128, 0.295)"})
		$(".jp_header").css({"border-bottom": "thick double rgba(0, 0, 128, 0.295)"})
		$(".top_jp_background").fadeIn(0);
		$(".top_en_background").fadeOut(0);
	})
});
//中国語ボタン
$(function() {
	$(".top_zh_path").on("mouseover", function() {
		$(this).css({"filter": "opacity(0%)"})
		$(".top_zh_click_path").css({"filter": "opacity(100%)"})
		$(".top_jp_path").css({"filter": "opacity(30%)"})
		$(".top_jp_click_path").css({"filter": "opacity(0%)"})
		$(".top_en_path").css({"filter": "opacity(30%)"})
		$(".top_en_click_path").css({"filter": "opacity(0%)"})
		$(".top_jp_main_message").css({"filter": "opacity(0%)"})
		$(".top_jp_sub_message").css({"filter": "opacity(0%)"})
		$(".top_zh_main_message").css({"filter": "opacity(100%)"})
		$(".top_zh_sub_message").css({"filter": "opacity(100%)"})
		$(".top_jp_icon").css({"filter": "opacity(0%)"})
		$(".top_jp_2_icon").css({"filter": "opacity(0%)"})
		$(".top_zh_icon").css({"filter": "opacity(100%)"})
		$(".top_zh_2_icon").css({"filter": "opacity(100%)"})
		$(".nav_toggle i").css({"background-color":"rgba(255, 255, 0, 0.452)"})
		$(".jp_header").css({"border-bottom": "thick double rgba(255, 255, 0, 0.452)"})
		$(".top_jp_background").fadeOut(0);
		$(".top_zh_background").fadeIn(0);
	}).on("mouseout", function() {
		$(this).css({"filter": "opacity(300%)"})
		$(".top_jp_path").css({"filter": "opacity(100%)"})
		$(".top_en_path").css({"filter": "opacity(100%)"})
		$(".top_jp_main_message").css({"filter": "opacity(100%)"})
		$(".top_jp_sub_message").css({"filter": "opacity(100%)"})
		$(".top_zh_main_message").css({"filter": "opacity(0%)"})
		$(".top_zh_sub_message").css({"filter": "opacity(0%)"})
		$(".top_jp_icon").css({"filter": "opacity(100%)"})
		$(".top_jp_2_icon").css({"filter": "opacity(100%)"})
		$(".top_zh_icon").css({"filter": "opacity(0%)"})
		$(".top_zh_2_icon").css({"filter": "opacity(0%)"})
		$(".nav_toggle i").css({"background-color":"rgba(0, 0, 128, 0.295)"})
		$(".jp_header").css({"border-bottom": "thick double rgba(0, 0, 128, 0.295)"})
		$(".top_jp_background").fadeIn(0);
	})
});
//ハンバーガーメニュー
$(function(){
	$(".nav_toggle").on("click", function () {
		$(".nav_toggle, .nav").toggleClass("show")
		$(".top").toggleClass("top_fil")
	})
});


