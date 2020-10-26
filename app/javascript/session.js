//emailバリデーション
$(function () {
  $(".email_blank").on("keyup", function () {
    let value = $(this).val();
    if (value == "" || !value.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+$/)) {
			$(".session_email_error").addClass("session_email_errors");
			$(".session_email_ok").css({"filter": "opacity(0%)"});
    }else{
			$(".session_email_errors").removeClass("session_email_errors");
			$(".session_email_ok").css({"filter": "opacity(100%)"});
		}
	});
	
	//passwordバリデーション 
	$(".password_blank").on("keyup", function () {
    let value = $(this).val();
    if (value == "" || !value.match(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i)) {
			$(".session_password_error").addClass("session_password_errors");
			$(".session_password_ok").css({"filter": "opacity(0%)"});
    }else{
			$(".session_password_error").removeClass("session_password_errors");
			$(".session_password_ok").css({"filter": "opacity(100%)"});
		}
  });
});