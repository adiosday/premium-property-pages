<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container">
        <?php
        $logo_url = '';
        if ( has_custom_logo() ) {
            $logo_id  = get_theme_mod( 'custom_logo' );
            $logo_url = wp_get_attachment_image_url( $logo_id, 'full' );
        }
        if ( ! $logo_url ) {
            $logo_url = OFIR_THEME_URI . '/assets/images/ofir-logo.png';
        }
        ?>
        <img src="<?php echo esc_url( $logo_url ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?> - Imóveis alto padrão Paraíba" class="logo">
        <a href="#agendamento" class="btn btn-cta btn-sm">AGENDAR VISITA</a>
    </div>
</header>
