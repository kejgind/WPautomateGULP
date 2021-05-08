<?php

/**
 * ===============================
 * ACF PRO OPTIONS PANEL
 * ===============================
 *
 * @package
 * @since 1.0.0
 * @version 1.0.0
 */

/**
 * Add options pages in admin panel - edit header, footer.
 */
if (function_exists('acf_add_options_page')) {
    acf_add_options_page(
        array(
            'page_title' => 'Site - Settings',
            'menu_title' => 'Site - Settings',
            'menu_slug'  => 'site-settings',
            'capability' => 'edit_posts',
            'position'   => 45,
        )
    );
}

/**
 * Add google maps api to ACF PRO
 *
 * @param array $api Google maps API key.
 *
 * @return array
 */
function mediakg_acf_google_map_api($api)
{
    $api_key    = get_field('gm_api_key', 'options');
    $api['key'] = $api_key;
    return $api;
}
add_filter('acf/fields/google_map/api', 'mediakg_acf_google_map_api');
