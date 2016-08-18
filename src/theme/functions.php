<?php

// theme css
function theme_css() {
  wp_enqueue_style('theme', get_template_directory_uri() . '/css/style.css');
}
add_action('wp_enqueue_scripts', 'theme_css');

// theme js
function theme_js() {
  wp_enqueue_script('theme', get_template_directory_uri() . '/js/script.js', array(), false, true);
}
add_action('wp_enqueue_scripts', 'theme_js');

// editor css
function editor_css() {
  add_editor_style('css/editor.css');
}
add_action('admin_init', 'editor_css');

// add featured images support
add_theme_support('post-thumbnails');

// disable automatic media link
function disable_automatic_media_link() {
  $image_set = get_option('image_default_link_type');
  if ($image_set !== 'none') {
    update_option('image_default_link_type', 'none');
  }
}
add_action('admin_init', 'disable_automatic_media_link', 10);

// remove caption padding
function remove_caption_padding($width) {
  return $width - 10;
}
add_filter('img_caption_shortcode_width', 'remove_caption_padding');

// get top level id
function get_top_level_id() {
  global $post;
  $current_id = $post->ID;
  $ancestor_id = array_pop(get_post_ancestors($current_id));
  if ($ancestor_id) {
    return $ancestor_id;
  } else {
    return $current_id;
  }
}

// custom excerpt function
function custom_read_more() {
    return '... <a href="' . get_permalink(get_the_ID()) . '">Read more</a>';
}
function excerpt($limit, $more = false, $data = null) {
  if (!has_excerpt()) {
    if ($data == null) {
      $data = get_the_excerpt();
    }
    if ($more == true) {
      return wp_trim_words($data, $limit, custom_read_more());
    } else {
      return wp_trim_words($data, $limit);
    }
  } else {
    return get_the_excerpt();
  }
}

// svgstore
function svgstore($svg, $title = null) {
  if ($title !== null) {
    $title = '<title>' . $title . '</title>';
  }
  echo '
    <span class="svgstore svgstore--' . $svg . '">
      <svg>
        ' . $title . '
        <use xlink:href="' . get_template_directory_uri() . '/img/svgstore.svg#' . $svg . '"></use>
      </svg>
    </span>
  ';
}

// move yoast seo metabox
add_filter('wpseo_metabox_prio', function() { return 'low'; });

// move gravity forms js to footer
add_filter('gform_init_scripts_footer', '__return_true');