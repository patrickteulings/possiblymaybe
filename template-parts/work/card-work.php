<?php ?>
<a href="<? the_permalink(); ?>" class="work-card--wrapper" title="View case: <?php the_title();?>">
<div class="work-card">
  <div class="work-card__image">
    <img src="<? the_field('header_image'); ?>" />
  </div>
  <div class="work-card__description">
    <div class="brand"><h3><? the_title(); ?></h3></div>
    <div class="roles"><? the_field('roles_subtitle'); ?></div>
  </div>
</div>
</a>