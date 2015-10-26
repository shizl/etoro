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
 /* $options=array("0"=> t('PC'),"1"=> t('Mobile'));
  $form['pingan_login_type'] = array(
    '#type' => 'select',
    '#title' => t('Pingan developer model'),
    '#options' => $options,
    '#default_value' => variable_get('pingan_login_type',0),
  );*/
  $form['pingan_register_pc_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Pingan register pc url'),
    '#description' => t('Pingan register pc url'),
    '#default_value' => variable_get('pingan_register_pc_url',0),
  );
   $form['pingan_register_mobile_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Pingan register mobile url'),
    '#description' => t('Pingan register mobile url'),
    '#default_value' => variable_get('pingan_register_mobile_url',0),
  );
  $form['pingan_login_pc_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Pingan login pc url'),
    '#description' => t('Pingan login pc url'),
    '#default_value' => variable_get('pingan_login_pc_url',0),
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
  variable_set('pingan_register_pc_url', $form_state['values']['pingan_register_pc_url']);
  variable_set('pingan_register_mobile_url', $form_state['values']['pingan_register_mobile_url']);
  variable_set('pingan_login_pc_url', $form_state['values']['pingan_login_pc_url']);
  variable_set('pingan_login_mobile_url', $form_state['values']['pingan_login_mobile_url']);
  variable_set('pingan_login_etoro_url', $form_state['values']['pingan_login_etoro_url']);
  drupal_set_message(t('Settings saved.'));
}

