document.addEventListener('DOMContentLoaded', function () {
    // Kód pre mobilné menu (zostáva)
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // ===== Inicializácia Swiper.js pre galériu =====
    const swiper = new Swiper('.gallery-swiper', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 16,
        grabCursor: true, // Umožní ťahanie myšou
        centeredSlides: true,

        // Navigačné šípky
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Rôzne nastavenia pre rôzne veľkosti obrazovky
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

    // ===== Inicializácia GLightbox pre zväčšenie obrázkov =====
    const lightbox = GLightbox({
        selector: '.glightbox', // Hľadá všetky prvky s touto triedou
        touchNavigation: true,
        loop: true, // Umožní prechádzať z posledného obrázku na prvý
    });

});