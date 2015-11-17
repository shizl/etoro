<?php

/**
 * @file
 *   Admin callbacks and helper function for MFT_Course.
 */

/**
 * Admin settings form.
 */
function MFT_Course_settings_form($form, &$form_state) {
  

  
  
  $form['evideo'] = array(
    '#type' => 'textarea',
    '#title' => t('Normal evideo'),
    '#description' => t('normal evideo'),
    '#default_value' => variable_get('evideo',0),
  );
 $form['vodevideo'] = array(
    '#type' => 'textarea',
    '#title' => t('VOD evideo'),
    '#description' => t('vod evideo'),
    '#default_value' => variable_get('vodevideo',0),
  );

  $form['ebook'] = array(
    '#type' => 'textarea',
    '#title' => t('ebook'),
    '#description' => t('ebook'),
    '#default_value' => variable_get('ebook',0),
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
function MFT_Course_settings_form_submit($form, &$form_state) {
  variable_set('evideo', $form_state['values']['evideo']);
  variable_set('vodevideo', $form_state['values']['vodevideo']);
  variable_set('ebook', $form_state['values']['ebook']);
  
  drupal_set_message(t('Settings saved.'));
}

