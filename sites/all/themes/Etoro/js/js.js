jQuery(document).ready(function(){

jQuery("#block-views-course-description-block .views-row ").each(function(){

     jQuery("#block-views-course-description-block .views-row .views-field-name").click(function(){
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

  jQuery("#block-block-1 .information3 .news").click(function(){

    jQuery("#block-views-information-block").hide();
    jQuery("#block-views-information2-block").show();

});
  jQuery("#block-block-1 .information3 .article").click(function(){

    jQuery("#block-views-information-block").show();
    jQuery("#block-views-information2-block").hide();

});

});
