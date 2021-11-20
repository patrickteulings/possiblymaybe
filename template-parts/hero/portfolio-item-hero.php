<div class="hero hero--portfolio-item">
  <!-- <div class="hero--portfolio-item__image" style="background-image: url(<?= get_field('header_image'); ?>)"> -->
  <div class="hero--portfolio-item__image">
    <img src="<?= get_field('header_image'); ?>">
  </div>
  <div class="hero--portfolio-item__inner">
    <div class="hero--portfolio-item__content">
      <div class="hero--portfolio-item__title">
        <h1><?php the_title(); ?></h1>
      </div>
      <div class="hero--portfolio-item__subtitle">
        <? the_field('roles_subtitle'); ?>
      </div>
      <div class="hero--portfolio-item__excerpt">
        <?php the_excerpt(); ?>
      </div>
      <div class="hero--portfolio-item__actions">
        <?=  possiblymaybe_button(the_field('website_url'),'visit', 'btn--small'); ?>
      </div>
    </div>
  </div>
</div>
