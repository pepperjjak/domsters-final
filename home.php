<?php get_header(); ?>
<div class="content-container">
  <main class="main blog">
    <h1><?php wp_title(''); ?></h1>
          <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

      <article class="post">
        <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
        <p><em>By <?php the_author(); ?>
     on <?php echo the_time('l, F jS, Y'); ?>
     in <?php the_category( ', ' ); ?>
     <a href="<?php comments_link(); ?>"><?php comments_number(); ?></a></em>
  </p>
  <?php the_excerpt(); ?>
  <hr>
      </article>

      <?php endwhile; else: ?>
      <!-- we run this else if there is no content -->
      <div class="page-header">
        <h1>Wups!</h1>
      </div>

      <p>Looks like we have no content for this page?</p>

      <?php endif; ?>
  </main>
  <aside id="blog-sidebar" class="aside">
    <?php get_sidebar('blog'); ?>
  </aside>
</div>
<!-- /.content-container -->

<?php get_footer(); ?>
