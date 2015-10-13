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
  drupal_set_message(t('Settings saved.'));
}

