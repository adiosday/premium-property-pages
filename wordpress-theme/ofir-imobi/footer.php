    <footer class="site-footer">
        <p>&copy; <?php echo date( 'Y' ); ?> <?php bloginfo( 'name' ); ?>. Todos os direitos reservados.</p>
    </footer>

    <!-- Lightbox -->
    <div class="lightbox" id="lightbox">
        <button class="lightbox-close" aria-label="Fechar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        <img src="" alt="" id="lightbox-img">
    </div>

    <?php wp_footer(); ?>
</body>
</html>
