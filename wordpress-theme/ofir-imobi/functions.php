<?php
/**
 * OFIR Imobi PB Theme Functions
 *
 * @package OFIR_Imobi_PB
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

define( 'OFIR_THEME_VERSION', '1.0.0' );
define( 'OFIR_THEME_DIR', get_template_directory() );
define( 'OFIR_THEME_URI', get_template_directory_uri() );

/**
 * Theme setup
 */
function ofir_theme_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo', array(
        'height'      => 112,
        'width'       => 300,
        'flex-height' => true,
        'flex-width'  => true,
    ) );
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ) );
}
add_action( 'after_setup_theme', 'ofir_theme_setup' );

/**
 * Enqueue styles and scripts
 */
function ofir_enqueue_assets() {
    // Google Fonts
    wp_enqueue_style(
        'ofir-google-fonts',
        'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap',
        array(),
        null
    );

    // Main stylesheet
    wp_enqueue_style(
        'ofir-style',
        get_stylesheet_uri(),
        array( 'ofir-google-fonts' ),
        OFIR_THEME_VERSION
    );

    // Main JS
    wp_enqueue_script(
        'ofir-main',
        OFIR_THEME_URI . '/assets/js/main.js',
        array(),
        OFIR_THEME_VERSION,
        true
    );
}
add_action( 'wp_enqueue_scripts', 'ofir_enqueue_assets' );

/**
 * Custom SEO meta tags (fallback if no SEO plugin)
 */
function ofir_seo_meta() {
    if ( is_front_page() ) {
        echo '<meta name="description" content="Agende visita à casa decorada. Casa duplex alto padrão com 3 quartos, 100m², pronta para morar, a 100m do mar em Ponta de Campina, vizinho ao Lovina. OFIR Imobi PB.">' . "\n";
        echo '<meta property="og:title" content="Casa Duplex 3 Quartos em Ponta de Campina | OFIR Imobi PB">' . "\n";
        echo '<meta property="og:description" content="Agende visita à casa decorada. Casa duplex alto padrão, 100m², pronta para morar, a 100m do mar.">' . "\n";
        echo '<meta property="og:type" content="website">' . "\n";
        echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
    }
}
add_action( 'wp_head', 'ofir_seo_meta', 1 );

/**
 * JSON-LD structured data
 */
function ofir_structured_data() {
    if ( is_front_page() ) {
        ?>
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "OFIR Imobi PB",
            "description": "Curadoria de imóveis de alto padrão na Paraíba",
            "areaServed": {
                "@type": "Place",
                "name": "Ponta de Campina, Cabedelo, Paraíba, Brasil"
            }
        }
        </script>
        <?php
    }
}
add_action( 'wp_head', 'ofir_structured_data', 2 );

/**
 * GTM / Pixel placeholder (uncomment and replace with real IDs)
 */
function ofir_tracking_head() {
    ?>
    <!-- GTM / Pixel: descomente e substitua pelo ID real -->
    <!-- <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXX');</script> -->
    <?php
}
add_action( 'wp_head', 'ofir_tracking_head', 0 );

function ofir_tracking_body() {
    ?>
    <!-- GTM noscript: descomente e substitua pelo ID real -->
    <!-- <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXX" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> -->
    <?php
}
add_action( 'wp_body_open', 'ofir_tracking_body' );

/**
 * Customizer settings
 */
function ofir_customizer( $wp_customize ) {
    // Hero Section
    $wp_customize->add_section( 'ofir_hero', array(
        'title'    => __( 'Hero Section', 'ofir-imobi' ),
        'priority' => 30,
    ) );

    $wp_customize->add_setting( 'ofir_hero_image', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'ofir_hero_image', array(
        'label'   => __( 'Imagem do Hero', 'ofir-imobi' ),
        'section' => 'ofir_hero',
    ) ) );

    // WhatsApp
    $wp_customize->add_section( 'ofir_contact', array(
        'title'    => __( 'Contato', 'ofir-imobi' ),
        'priority' => 35,
    ) );

    $wp_customize->add_setting( 'ofir_whatsapp', array(
        'default'           => '5500000000000',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'ofir_whatsapp', array(
        'label'   => __( 'Número WhatsApp (com código do país)', 'ofir-imobi' ),
        'section' => 'ofir_contact',
        'type'    => 'text',
    ) );

    // Gallery Images
    $wp_customize->add_section( 'ofir_gallery', array(
        'title'    => __( 'Galeria', 'ofir-imobi' ),
        'priority' => 40,
    ) );

    for ( $i = 1; $i <= 4; $i++ ) {
        $wp_customize->add_setting( "ofir_gallery_image_{$i}", array(
            'default'           => '',
            'sanitize_callback' => 'esc_url_raw',
        ) );
        $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, "ofir_gallery_image_{$i}", array(
            'label'   => sprintf( __( 'Imagem da Galeria %d', 'ofir-imobi' ), $i ),
            'section' => 'ofir_gallery',
        ) ) );
    }

    // Social Links
    $wp_customize->add_section( 'ofir_social', array(
        'title'    => __( 'Redes Sociais', 'ofir-imobi' ),
        'priority' => 45,
    ) );

    $social = array( 'instagram' => 'Instagram', 'facebook' => 'Facebook', 'website' => 'Site' );
    foreach ( $social as $key => $label ) {
        $wp_customize->add_setting( "ofir_{$key}_url", array(
            'default'           => '#',
            'sanitize_callback' => 'esc_url_raw',
        ) );
        $wp_customize->add_control( "ofir_{$key}_url", array(
            'label'   => $label . ' URL',
            'section' => 'ofir_social',
            'type'    => 'url',
        ) );
    }
}
add_action( 'customize_register', 'ofir_customizer' );

/**
 * Helper: get theme image with fallback
 */
function ofir_get_image( $setting_name, $fallback = '' ) {
    $img = get_theme_mod( $setting_name );
    return $img ? $img : ( $fallback ? OFIR_THEME_URI . '/assets/images/' . $fallback : '' );
}
