<?php

/*==========================================
=            CSS            =
==========================================*/
function theme_styles() {
    wp_enqueue_style( 'custom_css', get_template_directory_uri() . '/css/style.css' );
    wp_enqueue_style( 'main_css', get_template_directory_uri() . '/style.css' );
    // wp_enqueue_style( 'bootstrap_css', get_template_directory_uri() . '/node_modules/bootstrap/dist/css/bootstrap.min.css' );
}
add_action( 'wp_enqueue_scripts', 'theme_styles' );

/*==========================================
=            JavaScript            =
==========================================*/
function theme_js() {
    wp_enqueue_script( 'global_js', get_template_directory_uri() . '/js/global.js', '','', true );

    // add condition to only pull home.js on home page
    if ( is_page( '4' ) ) {
      wp_enqueue_script( 'home_js', get_template_directory_uri() . '/js/home.js', '', '', true );
      $wsd_home = array( 'template_url' => get_bloginfo('template_url') );
      wp_localize_script( 'home_js', 'wsd_home', $wsd_home );
    }
    if ( is_page( '10' ) ) {
      $wsd_photos = array( 'template_url' => get_bloginfo('template_url') );
      wp_enqueue_script( 'photos_js', get_template_directory_uri() . '/js/photos.js', '', '', true );
      wp_localize_script( 'photos_js', 'wsd_photos', $wsd_photos );
    }
    if ( is_page( '8' ) ) {
      wp_enqueue_script( 'about_js', get_template_directory_uri() . '/js/about.js', '', '', true );
    }
    if ( is_page( '12' ) ) {
      wp_enqueue_script( 'live_js', get_template_directory_uri() . '/js/live.js', '', '', true );
    }
}
add_action( 'wp_enqueue_scripts', 'theme_js' );

/*==========================================
=            Widgets            =
==========================================*/
function create_widget($name, $id, $description) {
    register_sidebar(array(
      'name' => __( $name ),
      'id'   => $id,
      'description' => __( $description ),
      'before_widget' => '',
      'after_widget' => '',
      'before_title' => '<h3>',
      'after_title' => '</h3>'
    ));
}

// widget instances

// front-page
create_widget( 'Front Page Left', 'front-left', 'Displays on the left of the hompage');
create_widget( 'Front Page Center', 'front-center', 'Displays on the center of the hompage');
create_widget( 'Front Page Right', 'front-right', 'Displays on the right of the hompage');

// two-column template
create_widget( 'Page Sidebar', 'page', 'Displays on side of pages with sidebar');

// blog sidebar widget
create_widget( 'Blog Sidebar', 'blog', 'Displays on side of pages in blog section');

/*=============================
=            Menus            =
=============================*/
add_theme_support( 'menus' );

function domsters_register_menu() {
  register_nav_menu('main-menu', __( 'Main Menu') );
}

add_action('init', 'domsters_register_menu');

/*==========================================
=            Add Featured Image            =
==========================================*/
add_theme_support( 'post-thumbnails');
?>
