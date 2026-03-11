# OFIR Imobi PB — Tema WordPress

Tema WordPress completo convertido da landing page React/Lovable, mantendo 100% da fidelidade visual e funcional.

## Instalação

1. Faça o download/clone da pasta `wordpress-theme/ofir-imobi/`
2. Copie a pasta `ofir-imobi` para `wp-content/themes/` do seu WordPress
3. No painel do WordPress, vá em **Aparência → Temas** e ative o tema **OFIR Imobi PB**
4. Configure em **Aparência → Personalizar**

## Configurações via Customizer

- **Hero Section**: Imagem de fundo do hero
- **Galeria**: Até 4 imagens para a galeria de fotos
- **Contato**: Número do WhatsApp (com código do país)
- **Redes Sociais**: URLs do Instagram, Facebook e Site
- **Logo**: Via Identidade do Site → Logo

## Imagens

Coloque as imagens padrão em `ofir-imobi/assets/images/`:
- `hero-house.jpg` — Imagem do hero
- `house-interior.jpg` — Interior da casa
- `house-exterior.jpg` — Exterior da casa
- `ofir-logo.png` — Logo da OFIR

## Integrações

- **RD Station**: Substituir o formulário placeholder em `front-page.php` pelo embed do RD Station
- **Google Maps**: Substituir o placeholder do mapa pelo embed do Google Maps
- **GTM/Pixel**: Descomentar e configurar em `functions.php` (função `ofir_tracking_head`)

## Estrutura

```
ofir-imobi/
├── assets/
│   ├── images/       ← Imagens do tema (copiar da src/assets)
│   └── js/
│       └── main.js   ← Animações, lightbox, scroll suave
├── front-page.php    ← Landing page principal
├── header.php        ← Header fixo com logo e CTA
├── footer.php        ← Footer + lightbox
├── functions.php     ← Enqueue, customizer, SEO, tracking
├── index.php         ← Fallback
├── page.php          ← Template de páginas genéricas
└── style.css         ← Todos os estilos (sem dependência externa)
```
