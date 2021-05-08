<?php

/**
 * ===============================
 * STYLE/SCRIPTS ENQUEUE FUNCTIONS
 * ===============================
 *
 * @package
 * @since 1.0.0
 * @version 1.0.0
 */

/**
 * ***********
 * FRONT-END ENQUEUE FUNCTIONS
 */
function mediakg_load_scripts()
{
	// wpcf7_enqueue_styles();
	// wpcf7_enqueue_scripts();

	// Register and load main theme css - styles.css.
	wp_register_style('theme-main-styles', get_template_directory_uri() . '/assets/css/theme.css', array(), microtime(true), 'all');
	wp_enqueue_style('theme-main-styles');

	// Remove unused scripts that WP auto loads!
	wp_deregister_script('wp-embed');

	// Register and load main theme script - scripts.js.
	wp_register_script('theme-main-scripts', get_template_directory_uri() . '/assets/js/scripts.js', array('jquery'), microtime(true), true);
	wp_enqueue_script('theme-main-scripts');

	// Make siteurl available in javascript.
	wp_localize_script(
		'theme-main-scripts',
		'WPURLS',
		array(
			'siteurl'  => esc_url(get_site_url()),
			'themeurl' => get_stylesheet_directory_uri(),
		)
	);
}

add_action('wp_enqueue_scripts', 'mediakg_load_scripts');
