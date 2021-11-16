<?php


function custom_post_type_portfolio() {

  // Set UI labels for Custom Post Type
  $labels = array(
    'name'                => _x('Portfolio', 'Post Type General Name', 'possiblymaybe'),
    'singular_name'       => _x('Portfolio', 'Post Type Singular Name', 'possiblymaybe'),
    'menu_name'           => __('Portfolio', 'possiblymaybe'),
    'parent_item_colon'   => __('Parent member', 'possiblymaybe'),
    'all_items'           => __('All Portfolio items', 'possiblymaybe'),
    'view_item'           => __('View Portfolio items', 'possiblymaybe'),
    'add_new_item'        => __('Add New Portfolio', 'possiblymaybe'),
    'add_new'             => __('Add New', 'possiblymaybe'),
    'edit_item'           => __('Edit Portfolio items', 'possiblymaybe'),
    'update_item'         => __('Update Portfolio items', 'possiblymaybe'),
    'search_items'        => __('Search Portfolio items', 'possiblymaybe'),
    'not_found'           => __('Not Found', 'possiblymaybe'),
    'not_found_in_trash'  => __('Not found in Trash', 'possiblymaybe'),
  );

  // Set other options for Custom Post Type

  $args = array(
    'label'               => __('portfolio', 'possiblymaybe'),
    'description'         => __('Portfolio items', 'possiblymaybe'),
    'labels'              => $labels,
    // Features this CPT supports in Post Editor
    'supports'            => array('title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', 'categories'),
    // You can associate this CPT with a taxonomy or custom taxonomy.
    'taxonomies'          => array('core'),
    /* A hierarchical CPT is like Pages and can have
    * Parent and child items. A non-hierarchical CPT
    * is like Posts.
    */
    'hierarchical'        => false,
    'public'              => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => true,
    'show_in_admin_bar'   => true,
    'menu_position'       => 4,
    'can_export'          => true,
    'has_archive'         => true,
    'exclude_from_search' => false,
    'publicly_queryable'  => true,
    'taxonomies'         => array('post_tag'),
    'capability_type'     => 'post',
    'menu_icon'          => 'dashicons-admin-customizer',
    'show_in_rest' => true,
    'taxonomies'          => array( 'category' ),
  );

  // Registering your Custom Post Type
  register_post_type('portfolio', $args);
}

// Custom category (Terms) for supporters

function create_taxonomies_portfolio() {
}


// INIT
add_action('init', 'custom_post_type_portfolio', 0);
// add_action('init', 'create_taxonomies_portfolio', 0);

?>