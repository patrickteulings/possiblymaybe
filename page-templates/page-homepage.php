<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post

 * Template Name: Homepage template
 *
 *
 * @package WordPress
 * @subpackage Possibly Maybe
 * @since Possibly Maybe 1.0
 */

get_template_part( 'template-parts/header/homepage-header' );
?>
<h1>Hoi homepage</h1>
<?php
/* Start the Loop */
while ( have_posts() ) :
	the_post();
	get_template_part( 'template-parts/content/content-page' );
endwhile; // End of the loop.

?>

<!-- /test -->


<?php

get_footer();
