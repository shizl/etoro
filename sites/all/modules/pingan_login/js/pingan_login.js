jQuery(window).load(function(){
	jQuery(".popRegister").click(function(){
		jQuery('.titleRegister').show();
		jQuery('.titleLogin').hide();
		jQuery("body").css("overflow","hidden");
		jQuery(this).parent().find(".popSrc").attr('src',"/pingan_login/mobile/register");
		jQuery(this).parent().find(".loginBody").show();
		
	});
	jQuery(".popLogin").click(function(){
		jQuery('.titleRegister').hide();
		jQuery('.titleLogin').show();
		jQuery("body").css("overflow","hidden");
		jQuery(this).parent().find(".popSrc").attr('src',"/pingan_login/mobile/login");
		jQuery(this).parent().find(".loginBody").show();
		
	});
	jQuery(".go_etoro_register").click(function(){
		jQuery('.titleRegister').show();
		jQuery("body").css("overflow","hidden");
		jQuery(this).parent().find(".loginBody").show();
	});
	
	jQuery(".popClose").click(function(){
		jQuery("body").css("overflow","auto");
		jQuery(this).parent().parent(".loginBody").hide();
	});
})
