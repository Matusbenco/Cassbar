document.addEventListener('DOMContentLoaded', function () {
    // Kód pre mobilné menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('open');
        });
    }

    // Inicializácia Swiper.js pre galériu
    const swiper = new Swiper('.gallery-swiper', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 16,
        grabCursor: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
              centeredSlides: false,
            },
          },
    });

    // Inicializácia GLightbox pre zväčšenie obrázkov
    const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
    });

    // Inicializácia kontaktného tlačidla Formspree
    if (window.formbutton) {
        formbutton("create", {
            action: "https://formspree.io/f/xyzjaepv",
            title: "Máte otázku?",
            styles: {
                title: { backgroundColor: "#D32F2F" },
                button: { backgroundColor: "#D32F2F" }
            }
        });
    }
});