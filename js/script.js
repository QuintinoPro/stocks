/* ===== MENU ===== */
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        menuBtn.classList.remove('fa-times');
        navbar.classList.remove('active');
    };
});

/* ===== HEADER SCROLL ===== */
window.onscroll = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

/* ===== SWIPER ===== */
var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    breakpoints: {
        640:  { slidesPerView: 1 },
        768:  { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});

/* ===== SCROLL REVEAL ===== */
const revealTargets = [
    '.count .box',
    '.about .row',
    '.courses .slide',
    '.process-step',
    '.faq-item',
    '.metric-card',
    '.testimonial-card',
    '.contact .row',
    '.porque-col',
    '.team-card',
];

revealTargets.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${i * 0.08}s`;
    });
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ===== COUNTER ANIMATION ===== */
function animateCounter(el) {
    const original = el.textContent.trim();
    const hasPlus = original.startsWith('+');
    const numMatch = original.match(/[\d.]+/);
    if (!numMatch) return;

    const num = parseFloat(numMatch[0]);
    const isDecimal = numMatch[0].includes('.');
    // Everything after the number (e.g. " Anos", "M", "%")
    const suffix = original.replace(/^\+?[\d.]+/, '').trim();
    const prefix = hasPlus ? '+' : '';

    const duration = 1800;
    const startTime = performance.now();

    const tick = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = num * eased;

        const display = isDecimal
            ? current.toFixed(1)
            : Math.floor(current).toString();

        el.textContent = prefix + display + (suffix ? ' ' + suffix : '');

        if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('h3').forEach(h3 => animateCounter(h3));
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const countSection = document.querySelector('.count');
if (countSection) counterObserver.observe(countSection);

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections = document.querySelectorAll('section[id], .home[id]');
const navLinks = document.querySelectorAll('.navbar a');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active-link'));
            const activeLink = document.querySelector(`.navbar a[href="#${entry.target.id}"]`);
            if (activeLink) activeLink.classList.add('active-link');
        }
    });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));

/* ===== HERO LOGO 3D — MOUSE PARALLAX ===== */
(function () {
    const logo = document.querySelector('.hero-logo3d');
    const hero = document.querySelector('.home');
    if (!logo || !hero) return;

    let isHovering = false;
    let resumeTimer = null;

    hero.addEventListener('mousemove', function (e) {
        // Cancela qualquer timer de reativação pendente
        if (resumeTimer) { clearTimeout(resumeTimer); resumeTimer = null; }
        const rect = hero.getBoundingClientRect();
        const cx = rect.left + rect.width  / 2;
        const cy = rect.top  + rect.height / 2;

        // Normaliza -0.5 a 0.5
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;

        // Intensidade do movimento
        const moveX =  dx * 50;       // até ±25px horizontal
        const moveY =  dy * 35;       // até ±17px vertical
        const rotY  =  dx * 25;       // até ±12.5deg rotação Y
        const rotX  = -dy * 18;       // até ±9deg rotação X

        if (!isHovering) {
            logo.style.animationPlayState = 'paused';
            isHovering = true;
        }

        logo.style.transform =
            `perspective(700px) translate(${moveX}px, ${moveY}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.06)`;
    });

    hero.addEventListener('mouseleave', function () {
        isHovering = false;
        // Transição suave de volta (spring)
        logo.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.3s';
        logo.style.transform = '';
        // Após o retorno, reativa a animação e restaura a transição rápida
        resumeTimer = setTimeout(function () {
            resumeTimer = null;
            logo.style.animationPlayState = 'running';
            logo.style.transition = 'transform 0.12s ease-out, filter 0.3s';
        }, 620);
    });
})();

/* ===== PARTICLES JS GLOBALS ===== */
if (window.particlesJS) {
    const colors = {
        particles: "#F5A623",
        lines: "#FF6B00",
        accent: "#F5A623",
    };

    window.particlesJS("particles-js", {
        particles: {
            number: { value: 140, density: { enable: true, value_area: 800 } },
            color: { value: colors.particles },
            shape: { type: "circle", stroke: { width: 0.5, color: colors.accent } },
            opacity: {
                value: 0.7,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0.3 },
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: true, speed: 2, size_min: 1 },
            },
            line_linked: {
                enable: true,
                distance: 160,
                color: colors.lines,
                opacity: 0.25,
                width: 1.2,
            },
            move: { enable: true, speed: 2, random: true, out_mode: "bounce" },
        },
        interactivity: {
            detect_on: "window", // Changed to "window" to work securely behind pointer-events elements
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true,
            },
            modes: {
                grab: { distance: 220, line_linked: { opacity: 0.6 } },
                push: { particles_nb: 4 },
                repulse: { distance: 180, duration: 0.4 },
            },
        },
        retina_detect: true,
    });
}
