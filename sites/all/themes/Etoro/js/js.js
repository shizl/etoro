


jQuery(document).ready(function(){

jQuery("#block-views-course-description-block .views-row ").each(function(){

     jQuery("#block-views-course-description-block .views-row .views-field-nothing-2").mouseover(function(){
          nid =  jQuery(this).parent().find('.views-field-tid').find('.field-content').text();
          //alert(nid);
        jQuery('#block-views-course-description-block .views-field-field-thumbnail').each(function(){  
		id = jQuery(this).parent().find('.views-field-nothing').find('.field-content').text();
		if(id == nid){
		  jQuery(this).show();	
		}else{
		  jQuery(this).hide();
		}	

            });
       jQuery('#block-views-course-description-block .views-field-description').each(function(){  
		id = jQuery(this).parent().find('.views-field-nothing').find('.field-content').text();
		if(id == nid){
		  jQuery(this).show();	
		}else{
		  jQuery(this).hide();
		}	

            });
       jQuery('#block-views-course-description-block .views-field-nothing-3').each(function(){  
		id = jQuery(this).parent().find('.views-field-nothing').find('.field-content').text();
		if(id == nid){
		  jQuery(this).show();	
		}else{
		  jQuery(this).hide();
		}	

            });
               if (nid == "1"){
                   jQuery(this).parent().css({'background': 'url(sites/all/themes/Etoro/images/jiantou0.png) no-repeat 490px 38px'});  
                   jQuery(this).parent().parent().find('.views-row-2').css({'background':'none'});
                   jQuery(this).parent().parent().find('.views-row-3').css({'background':'none'});
                              }
               if (nid == "2"){
                   jQuery(this).parent().css({'background': 'url(sites/all/themes/Etoro/images/jiantou1.png) no-repeat 490px 38px'});  
                   jQuery(this).parent().parent().find('.views-row-1').css({'background':'none'});
                   jQuery(this).parent().parent().find('.views-row-3').css({'background':'none'});
                              }
               if (nid == "3"){
                   jQuery(this).parent().css({'background': 'url(sites/all/themes/Etoro/images/jiantou2.png) no-repeat 490px 38px'});  
                   jQuery(this).parent().parent().find('.views-row-1').css({'background':'none'});
                   jQuery(this).parent().parent().find('.views-row-2').css({'background':'none'});
                              }
                
              if (nid == "11"){
                   jQuery(this).parent().css({'background': 'url(sites/all/themes/Etoro/images/jiantou0.png) no-repeat 490px 38px'});  
                   jQuery(this).parent().parent().find('.views-row-2').css({'background':'none'});
                   jQuery(this).parent().parent().find('.views-row-3').css({'background':'none'});
                              }
              if (nid == "12"){
                   jQuery(this).parent().css({'background': 'url(sites/all/themes/Etoro/images/jiantou1.png) no-repeat 490px 38px'});  
                   jQuery(this).parent().parent().find('.views-row-1').css({'background':'none'});
                   jQuery(this).parent().parent().find('.views-row-3').css({'background':'none'});
                              }
              if (nid == "13"){
                   jQuery(this).parent().css({'background': 'url(sites/all/themes/Etoro/images/jiantou2.png) no-repeat 490px 38px'});  
                   jQuery(this).parent().parent().find('.views-row-1').css({'background':'none'});
                   jQuery(this).parent().parent().find('.views-row-2').css({'background':'none'});
                              }
                
});
       
});

  jQuery("#block-block-4 .information-title .news").click(function(){
    jQuery(this).addClass("active");
    jQuery(this).parent().find(".article").removeClass("active");
    jQuery("#block-views-information-block").hide();
    jQuery("#block-views-information-block-1").show();

});
  jQuery("#block-block-4 .information-title .article").click(function(){
    jQuery(this).addClass("active");
    jQuery(this).parent().find(".news").removeClass("active");
    jQuery("#block-views-information-block").show();
    jQuery("#block-views-information-block-1").hide();

});



jQuery('#main-menu ul li').each(function(){

  if(jQuery(this).find('a').text().trim()=='Courses' || jQuery(this).find('a').text().trim()=='课程简介'){
      output = jQuery('#menu-category').html();
      jQuery(this).append(output);

if(jQuery("body").width()>481){

     jQuery(this).mouseover(function(){
	jQuery('#main-menu-links .view-menu-category').show();
     });
     jQuery(this).mouseout(function(){
	jQuery('#main-menu-links .view-menu-category').hide();
     });

}else{

  jQuery(this).click(function(){

   jQuery('#main-menu-links .view-menu-category').toggle();

  });
}

  }

});  


if(jQuery("body").width()>481){


jQuery('#main-menu-links .view-menu-category  .views-field-name a').mouseover(function(){


 jQuery('#main-menu-links .view-menu-category .views-row-first .views-field-field-thumbnail').hide();
 jQuery(this).parent().parent().parent().find('.views-field-field-thumbnail').show();

});

jQuery('#main-menu-links .view-menu-category  .views-field-name a').mouseout(function(){

 jQuery(this).parent().parent().parent().find('.views-field-field-thumbnail').hide();

jQuery('#main-menu-links .view-menu-category .views-row-first .views-field-field-thumbnail').show();

});

}

jQuery('.reorder').click(function(){

 jQuery('#main-menu').toggle();

});

});



