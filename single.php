<?php get_header(); ?>
hello
  <div class="content-container">
    <main class="main full-page">
      <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <h1><?php the_title(); ?></h1>
        <?php the_content(); ?>
        <p><em>By <?php the_author(); ?>
     on <?php echo the_time('l, F jS, Y'); ?>
     in <?php the_category( ', ' ); ?>
     <a href="<?php comments_link(); ?>"><?php comments_number(); ?></a></em>
  </p>
  <hr>
  <?php comments_template(); ?>
      <?php endwhile; else: ?>
        <h1>Wups!</h1>
        <p>Looks like we have no content for this page?</p>
      <?php endif; ?>
    </main>
  </div>
  <!-- /.content-container -->
<?php get_footer(); ?>
