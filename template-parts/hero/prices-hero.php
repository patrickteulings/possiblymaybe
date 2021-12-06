<div class="hero hero--prices">
<div class="hero__background" style="background-image: url(<?= get_template_directory_uri() ?>/assets/images/sample-images/prices.jpg"></div>
  <div class="hero--prices__inner">
    <div class="hero--prices__content">
      <div class="hero--prices__subtitle">
        <?php the_field('main_subtitle'); ?>
      </div>
      <div class="hero--prices__title">
        <h1><?php the_field('main_title'); ?></h1>
      </div>
      <div class="hero--prices__content">
        <?php the_field('intro_content'); ?>
      </div>
      <div class="hero--prices__actions">
        <? $link = get_field('website_url'); ?>
      </div>
    </div>
  </div>
</div>
