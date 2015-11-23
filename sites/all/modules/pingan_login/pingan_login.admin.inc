<?php

/**
 * @file
 *   Admin callbacks and helper function for pingan_login.
 */

/**
 * Admin settings form.
 */
function pingan_login_settings_form($form, &$form_state) {
  

  $form['pingan_appid'] = array(
    '#type' => 'textfield',
    '#title' => t('Pingan AppId'),
    '#description' => t('Pingan AppId'),
    '#default_value' => variable_get('pingan_appid',0),
  );
  $form['pingan_key'] = array(
    '#type' => 'textfield',
    '#title' => t('Pingan Key'),
    '#description' => t('Pingan Key'),
    '#default_value' => variable_get('pingan_key',0),
  );
 
 /* $form['pingan_register_pc_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Pingan register pc url'),
    '#description' => t('Pingan register pc url'),
    '#default_value' => variable_get('pingan_register_pc_url',0),
  );
  $form['pingan_login_pc_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Pingan login pc url'),
    '#description' => t('Pingan login pc url'),
    '#default_value' => variable_get('pingan_login_pc_url',0),
  );*/
   $form['pingan_register_mobile_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Pingan register mobile url'),
    '#description' => t('Pingan register mobile url'),
    '#default_value' => variable_get('pingan_register_mobile_url',0),
  );
  
   $form['pingan_login_mobile_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Pingan login mobile url'),
    '#description' => t('Pingan login mobile url'),
    '#default_value' => variable_get('pingan_login_mobile_url',0),
  );
    $form['pingan_login_etoro_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Pingan etoro register url'),
    '#description' => t('Pingan etoro register url'),
    '#default_value' => variable_get('pingan_login_etoro_url',0),
  );
    

  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Save settings'),
  );

  return $form;
}

/**
 * Submit the settings form
 */
function pingan_login_settings_form_submit($form, &$form_state) {
  variable_set('pingan_appid', $form_state['values']['pingan_appid']);
  variable_set('pingan_key', $form_state['values']['pingan_key']);
 // variable_set('pingan_register_pc_url', $form_state['values']['pingan_register_pc_url']);
  variable_set('pingan_register_mobile_url', $form_state['values']['pingan_register_mobile_url']);
 // variable_set('pingan_login_pc_url', $form_state['values']['pingan_login_pc_url']);
  variable_set('pingan_login_mobile_url', $form_state['values']['pingan_login_mobile_url']);
  variable_set('pingan_login_etoro_url', $form_state['values']['pingan_login_etoro_url']);
   variable_set('pingan_affiliate_variable', $form_state['values']['pingan_affiliate_variable']);
  drupal_set_message(t('Settings saved.'));
}

/**
 * Admin settings form.
 */
function pingan_login_affiliate_settings_form($form, &$form_state) {

  $form['pingan_affiliate_variable'] = array(
    '#type' => 'textfield',
    '#title' => t('Affiliate variable'),
    '#default_value' => variable_get('pingan_affiliate_variable',""),
  );

 $form['pingan_affiliate_count_reset'] = array(
    '#type' => 'checkbox',
    '#title' => t('Affiliate Count Reset'),
    '#default_value' => "reset_count",
  );
    $form['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Save settings'),
    
  );

/* update pingan_affiliate_variable_filter */

  $form['pingan_affiliate_variable_filter'] = array(
    '#type' => 'textfield',
    '#title' => t('Affiliate variable filter'),
    '#default_value' => variable_get('pingan_affiliate_variable_filter',0),
  );

  $form['filter_button'] = array(
    '#type' => 'button',

    '#value' => t('Filter Count'),
     '#ajax' => array(
      'callback' => 'affiliate_variable_ajax_callback',
      'wrapper' => 'affiliate-count-wrapper',
    ),
  );
  $form['affiliate_count_wrapper']= array(
    '#prefix' => '<div id="affiliate-count-wrapper">',
    '#suffix' => '</div>',
    '#theme' => 'poll_choices',
  );
  $form['affiliate_count_wrapper']['pingan_affiliate_count'] = array(
    '#type' => 'textfield',
    '#title' => t('Count Level One'),
    '#disabled'=>true,
    '#default_value' => variable_get('pingan_affiliate_count',""),
  );

  $form['affiliate_count_wrapper']['pingan_affiliate_allcount'] = array(
    '#type' => 'textfield',
    '#title' => t('Count All'),
    '#disabled'=>true,
    '#default_value' => variable_get('pingan_affiliate_allcount',""),
  );
  return $form;
}
/**
 * Submit the settings form
 */
function pingan_login_affiliate_settings_form_submit($form, &$form_state) {
  variable_set('pingan_affiliate_variable', $form_state['values']['pingan_affiliate_variable']);
  if($form_state['values']['pingan_affiliate_count_reset']==1){
    variable_set('pingan_affiliate_cur_count', 0);
  }
  drupal_set_message(t('Settings saved.'));

}
/**
 * Submit the settings form
 */
function affiliate_variable_ajax_callback($form, &$form_state) {
  variable_set('pingan_affiliate_variable_filter', $form_state['values']['pingan_affiliate_variable_filter']);

  $form['affiliate_count_wrapper']['pingan_affiliate_count'] = array(
    '#type' => 'textfield',
    '#title' => t('Count Level One'),
    '#disabled'=>true,
    '#value' =>$form_state['values']['pingan_affiliate_variable_filter'] !="" ? affiliate_count($form_state['values']['pingan_affiliate_variable_filter'],'1'):0,
  );

  $form['affiliate_count_wrapper']['pingan_affiliate_allcount'] = array(
    '#type' => 'textfield',
    '#title' => t('Count All'),
    '#disabled'=>true,
    '#value' =>$form_state['values']['pingan_affiliate_variable_filter'] !="" ? affiliate_count($form_state['values']['pingan_affiliate_variable_filter']):0,,
  );
  return $form['affiliate_count_wrapper'];
}


/**
*get affiliate_count
*
*/
function affiliate_count($cat="",$type='all'){
  $count=0;
   $count=db_query("SELECT count(`entity_id`) FROM `field_data_field_affiliateid` WHERE `field_affiliateid_value`='".$cat."'")->fetchField();
  if($type=='1'){
      $count=db_query("SELECT count(`entity_id`) FROM `field_data_field_type_of_id` WHERE `entity_id` in (SELECT `entity_id` FROM `field_data_field_affiliateid` WHERE `field_affiliateid_value`='".$cat."') and `field_type_of_id`='1'")->fetchField();
  }
  return $count;

}
