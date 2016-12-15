<?php get_header(); ?>
  <div class="content-container">
    <aside class="aside" id="aside">

    </aside>
    <main class="main two-column">
      <?php if (have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <?php the_content(); ?>
      <?php endwhile; endif; ?>
      <?php if ( dynamic_sidebar( 'front-left' ) ); ?>
      <?php if ( dynamic_sidebar( 'front-center' ) ); ?>
      <?php if ( dynamic_sidebar( 'front-right' ) ); ?>

    </main>

    <!-- END main -->
  </div>
  <!-- /.content-container -->
<?php get_footer(); ?>
