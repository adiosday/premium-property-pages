<?php
/**
 * Front Page Template
 *
 * @package OFIR_Imobi_PB
 */

get_header();

$hero_image    = ofir_get_image( 'ofir_hero_image', 'hero-house.jpg' );
$whatsapp      = get_theme_mod( 'ofir_whatsapp', '5500000000000' );
$instagram_url = get_theme_mod( 'ofir_instagram_url', '#' );
$facebook_url  = get_theme_mod( 'ofir_facebook_url', '#' );
$website_url   = get_theme_mod( 'ofir_website_url', '#' );

// Gallery images
$gallery = array();
for ( $i = 1; $i <= 3; $i++ ) {
    $img = ofir_get_image( "ofir_gallery_image_{$i}" );
    if ( $img ) {
        $gallery[] = $img;
    }
}
// Fallback gallery
if ( empty( $gallery ) ) {
    $gallery = array(
        OFIR_THEME_URI . '/assets/images/hero-house.jpg',
        OFIR_THEME_URI . '/assets/images/house-interior.jpg',
        OFIR_THEME_URI . '/assets/images/house-exterior.jpg',
    );
}

$logo_url = '';
if ( has_custom_logo() ) {
    $logo_id  = get_theme_mod( 'custom_logo' );
    $logo_url = wp_get_attachment_image_url( $logo_id, 'full' );
}
if ( ! $logo_url ) {
    $logo_url = OFIR_THEME_URI . '/assets/images/ofir-logo.png';
}
?>

<main>

    <!-- ===== HERO ===== -->
    <section class="hero">
        <div class="hero-bg" style="background-image: url('<?php echo esc_url( $hero_image ); ?>');">
            <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
            <h1 class="hero-animate">Ponta de Campina não é para todos</h1>
            <h2 class="hero-animate hero-animate-1">Sua casa duplex de 3 quartos, a 100m do mar, é para você</h2>
            <a href="#agendamento" class="btn btn-cta btn-xl hero-animate hero-animate-2">AGENDAR VISITA À CASA DECORADA</a>
            <p class="caption hero-animate hero-animate-3">Poucas unidades disponíveis. Atendimento exclusivo OFIR Imobi PB.</p>
        </div>
    </section>

    <!-- ===== CONTRASTE ===== -->
    <section class="section" style="background: hsl(var(--background));">
        <div class="container">
            <div class="contrast-grid">
                <div class="contrast-text animate-on-scroll">
                    <h2>Garanta o seu refúgio pronto para morar em Ponta de Campina</h2>
                    <p>Com vizinhança selecionada, sua nova casa duplex de 100m² não é uma promessa de futuro; é uma realidade pronta para ser habitada hoje.</p>
                    <div class="quote-block">
                        <p>"Se você valoriza silêncio, privacidade e localização, vai entender em poucos minutos."</p>
                    </div>
                </div>
                <div class="contrast-image animate-on-scroll stagger-2">
                    <img src="<?php echo esc_url( OFIR_THEME_URI . '/assets/images/house-interior.jpg' ); ?>" alt="Casa duplex 3 quartos Ponta de Campina - alto padrão PB pronto para morar" loading="lazy">
                </div>
            </div>
        </div>
    </section>

    <!-- ===== DIFERENCIAIS ===== -->
    <section class="section section-mist">
        <div class="container">
            <h2 class="diff-title animate-on-scroll">Exclusividade e estética em 100m² de puro conforto</h2>

            <div class="diff-grid">
                <div class="diff-card animate-on-scroll stagger-1">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/></svg>
                    <p>Espaço de sobra: 100m² de área construída com acabamento premium.</p>
                </div>
                <div class="diff-card animate-on-scroll stagger-2">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                    <p>Planta Inteligente: 3 quartos amplos para acomodar toda a família com o máximo conforto.</p>
                </div>
                <div class="diff-card animate-on-scroll stagger-3">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <p>Localização Estratégica: A 100m do mar, em uma das áreas mais valorizadas e seguras da região.</p>
                </div>
                <div class="diff-card animate-on-scroll stagger-4">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
                    <p>Prontas para morar: A chave está pronta para você.</p>
                </div>
            </div>

            <!-- Gallery -->
            <div class="gallery-grid">
                <?php
                $alt_texts = array(
                    'Casa duplex 3 quartos Ponta de Campina - interior premium',
                    'Quarto alto padrão PB - pronto para morar 100m do mar',
                    'Casa duplex exterior - vizinho ao Lovina Ponta de Campina',
                );
                foreach ( $gallery as $idx => $img_url ) :
                    $alt = isset( $alt_texts[ $idx ] ) ? $alt_texts[ $idx ] : 'Galeria OFIR Imobi';
                ?>
                <button class="gallery-item" onclick="openLightbox('<?php echo esc_url( $img_url ); ?>', '<?php echo esc_attr( $alt ); ?>')">
                    <img src="<?php echo esc_url( $img_url ); ?>" alt="<?php echo esc_attr( $alt ); ?>" loading="lazy">
                </button>
                <?php endforeach; ?>
                <div class="gallery-placeholder">+ Planta / Localização</div>
            </div>
        </div>
    </section>

    <!-- Divider -->
    <div class="divider-ocean">
        <p>Casa decorada disponível para visitação com atendimento exclusivo.</p>
    </div>

    <!-- ===== ESCASSEZ ===== -->
    <section class="section section-mist">
        <div class="container">
            <div class="scarcity-content">
                <div class="gold-badge animate-on-scroll">ÚLTIMAS UNIDADES</div>
                <h2 class="animate-on-scroll stagger-1">Oportunidade única por tempo limitado.</h2>
                <p class="animate-on-scroll stagger-2">Restam poucas unidades para quem compreende que localização é o único ativo que não se pode fabricar.</p>

                <div class="map-placeholder animate-on-scroll stagger-3">
                    <div class="inner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        <p>Mapa interativo — embed Google Maps</p>
                        <p style="font-size: 0.75rem; margin-top: 0.25rem;">Ponta de Campina, PB · A 100m do mar · Vizinho ao Lovina</p>
                    </div>
                </div>

                <div class="quote-block animate-on-scroll stagger-4" style="max-width: 28rem; margin: 0 auto;">
                    <p>"Se você deixar para depois, provavelmente vai visitar… e descobrir que já foi."</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== SOBRE ===== -->
    <section class="section" style="background: hsl(var(--background));">
        <div class="container">
            <div class="about-content">
                <img src="<?php echo esc_url( $logo_url ); ?>" alt="OFIR Imobi PB" class="logo animate-on-scroll">
                <p class="animate-on-scroll stagger-1">A OFIR Imobi PB é especialista em curadoria de imóveis de alto padrão na Paraíba, para morar ou investir, para rentabilizar seu investimento.</p>

                <div class="social-icons animate-on-scroll stagger-2">
                    <a href="<?php echo esc_url( $instagram_url ); ?>" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                    <a href="<?php echo esc_url( $facebook_url ); ?>" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href="<?php echo esc_url( $website_url ); ?>" aria-label="Site" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                    </a>
                </div>

                <a href="#agendamento" class="btn btn-cta btn-xl animate-on-scroll stagger-3">QUERO AGENDAR MINHA VISITA EXCLUSIVA</a>
            </div>
        </div>
    </section>

    <!-- ===== AGENDAMENTO ===== -->
    <section id="agendamento" class="section section-mist">
        <div class="container">
            <div class="schedule-content">
                <h2 class="animate-on-scroll">Agende sua visita à casa decorada</h2>
                <p class="animate-on-scroll stagger-1">Deixe seus dados e nossa equipe retorna com horário disponível.</p>

                <div class="form-card animate-on-scroll stagger-2">
                    <!-- Placeholder: substituir pelo embed RD Station -->
                    <form id="ofir-form" method="post" action="#">
                        <div class="form-group">
                            <label for="nome">Nome</label>
                            <input type="text" id="nome" name="nome" placeholder="Seu nome completo">
                        </div>
                        <div class="form-group">
                            <label for="telefone">Telefone / WhatsApp</label>
                            <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000">
                        </div>
                        <div class="form-group">
                            <label for="cidade">Cidade</label>
                            <input type="text" id="cidade" name="cidade" placeholder="Sua cidade">
                        </div>
                        <div class="form-group">
                            <label for="horario">Melhor horário</label>
                            <input type="text" id="horario" name="horario" placeholder="Manhã, tarde ou noite">
                        </div>
                        <button type="submit" class="btn btn-cta btn-lg btn-full">ENVIAR</button>
                    </form>
                    <p class="form-note">Formulário placeholder — integrar com RD Station ou CRM</p>
                </div>

                <div class="whatsapp-section animate-on-scroll stagger-3">
                    <p>ou fale diretamente pelo WhatsApp</p>
                    <a href="https://wa.me/<?php echo esc_attr( $whatsapp ); ?>" class="btn btn-cta-outline btn-lg" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                        CHAMAR NO WHATSAPP
                    </a>
                </div>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>
