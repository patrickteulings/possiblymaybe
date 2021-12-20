<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * Template Name: Portfolio item
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_template_part( 'template-parts/header/portfolio-item-header' );
get_template_part( 'template-parts/hero/portfolio-item-hero' );
?>

<?php
/* Start the Loop */
while ( have_posts() ) :
	the_post();

	get_template_part( 'template-parts/content/content-single-portfolio-item' );

	if ( is_attachment() ) {
		// Parent post navigation.
		the_post_navigation(
			array(
				/* translators: %s: Parent post link. */
				'prev_text' => sprintf( __( '<span class="meta-nav">Published in</span><span class="post-title">%s</span>', 'possiblymaybe' ), '%title' ),
			)
		);
	}

	// If comments are open or there is at least one comment, load up the comment template.
	if ( comments_open() || get_comments_number() ) {
		comments_template();
	}

	// Previous/next post navigation.
	$possiblymaybe_next = is_rtl() ? possiblymaybe_get_icon_svg( 'ui', 'arrow_left' ) : possiblymaybe_get_icon_svg( 'ui', 'arrow_right' );
	$possiblymaybe_prev = is_rtl() ? possiblymaybe_get_icon_svg( 'ui', 'arrow_right' ) : possiblymaybe_get_icon_svg( 'ui', 'arrow_left' );

	$possiblymaybe_next_label     = esc_html__( 'Next post', 'possiblymaybe' );
	$possiblymaybe_previous_label = esc_html__( 'Previous post', 'possiblymaybe' );

	// the_post_navigation(
	// 	array(
	// 		'next_text' => '<p class="meta-nav">' . $possiblymaybe_next_label . $possiblymaybe_next . '</p><p class="post-title">%title</p>',
	// 		'prev_text' => '<p class="meta-nav">' . $possiblymaybe_prev . $possiblymaybe_previous_label . '</p><p class="post-title">%title</p>',
	// 	)
	// );
endwhile; // End of the loop.

get_footer();
