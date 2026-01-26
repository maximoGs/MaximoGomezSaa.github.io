document.addEventListener('DOMContentLoaded', () => {
    
    // --- Custom Cursor Logic ---
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    const cursorOutline = document.createElement('div');
    cursorOutline.classList.add('cursor-outline');
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows instantly
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline follows with slight delay (trail effect)
        cursorOutline.style.transform = `translate(${posX}px, ${posY}px)`; // Using transform for performance, centered via CSS
        
        // Manual centering adjustment if needed, but transform: translate(-50%, -50%) in CSS handles it
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover Effects
    const links = document.querySelectorAll('a, button, .section-image');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
        });
        link.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });

    // --- Gallery Slider Logic ---
    const track = document.querySelector('.gallery-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.slider-nav.next');
    const prevButton = document.querySelector('.slider-nav.prev');
    const dotsNav = document.querySelector('.slider-dots');
    const dots = Array.from(dotsNav.children);

    let currentIndex = 0;

    const updateSlidePosition = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update Active Classes
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentIndex].classList.add('active');
        
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    };

    const moveToNextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    };

    const moveToPrevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    };

    // Event Listeners
    if (nextButton && prevButton) {
        nextButton.addEventListener('click', moveToNextSlide);
        prevButton.addEventListener('click', moveToPrevSlide);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlidePosition();
        });
    });

    // Auto Play (Optional)
    let slideInterval = setInterval(moveToNextSlide, 5000);

    // Pause on Hover
    const sliderContainer = document.querySelector('.gallery-slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
        sliderContainer.addEventListener('mouseleave', () => {
            clearInterval(slideInterval);
            slideInterval = setInterval(moveToNextSlide, 5000);
        });
    }

    // --- Language Toggle Logic ---
    const langToggle = document.getElementById('lang-toggle');
    const langOptions = document.querySelectorAll('.lang-option');
    let currentLang = 'es'; // Default language

    const translations = {
        es: {
            subtitle: "RAÍCES ARGENTINAS // HOUSE // TECHNO",
            aboutTitle: "EL ARTISTA",
            aboutText1: "Emergiendo de la vibrante escena underground de Argentina, <span class='highlight'>Chano Smovir</span> une las raíces culturales tradicionales con el pulso futurista del <span class='highlight'>House & Techno</span>.",
            aboutText2: "Sus sets no son solo música; son un viaje a través del vacío, iluminado por destellos de energía eléctrica. Una experiencia sónica diseñada para conectar almas en la pista de baile.",
            gallery_title: "GALERÍA",
            video_title: "SETS EN VIVO",
            video_caption: "Siente la energía del underground.",
            connect_title: "CONECTAR",
            connect_subtitle: "Sigue el viaje o contáctanos.",
            footer_text: "Gestión y Diseño por Mysterik Producciones",
            rider_title: "RIDER",
            tech_title: "RIDER TÉCNICO",
            tech_item_1: "2x Pioneer CDJ-2000NXS2 / 3000",
            tech_item_2: "1x Pioneer DJM-900NXS2 / V10",
            tech_item_3: "2x Monitores de Cabina (Booth)",
            tech_item_4: "Mesa de DJ sólida y estable",
            tech_item_5: "Conexión Ethernet (Link)",
            hosp_title: "HOSPITALIDAD",
            hosp_item_1: "Hotel 4* (1 Habitación Doble)",
            hosp_item_2: "Vuelos / Transporte terrestre cubierto",
            hosp_item_3: "Cena para 2 personas antes del show",
            hosp_item_4: "Bebidas en cabina (Agua, Vodka, Red Bull)",
            hosp_item_5: "2x Pases All Access"
        },
        en: {
            subtitle: "ARGENTINE ROOTS // HOUSE // TECHNO",
            aboutTitle: "THE ARTIST",
            aboutText1: "Emerging from the vibrant underground scene of Argentina, <span class='highlight'>Chano Smovir</span> bridges the gap between traditional cultural roots and the futuristic pulse of <span class='highlight'>House & Techno</span>.",
            aboutText2: "His sets are not just music; they are a journey through the void, illuminated by flashes of electric energy. A sonic experience designed to connect souls on the dancefloor.",
            gallery_title: "GALLERY",
            video_title: "LIVE SETS",
            video_caption: "Experience the energy of the underground.",
            connect_title: "CONNECT",
            connect_subtitle: "Follow the journey or get in touch.",
            footer_text: "Management & Design by Mysterik Producciones",
            rider_title: "RIDER",
            tech_title: "TECHNICAL RIDER",
            tech_item_1: "2x Pioneer CDJ-2000NXS2 / 3000",
            tech_item_2: "1x Pioneer DJM-900NXS2 / V10",
            tech_item_3: "2x Booth Monitors",
            tech_item_4: "Solid and stable DJ Table",
            tech_item_5: "Ethernet Connection (Link)",
            hosp_title: "HOSPITALITY",
            hosp_item_1: "4* Hotel (1 Double Room)",
            hosp_item_2: "Flights / Ground transport covered",
            hosp_item_3: "Dinner for 2 before the show",
            hosp_item_4: "Booth Drinks (Water, Vodka, Red Bull)",
            hosp_item_5: "2x All Access Passes"
        }
    };

    function updateLanguage(lang) {
        currentLang = lang;
        
        // Update Toggle UI
        langOptions.forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === lang);
        });

        // Update Text Content
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            updateLanguage(newLang);
        });
    }

    // --- Audio Player Logic ---
    const audio = document.getElementById('bg-audio');
    const playBtn = document.getElementById('play-btn');
    
    if (playBtn && audio) {
        const playIcon = playBtn.querySelector('.play-icon');
        const pauseIcon = playBtn.querySelector('.pause-icon');

        playBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play().catch(e => console.log("Audio play failed:", e));
                if (playIcon) playIcon.style.display = 'none';
                if (pauseIcon) pauseIcon.style.display = 'block';
                playBtn.classList.add('playing');
            } else {
                audio.pause();
                if (playIcon) playIcon.style.display = 'block';
                if (pauseIcon) pauseIcon.style.display = 'none';
                playBtn.classList.remove('playing');
            }
        });
    }

    // --- Scroll Reveal Animation ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});
