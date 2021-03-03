<?php

// adds dynamic title tag support

function  alsouqi_theme_support(){

add_theme_support('title-tag');
add_theme_support('custom-logo');
add_theme_support('post-thumbnails');
add_theme_support('widgets');

}

// add souqi_theme_support into a hook 
add_action('after_setup_theme','alsouqi_theme_support');

function load_stylesheets() {
	wp_register_style('reset', get_template_directory_uri() . '/assets/css/reset.css', array(), 1, 'all');
	wp_enqueue_style('reset');

	wp_register_style('style', get_template_directory_uri() . '/style.css', array(), 1, 'all');
	wp_enqueue_style('style');

}
 add_action('wp_enqueue_scripts', 'load_stylesheets');



// load scripts

function addjs() {
	wp_register_script('app', get_template_directory_uri() . '/assets/js/app.js', array(), 1, 1, 1);
	wp_enqueue_script('app');
}
add_action( 'wp_enqueue_scripts', 'addjs' );



add_theme_support('menus');

register_nav_menus (

array('primary-menu' => __('Primary Menu', 'theme')

)

);
// Filter except length to 15 words.
// tn custom excerpt length
function tn_custom_excerpt_length( $length ) {
return 15;
}
add_filter( 'excerpt_length', 'tn_custom_excerpt_length', 999 );

function new_excerpt_more( $more ) {
	return '...';
}
add_filter('excerpt_more', 'new_excerpt_more');


function my_sidebar()
{

	register_sidebar(
		array(
			'name' => 'Page Sidebar', 
			'id' => 'page-sidebar',
			'before_title' => '<h4 class="widget-title">',
			'after_title' => '</h4>'
		)
	);
}

add_action('widgets_init','my_sidebar');

add_filter('nav_menu_css_class' , 'special_nav_class' , 10 , 2);

function special_nav_class ($classes, $item) {
  if (in_array('current-menu-item', $classes) ){
    $classes[] = 'active ';
  }
  return $classes;
}