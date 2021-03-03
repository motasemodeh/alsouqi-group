<?php get_header(); ?>
                        	<div class="hero news">
                        		<div class="row small-uncollapse medium-uncollapse large-collapse">
                        			<div class="column small-12 inner">
                        				<div class="top">
                        <div class="breadcrumbs ">
<span class="crumb home"><a href="<?php echo esc_url( home_url('/') ); ?>">Home</a></span>
<span class="crumb interior"><a href="">News</a></span>
                          </div>


                        					<ul class="social-links social-hero">
                                     <?php 
                                        get_template_part('template-parts/content', 'share');
                                        ?>
                        					</ul>

                        				</div>

                        				<div class="text">
                        					<h1>News</h1>
                        				</div>
                        			</div>
                        		</div>
                        	</div>
                        	
                    <div class="row">       
                            <div class="sidebar-container column large-3 medium-4 small-12">
                                <nav class="sidebar full">
                                    <h4 class="sidebar-services-title">News Menu</h4>


                                    <?php wp_nav_menu(

array('theme_location' => 'sidebar-news',
        'container'       => 'ul',
   'items_wrap' => '<ul class="lvl-1 veritcal-menu" data-accordion-menu>%3$s</ul>'

)
);?>

                                </nav>

                            </div>
                            
                    <div class="column large-9 medium-8 small-12 top-story">        
                        <div class="news-items-horizontal">

                            <ul class="row large-collapse">

<?php 


$args= array(
     'category_name' => 'news',
'posts_per_page' => 9,
'paged' => $paged
);

   // the query
   $the_query = new WP_Query( $args ); ?>
<?php if ( $the_query->have_posts() ) : ?>
  <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>


 <div class="news-card news-container-index">
<div class="right-rail column large-4 medium-3 small-12">
<div class="newsletter">

<div class="inner article right-rail-container">
<div class="imgarticle-container">
<img src="<?php the_post_thumbnail_url(); ?>" alt="">
 </div>
 <div class="bodynews-container">
<h5 class="title"><?php echo wp_trim_words(get_the_title(), 6, ' '); ?></h5>
<a href="<?php the_permalink(); ?>" class="more"><span class="fa fa-caret-right" aria-hidden="true"></span> View More</a>
</div>
</div>
</div>
</div>
</div>


<?php
endwhile;
?>
<div class="row">
    <div class="large-4 medium-6 small-12 inner">
<nav class="pagination-links">
      <?php
echo paginate_links();
?>
</nav>
</div>
</div>
<?php
else : 

endif;

wp_reset_postdata();?>   

</ul>
</div>
</div>
</div>

                    <div class="door">

                    </div>
<?php get_footer(); ?>