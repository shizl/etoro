

jQuery(window).load(function(){


  jQuery('.jcarousel-container .views-field-php').each(function(){


   if(jQuery(this).find('.field-content').text()=='lock'){
     jQuery(this).css({'background':'url(/sites/all/themes/Etoro/images/lock.png) no-repeat 0 0'});
     jQuery(this).parent().append('<div class="bg" style="background:rgba(0,0,0,0.3); width:100%;height:85%;position: absolute;top:0px;"></div>');
   }else{
     jQuery(this).hide();
   }

  });




jQuery("#block-views-course-description-block .views-row ").each(function(){


 if(jQuery("body").width()>830){

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



if(jQuery("body").width()>1150){
               if (nid == "1"){
                   jQuery(this).parent().css({'background': 'url(/sites/all/themes/Etoro/images/jiantou0.png) no-repeat 490px 38px'});  
                   jQuery(this).parent().parent().find('.views-row-2').css({'background':'none'});
                   jQuery(this).parent().parent().find('.views-row-3').css({'background':'none'});
                              }
               if (nid == "2"){
                   jQuery(this).parent().css({'background': 'url(/sites/all/themes/Etoro/images/jiantou1.png) no-repeat 490px 38px'});  
                   jQuery(this).parent().parent().find('.views-row-1').css({'background':'none'});
                   jQuery(this).parent().parent().find('.views-row-3').css({'background':'none'});
                              }
               if (nid == "3"){
                   jQuery(this).parent().css({'background': 'url(/sites/all/themes/Etoro/images/jiantou2.png) no-repeat 490px 38px'});  
                   jQuery(this).parent().parent().find('.views-row-1').css({'background':'none'});
                   jQuery(this).parent().parent().find('.views-row-2').css({'background':'none'});
                              }
                
              if (nid == "11"){
                   jQuery(this).parent().css({'background': 'url(/sites/all/themes/Etoro/images/jiantou0.png) no-repeat 490px 38px'});  
                   jQuery(this).parent().parent().find('.views-row-2').css({'background':'none'});
                   jQuery(this).parent().parent().find('.views-row-3').css({'background':'none'});
                              }
              if (nid == "12"){
                   jQuery(this).parent().css({'background': 'url(/sites/all/themes/Etoro/images/jiantou1.png) no-repeat 490px 38px'});  
                   jQuery(this).parent().parent().find('.views-row-1').css({'background':'none'});
                   jQuery(this).parent().parent().find('.views-row-3').css({'background':'none'});
                              }
              if (nid == "13"){
                   jQuery(this).parent().css({'background': 'url(/sites/all/themes/Etoro/images/jiantou2.png) no-repeat 490px 38px'});  
                   jQuery(this).parent().parent().find('.views-row-1').css({'background':'none'});
                   jQuery(this).parent().parent().find('.views-row-2').css({'background':'none'});
                              }
      }         
});
       
}else{

     jQuery("#block-views-course-description-block .views-row .views-field-nothing-2").click(function(){

   	jQuery(this).parent().find('.views-field-description').toggle();
   	//jQuery(this).parent().find('.views-field-field-thumbnail').toggle();
   	//jQuery(this).parent().find('.views-field-nothing-3').toggle();


    if(jQuery(this).parent().find('.views-field-description').is(':visible')){

 	jQuery(this).css({'background-image':'url("/sites/all/themes/Etoro/images/shang1.png")','background-position': '99% center','background-repeat': 'no-repeat'});
   
   }else{
 	jQuery(this).css({'background-image':'url("/sites/all/themes/Etoro/images/xia1.png")','background-position':'99% center','background-repeat':'no-repeat'});
   }


     });

}


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

if(jQuery("body").width()>1150){

     jQuery(this).mouseover(function(){
	jQuery('#main-menu-links .view-menu-category').show();
     });
     jQuery(this).mouseout(function(){
	jQuery('#main-menu-links .view-menu-category').hide();
     });

}else{

 jQuery(this).css({'background':'url("/sites/all/themes/Etoro/images/xia.png") no-repeat scroll right 13px'});

  jQuery(this).click(function(){

   jQuery('#main-menu-links .view-menu-category').toggle();

   if(jQuery('#main-menu-links .view-menu-category').is(':visible')){

 	jQuery(this).css({'background':'url("/sites/all/themes/Etoro/images/shang.png") no-repeat scroll right 13px'});
   
   }else{
 	jQuery(this).css({'background':'url("/sites/all/themes/Etoro/images/xia.png") no-repeat scroll right 13px'});
   }


  });
}

  }

});  


if(jQuery("body").width()>1150){


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

//jQuery(window).resize(function(){

//    location.href=location.href;
//});

var top = 0;


var item_height = 0;

jQuery('#block-course-outline .item').each(function(){

  item_height +=113;

});

 items  =  jQuery('#block-course-outline #items').height();

if(parseInt(item_height)-16 < items || parseInt(item_height)-16 == items ){
  jQuery('#block-course-outline #next').hide();
  jQuery('#block-course-outline #prve').hide();
}

jQuery('#block-course-outline #prve').click(function(){
 
   h = jQuery('#block-course-outline .item:eq(0)').css("marginTop").replace('px', '');
  
   if(h<0){
   top += 113;
   jQuery('#block-course-outline .item:eq(0)').css({'margin-top':top+'px'});

    }
 });

jQuery('#block-course-outline #next').click(function(){

h = jQuery('#block-course-outline .item:eq(0)').css("marginTop").replace('px', '');


if(parseInt(item_height-16) + parseInt(h) > items ){

top  -= 113;
   jQuery('#block-course-outline .item:eq(0)').css({'margin-top':top+'px'});

}


 });


});






