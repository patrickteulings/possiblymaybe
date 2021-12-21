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
	<nav id="site-navigation" class="navigation" role="navigation" data-module="NavigationToggle" data-config='{"trigger":".navigation__trigger", "target":".menu-container-wrapper"}' aria-label="<?php esc_attr_e( 'Primary menu', 'possiblymaybe' ); ?>">
    <button class="navigation__trigger" name="Toggle menu" aria-label="Toggle menu" aria-controls="primary-menu-list" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <div class="menu-container-wrapper">
      <div>
        <?php
        wp_nav_menu(
          array(
            'theme_location'  => 'primary',
            'menu_class'      => 'menu-wrapper',
            'container_class' => 'primary-menu-container',
            'items_wrap'      => '<ul id="primary-menu-list" class="%2$s">%3$s</ul>',
            'fallback_cb'     => false,
            'walker'          => new POSSIBLYMAYBE_Menu_Walker()
          )
        );
        ?>
        <div class="socials-wrapper">
          <div class="socials-wrapper__inner">
            <ul class="socials">
              <li class="socials__item linkedIn"><a href="https://www.linkedin.com/in/patrickteulings/" target="_blank" title="Visit PossiblyMaybe / Patrick Teulings on LinkedIn"><span class="socials__label">LinkedIn</span><i class="socials__icon"><?php possiblymaybe_get_icon('linkedin'); ?></i></a></li>
              <li class="socials__item instagram"><a href="https://www.instagram.com/patrickteulings/" target="_blank"title="Visit PossiblyMaybe / Patrick Teulings on Instagram"><span class="socials__label">Instagram</span><i class="socials__icon"><?php possiblymaybe_get_icon('instagram'); ?></i></a></li>
              <li class="socials__item twitter"><a href="https://twitter.com/patrickteulings" target="_blank"><span class="socials__label" title="Visit PossiblyMaybe / Patrick Teulings on Twitter">Twitter</span><i class="socials__icon"><?php possiblymaybe_get_icon('twitter'); ?></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
	</nav><!-- #site-navigation -->
<?php endif; ?>
