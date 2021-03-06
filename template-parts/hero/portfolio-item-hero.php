<?
  $header_image = get_field('header_image');
?>
<div class="hero hero--portfolio-item" data-module="hero" data-config='{"imagePath":"<?= $header_image ?>"}'>
  <!-- <div class="hero--portfolio-item__image" style="background-image: url(<?= get_field('header_image'); ?>)"> -->
  <div class="hero--portfolio-item-loader js-hero-loader">
    <div class="hero--portfolio-item-loader__base js-hero-loader__base">
    <div class="hero--portfolio-item-loader__progress-wrapper js-hero-loader__progress-wrapper">
        <div class="hero--portfolio-item-loader__progress js-hero-loader__progress"></div>
      </div>
    </div>
  </div>
  <div class="hero--portfolio-item__image js-hero-loader__image-wrapper">
    <img src="" data-url="<?= get_field('header_image'); ?>" class="js-hero-loader__image">
  </div>
  <div class="hero--portfolio-item__image-border"></div>
  <div class="hero--portfolio-item__inner">
    <div class="hero--portfolio-item__content">
      <div class="hero--portfolio-item__title" data-module="italic">
        <h1><?= get_field('title'); ?></h1>
      </div>
      <div class="hero--portfolio-item__subtitle">
        <? the_field('roles_subtitle'); ?>
      </div>
      <div class="hero--portfolio-item__excerpt">
        <?php the_excerpt(); ?>
      </div>
      <div class="hero--portfolio-item__actions">
        <? $link = get_field('website_url'); ?>
        <?= possiblymaybe_button($link, 'visit the website', 'btn--small'); ?>
      </div>
    </div>
  </div>
</div>
