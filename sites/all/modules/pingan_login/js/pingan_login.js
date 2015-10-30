jQuery(window).load(function(){
	jQuery(".popRegister").click(function(){
		jQuery('.titleRegister').show();
		jQuery('.titleLogin').hide();
		jQuery("body").css("overflow","hidden");

		jQuery(".loginBody").find(".popSrc").attr('src',"/pingan_login/mobile/register?refurl="+document.location.href);
		jQuery(".loginBody").show();
		
	});
	jQuery(".popLogin").click(function(){
		jQuery('.titleRegister').hide();
		jQuery('.titleLogin').show();
		jQuery("body").css("overflow","hidden");
		jQuery(".loginBody").find(".popSrc").attr('src',"/pingan_login/mobile/login?refurl="+document.location.href);
		jQuery(".loginBody").show();
		
	});
	jQuery(".go_etoro_register").click(function(){
		jQuery('.titleRegister').show();
		jQuery("body").css("overflow","hidden");
		jQuery(".loginBody").find(".popSrc").attr('src',"/pingan_login/etoro_register?refurl="+document.location.href);
	
		jQuery(".loginBody").show();
	});
	jQuery(".go_etoro").click(function(){
		document.location.href="/pingan_login/etoro_register?refurl="+document.location.href
	});
	jQuery(".go_etoro_account").click(function(){
		document.location.href="/pingan_login/redirect/toetoro?refurl="+document.location.href
	});
	
	
	jQuery(".popClose").click(function(){
		jQuery("body").css("overflow","auto");
		jQuery(".loginBody").hide();
	});
})
