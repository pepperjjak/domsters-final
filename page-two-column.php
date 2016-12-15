<?php
/*
  Template Name: Two Column Template
 */
?>
<?php get_header(); ?>

  <div class="content-container">
    <main class="main two-column">
      <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <h1><?php the_title(); ?></h1>
        <?php the_content(); ?>
      <?php endwhile; else: ?>
        <h1>Wups!</h1>
        <p>Looks like we have no content for this page?</p>
      <?php endif; ?>
    </main>
    <aside id="basic-sidebar" class="aside">
      <?php get_sidebar(); ?>
    </aside>
  </div>
  <!-- /.content-container -->
<?php get_footer(); ?>
