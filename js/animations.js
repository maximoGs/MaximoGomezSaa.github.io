document.addEventListener('DOMContentLoaded', () => {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('GSAP or ScrollTrigger not loaded');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // --- 1. HERO REVEAL ---
    const tlHero = gsap.timeline();
    tlHero.from('.hero h1', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        skewY: 10
    })
    .from('.hero .subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=1")
    .from('.portals a', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
    }, "-=0.5");

    // --- 2. PARALLAX SECTIONS ---
    
    // For each section with text and image
    gsap.utils.toArray('.editorial-grid').forEach(section => {
        const textCol = section.querySelector('.about-content');
        const imgCol = section.querySelector('.visual-content');
        
        // Skip if elements missing
        if (!textCol || !imgCol) return;

        // Text slide-in from side
        gsap.from(textCol, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            x: -50,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out"
        });

        // Image Parallax (moves slower than scroll)
        gsap.to(imgCol.querySelector('img'), {
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
            },
            y: -100, // Move image up slightly as we scroll down
            ease: "none"
        });
    });

    // --- 3. SECTION TITLES PIN & REVEAL ---
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 90%"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    // --- 4. VIDEO GRID STAGGER ---
    const videoItems = document.querySelectorAll('.video-item');
    if (videoItems.length) {
        gsap.fromTo(videoItems, 
            { y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: '.video-grid',
                    start: "top 95%"
                },
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.15,
                ease: "power2.out",
                clearProps: "opacity,transform" // clean up after animation
            }
        );
    }
});
