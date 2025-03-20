// 📌 Bootstrap - Framework CSS e JS responsivo
const scriptBootstrapBundle = document.createElement('script');
scriptBootstrap.src = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js';
document.head.appendChild(scriptBootstrapBundle);

const scriptBootstrap = document.createElement('script');
scriptBootstrap.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
document.head.appendChild(scriptBootstrap);

// 🚀 AOS (Animate On Scroll) - Efeitos de animação ao rolar a página
const scriptAOS = document.createElement('script');
scriptAOS.src = 'https://unpkg.com/aos@next/dist/aos.js';
document.head.appendChild(scriptAOS);

// 🎡 Swiper - Biblioteca para criação de carrosséis e sliders
const scriptSwiper = document.createElement('script');
scriptSwiper.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
document.head.appendChild(scriptSwiper);

// Prism.js para destacar o código
const Prism = document.createElement('script');
Prism.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
document.head.appendChild(Prism);

// 🔄 Inicializar AOS após o carregamento do script
scriptAOS.onload = () => {
    AOS.init({ duration: 500 });
};

