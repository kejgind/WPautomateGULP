<?php

/**
 * ===============================
 * CLEANUP FUNCTIONS
 * ===============================
 *
 * @package
 * @since 1.0.0
 * @version 1.0.0
 */

/**
 * ****************************
 * REMOVE WP VERSION NUMBER FROM HEAD METATAGS
 */

/**
 * Remove from CSS and JS files
 *
 * @param string $src String that adds info about WP version.
 *
 * @return string
 */
function mediakg_remove_wp_version_strings($src)
{
    global $wp_version;
    parse_str(wp_parse_url($src, PHP_URL_QUERY), $query);
    if (!empty($query['ver']) && $query['ver'] === $wp_version) {
        $src = remove_query_arg('ver', $src);
    }

    return $src;
}

add_filter('script_loader_src', 'mediakg_remove_wp_version_strings');
add_filter('style_loader_src', 'mediakg_remove_wp_version_strings');

/**
 * Remove from header
 */
function mediakg_remove_meta_version()
{
    return '';
}

add_filter('the_generator', 'mediakg_remove_meta_version');

/**
 * ****************************
 * REMOVE WP EMOJI
 */
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('admin_print_styles', 'print_emoji_styles');

/**
 * ****************************
 * Disable WordPress build in code editor
 */
define('DISALLOW_FILE_EDIT', true);

/**
 * ****************************
 * Remove Gutenberg.
 */
function mediakg_remove_gutenberg_styles()
{
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('wc-block-style');
    wp_dequeue_style('storefront-gutenberg-blocks');
}

add_action('wp_print_styles', 'mediakg_remove_gutenberg_styles', 100);

add_filter('use_block_editor_for_post', '__return_false', 10);
add_filter('use_block_editor_for_post_type', '__return_false', 10);
