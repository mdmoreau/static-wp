<?php

// theme setup
function theme_setup() {

  // let wordpress manage the title tag
  add_theme_support('title-tag');

  // add featured images support
  add_theme_support('post-thumbnails');

  // editor css
  add_editor_style('css/editor.css');

}
add_action('after_setup_theme', 'theme_setup');

// theme css
function theme_css() {
  wp_enqueue_style('theme', get_theme_file_uri('/css/style.css'), [], null);
}
add_action('wp_enqueue_scripts', 'theme_css');

// theme js
function theme_js() {
  wp_enqueue_script('theme', get_theme_file_uri('/js/script.js'), [], null, true);
}
add_action('wp_enqueue_scripts', 'theme_js');

// disable wordpress emoji
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('admin_print_styles', 'print_emoji_styles');

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
  $current_id = get_queried_object_id();
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
    if ($data === null) {
      $data = get_the_excerpt();
    }
    if ($more === true) {
      return wp_trim_words($data, $limit, custom_read_more());
    } else {
      return wp_trim_words($data, $limit);
    }
  } else {
    return get_the_excerpt();
  }
}

// svgstore
function svgstore($svg, $title = null, $class = null) {
  if ($title !== null) {
    $title = '<title>' . $title . '</title>';
  }
  if ($class !== null) {
    $class .= ' ';
  }
  echo '
    <span class="' . $class . 'svgstore svgstore--' . $svg . '">
      <svg>
        ' . $title . '
        <use xlink:href="' . get_theme_file_uri('/img/svgstore.svg') . '#' . $svg . '"></use>
      </svg>
    </span>
  ';
}

// move yoast seo metabox
add_filter('wpseo_metabox_prio', function() { return 'low'; });

// move gravity forms js to footer
add_filter('gform_init_scripts_footer', '__return_true');

// modify gravity forms inline ajax
function wrap_gform_cdata_open($content = '') {
  if ((defined('DOING_AJAX') && DOING_AJAX) || isset($_POST['gform_ajax'])) {
    return $content;
  }
  $content = 'document.addEventListener("DOMContentLoaded", function() {';
  return $content;
}
add_filter('gform_cdata_open', 'wrap_gform_cdata_open', 1);
function wrap_gform_cdata_close($content = '') {
  if ((defined('DOING_AJAX') && DOING_AJAX) || isset($_POST['gform_ajax'])) {
    return $content;
  }
  $content = '}, false);';
  return $content;
}
add_filter('gform_cdata_close', 'wrap_gform_cdata_close', 99);
