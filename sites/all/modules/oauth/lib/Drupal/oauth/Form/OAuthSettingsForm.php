<?php

/**
 * @file
 * Contains \Drupal\oauth\Form\OAuthSettingsForm.
 */

namespace Drupal\oauth\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Config\ConfigFactory;
use Drupal\Core\Config\Context\ContextInterface;
use Drupal\Core\Path\AliasManagerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a deletion confirmation form for the block instance deletion form.
 */
class OAuthSettingsForm extends ConfigFormBase {

  /**
   * Constructs an OAuthSettingsForm object.
   */
  public function __construct(ConfigFactory $config_factory, ContextInterface $context){
    parent::__construct($config_factory, $context);
  }


  /**
   * {@inheritdoc}
   */
  public static function create (ContainerInterface $container){
    return new static(
      $container->get('config.factory'),
      $container->get('config.context.free')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getFormID() {
    return 'oauth_admin_form';
  }

  /**
   * Form builder.
   */
  public function buildForm(array $form, array &$form_state){

    $config = $this->configFactory->get('oauth.settings');

    $form = array();

    $form['request_token_lifetime'] = array(
      '#type' => 'textfield',
      '#title' => t('Request token lifetime (in seconds)'),
      '#default_value' => $config->get('request_token_lifetime'),
    );

    $form['login_path'] = array(
      '#type' => 'textfield',
      '#title' => t('Login page'),
      '#description' => t('Specify an alternative login page. This is useful when, for example, you want to show a mobile-enhanced login page.'),
      '#default_value' => $config->get('login_path'),
    );

    $form['#submit'][] = array($this, 'submitForm');

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, array &$form_state) {
    parent::validateForm($form, $form_state);

    if (!intval($form_state['values']['request_token_lifetime'], 10)) {
      form_set_error('oauth_request_token_lifetime', t('The request token lifetime must be a non-zero integer value.'));
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, array &$form_state) {
    parent::submitForm($form, $form_state);

    $config = $this->configFactory->get('oauth.settings')
      ->set('request_token_lifetime',$form_state['values']['request_token_lifetime'])
      ->set('login_path',$form_state['values']['login_path'])
    ->save();
  }

}
