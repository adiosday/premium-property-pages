<?php
/**
 * Generic Page Template
 *
 * @package OFIR_Imobi_PB
 */

get_header();
?>

<main>
    <div class="container" style="padding: 8rem 1.5rem 4rem;">
        <?php
        while ( have_posts() ) :
            the_post();
        ?>
            <h1><?php the_title(); ?></h1>
            <div style="margin-top: 2rem; line-height: 1.8;">
                <?php the_content(); ?>
            </div>
        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>
