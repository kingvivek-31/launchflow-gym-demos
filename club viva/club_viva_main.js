/* ============================================================
   club_viva_main.js — Club Viva
   Animations: Scroll reveal, hero stagger, counters,
                nav scroll, mobile menu, day/time pickers
============================================================ */

// ── 1. NAV: Transparent → Frosted glass on scroll ────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, { passive: true });

// ── 2. MOBILE MENU ───────────────────────────────────────────
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

menuBtn.addEventListener('click', () => {
    const open = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden', open);
    menuIcon.setAttribute('d', open
        ? 'M4 6h16M4 12h16M4 18h16'
        : 'M6 18L18 6M6 6l12 12'
    );
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    });
});

// ── 3. SCROLL REVEAL: fade-up via IntersectionObserver ───────
//    opacity 0 → 1, translateY 40px → 0, 0.8s ease
//    Triggered by adding .visible class; CSS handles transition.
function initScrollReveal() {
    const fadeEls = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after first trigger for performance
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
    });

    fadeEls.forEach(el => observer.observe(el));
    return observer;
}

const fadeObserver = initScrollReveal();

// Re-observe after oak_sections.js injects dynamic content
// (sections.js runs synchronously before this script)
setTimeout(() => {
    document.querySelectorAll('.fade-up:not(.visible)').forEach(el => {
        fadeObserver.observe(el);
    });
}, 100);

// ── 4. HERO STAGGER: page-load entrance animation ────────────
//    Each .hero-animate element uses CSS animation + delay classes.
//    The classes are already applied in HTML; CSS autoplay on load.
//    We just ensure elements below the fold don't jitter on rescroll.
(function initHeroStagger() {
    // Hide scroll indicator once user has scrolled past hero
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        }, { passive: true });
    }
})();

// ── 5. STAT COUNTER ANIMATION ────────────────────────────────
//    Counts from 0 to target on scroll into view (IntersectionObserver)
function animateCounter(el, target) {
    const duration = 2000; // ms
    const step = 16;   // ~60fps
    const steps = duration / step;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = Math.floor(current).toLocaleString('en-IN');
    }, step);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
            entry.target.dataset.counted = '1';
            const target = parseInt(entry.target.dataset.target, 10);
            animateCounter(entry.target, target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

// ── 6. DAY / TIME PICKERS ────────────────────────────────────
function setupToggle(selector, singleSelect = true) {
    document.querySelectorAll(selector).forEach(btn => {
        btn.addEventListener('click', () => {
            if (singleSelect) {
                document.querySelectorAll(selector).forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            } else {
                btn.classList.toggle('active');
            }
        });
    });
}

setupToggle('.day-btn', true);
setupToggle('.time-btn', true);

// ── 7. CARD LEFT-ACCENT hover ────────────────────────────────
//    CSS already handles scaleY(0→1) via .card-left-accent::after
//    No JS needed; just confirm the class is applied in HTML. ✓

// ── 8. SECTION FADE STAGGER (dynamically injected sections) ──
//    oak_sections.js injects HTML synchronously before this script
//    runs, so a second observation pass covers injected .fade-up els.
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-up:not(.visible)').forEach(el => {
        fadeObserver.observe(el);
    });
});
