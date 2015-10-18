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

});
