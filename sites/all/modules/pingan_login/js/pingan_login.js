jQuery(window).load(function(){
	jQuery(".popRegister").click(function(){
		jQuery('.titleRegister').show();
		jQuery('.titleLogin').hide();
		
		jQuery(this).parent().find(".popSrc").attr('src',"/pingan_login/mobile/register");
		jQuery(this).parent().find(".loginBody").show();
	});
	jQuery(".popLogin").click(function(){
		jQuery('.titleRegister').hide();
		jQuery('.titleLogin').show();
		
		jQuery(this).parent().find(".popSrc").attr('src',"/pingan_login/mobile/login");
		jQuery(this).parent().find(".loginBody").show();
	});
	jQuery(".popClose").click(function(){
		jQuery(this).parent().parent(".loginBody").hide();
	});
})
