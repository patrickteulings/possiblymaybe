<?php
/**
 * Displays the site navigation.
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>

<?php if ( has_nav_menu( 'primary' ) ) : ?>
	<nav id="site-navigation" class="navigation" role="navigation" data-module="NavigationToggle" data-config='{"trigger":".navigation__trigger", "target":".primary-menu-container"}' aria-label="<?php esc_attr_e( 'Primary menu', 'possiblymaybe' ); ?>">
    <button class="navigation__trigger" name="Toggle menu" aria-label="Toggle menu" aria-controls="primary-menu-list" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
		<?php
		wp_nav_menu(
			array(
				'theme_location'  => 'primary',
				'menu_class'      => 'menu-wrapper',
				'container_class' => 'primary-menu-container',
				'items_wrap'      => '<ul id="primary-menu-list" class="%2$s">%3$s</ul>',
				'fallback_cb'     => false,
			)
		);
		?>
	</nav><!-- #site-navigation -->
<?php endif; ?>
