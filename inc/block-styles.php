<?php
/**
 * Block Styles
 *
 * @link https://developer.wordpress.org/reference/functions/register_block_style/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

if ( function_exists( 'register_block_style' ) ) {
	/**
	 * Register block styles.
	 *
	 * @since Twenty Twenty-One 1.0
	 *
	 * @return void
	 */
	function possiblymaybe_register_block_styles() {
		// Columns: Overlap.
		register_block_style(
			'core/columns',
			array(
				'name'  => 'possiblymaybe-columns-overlap',
				'label' => esc_html__( 'Overlap', 'possiblymaybe' ),
			)
		);

		// Cover: Borders.
		register_block_style(
			'core/cover',
			array(
				'name'  => 'possiblymaybe-border',
				'label' => esc_html__( 'Borders', 'possiblymaybe' ),
			)
		);

		// Group: Borders.
		register_block_style(
			'core/group',
			array(
				'name'  => 'possiblymaybe-border',
				'label' => esc_html__( 'Borders', 'possiblymaybe' ),
			)
		);

		// Image: Borders.
		register_block_style(
			'core/image',
			array(
				'name'  => 'possiblymaybe-border',
				'label' => esc_html__( 'Borders', 'possiblymaybe' ),
			)
		);

		// Image: Frame.
		register_block_style(
			'core/image',
			array(
				'name'  => 'possiblymaybe-image-frame',
				'label' => esc_html__( 'Frame', 'possiblymaybe' ),
			)
		);

		// Latest Posts: Dividers.
		register_block_style(
			'core/latest-posts',
			array(
				'name'  => 'possiblymaybe-latest-posts-dividers',
				'label' => esc_html__( 'Dividers', 'possiblymaybe' ),
			)
		);

		// Latest Posts: Borders.
		register_block_style(
			'core/latest-posts',
			array(
				'name'  => 'possiblymaybe-latest-posts-borders',
				'label' => esc_html__( 'Borders', 'possiblymaybe' ),
			)
		);

		// Media & Text: Borders.
		register_block_style(
			'core/media-text',
			array(
				'name'  => 'possiblymaybe-border',
				'label' => esc_html__( 'Borders', 'possiblymaybe' ),
			)
		);

		// Separator: Thick.
		register_block_style(
			'core/separator',
			array(
				'name'  => 'possiblymaybe-separator-thick',
				'label' => esc_html__( 'Thick', 'possiblymaybe' ),
			)
		);

		// Social icons: Dark gray color.
		register_block_style(
			'core/social-links',
			array(
				'name'  => 'possiblymaybe-social-icons-color',
				'label' => esc_html__( 'Dark gray', 'possiblymaybe' ),
			)
		);
	}
	add_action( 'init', 'possiblymaybe_register_block_styles' );
}
