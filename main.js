document.addEventListener('DOMContentLoaded', () => {
    // 1. Animación de conteo para la sección "Sobre el Proyecto"
    const counters = document.querySelectorAll('.display-5[data-target]');

    const animateCounter = (entry) => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            let current = 0;
            const increment = target / 200; // Ajusta la velocidad de la animación

            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current) + (counter.getAttribute('data-target') === '99' ? '%' : '');
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + (counter.getAttribute('data-target') === '99' ? '%' : '');
                }
            };
            updateCounter();
            observer.unobserve(counter); // Deja de observar una vez que la animación se dispara
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(animateCounter);
    }, {
        threshold: 0.5 // Cuando el 50% del elemento sea visible
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });


    // 2. Animación de scroll con GSAP (requiere GSAP y ScrollTrigger CDN)
    gsap.registerPlugin(ScrollTrigger);

    // Animación de fade-in para secciones al hacer scroll
    document.querySelectorAll('.fade-in').forEach((section) => {
        gsap.fromTo(section, 
            { opacity: 0, y: 50 }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                scrollTrigger: {
                    trigger: section,
                    start: "top 75%", // Empieza la animación cuando la parte superior de la sección esté al 75% de la ventana
                    toggleActions: "play none none none", // Solo reproduce la animación una vez
                    // markers: true // Descomentar para depurar el ScrollTrigger
                }
            }
        );
    });

    // Animación de la imagen del dispositivo en la sección "Sobre el Proyecto"
    gsap.from(".pulse-animation", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.7)",
        scrollTrigger: {
            trigger: "#sobre .pulse-animation",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // 3. Validación de formulario de Bootstrap (Necesita JS)
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });


    // 4. Efecto de partículas o burbujas para el Hero Section (opcional y más complejo)
    // Para un efecto real de partículas, considerar librerías como Particles.js o TS.js
    // Aquí un ejemplo muy básico con CSS y JS simple si no se usa una librería externa:
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
        for (let i = 0; i < 15; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            bubble.style.width = `${Math.random() * 20 + 10}px`; // Tamaño aleatorio
            bubble.style.height = bubble.style.width;
            bubble.style.left = `${Math.random() * 100}%`; // Posición aleatoria
            bubble.style.animationDuration = `${Math.random() * 5 + 5}s`; // Duración aleatoria
            bubble.style.animationDelay = `${Math.random() * 2}s`; // Retraso aleatorio
            heroSection.appendChild(bubble);
        }
    }
});