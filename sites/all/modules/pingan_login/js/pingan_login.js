jQuery(window).load(function(){
	jQuery("#popRegister").click(function(){
		jQuery('.titleRegister').show();
		jQuery('.titleLogin').hide();
		
		jQuery("#popSrc").attr('src',"/pingan_login/mobile/register");
		jQuery(".loginPop").show();
	});
	jQuery("#popLogin").click(function(){
		jQuery('.titleRegister').hide();
		jQuery('.titleLogin').show();
		
		jQuery("#popSrc").attr('src',"/pingan_login/mobile/login");
		jQuery(".loginPop").show();
	});
	jQuery("#popClose").click(function(){
		jQuery(".loginPop").hide();
	});
})
