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
    '.metric-card',
    '.testimonial-card',
    '.contact .row',
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
