document.addEventListener('DOMContentLoaded', () => {
    
    // --- Custom Cursor Logic (Kept mostly purely visual CSS/JS interaction) ---
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    const cursorOutline = document.createElement('div');
    cursorOutline.classList.add('cursor-outline');
    
    // Only add if not mobile (simple check)
    if (window.matchMedia("(min-width: 768px)").matches) {
        document.body.appendChild(cursorDot);
        document.body.appendChild(cursorOutline);

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover Effects
        const links = document.querySelectorAll('a, button, .section-image, iframe');
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
    }

    // --- Gallery Slider Logic ---
    const track = document.querySelector('.gallery-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.slider-nav.next');
    const prevButton = document.querySelector('.slider-nav.prev');
    let currentIndex = 0;

    const updateSlidePosition = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentIndex].classList.add('active');
    };

    if (nextButton && prevButton) {
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlidePosition();
        });
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlidePosition();
        });
    }

    // --- Language Toggle & Translations ---
    const langToggle = document.getElementById('lang-toggle');
    const langOptions = document.querySelectorAll('.lang-option');
    let currentLang = 'es'; 

    const translations = {
        es: {
            hero_title: "MAXIMO GOMEZ SAA",
            hero_subtitle: "PRODUCER • ARTIST • CEO MYSTERIK PRODUCCIONES",
            nav_story: "THE STORY",
            nav_emperor: "THE EMPEROR",
            nav_alchemist: "THE ALCHEMIST",
            nav_star: "THE STAR",
            
            story_title: "THE<br>STORY",
            story_subtitle: "DE LAS SOMBRAS<br>A LOS REFLECTORES",
            story_p1: "Mi viaje comenzó en el underground, donde el arte no se explica, se vive. Esa crudeza me enseñó que la verdadera elegancia reside en la autenticidad radical.",
            story_p2: "Hoy, como CEO de <span class='highlight'>Mysterik Producciones</span>, canalizo esa energía visceral en estrategias corporativas y producciones de alto nivel. No hemos olvidado el origen; lo hemos refinado en oro.",

            emperor_title: "THE<br>EMPEROR",
            emperor_subtitle: "GESTIÓN DE PROYECTOS<br>& ESTRATEGIA",
            emperor_p1: "Liderazgo no es solo dirigir; es <span class='highlight'>percibir</span>. En un mundo saturado de ruido, la verdadera gestión ejecutiva requiere visión para revelar las capas ocultas de cada negocio.",
            emperor_p2: "Como CEO, mi enfoque de <strong>Global Performance</strong> fusiona la logística de precisión con una supervisión creativa implacable. Transformamos el caos en experiencias calibradas.",

            alchemist_title: "THE<br>ALCHEMIST",
            alchemist_subtitle: "HUB DE PRODUCCIÓN<br>MENDOZA",
            alchemist_p1: "Mendoza es tierra de alquimia: sol, agua y vidrio. Con 8 años dominando la logística en bodegas de élite (<span class='highlight'>Martino Wines, Huentala, Bodega Centenario</span>), somos su <em>fixer</em> local con clase mundial.",
            alchemist_p2: "Ofrecemos a inversores internacionales la llave de la ciudad: infraestructura, contactos y la capacidad de materializar producciones en el corazón de los Andes.",

            star_title: "THE<br>STAR",
            star_subtitle: "MEDIOS<br>& NARRATIVA",
            star_p1: "Contar historias es el ritual moderno. Como actor y director artístico, utilizo el tarot y la performance como herramientas de introspección para la audiencia.",
            star_p2: "Con proyección en <span class='highlight'>Miami, España y Buenos Aires</span>, diseñamos narrativas audiovisuales que conectan continentes.",

            video_gallery_title: "REELS CINEMATOGRÁFICOS",
            photo_gallery_title: "ARCHIVO VISUAL",
            footer_text: "Gestión y Diseño por Mysterik Producciones"
        },
        en: {
            hero_title: "MAXIMO GOMEZ SAA",
            hero_subtitle: "PRODUCER • ARTIST • CEO MYSTERIK PRODUCCIONES",
            nav_story: "THE STORY",
            nav_emperor: "THE EMPEROR",
            nav_alchemist: "THE ALCHEMIST",
            nav_star: "THE STAR",
            
            story_title: "THE<br>STORY",
            story_subtitle: "FROM THE SHADOWS<br>TO THE SPOTLIGHT",
            story_p1: "My journey began in the underground, where art is not explained, but lived. That rawness taught me that true elegance lies in radical authenticity.",
            story_p2: "Today, as CEO of <span class='highlight'>Mysterik Producciones</span>, I channel that visceral energy into corporate strategies and high-level productions. We haven't forgotten the origin; we've refined it into gold.",

            emperor_title: "THE<br>EMPEROR",
            emperor_subtitle: "PROJECT MANAGEMENT<br>& STRATEGY",
            emperor_p1: "Leadership is not just directing; it is <span class='highlight'>perceiving</span>. In a noise-saturated world, true executive management requires vision to reveal the hidden layers of every business.",
            emperor_p2: "As CEO, my <strong>Global Performance</strong> approach fuses precision logistics with relentless creative supervision. We transform chaos into calibrated experiences.",

            alchemist_title: "THE<br>ALCHEMIST",
            alchemist_subtitle: "MENDOZA<br>PRODUCTION HUB",
            alchemist_p1: "Mendoza is a land of alchemy: sun, water, and glass. With 8 years dominating logistics in elite wineries (<span class='highlight'>Martino Wines, Huentala, Bodega Centenario</span>), we are your world-class local <em>fixer</em>.",
            alchemist_p2: "We offer international investors the key to the city: infrastructure, contacts, and the ability to materialize productions in the heart of the Andes.",

            star_title: "THE<br>STAR",
            star_subtitle: "MEDIA<br>& NARRATIVE",
            star_p1: "Storytelling is the modern ritual. As an actor and artistic director, I use tarot and performance as tools of introspection for the audience.",
            star_p2: "With projection in <span class='highlight'>Miami, Spain, and Buenos Aires</span>, we design audiovisual narratives that connect continents.",

            video_gallery_title: "CINEMATIC REELS",
            photo_gallery_title: "VISUAL ARCHIVE",
            footer_text: "Management & Design by Mysterik Producciones"
        }
    };

    function updateLanguage(lang) {
        currentLang = lang;
        langOptions.forEach(opt => opt.classList.toggle('active', opt.dataset.lang === lang));

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

    // Scroll Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section, .hero').forEach(section => {
        observer.observe(section);
    });

    // --- Video Facade Logic ---
    const videoWrappers = document.querySelectorAll('.video-wrapper');
    
    videoWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', () => {
            const videoId = wrapper.getAttribute('data-video-id');
            if (videoId && !wrapper.querySelector('iframe')) {
                // Create iframe
                const iframe = document.createElement('iframe');
                iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
                iframe.title = "YouTube Video";
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;
                
                // Add to wrapper and hide placeholder stuff
                wrapper.appendChild(iframe);
                
                const placeholder = wrapper.querySelector('.video-placeholder');
                const playBtn = wrapper.querySelector('.play-button');
                
                if (placeholder) placeholder.style.display = 'none';
                if (playBtn) playBtn.style.display = 'none';
            }
        });
    });
});
