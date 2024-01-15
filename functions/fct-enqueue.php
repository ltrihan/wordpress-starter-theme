<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

function ltrihan_register_assets() {
    $the_theme = wp_get_theme();

    $page_assets = array(
        'home'    => array(
            'css'    => 'home.min.css',
            'js'     => 'home.min.js',
        ),
        'contact' => array(
            'css'    => 'contact.min.css',
            'js'     => 'contact.min.js',
        ),
        // Add more pages here
    );
    
    foreach ($page_assets as $page => $assets) {
        if (is_page($page)) {
            if (!empty($assets['css'])) {
                wp_enqueue_style($page, get_template_directory_uri() . '/dist/css/' . $assets['css'], array(), $the_theme->get('Version'));
            }
            if (!empty($assets['js'])) {
                wp_enqueue_script($page, get_template_directory_uri() . '/dist/js/' . $assets['js'], array(), $the_theme->get('Version'));
            }
        }
    }
}

add_action('wp_enqueue_scripts', 'ltrihan_register_assets');