<?php get_header(); ?>
  <div class="content-container">
    <main class="main full-page">
      <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <h1><?php the_title(); ?></h1>
        <?php the_content(); ?>
      <?php endwhile; else: ?>
        <h1>Wups!</h1>
        <p>Looks like we have no content for this page?</p>
      <?php endif; ?>
    </main>
  </div>
  <!-- /.content-container -->
<?php get_footer(); ?>
