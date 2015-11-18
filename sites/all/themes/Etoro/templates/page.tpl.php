
<div id="page-wrapper"><div id="page">
<!-- <div id="header-top"><div class="section clearfix" > <?php print render($page['header-top']); ?></div>  </div> -->
  <div id="header" class="<?php print $secondary_menu ? 'with-secondary-menu': 'without-secondary-menu'; ?>"><div style="height:90px;" class="section clearfix">

    <?php if ($logo): ?>
      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
        <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
      </a>
    <?php endif; ?>
    

 <?php if ($site_name || $site_slogan): ?>
      <div id="name-and-slogan"<?php if ($hide_site_name && $hide_site_slogan) { print ' class="element-invisible"'; } ?>>

        

        <?php if ($site_slogan): ?>
          <div id="site-slogan"<?php if ($hide_site_slogan) { print ' class="element-invisible"'; } ?>>
            <?php print $site_slogan; ?>
          </div>
        <?php endif; ?>

      </div> <!-- /#name-and-slogan -->
    <?php endif; ?>

    <?php print render($page['header']); ?>
  </div>

<?php global $language;  ?>


<div id="mobile-menu"> <a class="reorder" href="#"><i class="icon-reorder"></i></a> | <a class="get_user" href="#"><i class="icon-user"></i></a> | <?php echo $language->prefix=='en'?'<a class="zh-lan" href="/cn">中文</a>':'<a class="en-lan" href="/en">EN</a>'; ?> </div>

<?php if ($main_menu): ?>
      <div id="main-menu" class="navigation">
        <div class="section clearfix">
        <?php print theme('links__system_main_menu', array(
          'links' => $main_menu,
          'attributes' => array(
            'id' => 'main-menu-links',
            'class' => array('links', 'clearfix'),
          ),
          'heading' => array(
            'text' => t('Main menu'),
            'level' => 'h2',
            'class' => array('element-invisible'),
          ),
        )); ?>

<?php 
	$language_block = module_invoke('locale', 'block_view', 'language'); 
	print render($language_block['content']);
	
 ?>

       </div>


<div id="menu-category" style="display:none;">
<?php
  $category = module_invoke('views', 'block_view', 'menu_category-block');
  print render($category['content']);
 ?>
</div>

      </div> <!-- /#main-menu -->

<div class="user_info"></div>

    <?php endif; ?>
</div> <!-- /.section, /#header -->
<div id="banner"><?php print render($page['banner']); ?> </div>
<div id="feature"><div class="section clearfix"><?php print render($page['feature']); ?> </div></div>
  <?php if ($messages): ?>
    <div id="messages"><div class="section clearfix">
      <?php print $messages; ?>
    </div></div> <!-- /.section, /#messages -->
  <?php endif; ?>

  



  <div id="main-wrapper" class="clearfix"><div id="main" class="clearfix">

    <?php if ($breadcrumb): ?>
      <div id="breadcrumb"><?php
global $language;

 	if($language->language=="en"){
 	 $home =  '<a href="/en">Home</a>';
	}else{
    	$home = '<a href="/cn">首页</a>';
	}

if(isset($node)&&$node->type=="elesson"){
  
$course_id = db_query('select nid from {{course_outline}} where instance = '.$node->nid.'')->fetchField();
$course_data=node_load($course_id);
//print_r($course_data->title);exit;
print '<div class="breadcrumb">
<span class="inline odd first">'.$home.'</span> 
<span class="delimiter">»</span>
<span class= "inline even">'.$course_data->title.'</span>
<span class="delimiter">»</span>
<span class="inline even last">'.$node->title.'</span>
</div>';

}else
{ print $breadcrumb;}

 ?></div>
    <?php endif; ?>

   
    <div id="content-top"><div class="section clearfix"><?php print render($page['content-top']); ?></div> </div>
    

   <div id="content" class="column">

      
    
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <h1 class="title" id="page-title">
          <?php print $title; ?>
        </h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php if ($tabs): ?>
        <div class="tabs">
          <?php print render($tabs); ?>
        </div>
      <?php endif; ?>
     
      <?php if ($action_links): ?>
        <ul class="action-links">
          <?php print render($action_links); ?>
        </ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
      <?php print $feed_icons; ?>

    </div> <!-- /.section, /#content -->
<div id="Right-Sidebar" class="column sidebar">
        <?php print render($page['Right-Sidebar']); ?>
      </div> 
    

  </div></div> <!-- /#main, /#main-wrapper -->

 <div id="content-bottom"><div class="section clearfix">
<?php print render($page['content-bottom']); ?>

<?php if(!empty($node) && ($node->type == 'elesson' || $node->type =='course')): ?>

<?php  
$block =module_invoke('pingan_login', 'block_view', 'pingan_login_box') ; ?>
<div id="block-pingan-login-pingan-login-box" class="course-bottom">
<div class="content">

<h2><?php print render($block['title']); ?></h2>
<?php print render($block['content']); ?> 
</div>
</div>
<?php endif ?>

</div>
</div>

  <div id="footer-wrapper"><div class="section">

    

    <?php if ($page['footer']): ?>
      <div id="footer" class="clearfix">
        <?php print render($page['footer']); ?>
      </div> 
      </div>
<div id="footer-bottom"><?php print render($page['footer-bottom']); ?></div>

    <?php endif; ?>

  </div></div> <!-- /.section, /#footer-wrapper -->

</div></div> <!-- /#page, /#page-wrapper -->
