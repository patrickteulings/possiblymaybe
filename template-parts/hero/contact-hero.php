<div class="hero hero--contact">
<div class="hero__background" style="background-image: url(<?= get_the_post_thumbnail_url() ?>"></div>
  <div class="hero--contact__inner">
    <div class="hero--contact__content">
      <div class="hero--contact__subtitle">
        <?php the_field('main_subtitle'); ?>
      </div>
      <div class="hero--contact__title">
        <h1><?php the_field('main_title'); ?></h1>
      </div>
      <div class="hero--contact__content">
        <?php the_field('intro_content'); ?>
      </div>
      <div class="hero--contact__actions">
        <? $link = get_field('website_url'); ?>
      </div>
    </div>
  </div>
</div>
