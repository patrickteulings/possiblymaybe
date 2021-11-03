<?php
/**
 * Customize API: Twenty_Twenty_One_Customize_Notice_Control class
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

/**
 * Customize Notice Control class.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @see WP_Customize_Control
 */
class Twenty_Twenty_One_Customize_Notice_Control extends WP_Customize_Control {
	/**
	 * The control type.
	 *
	 * @since Twenty Twenty-One 1.0
	 *
	 * @var string
	 */
	public $type = 'possiblymaybe-notice';

	/**
	 * Renders the control content.
	 *
	 * This simply prints the notice we need.
	 *
	 * @since Twenty Twenty-One 1.0
	 *
	 * @return void
	 */
	public function render_content() {
		?>
		<div class="notice notice-warning">
			<p><?php esc_html_e( 'To access the Dark Mode settings, select a light background color.', 'possiblymaybe' ); ?></p>
			<p><a href="<?php echo esc_url( __( 'https://wordpress.org/support/article/possiblymaybe/#dark-mode-support', 'possiblymaybe' ) ); ?>">
				<?php esc_html_e( 'Learn more about Dark Mode.', 'possiblymaybe' ); ?>
			</a></p>
		</div>
		<?php
	}
}
