//北海道エリア
$(function () {
  $(".hokkaido_map").on("mouseover", function () {
		$(".ja_select_message").css({"filter": "opacity(0%)"})
		$(".ja_hokkaido_click_message").css({"filter": "opacity(100%)"})
		$(".zh_select_message").css({"filter": "opacity(0%)"})
		$(".zh_hokkaido_click_message").css({"filter": "opacity(100%)"})
		$(".en_select_message").css({"filter": "opacity(0%)"})
		$(".en_hokkaido_click_message").css({"filter": "opacity(100%)"})
		$(".area_top_back-image").css({ "filter": "opacity(100%)" });
		$(".jp_map").css({ "filter": "opacity(100%)"})
		$(this).css({ "filter": "opacity(0%)"})
		$(".hokkaido_back").css({ "filter": "opacity(100%)"})
  }).on("mouseout", function () {
		$(".ja_select_message").css({"filter": "opacity(100%)"})
		$(".ja_hokkaido_click_message").css({"filter": "opacity(0%)"})
		$(".zh_select_message").css({"filter": "opacity(100%)"})
		$(".zh_hokkaido_click_message").css({"filter": "opacity(0%)"})
		$(".en_select_message").css({"filter": "opacity(100%)"})
		$(".en_hokkaido_click_message").css({"filter": "opacity(0%)"})
		$(".area_back-image").css({ "filter": "opacity(0%)" });
	  $(".jp_map").css({ "filter": "opacity(100%)"})
		$(this).css({ "filter": "opacity(100%)"})
		$(".area_top_back-image").css({"filter": "opacity(100%)"})
		$(".hokkaido_back").css({ "filter": "opacity(0%)"})
	})
});
//東北エリア
$(function () {
  $(".tohoku_map").on("mouseover", function () {
		$(".ja_select_message").css({"filter": "opacity(0%)"})
		$(".ja_tohoku_click_message").css({"filter": "opacity(100%)"})
		$(".zh_select_message").css({"filter": "opacity(0%)"})
		$(".zh_tohoku_click_message").css({"filter": "opacity(100%)"})
		$(".en_select_message").css({"filter": "opacity(0%)"})
		$(".en_tohoku_click_message").css({"filter": "opacity(100%)"})
		$(".area_top_back-image").css({ "filter": "opacity(100%)" });
		$(".jp_map").css({ "filter": "opacity(100%)"})
		$(this).css({"filter": "opacity(0%)"})
		$(".tohoku_back").css({ "filter": "opacity(100%)"})
  }).on("mouseout", function () {
		$(".ja_select_message").css({"filter": "opacity(100%)"})
		$(".ja_tohoku_click_message").css({"filter": "opacity(0%)"})
		$(".zh_select_message").css({"filter": "opacity(100%)"})
		$(".zh_tohoku_click_message").css({"filter": "opacity(0%)"})
		$(".en_select_message").css({"filter": "opacity(100%)"})
		$(".en_tohoku_click_message").css({"filter": "opacity(0%)"})
		$(".jp_map").css({ "filter": "opacity(100%)"})
		$(this).css({"filter": "opacity(100%)"})
		$(".area_top_back-image").css({"filter": "opacity(100%)"})
		$(".tohoku_back").css({ "filter": "opacity(0%)"})
	})
});
//関東エリア
$(function () {
  $(".kanto_map").on("mouseover", function () {
		$(".ja_select_message").css({"filter": "opacity(0%)"})
		$(".ja_kanto_click_message").css({"filter": "opacity(100%)"})
		$(".zh_select_message").css({"filter": "opacity(0%)"})
		$(".zh_kanto_click_message").css({"filter": "opacity(100%)"})
		$(".en_select_message").css({"filter": "opacity(0%)"})
		$(".en_kanto_click_message").css({"filter": "opacity(100%)"})
		$(".area_top_back-image").css({ "filter": "opacity(100%)" });
		$(".jp_map").css({ "filter": "opacity(100%)"})
		$(this).css({"filter": "opacity(0%)"})
		$(".kanto_back").css({ "filter": "opacity(100%)"})
  }).on("mouseout", function () {
		$(".ja_select_message").css({"filter": "opacity(100%)"})
		$(".ja_kanto_click_message").css({"filter": "opacity(0%)"})
		$(".zh_select_message").css({"filter": "opacity(100%)"})
		$(".zh_kanto_click_message").css({"filter": "opacity(0%)"})
		$(".en_select_message").css({"filter": "opacity(100%)"})
		$(".en_kanto_click_message").css({"filter": "opacity(0%)"})
		$(".jp_map").css({ "filter": "opacity(100%)"})
		$(this).css({"filter": "opacity(100%)"})
		$(".area_top_back-image").css({"filter": "opacity(100%)"})
		$(".kanto_back").css({ "filter": "opacity(0%)"})
	})
});
//北陸エリア
$(function () {
  $(".hokuriku_map").on("mouseover", function () {
		$(".ja_select_message").css({"filter": "opacity(0%)"})
		$(".ja_hokuriku_click_message").css({"filter": "opacity(100%)"})
		$(".zh_select_message").css({"filter": "opacity(0%)"})
		$(".zh_hokuriku_click_message").css({"filter": "opacity(100%)"})
		$(".en_select_message").css({"filter": "opacity(0%)"})
		$(".en_hokuriku_click_message").css({"filter": "opacity(100%)"})
		$(".area_top_back-image").css({ "filter": "opacity(0%)" });
		$(".jp_map").css({ "filter": "opacity(100%)"})
		$(this).css({"filter": "opacity(0%)"})
		$(".hokuriku_back").css({ "filter": "opacity(100%)"})
  }).on("mouseout", function () {
		$(".ja_select_message").css({"filter": "opacity(100%)"})
		$(".ja_hokuriku_click_message").css({"filter": "opacity(0%)"})
		$(".zh_select_message").css({"filter": "opacity(100%)"})
		$(".zh_hokuriku_click_message").css({"filter": "opacity(0%)"})
		$(".en_select_message").css({"filter": "opacity(100%)"})
		$(".en_hokuriku_click_message").css({"filter": "opacity(0%)"})
		$(".jp_map").css({ "filter": "opacity(100%)"})
		$(this).css({"filter": "opacity(100%)"})
		$(".area_top_back-image").css({"filter": "opacity(100%)"})
		$(".hokuriku_back").css({ "filter": "opacity(0%)"})
	})
});
//東海エリア
$(function () {
  $(".tokai_map").on("mouseover", function () {
		$(".ja_select_message").css({"filter": "opacity(0%)"})
		$(".ja_tokai_click_message").css({"filter": "opacity(100%)"})
		$(".zh_select_message").css({"filter": "opacity(0%)"})
		$(".zh_tokai_click_message").css({"filter": "opacity(100%)"})
		$(".en_select_message").css({"filter": "opacity(0%)"})
		$(".en_tokai_click_message").css({"filter": "opacity(100%)"})
		$(".area_top_back-image").css({ "filter": "opacity(100%)" });
		$(this).css({ "filter": "opacity(0%)"})
		$(".tokai_back").css({ "filter": "opacity(100%)"})
  }).on("mouseout", function () {
		$(".ja_select_message").css({"filter": "opacity(100%)"})
		$(".ja_tokai_click_message").css({"filter": "opacity(0%)"})
		$(".zh_select_message").css({"filter": "opacity(100%)"})
		$(".zh_tokai_click_message").css({"filter": "opacity(0%)"})
		$(".en_select_message").css({"filter": "opacity(100%)"})
		$(".en_tokai_click_message").css({"filter": "opacity(0%)"})
		$(".jp_map").css({ "filter": "opacity(100%)"})
		$(this).css({"filter": "opacity(1000%)"})
		$(".area_top_back-image").css({"filter": "opacity(100%)"})
		$(".tokai_back").css({ "filter": "opacity(0%)"})
	})
});
//関西エリア
$(function () {
  $(".kansai_map").on("mouseover", function () {
		$(".ja_select_message").css({"filter": "opacity(0%)"})
		$(".ja_kansai_click_message").css({"filter": "opacity(100%)"})
		$(".zh_select_message").css({"filter": "opacity(0%)"})
		$(".zh_kansai_click_message").css({"filter": "opacity(100%)"})
		$(".en_select_message").css({"filter": "opacity(0%)"})
		$(".en_kansai_click_message").css({"filter": "opacity(100%)"})
		$(".area_top_back-image").css({ "filter": "opacity(100%)" });
		$(".jp_map").css({ "filter": "opacity(100%)"})
		$(this).css({"filter": "opacity(0%)"})
		$(".kansai_back").css({ "filter": "opacity(100%)"})
  }).on("mouseout", function () {
		$(".ja_select_message").css({"filter": "opacity(100%)"})
		$(".ja_kansai_click_message").css({"filter": "opacity(0%)"})
		$(".zh_select_message").css({"filter": "opacity(100%)"})
		$(".zh_kansai_click_message").css({"filter": "opacity(0%)"})
		$(".en_select_message").css({"filter": "opacity(100%)"})
		$(".en_kansai_click_message").css({"filter": "opacity(0%)"})
		$(".jp_map").css({ "filter": "opacity(100%)"})
		$(this).css({"filter": "opacity(1000%)"})
		$(".area_top_back-image").css({"filter": "opacity(100%)"})
		$(".kansai_back").css({ "filter": "opacity(0%)"})
	})
});
//中国エリア
$(function () {
  $(".chugoku_map").on("mouseover", function () {
		$(".ja_select_message").css({"filter": "opacity(0%)"})
		$(".ja_chugoku_click_message").css({"filter": "opacity(100%)"})
		$(".zh_select_message").css({"filter": "opacity(0%)"})
		$(".zh_chugoku_click_message").css({"filter": "opacity(100%)"})
		$(".en_select_message").css({"filter": "opacity(0%)"})
		$(".en_chugoku_click_message").css({"filter": "opacity(100%)"})
		$(".area_top_back-image").css({ "filter": "opacity(100%)" });
		$(".jp_map").css({ "filter": "opacity(100%)"})
		$(this).css({"filter": "opacity(0%)"})
		$(".chugoku_back").css({ "filter": "opacity(100%)"})
  }).on("mouseout", function () {
		$(".ja_select_message").css({"filter": "opacity(100%)"})
		$(".ja_chugoku_click_message").css({"filter": "opacity(0%)"})
		$(".zh_select_message").css({"filter": "opacity(100%)"})
		$(".zh_chugoku_click_message").css({"filter": "opacity(0%)"})
		$(".en_select_message").css({"filter": "opacity(100%)"})
		$(".en_chugoku_click_message").css({"filter": "opacity(0%)"})
		$(".jp_map").css({ "filter": "opacity(100%)"})
		$(this).css({"filter": "opacity(1000%)"})
		$(".area_top_back-image").css({"filter": "opacity(100%)"})
		$(".chugoku_back").css({ "filter": "opacity(0%)"})
	})
});
//四国エリア
$(function () {
  $(".sikoku_map").on("mouseover", function () {
		$(".ja_select_message").css({"filter": "opacity(0%)"})
		$(".ja_sikoku_click_message").css({"filter": "opacity(100%)"})
		$(".zh_select_message").css({"filter": "opacity(0%)"})
		$(".zh_sikoku_click_message").css({"filter": "opacity(100%)"})
		$(".en_select_message").css({"filter": "opacity(0%)"})
		$(".en_sikoku_click_message").css({"filter": "opacity(100%)"})
		$(".area_top_back-image").css({ "filter": "opacity(100%)" });
		$(".jp_map").css({ "filter": "opacity(100%)"})
		$(this).css({"filter": "opacity(0%)"})
		$(".sikoku_back").css({ "filter": "opacity(100%)"})
  }).on("mouseout", function () {
		$(".ja_select_message").css({"filter": "opacity(100%)"})
		$(".ja_sikoku_click_message").css({"filter": "opacity(0%)"})
		$(".zh_select_message").css({"filter": "opacity(100%)"})
		$(".zh_sikoku_click_message").css({"filter": "opacity(0%)"})
		$(".en_select_message").css({"filter": "opacity(100%)"})
		$(".en_sikoku_click_message").css({"filter": "opacity(0%)"})
		$(".jp_map").css({ "filter": "opacity(100%)"})
		$(this).css({"filter": "opacity(100%)"})
		$(".area_top_back-image").css({"filter": "opacity(100%)"})
		$(".sikoku_back").css({ "filter": "opacity(0%)"})
	})
});
//九州エリア
$(function () {
  $(".kyusyu_map").on("mouseover", function () {
		$(".ja_select_message").css({"filter": "opacity(0%)"})
		$(".ja_kyusyu_click_message").css({"filter": "opacity(100%)"})
		$(".zh_select_message").css({"filter": "opacity(0%)"})
		$(".zh_kyusyu_click_message").css({"filter": "opacity(100%)"})
		$(".en_select_message").css({"filter": "opacity(0%)"})
		$(".en_kyusyu_click_message").css({"filter": "opacity(100%)"})
		$(".area_top_back-image").css({ "filter": "opacity(100%)" });
		$(".jp_map").css({ "filter": "opacity(100%)"})
		$(this).css({"filter": "opacity(0%)"})
		$(".kyusyu_back").css({ "filter": "opacity(100%)"})
  }).on("mouseout", function () {
		$(".ja_select_message").css({"filter": "opacity(100%)"})
		$(".ja_kyusyu_click_message").css({"filter": "opacity(0%)"})
		$(".zh_select_message").css({"filter": "opacity(100%)"})
		$(".zh_kyusyu_click_message").css({"filter": "opacity(0%)"})
		$(".en_select_message").css({"filter": "opacity(100%)"})
		$(".en_kyusyu_click_message").css({"filter": "opacity(0%)"})
		$(".jp_map").css({ "filter": "opacity(100%)"})
		$(this).css({"filter": "opacity(100%)"})
		$(".area_top_back-image").css({"filter": "opacity(100%)"})
		$(".kyusyu_back").css({ "filter": "opacity(0%)"})
	})
});