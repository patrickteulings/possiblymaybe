<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="entry-content">
		<?php
		the_content();

		?>
	</div><!-- .entry-content -->
  <div class="work-list">
    <?php $loop = new WP_Query( array(
          'post_type' => 'portfolio',
          'posts_per_page' => -1
        )
      );
    ?>
    <div class="work-list__inner">
      <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
        <?php get_template_part( 'template-parts/work/card-work' ); ?>
      <?php endwhile; wp_reset_query(); ?>
    </div>
  </div>
	<?php if ( get_edit_post_link() ) : ?>
		<footer class="entry-footer default-max-width">
			<?php
			edit_post_link(
				sprintf(
					/* translators: %s: Name of current post. Only visible to screen readers. */
					esc_html__( 'Edit %s', 'possiblymaybe' ),
					'<span class="screen-reader-text">' . get_the_title() . '</span>'
				),
				'<span class="edit-link">',
				'</span>'
			);
			?>
		</footer><!-- .entry-footer -->
	<?php endif; ?>
</article><!-- #post-<?php the_ID(); ?> -->
