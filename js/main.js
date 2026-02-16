document.addEventListener('DOMContentLoaded', () => {
    
    // --- Custom Cursor Logic ---
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    const cursorOutline = document.createElement('div');
    cursorOutline.classList.add('cursor-outline');
    
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
            video_gallery_subtitle: "Una selección curada de nuestras mejores producciones audiovisuales",
            video_title_1: "ACTUACIÓN",
            video_desc_1: "Performance Dramática 2024",
            video_title_2: "DIRECCIÓN",
            video_desc_2: "Visión & Control Narrativo",
            video_title_3: "PRODUCCIÓN",
            video_desc_3: "Logística Ejecutiva Highlights",
            video_title_4: "INMERSIVO",
            video_desc_4: "Experiencias de Eventos en Vivo",
            video_title_5: "CORTO CINEMATOGRÁFICO",
            video_desc_5: "Narrativa Experimental",
            video_title_6: "DETRÁS DE ESCENA",
            video_desc_6: "Proceso Creativo & Making Of",

            photo_gallery_title: "ARCHIVO VISUAL",

            contact_title: "PONETE EN<br>CONTACTO",
            contact_subtitle: "Creemos algo extraordinario juntos.",
            contact_label_name: "NOMBRE",
            contact_label_email: "EMAIL",
            contact_label_subject: "ASUNTO",
            contact_label_message: "MENSAJE",
            contact_btn_send: "ENVIAR MENSAJE",

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
            video_gallery_subtitle: "A curated selection of our finest audiovisual productions",
            video_title_1: "ACTING REEL",
            video_desc_1: "Dramatic Performance 2024",
            video_title_2: "DIRECTING",
            video_desc_2: "Vision & Narrative Control",
            video_title_3: "PRODUCTION",
            video_desc_3: "Executive Logistics Highlights",
            video_title_4: "IMMERSIVE",
            video_desc_4: "Live Event Experiences",
            video_title_5: "CINEMATIC SHORT",
            video_desc_5: "Experimental Narrative Film",
            video_title_6: "BEHIND THE SCENES",
            video_desc_6: "Creative Process & Making Of",

            photo_gallery_title: "VISUAL ARCHIVE",

            contact_title: "GET IN<br>TOUCH",
            contact_subtitle: "Let's create something extraordinary together.",
            contact_label_name: "NAME",
            contact_label_email: "EMAIL",
            contact_label_subject: "SUBJECT",
            contact_label_message: "MESSAGE",
            contact_btn_send: "SEND MESSAGE",

            footer_text: "Management & Design by Mysterik Producciones"
        },
        pt: {
            hero_title: "MAXIMO GOMEZ SAA",
            hero_subtitle: "PRODUTOR • ARTISTA • CEO MYSTERIK PRODUCCIONES",
            nav_story: "A HISTÓRIA",
            nav_emperor: "O IMPERADOR",
            nav_alchemist: "O ALQUIMISTA",
            nav_star: "A ESTRELA",
            
            story_title: "A<br>HISTÓRIA",
            story_subtitle: "DAS SOMBRAS<br>AOS HOLOFOTES",
            story_p1: "Minha jornada começou no underground, onde a arte não se explica, se vive. Essa crueza me ensinou que a verdadeira elegância reside na autenticidade radical.",
            story_p2: "Hoje, como CEO da <span class='highlight'>Mysterik Producciones</span>, canalizo essa energia visceral em estratégias corporativas e produções de alto nível. Não esquecemos a origem; a refinamos em ouro.",

            emperor_title: "O<br>IMPERADOR",
            emperor_subtitle: "GESTÃO DE PROJETOS<br>& ESTRATÉGIA",
            emperor_p1: "Liderança não é apenas dirigir; é <span class='highlight'>perceber</span>. Em um mundo saturado de ruído, a verdadeira gestão executiva requer visão para revelar as camadas ocultas de cada negócio.",
            emperor_p2: "Como CEO, minha abordagem de <strong>Performance Global</strong> funde a logística de precisão com uma supervisão criativa implacável. Transformamos o caos em experiências calibradas.",

            alchemist_title: "O<br>ALQUIMISTA",
            alchemist_subtitle: "HUB DE PRODUÇÃO<br>MENDOZA",
            alchemist_p1: "Mendoza é terra de alquimia: sol, água e vidro. Com 8 anos dominando a logística em vinícolas de elite (<span class='highlight'>Martino Wines, Huentala, Bodega Centenario</span>), somos seu <em>fixer</em> local de classe mundial.",
            alchemist_p2: "Oferecemos a investidores internacionais a chave da cidade: infraestrutura, contatos e a capacidade de materializar produções no coração dos Andes.",

            star_title: "A<br>ESTRELA",
            star_subtitle: "MÍDIA<br>& NARRATIVA",
            star_p1: "Contar histórias é o ritual moderno. Como ator e diretor artístico, utilizo o tarô e a performance como ferramentas de introspecção para o público.",
            star_p2: "Com projeção em <span class='highlight'>Miami, Espanha e Buenos Aires</span>, desenhamos narrativas audiovisuais que conectam continentes.",

            video_gallery_title: "REELS CINEMATOGRÁFICOS",
            video_gallery_subtitle: "Uma seleção curada das nossas melhores produções audiovisuais",
            video_title_1: "ATUAÇÃO",
            video_desc_1: "Performance Dramática 2024",
            video_title_2: "DIREÇÃO",
            video_desc_2: "Visão & Controle Narrativo",
            video_title_3: "PRODUÇÃO",
            video_desc_3: "Destaques de Logística Executiva",
            video_title_4: "IMERSIVO",
            video_desc_4: "Experiências de Eventos ao Vivo",
            video_title_5: "CURTA CINEMATOGRÁFICO",
            video_desc_5: "Narrativa Experimental",
            video_title_6: "BASTIDORES",
            video_desc_6: "Processo Criativo & Making Of",

            photo_gallery_title: "ARQUIVO VISUAL",

            contact_title: "ENTRE EM<br>CONTATO",
            contact_subtitle: "Vamos criar algo extraordinário juntos.",
            contact_label_name: "NOME",
            contact_label_email: "EMAIL",
            contact_label_subject: "ASSUNTO",
            contact_label_message: "MENSAGEM",
            contact_btn_send: "ENVIAR MENSAGEM",

            footer_text: "Gestão e Design por Mysterik Producciones"
        }
    };

    function updateLanguage(lang) {
        currentLang = lang;
        langOptions.forEach(opt => opt.classList.toggle('active', opt.dataset.lang === lang));
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    }

    // Each language option is clickable directly
    if (langOptions.length) {
        langOptions.forEach(opt => {
            opt.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = opt.dataset.lang;
                if (lang !== currentLang) {
                    updateLanguage(lang);
                }
            });
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
        wrapper.setAttribute('role', 'button');
        wrapper.setAttribute('tabindex', '0');
        wrapper.setAttribute('aria-label', 'Play Video');

        const loadVideo = () => {
            const videoId = wrapper.getAttribute('data-video-id');
            if (videoId && !wrapper.querySelector('iframe')) {
                const iframe = document.createElement('iframe');
                iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
                iframe.title = "YouTube Video";
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;
                
                wrapper.appendChild(iframe);
                
                const thumb = wrapper.querySelector('.video-thumb');
                const playBtn = wrapper.querySelector('.play-button');
                const badge = wrapper.querySelector('.video-badge');
                
                if (thumb) thumb.style.opacity = '0';
                if (playBtn) playBtn.style.opacity = '0';
                if (playBtn) playBtn.style.pointerEvents = 'none';
                if (badge) badge.style.opacity = '0';
            }
        };

        wrapper.addEventListener('click', loadVideo);
        
        wrapper.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                loadVideo();
            }
        });
    });
});
