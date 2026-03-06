/* ═══════════════════════════════════════════════
   JUST FITT GYM — app.js
   Router · Cursor · Navbar · Filters · Reveals
   ═══════════════════════════════════════════════ */

/* ── Shared Footer HTML ─────────────────────── */
window.FOOTER_HTML = `
<footer class="bg-[#080808] border-t border-white/5 pt-20 pb-10">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

      <div>
        <div class="font-bebas text-2xl tracking-widest mb-1">JUST FITT <span class="text-[#D72638]">GYM</span></div>
        <p class="font-barlow text-sm text-white/40 leading-relaxed mb-3">Delhi's most inclusive fitness destination in Sector 11, Dwarka. Built for everyone.</p>
        <p class="font-barlow text-xs text-[#D72638]">⭐ 4.7/5 · 553 Google Reviews</p>
      </div>

      <div>
        <h4 class="font-bebas tracking-widest text-white/50 text-sm mb-5">PAGES</h4>
        <ul class="flex flex-col gap-3">
          <li><a href="#" data-page="home"    class="font-barlow text-sm text-white/50 hover:text-[#D72638] transition-colors">Home</a></li>
          <li><a href="#" data-page="about"   class="font-barlow text-sm text-white/50 hover:text-[#D72638] transition-colors">About</a></li>
          <li><a href="#" data-page="classes" class="font-barlow text-sm text-white/50 hover:text-[#D72638] transition-colors">Classes</a></li>
          <li><a href="#" data-page="pricing" class="font-barlow text-sm text-white/50 hover:text-[#D72638] transition-colors">Pricing</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-bebas tracking-widest text-white/50 text-sm mb-5">CONTACT</h4>
        <p class="font-barlow text-sm text-white/40 leading-relaxed mb-3">Plot No. 3, Manish Twin Plaza,<br/>Ashirwad Chowk, Sector 11 Dwarka,<br/>Delhi – 110075</p>
        <a href="tel:+919899450419" class="font-barlow text-sm text-[#D72638] hover:text-white transition-colors">+91 98994 50419</a>
      </div>

      <div>
        <h4 class="font-bebas tracking-widest text-white/50 text-sm mb-5">HOURS</h4>
        <div class="flex flex-col gap-2">
          <p class="font-barlow text-sm text-white/40">Mon–Fri: <span class="text-white/70">5 AM – 11 PM</span></p>
          <p class="font-barlow text-sm text-white/40">Saturday: <span class="text-white/70">6 AM – 10 PM</span></p>
          <p class="font-barlow text-sm text-white/40">Sunday: <span class="text-white/70">7 AM – 9 PM</span></p>
        </div>
      </div>

    </div>
    <div class="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="font-barlow text-xs text-white/20">© 2025 Just Fitt Gym. All rights reserved.</p>
      <p class="font-barlow text-xs text-white/20">Sector 11 Dwarka, New Delhi – 110075</p>
    </div>
  </div>
</footer>`;

/* ── Router ────────────────────────────────── */
const PAGES = {
    home: () => window.PAGE_HOME,
    about: () => window.PAGE_ABOUT,
    classes: () => window.PAGE_CLASSES,
    pricing: () => window.PAGE_PRICING,
};

let currentPage = 'home';

function navigate(page) {
    if (!PAGES[page]) return;
    currentPage = page;

    // Render
    const app = document.getElementById('app');
    app.style.animation = 'none';
    app.offsetHeight; // reflow
    app.style.animation = '';
    app.innerHTML = PAGES[page]();

    // Scroll top
    window.scrollTo({ top: 0 });

    // Update nav active states
    updateNavActive(page);

    // Re-init page-specific behaviour
    initReveal();
    if (page === 'classes') initFilters();

    // Close mobile menu
    document.getElementById('mobileMenu').classList.add('hidden');
}

function updateNavActive(page) {
    document.querySelectorAll('.nav-link').forEach(el => {
        el.classList.remove('active-page');
        if (el.dataset.page === page) el.classList.add('active-page');
    });
}

/* ── Global click delegation ───────────────── */
document.addEventListener('click', e => {
    const link = e.target.closest('[data-page]');
    if (link) {
        e.preventDefault();
        navigate(link.dataset.page);
    }
});

/* ── Navbar ──────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

/* ── Custom Cursor ───────────────────────── */
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = -100, my = -100, rx = -100, ry = -100;

window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

(function animateCursor() {
    // Dot follows instantly
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
    // Ring lags
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateCursor);
})();

document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, [data-page]')) ring.classList.add('hovering');
});
document.addEventListener('mouseout', e => {
    if (e.target.closest('a, button, [data-page]')) ring.classList.remove('hovering');
});

/* ── Scroll Reveal ─────────────────────── */
function initReveal() {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
}

/* ── Class Filters ──────────────────────── */
function initFilters() {
    const tabs = document.querySelectorAll('.filter-tab');
    const cards = document.querySelectorAll('.class-card');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active-tab', 'bg-[#D72638]', 'text-white', 'border-[#D72638]'));
            tab.classList.add('active-tab');

            const filter = tab.dataset.filter;
            cards.forEach(card => {
                const match = filter === 'all' || card.dataset.category === filter;
                card.style.display = match ? '' : 'none';
            });
        });
    });
}

/* ── Boot ──────────────────────────────── */
navigate('home');
