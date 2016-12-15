<!doctype html>
<html class="no-js" lang="">
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title><?php wp_title( '|', true, 'right' ); ?></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- <link rel="apple-touch-icon" href="apple-touch-icon.png"> -->
  <link rel="icon" href="<?php bloginfo('template_directory'); ?>/images/favicon.ico">
  <!-- Place favicon.ico in the root directory -->

  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  <header class="header">
    <img class="logo" src="<?php bloginfo('template_directory'); ?>/images/logo.gif" alt="Jay Skript and the Domsters" />
  </header>
  <?php
  $defaults = array(
  	'theme_location'  => 'main-menu',
  	'menu'            => '',
  	'container'       => 'nav',
  	'container_class' => '',
  	'container_id'    => '',
  	'menu_class'      => 'main-nav',
  	'menu_id'         => '',
  	'echo'            => true,
  	'fallback_cb'     => 'wp_page_menu',
  	'before'          => '',
  	'after'           => '',
  	'link_before'     => '',
  	'link_after'      => '',
  	'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
  	'depth'           => 0,
  	'walker'          => ''
  );

  wp_nav_menu( $defaults );
   ?>
