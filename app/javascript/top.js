//日本語ボタン
$(function() {
	$(".top_jp_path").on("mouseover", function() {
		$(this).css({"filter": "opacity(100%)"})
		$(".top_en_path").css({"filter": "opacity(30%)"})
		$(".top_zh_path").css({"filter": "opacity(30%)"})
			//$(".click_jp_top").slideDown();
	}).on("mouseout", function() {
		$(this).css({"filter": "opacity(300%)"})
		$(".top_en_path").css({"filter": "opacity(100%)"})
		$(".top_zh_path").css({"filter": "opacity(100%)"})
			//$(".click_jp_top").fadeOut(500);
	})
});
//英語ボタン
$(function() {
	$(".top_en_path").on("mouseover", function() {
		$(this).css({"filter": "opacity(100%)"})
		$(".top_jp_path").css({"filter": "opacity(30%)"})
		$(".top_zh_path").css({"filter": "opacity(30%)"})
		$(".top_jp_message").css({"filter": "opacity(0%)"})
		$(".top_en_message").css({"filter": "opacity(100%)"})
		$(".top_jp_background").fadeOut(0);
		$(".top_zh_background").fadeOut(0);
		$(".top_en_background").fadeIn(0);
	}).on("mouseout", function() {
		$(this).css({"filter": "opacity(300%)"})
		$(".top_jp_path").css({"filter": "opacity(100%)"})
		$(".top_zh_path").css({"filter": "opacity(100%)"})
		$(".top_jp_message").css({"filter": "opacity(100%)"})
		$(".top_en_message").css({"filter": "opacity(0%)"})
		$(".top_jp_background").fadeIn(0);
		$(".top_en_background").fadeOut(0);
	})
});
//中国語ボタン
$(function() {
	$(".top_zh_path").on("mouseover", function() {
		$(this).css({"filter": "opacity(100%)"})
		$(".top_jp_path").css({"filter": "opacity(30%)"})
		$(".top_en_path").css({"filter": "opacity(30%)"})
		$(".top_zh_message").css({"filter": "opacity(100%)"})
		$(".top_jp_message").css({"filter": "opacity(0%)"})
		$(".top_jp_background").fadeOut(0);
		$(".top_zh_background").fadeIn(0);
	}).on("mouseout", function() {
		$(this).css({"filter": "opacity(300%)"})
		$(".top_jp_path").css({"filter": "opacity(100%)"})
		$(".top_en_path").css({"filter": "opacity(100%)"})
		$(".top_jp_message").css({"filter": "opacity(100%)"})
		$(".top_zh_message").css({"filter": "opacity(0%)"})
		$(".top_jp_background").fadeIn(0);
	})
});

