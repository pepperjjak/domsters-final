<aside>
  <h3>Sidebar</h3>
<p>
  This sidebar is unique just for the blog. Cool huh?
</p>
<?php if ( ! dynamic_sidebar( 'blog' ) ): ?>
  <!-- if no sidebar, show this content -->
  <h3>Set Up this sidebar</h3>
  <p>Drag stuff here so your BLOG sidebar wont be empty</p>
<?php endif; ?>
</aside>
