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
    '#title' => t('evideo'),
    '#description' => t('evideo'),
    '#default_value' => variable_get('evideo',0),
  );
  $form['ebook'] = array(
    '#type' => 'textarea',
    '#title' => t('ebook'),
    '#description' => t('ebook'),
    '#default_value' => variable_get('ebook',0),
  );
  $form['calender'] = array(
    '#type' => 'textarea',
    '#title' => t('calender'),
    '#description' => t('calender'),
    '#default_value' => variable_get('calender',0),
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
  variable_set('ebook', $form_state['values']['ebook']);
  variable_set('calender', $form_state['values']['calender']);
  drupal_set_message(t('Settings saved.'));
}

