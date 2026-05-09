/**
 * Textile Trade Hub - Interactions
 * Based on Relume Figma Kit (v3.7) (Community).jpg layout logic
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SCROLL ANIMATION (Intersection Observer)
    const observerOptions = {
        threshold: 0.15, 
        rootMargin: '0px 0px -50px 0px'
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    /** 
     * UPDATED SELECTOR:
     * Added '.product-card' and '.page-intro' so animations work on product.html
     */
    const selectors = [
        '.feature-card', 
        '.hero-content', 
        '.hero-image', 
        '.inquiry-cta', 
        '.product-card', 
        '.page-intro'
    ];
    
    const fadeElements = document.querySelectorAll(selectors.join(', '));
    
    fadeElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        
        revealOnScroll.observe(el);
    });

    // 2. HELPER CLASS FOR ANIMATION
    const style = document.createElement('style');
    style.id = 'reveal-styles'; // ID prevents duplicate injections if script runs twice
    style.innerHTML = `
        .is-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // 3. SMOOTH SCROLLING FOR NAV LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Only handle if it's an internal ID link
            if (href !== "#" && href.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    console.log("Textile Trade Hub scripts initialized for all pages.");
});