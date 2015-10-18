
<div id="page-wrapper"><div id="page">

  <div id="header" class="<?php print $secondary_menu ? 'with-secondary-menu': 'without-secondary-menu'; ?>"><div class="section clearfix">

    <?php if ($logo): ?>
      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
        <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
      </a>
    <?php endif; ?>
   <div id="logo2"><img src="/sites/all/themes/Etoro/images/pinan.png"></div>
    
    <?php print render($page['header']); ?>

    

    

  </div>
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
       </div>
      </div> <!-- /#main-menu -->
    <?php endif; ?>
</div> <!-- /.section, /#header -->

<div id="banner"><?php print render($page['banner']); ?> 
<div class="responsive-slider" data-spy="responsive-slider" data-autoplay="true">
        <div class="slides" data-group="slides">
      		<ul>

	 <?php 
	   $fids = db_query("select field_banner_image_fid from {field_data_field_banner_image} where bundle = 'banner' and entity_type = 'node' ");
           //echo '<pre>';
	   //print_r($fids);exit;
		foreach($fids as $fid){
		   $file = file_load($fid->field_banner_image_fid);
		   $url = file_create_url($file->uri);

		   echo '<li>
              		<div class="slide-body" data-group="slide">
                	<img src="'.$url.'">
              		</div>
  	    		</li>';
		}

 	?>
  	    	</ul>
        </div>

        <div class="pages">
          <a class="page" href="#" data-jump-to="1">1</a>
          <a class="page" href="#" data-jump-to="2">2</a>
          <a class="page" href="#" data-jump-to="3">3</a>
        </div>
    	</div>




</div>
<div id="feature"><div class="section clearfix"><?php print render($page['feature']); ?> </div></div>
  <?php if ($messages): ?>
    <div id="messages"><div class="section clearfix">
      <?php print $messages; ?>
    </div></div> <!-- /.section, /#messages -->
  <?php endif; ?>

  <div id="highlighted"><div class="section clearfix"><?php print render($page['highlighted']); ?></div></div>
 <div id="content-top"><div class="section clearfix"><?php print render($page['content-top']); ?></div> </div>
  <div id="main-wrapper" class="clearfix"><div id="main" class="clearfix">

    <?php if ($breadcrumb): ?>
      <div id="breadcrumb"><?php print $breadcrumb; ?></div>
    <?php endif; ?>

   
    
    <div id="content" class="column"><div class="section">
      
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        
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
      

    </div></div> <!-- /.section, /#content -->

    

  </div></div> <!-- /#main, /#main-wrapper -->

 <div id="content-bottom"><div class="section clearfix"><?php print render($page['content-bottom']); ?></div> </div>

  <div id="footer-wrapper"><div class="section">

    

    <?php if ($page['footer']): ?>
      <div id="footer" class="clearfix">
        <?php print render($page['footer']); ?>
      </div> 
      </div>
         <div id="footer-bottom"><?php print render($page['footer-bottom']); ?></div>
    <?php endif; ?>

  </div> <!-- /.section, /#footer-wrapper -->

</div></div> <!-- /#page, /#page-wrapper -->
<script src="/sites/all/themes/Etoro/js/jquery.js"></script>
 <script src="/sites/all/themes/Etoro/js/jquery.event.move.js"></script>
    <script src="/sites/all/themes/Etoro/js/responsive-slider.js"></script>
