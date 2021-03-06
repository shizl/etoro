<?php

/**
 * @file
 * Default theme implementation to display the basic html structure of a single
 * Drupal page.
 *
 * Variables:
 * - $css: An array of CSS files for the current page.
 * - $language: (object) The language the site is being displayed in.
 *   $language->language contains its textual representation.
 *   $language->dir contains the language direction. It will either be 'ltr' or 'rtl'.
 * - $rdf_namespaces: All the RDF namespace prefixes used in the HTML document.
 * - $grddl_profile: A GRDDL profile allowing agents to extract the RDF data.
 * - $head_title: A modified version of the page title, for use in the TITLE
 *   tag.
 * - $head_title_array: (array) An associative array containing the string parts
 *   that were used to generate the $head_title variable, already prepared to be
 *   output as TITLE tag. The key/value pairs may contain one or more of the
 *   following, depending on conditions:
 *   - title: The title of the current page, if any.
 *   - name: The name of the site.
 *   - slogan: The slogan of the site, if any, and if there is no title.
 * - $head: Markup for the HEAD section (including meta tags, keyword tags, and
 *   so on).
 * - $styles: Style tags necessary to import all CSS files for the page.
 * - $scripts: Script tags necessary to load the JavaScript files and settings
 *   for the page.
 * - $page_top: Initial markup from any modules that have altered the
 *   page. This variable should always be output first, before all other dynamic
 *   content.
 * - $page: The rendered page content.
 * - $page_bottom: Final closing markup from any modules that have altered the
 *   page. This variable should always be output last, after all other dynamic
 *   content.
 * - $classes String of classes that can be used to style contextually through
 *   CSS.
 *
 * @see template_preprocess()
 * @see template_preprocess_html()
 * @see template_process()
 *
 * @ingroup themeable
 */
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN"
  "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language; ?>" version="XHTML+RDFa 1.0" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?>>

<head profile="<?php print $grddl_profile; ?>">
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=yes" name="viewport"/>
  <?php print $styles; ?>
  <?php print $scripts; ?>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>

  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
<!--login box js start-->
<script type="text/javascript"> 
 function checkwh(){
        if(jQuery(window).width()>900){
              jQuery(".loginPop").css("max-width","550px"); 
            }
            
          if(jQuery(".popSrc").width()<400){
            jQuery(".popSrc").css("height","80% !important;");
          }else{

            jQuery(".popSrc").css("height","85% !important;");
          }
            if(jQuery(window).height()<550){
              jQuery(".loginPop").css("margin","1% auto");
 
            }else{
              jQuery(".loginPop").css("margin","15% auto");
              
            }

           
            
      }
      jQuery(window).resize(function(){
         checkwh();
      });
    jQuery(window).load(function(){

        checkwh();

    jQuery(".popRegister").click(function(){
      jQuery(this).parent().parent("div").find(".loadform").show();
      jQuery(this).parent().parent("div").find(".titleRegister").show();
      jQuery(this).parent().parent("div").find(".titleLogin").hide();
      jQuery("body").css("overflow","hidden");
      jQuery(this).parent().parent("div").find(".popSrc").attr("src","/<?php echo $GLOBALS['language']->prefix; ?>/pingan_login/mobile/register?refurl="+document.location.href); 
      jQuery(this).parent().parent("div").find(".loginBody").show();

      jQuery(this).parent().parent("div").find(".popSrc").load(function(){
        jQuery(this).parent().parent("div").find(".loadform").hide();
      });   
    });
    jQuery(".popLogin").click(function(){
      jQuery(this).parent().parent("div").find(".loadform").show();
      jQuery(this).parent().parent("div").find(".titleRegister").hide();
      jQuery(this).parent().parent("div").find(".titleLogin").show();
      jQuery("body").css("overflow","hidden");
      jQuery(this).parent().parent("div").find(".popSrc").attr("src","/<?php echo $GLOBALS['language']->prefix; ?>/pingan_login/mobile/login?refurl="+document.location.href);
      jQuery(this).parent().parent("div").find(".loginBody").show();
      jQuery(this).parent().parent("div").find(".popSrc").load(function(){
        jQuery(this).parent().parent("div").find(".loadform").hide();
      });
      
      
    });
    jQuery(".go_etoro_register").click(function(){
       jQuery(this).parent().parent("div").find(".loadform").show();
      jQuery(this).parent().parent("div").find(".titleRegister").show();
      jQuery("body").css("overflow","hidden");
      jQuery(this).parent().parent("div").find(".loginBody").find(".popSrc").attr("src","/<?php echo $GLOBALS['language']->prefix; ?>/pingan_login/etoro_register?refurl="+document.location.href);
      jQuery(this).parent().parent("div").find(".loginBody").show();
      jQuery(this).parent().parent("div").find(".popSrc").load(function(){
        jQuery(this).parent().parent("div").find(".loadform").hide();
      });
    });
    jQuery(".go_etoro").click(function(){
      document.location.href="/<?php echo $GLOBALS['language']->prefix; ?>/pingan_login/etoro_register?refurl="+document.location.href
    });
    jQuery(".go_etoro_account").click(function(){
      window.open("/<?php echo $GLOBALS['language']->prefix; ?>/pingan_login/redirect/toetoro?refurl="+document.location.href,"_blank");
    });
    
    
    jQuery(".popClose").click(function(){
      jQuery("body").css("overflow","auto");
      jQuery(".loginBody").hide();
      jQuery.post("/<?php echo $GLOBALS['language']->prefix; ?>/pingan_login/checklogin",{},function(data){
          if(data==1){
            window.location.reload();
          }
      });
    });
})
</script>
<!--login box js end-->
</body>
</html>
