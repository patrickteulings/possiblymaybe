<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

// This theme requires WordPress 5.3 or later.
if ( version_compare( $GLOBALS['wp_version'], '5.3', '<' ) ) {
	require get_template_directory() . '/inc/back-compat.php';
}

if ( ! function_exists( 'possiblymaybe_setup' ) ) {
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 *
	 * @since Twenty Twenty-One 1.0
	 *
	 * @return void
	 */
	function possiblymaybe_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Twenty Twenty-One, use a find and replace
		 * to change 'possiblymaybe' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'possiblymaybe', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * This theme does not use a hard-coded <title> tag in the document head,
		 * WordPress will provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/**
		 * Add post-formats support.
		 */
		add_theme_support(
			'post-formats',
			array(
				'link',
				'aside',
				'gallery',
				'image',
				'quote',
				'status',
				'video',
				'audio',
				'chat',
			)
		);

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );
		set_post_thumbnail_size( 1568, 9999 );

		register_nav_menus(
			array(
				'primary' => esc_html__( 'Primary menu', 'possiblymaybe' ),
				'footer'  => __( 'Secondary menu', 'possiblymaybe' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
				'navigation-widgets',
			)
		);

		/*
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		$logo_width  = 300;
		$logo_height = 100;

		add_theme_support(
			'custom-logo',
			array(
				'height'               => $logo_height,
				'width'                => $logo_width,
				'flex-width'           => true,
				'flex-height'          => true,
				'unlink-homepage-logo' => true,
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		// Add support for Block Styles.
		add_theme_support( 'wp-block-styles' );

		// Add support for full and wide align images.
		add_theme_support( 'align-wide' );

		// Add support for editor styles.
		add_theme_support( 'editor-styles' );
		$background_color = get_theme_mod( 'background_color', 'FFFFFF' );
		if ( 127 > Twenty_Twenty_One_Custom_Colors::get_relative_luminance_from_hex( $background_color ) ) {
			add_theme_support( 'dark-editor-style' );
		}

    $editor_stylesheet_path = '/dist/assets-editor/app.css';

		// Enqueue editor styles.
		add_editor_style(get_template_directory_uri() .  $editor_stylesheet_path );

		// Add custom editor font sizes.
		add_theme_support(
			'editor-font-sizes',
			array(
				array(
					'name'      => esc_html__( 'Extra small', 'possiblymaybe' ),
					'shortName' => esc_html_x( 'XS', 'Font size', 'possiblymaybe' ),
					'size'      => 16,
					'slug'      => 'extra-small',
				),
				array(
					'name'      => esc_html__( 'Small', 'possiblymaybe' ),
					'shortName' => esc_html_x( 'S', 'Font size', 'possiblymaybe' ),
					'size'      => 18,
					'slug'      => 'small',
				),
				array(
					'name'      => esc_html__( 'Normal', 'possiblymaybe' ),
					'shortName' => esc_html_x( 'M', 'Font size', 'possiblymaybe' ),
					'size'      => 20,
					'slug'      => 'normal',
				),
				array(
					'name'      => esc_html__( 'Large', 'possiblymaybe' ),
					'shortName' => esc_html_x( 'L', 'Font size', 'possiblymaybe' ),
					'size'      => 24,
					'slug'      => 'large',
				),
				array(
					'name'      => esc_html__( 'Extra large', 'possiblymaybe' ),
					'shortName' => esc_html_x( 'XL', 'Font size', 'possiblymaybe' ),
					'size'      => 40,
					'slug'      => 'extra-large',
				),
				array(
					'name'      => esc_html__( 'Huge', 'possiblymaybe' ),
					'shortName' => esc_html_x( 'XXL', 'Font size', 'possiblymaybe' ),
					'size'      => 96,
					'slug'      => 'huge',
				),
				array(
					'name'      => esc_html__( 'Gigantic', 'possiblymaybe' ),
					'shortName' => esc_html_x( 'XXXL', 'Font size', 'possiblymaybe' ),
					'size'      => 144,
					'slug'      => 'gigantic',
				),
			)
		);

		// Custom background color.
		add_theme_support(
			'custom-background',
			array(
				'default-color' => 'd1e4dd',
			)
		);

		// Editor color palette.
		$black     = '#000000';
		$dark_gray = '#28303D';
		$gray      = '#39414D';
		$green     = '#D1E4DD';
		$blue      = '#D1DFE4';
		$purple    = '#D1D1E4';
		$red       = '#E4D1D1';
		$orange    = '#E4DAD1';
		$yellow    = '#EEEADD';
		$white     = '#FFFFFF';

		add_theme_support(
			'editor-color-palette',
			array(
				array(
					'name'  => esc_html__( 'Black', 'possiblymaybe' ),
					'slug'  => 'black',
					'color' => $black,
				),
				array(
					'name'  => esc_html__( 'Dark gray', 'possiblymaybe' ),
					'slug'  => 'dark-gray',
					'color' => $dark_gray,
				),
				array(
					'name'  => esc_html__( 'Gray', 'possiblymaybe' ),
					'slug'  => 'gray',
					'color' => $gray,
				),
				array(
					'name'  => esc_html__( 'Green', 'possiblymaybe' ),
					'slug'  => 'green',
					'color' => $green,
				),
				array(
					'name'  => esc_html__( 'Blue', 'possiblymaybe' ),
					'slug'  => 'blue',
					'color' => $blue,
				),
				array(
					'name'  => esc_html__( 'Purple', 'possiblymaybe' ),
					'slug'  => 'purple',
					'color' => $purple,
				),
				array(
					'name'  => esc_html__( 'Red', 'possiblymaybe' ),
					'slug'  => 'red',
					'color' => $red,
				),
				array(
					'name'  => esc_html__( 'Orange', 'possiblymaybe' ),
					'slug'  => 'orange',
					'color' => $orange,
				),
				array(
					'name'  => esc_html__( 'Yellow', 'possiblymaybe' ),
					'slug'  => 'yellow',
					'color' => $yellow,
				),
				array(
					'name'  => esc_html__( 'White', 'possiblymaybe' ),
					'slug'  => 'white',
					'color' => $white,
				),
			)
		);

		add_theme_support(
			'editor-gradient-presets',
			array(
				array(
					'name'     => esc_html__( 'Purple to yellow', 'possiblymaybe' ),
					'gradient' => 'linear-gradient(160deg, ' . $purple . ' 0%, ' . $yellow . ' 100%)',
					'slug'     => 'purple-to-yellow',
				),
				array(
					'name'     => esc_html__( 'Yellow to purple', 'possiblymaybe' ),
					'gradient' => 'linear-gradient(160deg, ' . $yellow . ' 0%, ' . $purple . ' 100%)',
					'slug'     => 'yellow-to-purple',
				),
				array(
					'name'     => esc_html__( 'Green to yellow', 'possiblymaybe' ),
					'gradient' => 'linear-gradient(160deg, ' . $green . ' 0%, ' . $yellow . ' 100%)',
					'slug'     => 'green-to-yellow',
				),
				array(
					'name'     => esc_html__( 'Yellow to green', 'possiblymaybe' ),
					'gradient' => 'linear-gradient(160deg, ' . $yellow . ' 0%, ' . $green . ' 100%)',
					'slug'     => 'yellow-to-green',
				),
				array(
					'name'     => esc_html__( 'Red to yellow', 'possiblymaybe' ),
					'gradient' => 'linear-gradient(160deg, ' . $red . ' 0%, ' . $yellow . ' 100%)',
					'slug'     => 'red-to-yellow',
				),
				array(
					'name'     => esc_html__( 'Yellow to red', 'possiblymaybe' ),
					'gradient' => 'linear-gradient(160deg, ' . $yellow . ' 0%, ' . $red . ' 100%)',
					'slug'     => 'yellow-to-red',
				),
				array(
					'name'     => esc_html__( 'Purple to red', 'possiblymaybe' ),
					'gradient' => 'linear-gradient(160deg, ' . $purple . ' 0%, ' . $red . ' 100%)',
					'slug'     => 'purple-to-red',
				),
				array(
					'name'     => esc_html__( 'Red to purple', 'possiblymaybe' ),
					'gradient' => 'linear-gradient(160deg, ' . $red . ' 0%, ' . $purple . ' 100%)',
					'slug'     => 'red-to-purple',
				),
			)
		);

		/*
		* Adds starter content to highlight the theme on fresh sites.
		* This is done conditionally to avoid loading the starter content on every
		* page load, as it is a one-off operation only needed once in the customizer.
		*/
		if ( is_customize_preview() ) {
			require get_template_directory() . '/inc/starter-content.php';
			add_theme_support( 'starter-content', possiblymaybe_get_starter_content() );
		}

		// Add support for responsive embedded content.
		add_theme_support( 'responsive-embeds' );

		// Add support for custom line height controls.
		add_theme_support( 'custom-line-height' );

		// Add support for experimental link color control.
		add_theme_support( 'experimental-link-color' );

		// Add support for experimental cover block spacing.
		add_theme_support( 'custom-spacing' );

		// Add support for custom units.
		// This was removed in WordPress 5.6 but is still required to properly support WP 5.5.
		add_theme_support( 'custom-units' );
	}
}
add_action( 'after_setup_theme', 'possiblymaybe_setup' );

/**
 * Register widget area.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 *
 * @return void
 */
function possiblymaybe_widgets_init() {

	register_sidebar(
		array(
			'name'          => esc_html__( 'Footer', 'possiblymaybe' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here to appear in your footer.', 'possiblymaybe' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'possiblymaybe_widgets_init' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @global int $content_width Content width.
 *
 * @return void
 */
function possiblymaybe_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'possiblymaybe_content_width', 750 );
}
add_action( 'after_setup_theme', 'possiblymaybe_content_width', 0 );

/**
 * Enqueue scripts and styles.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function possiblymaybe_scripts() {
	// Note, the is_IE global variable is defined by WordPress and is used
	// to detect if the current browser is internet explorer.
	global $is_IE, $wp_scripts;
	if ( $is_IE ) {
		// If IE 11 or below, use a flattened stylesheet with static values replacing CSS Variables.
		wp_enqueue_style( 'possiblymaybe-style', get_template_directory_uri() . '/assets/css/ie.css', array(), wp_get_theme()->get( 'Version' ) );
	} else {
		// If not IE, use the standard stylesheet.
		wp_enqueue_style( 'possiblymaybe-style', get_template_directory_uri() . '/dist/assets/app.css', array(), wp_get_theme()->get( 'Version' ) );
	}

	// RTL styles.
	wp_style_add_data( 'possiblymaybe-style', 'rtl', 'replace' );

	// Print styles.
	wp_enqueue_style( 'possiblymaybe-print-style', get_template_directory_uri() . '/assets/css/print.css', array(), wp_get_theme()->get( 'Version' ), 'print' );

	// Threaded comment reply styles.
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	// Register the IE11 polyfill file.
	wp_register_script(
		'possiblymaybe-ie11-polyfills-asset',
		get_template_directory_uri() . '/assets/js/polyfills.js',
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);

	// Register the IE11 polyfill loader.
	wp_register_script(
		'possiblymaybe-ie11-polyfills',
		null,
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);
	wp_add_inline_script(
		'possiblymaybe-ie11-polyfills',
		wp_get_script_polyfill(
			$wp_scripts,
			array(
				'Element.prototype.matches && Element.prototype.closest && window.NodeList && NodeList.prototype.forEach' => 'possiblymaybe-ie11-polyfills-asset',
			)
		)
	);

	// Main navigation scripts.
	if ( has_nav_menu( 'primary' ) ) {
		wp_enqueue_script(
			'possiblymaybe-primary-navigation-script',
			get_template_directory_uri() . '/assets/js/primary-navigation.js',
			array( 'possiblymaybe-ie11-polyfills' ),
			wp_get_theme()->get( 'Version' ),
			true
		);
	}

	// Responsive embeds script.
	wp_enqueue_script(
		'possiblymaybe-responsive-embeds-script',
		get_template_directory_uri() . '/assets/js/responsive-embeds.js',
		array( 'possiblymaybe-ie11-polyfills' ),
		wp_get_theme()->get( 'Version' ),
		true
	);

	// Register the IE11 polyfill file.
	wp_register_script(
		'possiblymaybe-main-script',
		get_template_directory_uri() . '/dist/assets/app.js',
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);

}
add_action( 'wp_enqueue_scripts', 'possiblymaybe_scripts' );


add_action( 'wp_footer', 'my_custom_script_load' );
function my_custom_script_load(){
  wp_enqueue_script( 'my-custom-script', get_stylesheet_directory_uri() . '/dist/assets/app.js');
}

/**
 * Enqueue block editor script.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function possiblymaybe_block_editor_script() {

	wp_enqueue_script( 'possiblymaybe-editor', get_theme_file_uri( '/assets/js/editor.js' ), array( 'wp-blocks', 'wp-dom' ), wp_get_theme()->get( 'Version' ), true );
}

add_action( 'enqueue_block_editor_assets', 'possiblymaybe_block_editor_script' );

/**
 * Fix skip link focus in IE11.
 *
 * This does not enqueue the script because it is tiny and because it is only for IE11,
 * thus it does not warrant having an entire dedicated blocking script being loaded.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @link https://git.io/vWdr2
 */
function possiblymaybe_skip_link_focus_fix() {

	// If SCRIPT_DEBUG is defined and true, print the unminified file.
	if ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) {
		echo '<script>';
		include get_template_directory() . '/assets/js/skip-link-focus-fix.js';
		echo '</script>';
	}

	// The following is minified via `npx terser --compress --mangle -- assets/js/skip-link-focus-fix.js`.
	?>
	<script>
	/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",(function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}),!1);
	</script>
	<?php
}
add_action( 'wp_print_footer_scripts', 'possiblymaybe_skip_link_focus_fix' );

/**
 * Enqueue non-latin language styles.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function possiblymaybe_non_latin_languages() {
	$custom_css = possiblymaybe_get_non_latin_css( 'front-end' );

	if ( $custom_css ) {
		wp_add_inline_style( 'possiblymaybe-style', $custom_css );
	}
}
add_action( 'wp_enqueue_scripts', 'possiblymaybe_non_latin_languages' );

// SVG Icons class.
require get_template_directory() . '/classes/class-possiblymaybe-svg-icons.php';

// Custom color classes.
require get_template_directory() . '/classes/class-possiblymaybe-custom-colors.php';
new Twenty_Twenty_One_Custom_Colors();

// Enhance the theme by hooking into WordPress.
require get_template_directory() . '/inc/template-functions.php';

// Menu functions and filters.
require get_template_directory() . '/inc/menu-functions.php';

// Custom template tags for the theme.
require get_template_directory() . '/inc/template-tags.php';

// Customizer additions.
require get_template_directory() . '/classes/class-possiblymaybe-customize.php';
new Twenty_Twenty_One_Customize();

// Block Patterns.
require get_template_directory() . '/inc/block-patterns.php';

// Block Styles.
require get_template_directory() . '/inc/block-styles.php';

// Dark Mode.
require_once get_template_directory() . '/classes/class-possiblymaybe-dark-mode.php';
new Twenty_Twenty_One_Dark_Mode();

/**
 * Enqueue scripts for the customizer preview.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function possiblymaybe_customize_preview_init() {
	wp_enqueue_script(
		'possiblymaybe-customize-helpers',
		get_theme_file_uri( '/assets/js/customize-helpers.js' ),
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);

	wp_enqueue_script(
		'possiblymaybe-customize-preview',
		get_theme_file_uri( '/assets/js/customize-preview.js' ),
		array( 'customize-preview', 'customize-selective-refresh', 'jquery', 'possiblymaybe-customize-helpers' ),
		wp_get_theme()->get( 'Version' ),
		true
	);
}
add_action( 'customize_preview_init', 'possiblymaybe_customize_preview_init' );

/**
 * Enqueue scripts for the customizer.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function possiblymaybe_customize_controls_enqueue_scripts() {

	wp_enqueue_script(
		'possiblymaybe-customize-helpers',
		get_theme_file_uri( '/assets/js/customize-helpers.js' ),
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);
}
add_action( 'customize_controls_enqueue_scripts', 'possiblymaybe_customize_controls_enqueue_scripts' );

/**
 * Calculate classes for the main <html> element.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function possiblymaybe_the_html_classes() {
	/**
	 * Filters the classes for the main <html> element.
	 *
	 * @since Twenty Twenty-One 1.0
	 *
	 * @param string The list of classes. Default empty string.
	 */
	$classes = apply_filters( 'possiblymaybe_html_classes', '' );
	if ( ! $classes ) {
		return;
	}
	echo 'class="' . esc_attr( $classes ) . '"';
}

/**
 * Add "is-IE" class to body if the user is on Internet Explorer.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function possiblymaybe_add_ie_class() {
	?>
	<script>
	if ( -1 !== navigator.userAgent.indexOf( 'MSIE' ) || -1 !== navigator.appVersion.indexOf( 'Trident/' ) ) {
		document.body.classList.add( 'is-IE' );
	}
	</script>
	<?php
}
add_action( 'wp_footer', 'possiblymaybe_add_ie_class' );


/**
 * OUR CUSTOM POST TYPES
 *
 */

require get_template_directory() . '/inc/custom-post-types/portfolio-post.php';
require get_template_directory() . '/inc/ui/buttons.php';


/**
 * MENU WALKER
 *
 */

require get_template_directory() . '/classes/class-possiblymaybe-custom-menu-walker.php';

/**
 * GET SVG ICON
 *
 */

function possiblymaybe_get_icon ($icon) {
  return include(get_template_directory() .'/assets/icons/feather-icons/'. $icon .'.svg');
}


/**
 * PORTFOLIO SHORTCODES
 *
 */

function possiblymaybe_create_shortcode_portfolio_highlight(){
  $result = '';
  $args = array(
                  'post_type'      => 'portfolio',
                  'posts_per_page' => '10',
                  'publish_status' => 'published',
                  'p'               => '8',
               );

  $query = new WP_Query($args);

  if($query->have_posts()) :
    $result .= '<div class="homepage-portfolio-highlight">';
    $result .= '<div class="homepage-portfolio-highlight__inner">';
    while($query->have_posts()) :

        $query->the_post() ;

        $result .= '<div class="portfolio-item">';
          $result .= '<div class="portfolio-item__image" style="background-color: '. get_field('color') . ';">' . get_the_post_thumbnail() . '</div>';
          $result .= '<div class="portfolio-item__content-wrapper">';
            $result .= '<div class="portfolio-item__content">';
              $result .= '<div class="portfolio-item__title"><h3>' . get_the_title() . '</h3></div>';
              $result .= '<div class="portfolio-item-content__inner">';
                $result .= '<div class="portfolio-item__subtitle">' . get_field('subtitle') . '</div>';
                $result .= '<div class="portfolio-item__desc">' . get_the_excerpt() . '</div>';
                $result .= '<div class="portfolio-item__action">' . possiblymaybe_button(get_permalink(), 'tell me more', 'btn--small') . '</div>';
                // $result .= '<div class="portfolio-item__action"><a href="' . get_permalink() . '" class="btn"><i class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></i><span class="text">tell me more</span></a></div>';
              $result .= '</div>';
            $result .= '</div>';
          $result .= '</div>';
        $result .= '</div>';


      endwhile;
      $result .= '</div>';
      $result .= '</div>';
      wp_reset_postdata();

  endif;

  return $result;
}

add_shortcode( 'portfolio-highlight', 'possiblymaybe_create_shortcode_portfolio_highlight' );

function possiblymaybe_create_shortcode_portfolio_list(){
  $result = '';
  $args = array(
                  'post_type'      => 'portfolio',
                  'posts_per_page' => '10',
                  'publish_status' => 'published',
               );

  $query = new WP_Query($args);

  if($query->have_posts()) :
    $result .= '<div class="homepage-portfolio-list">';
    $result .= '<div class="homepage-portfolio-list__inner">';
    while($query->have_posts()) :

        $query->the_post() ;

    $result .= '<div class="portfolio-item">';
	$result .= '<a href="'. get_permalink(). '">';
      	$result .= '<div class="portfolio-item__image" style="background-color: '. get_field('color') . ';">' . get_the_post_thumbnail() . '</div>';
	  $result .= '</a>'; 
	  $result .= '<div class="portfolio-item__title"><h3>' . get_the_title() . '</h3></div>';
	  $result .= '<div class="portfolio-item__content">';
        // $result .= '<div class="portfolio-item__desc">' . get_field('subtitle') . '</div>';
        $result .= '<div class="portfolio-item__desc">' . get_the_excerpt() . '</div>';
        $result .= '<div class="portfolio-item__action">' . possiblymaybe_button(get_permalink(), 'tell me more', 'btn--small') . '</div>';
      $result .= '</div>';
    $result .= '</div>';


      endwhile;
      $result .= '</div>';
      $result .= '</div>';
      wp_reset_postdata();

  endif;

  return $result;
}

add_shortcode( 'portfolio-list', 'possiblymaybe_create_shortcode_portfolio_list' );


function possiblymaybe_get_site_language() {
  $site_language = "nl-NL";
  return 'lang='. $site_language;
}