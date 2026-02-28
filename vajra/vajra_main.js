/* ============================================================
   vajra_main.js — Vajra The Gym
   Handles: Nav scroll, fade-up, counters, day/time pickers, mobile menu
============================================================ */

// ── 1. NAV: Transparent → Solid on scroll ────────────────────
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

// ── 3. SCROLL-TRIGGERED FADE-UP ─────────────────────────────
const fadeEls = document.querySelectorAll('.fade-up');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

fadeEls.forEach(el => fadeObserver.observe(el));

// Re-observe after vajra_sections.js injects content
// (vajra_sections.js runs synchronously before this)
document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

// ── 4. STAT COUNTER ANIMATION ────────────────────────────────
function animateCounter(el, target, suffix = '+') {
    const duration = 2000;
    const step = 16;
    const steps = duration / step;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        // Format with commas
        const formatted = Math.floor(current).toLocaleString('en-IN');
        el.textContent = formatted;
    }, step);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
            entry.target.dataset.counted = '1';
            const target = parseInt(entry.target.dataset.target, 10);
            animateCounter(entry.target, target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

// ── 5. DAY PICKER ────────────────────────────────────────────
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
