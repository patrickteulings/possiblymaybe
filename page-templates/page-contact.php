<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post

 * Template Name: Contact template
 *
 *
 * @package WordPress
 * @subpackage Possibly Maybe
 * @since Possibly Maybe 1.0
 */

get_template_part( 'template-parts/header/contact-header' );
get_template_part( 'template-parts/hero/contact-hero' );

?>

<?php
/* Start the Loop */
while ( have_posts() ) :
	the_post();
	get_template_part( 'template-parts/content/content-contact' );
endwhile; // End of the loop.

get_footer();
