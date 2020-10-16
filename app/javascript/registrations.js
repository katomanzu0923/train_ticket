$(function () {
  //nicknameバリデーション
  $(".nickname_blank").on("keyup", function () {
    let value = $(this).val();
    if (value == "" || value.length > 25) {
			$(".nickname_error").addClass("revise_errors");
			$(".nickname_ok").removeClass("nickname_ok_re");
    }else{
			$(".revise_errors").removeClass("revise_errors");
			$(".nickname_ok").addClass("nickname_ok_re");
		}
  });
});

$(function () {
  //ageバリデーション
  $(".age_blank").on("keyup", function () {
    //let error;
    let value = $(this).val();
    if (value == "" || !value.match(/^[0-9]+$/)) {
			$(".age_error").addClass("age_errors");
			$(".age_ok").removeClass("age_ok_re");
    }else{
			$(".age_errors").removeClass("age_errors");
			$(".age_ok").addClass("age_ok_re");
		}
  });
});

$(function () {
  //nationalityバリデーション
  $(".nationality_select").on("change", function () {
    //let error;
      $(".nationality_ok").addClass("nationality_ok_re");
		})
});
$(function () {
  //emailバリデーション
  $(".email_blank").on("keyup", function () {
    let value = $(this).val();
    if (value == "" || !value.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+$/)) {
			$(".email_error").addClass("email_errors");
			$(".email_ok").removeClass("email_ok_re");
    }else{
			$(".email_errors").removeClass("email_errors");
			$(".email_ok").addClass("email_ok_re");
		}
  });
});

$(function () {
  //passwordバリデーション
  $(".password_blank").on("keyup", function () {
    //let error;
    let value = $(this).val();
    if (value == "" || !value.match(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i)) {
			$(".password_error").addClass("password_errors");
			$(".password_ok").removeClass("password_ok_re");
    }else{
			$(".password_errors").removeClass("password_errors");
			$(".password_ok").addClass("password_ok_re");
		}
  });
});

$(function () {
  //password_comバリデーション
  $(".password_com_blank").on("keyup", function () {
    //let error;
		let value = $(this).val();
		let same  = $(".password_blank").val();
    if (value == "" || value !== same) {
			$(".password_com_error").addClass("password_com_errors");
			$(".password_com_ok").removeClass("password_com_ok_re");
    }else{
			$(".password_com_errors").removeClass("password_com_errors");
			$(".password_com_ok").addClass("password_com_ok_re");
		}
  });
});

//fadeinアクション
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