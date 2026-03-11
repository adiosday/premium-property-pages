<?php
/**
 * Main Index Template
 * Redirects to front-page for this single-page theme.
 *
 * @package OFIR_Imobi_PB
 */

get_header();
?>

<main>
    <div class="container" style="padding: 8rem 1.5rem 4rem;">
        <h1>Página não encontrada</h1>
        <p style="margin-top: 1rem;">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn-cta">Voltar à página inicial</a>
        </p>
    </div>
</main>

<?php get_footer(); ?>
