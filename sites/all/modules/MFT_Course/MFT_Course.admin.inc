<?php

/**
 * @file
 *   Admin callbacks and helper function for MFT_Course.
 */

/**
 * Admin settings form.
 */
function MFT_Course_settings_form($form, &$form_state) {
  

  $form['SingleVideo'] = array(
    '#type' => 'textarea',
    '#title' => t('SingleVideo'),
    '#description' => t('SingleVideo'),
    '#default_value' => variable_get('SingleVideo',0),
  );
  $form['SlideVideo'] = array(
    '#type' => 'textarea',
    '#title' => t('SlideVideo'),
    '#description' => t('SlideVideo'),
    '#default_value' => variable_get('SlideVideo',0),
  );

  $form['ebook'] = array(
    '#type' => 'textarea',
    '#title' => t('ebook'),
    '#description' => t('ebook'),
    '#default_value' => variable_get('SlideVideo',0),
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
  variable_set('SlideVideo', $form_state['values']['SlideVideo']);
  variable_set('SingleVideo', $form_state['values']['SingleVideo']);
  variable_set('ebook', $form_state['values']['ebook']);
  
  drupal_set_message(t('Settings saved.'));
}

