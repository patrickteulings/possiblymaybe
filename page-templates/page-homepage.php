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
get_template_part( 'template-parts/hero/homepage-hero' );
get_template_part( 'template-parts/header/site-nav--secondary' );

?>

<?php
/* Start the Loop */
while ( have_posts() ) :
	the_post();
	get_template_part( 'template-parts/content/content-page' );
endwhile; // End of the loop.

?>
<div class="intersect grow">
  <div class="intersect__background"></div>
  <div class="center">
    test for intersection observer
  </div>
</div>


<?php

get_footer();
