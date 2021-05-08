<?php

/**
 * ===============================
 * THEME SUPPORT OPTIONS
 * ===============================
 *
 * @package 
 * @since 1.0.0
 * @version 1.0.0
 */

/**
 * Activate HTML5 Features
 */
add_theme_support('html5', array('comment-list', 'comment-forum', 'search-form', 'gallery', 'caption'));

/**
 * Main Theme Config
 */
function mediakg_main_config()
{
	// Add textdomain.
	load_theme_textdomain('theme_name', get_template_directory() . '/languages');

	// Register Navigation Menu.
	register_nav_menus(
		array(
			'main_menu_one'     => __('Main Menu - One', 'theme_name'),
			'main_menu_two'     => __('Main Menu - Two', 'theme_name'),
			'footer_menu_one'   => __('Footer Menu - One', 'theme_name'),
			'footer_menu_two'   => __('Footer Menu - Two', 'theme_name'),
			'footer_menu_three' => __('Footer Menu - Three', 'theme_name'),
		)
	);

	// Add Various Support in Theme.
	add_theme_support('post-thumbnails');
	add_theme_support('title-tag');
}

add_action('after_setup_theme', 'mediakg_main_config');

/**
 * Set the max image width.
 */
function mediakg_max_srcset_image_width()
{
	return 2560;
}

add_filter('max_srcset_image_width', 'mediakg_max_srcset_image_width', 10, 2);

/**
 * Add custom image sizes
 */
function mediakg_add_image_sizes()
{
	// Product image sizes.
	add_image_size('image600', 600);
	add_image_size('image1200', 1200);
	add_image_size('image1920', 1920);
}

add_action('init', 'mediakg_add_image_sizes');

/**
 * Remove default WP image sizes
 *
 * @param array $sizes Array of media image sizes.
 *
 * @return array
 */
function mediakg_remove_default_images($sizes)
{
	unset($sizes['medium']); // 300px
	unset($sizes['large']); // 1024px
	unset($sizes['medium_large']); // 768px

	return $sizes;
}

add_filter('intermediate_image_sizes_advanced', 'mediakg_remove_default_images');
