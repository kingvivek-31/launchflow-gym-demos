/* ==========================================================
   ALL GIRLS FITNESS — app.js
   Vanilla JS + Stitch API Service Layer
   ========================================================== */

// -------------------------------------------------------
// STITCH API SERVICE LAYER
// Abstracts all API calls with loading/error/success state
// -------------------------------------------------------
const StitchService = {
  BASE_URL: 'https://stitch.googleapis.com/v1', // Replace with actual Stitch endpoint
  API_KEY: 'YOUR_STITCH_API_KEY',               // Injected from env in production

  /**
   * Generic fetch wrapper with async state management
   * @param {string} endpoint - API endpoint path
   * @param {object} opts - fetch options
   * @returns {Promise<{data, error, loading}>}
   */
  async request(endpoint, opts = {}) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.API_KEY}`,
      ...opts.headers,
    };
    try {
      const res = await fetch(`${this.BASE_URL}${endpoint}`, { ...opts, headers });
      if (!res.ok) throw new Error(`API Error: ${res.status}`);
      const data = await res.json();
      return { data, error: null };
    } catch (err) {
      console.warn('[StitchService] Request failed, using mock data:', err.message);
      return { data: null, error: err.message };
    }
  },

  /** Fetch weekly class schedule */
  async getClasses() {
    const { data, error } = await this.request('/classes?week=current');
    if (error || !data) {
      // Graceful fallback to mock data
      return MOCK_CLASSES;
    }
    return data.classes || MOCK_CLASSES;
  },

  /** Submit lead capture form */
  async submitLead(payload) {
    const { data, error } = await this.request('/leads', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    if (error) {
      // Simulate success for demo (remove in production)
      console.info('[StitchService] Using mock submit — payload captured:', payload);
      return { success: true, mock: true };
    }
    return { success: true, data };
  },

  /** Sign up for membership */
  async signUpMember(payload) {
    const { data, error } = await this.request('/members/signup', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    if (error) {
      console.info('[StitchService] Mock signup captured:', payload);
      return { success: true, mock: true };
    }
    return { success: true, data };
  }
};

// -------------------------------------------------------
// MOCK DATA (used when Stitch API is unavailable)
// -------------------------------------------------------
const MOCK_CLASSES = [
  { id: 1, name: 'Power Lift', trainer: 'Priya Sharma', day: 'Mon', time: '6:00 AM', duration: '60 min', type: 'Strength', spots: 4, featured: false },
  { id: 2, name: 'Pilates Core', trainer: 'Meera Iyer', day: 'Mon', time: '9:00 AM', duration: '50 min', type: 'Pilates', spots: 8, featured: true },
  { id: 3, name: 'Boxing Blast', trainer: 'Aisha Khan', day: 'Tue', time: '7:00 AM', duration: '45 min', type: 'Boxing', spots: 2, featured: false },
  { id: 4, name: 'Sculpt & Burn', trainer: 'Sunita Nair', day: 'Wed', time: '8:00 AM', duration: '55 min', type: 'HIIT', spots: 5, featured: false },
  { id: 5, name: 'Yoga Flow', trainer: 'Riya Desai', day: 'Thu', time: '7:30 AM', duration: '60 min', type: 'Yoga', spots: 10, featured: false },
  { id: 6, name: 'Dance Cardio', trainer: 'Kavya Reddy', day: 'Fri', time: '6:30 AM', duration: '45 min', type: 'Cardio', spots: 3, featured: true },
];

const MEMBERSHIP_DETAILS = {
  starter: {
    title: 'Starter',
    price: '₹3,499/mo',
    badge: 'DROP 01',
    color: 'stone',
    perks: [
      'Access to gym floor (6AM – 10PM)',
      '4 group classes per week',
      'Locker room & shower access',
      'AGF Member App',
      'Community events access',
    ],
    cta: 'Start Starter Plan'
  },
  pro: {
    title: 'Pro',
    price: '₹5,999/mo',
    badge: 'DROP 02',
    color: 'blush',
    featured: true,
    perks: [
      'Unlimited gym access (24/7)',
      'Unlimited group classes',
      '2 PT sessions per month',
      'Body composition analysis',
      'Nutrition consultation',
      'Priority class booking',
      'Guest pass (1/month)',
    ],
    cta: 'Start Pro Plan'
  },
  elite: {
    title: 'Elite',
    price: '₹9,999/mo',
    badge: 'DROP 03',
    color: 'cream',
    perks: [
      'Everything in Pro +',
      'Unlimited PT sessions',
      'Personal meal plan',
      'VIP lounge access',
      'Recovery & spa services',
      'Unlimited guest passes',
      'Concierge scheduling',
    ],
    cta: 'Start Elite Plan'
  }
};

// -------------------------------------------------------
// LOADER
// -------------------------------------------------------
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('loaded');
    // Trigger hero animations after loader
    runHeroAnimations();
  }, 1800);
});

function runHeroAnimations() {
  const els = ['.hero-eyebrow', '.hero-title', '.hero-sub', '.hero-ctas', '.hero-scroll'];
  els.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    setTimeout(() => {
      el.style.animation = `fadeSlideUp 0.9s cubic-bezier(0.4,0,0.2,1) forwards`;
    }, i * 200);
  });
}

// -------------------------------------------------------
// NAVBAR: scroll behavior
// -------------------------------------------------------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// -------------------------------------------------------
// MOBILE MENU
// -------------------------------------------------------
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

menuToggle.addEventListener('click', () => {
  menuOpen = !menuOpen;
  menuToggle.classList.toggle('active', menuOpen);
  mobileMenu.style.transform = menuOpen ? 'translateX(0)' : 'translateX(100%)';
  document.body.style.overflow = menuOpen ? 'hidden' : '';
});

function closeMenu() {
  menuOpen = false;
  menuToggle.classList.remove('active');
  mobileMenu.style.transform = 'translateX(100%)';
  document.body.style.overflow = '';
}

// -------------------------------------------------------
// MODAL & DRAWER CONTROLS
// -------------------------------------------------------
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('hidden');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (id === 'schedule-modal') loadFullSchedule();
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => modal.classList.add('hidden'), 500);
}

function openDrawer(plan) {
  const drawer = document.getElementById('membership-drawer');
  const content = document.getElementById('drawer-content');
  const body = document.getElementById('drawer-body');
  const details = MEMBERSHIP_DETAILS[plan];
  if (!details) return;

  body.innerHTML = buildDrawerHTML(details, plan);
  drawer.classList.remove('hidden');
  drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  const drawer = document.getElementById('membership-drawer');
  const content = document.getElementById('drawer-content');
  drawer.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => drawer.classList.add('hidden'), 500);
}

function buildDrawerHTML(d, plan) {
  const accentColor = plan === 'pro' ? '#FDE7F1' : plan === 'elite' ? '#F5F0EA' : '#F459AD';
  const perks = d.perks.map(p => `
    <li class="flex items-start gap-3 text-sm" style="color:rgba(61,61,61,0.8)">
      <span style="color:${accentColor}; margin-top:2px">✓</span>
      <span class="font-body">${p}</span>
    </li>`).join('');

  return `
    <p class="font-body text-charcoal/50 text-xs tracking-mega uppercase mb-3" style="letter-spacing:0.2em">${d.badge}</p>
    <h3 class="font-display font-black text-4xl uppercase text-onyx leading-tight mb-2">${d.title}</h3>
    <div class="font-display font-black text-2xl mb-8" style="color:${accentColor}">${d.price}</div>
    <ul class="space-y-3 mb-10">${perks}</ul>
    <button onclick="selectPlanAndJoin('${plan}')" class="w-full py-4 font-display font-black text-xs tracking-mega uppercase transition-all duration-300" style="background:${accentColor}; color:#0e0e0e;">
      ${d.cta}
    </button>
    <p class="font-body text-xs text-charcoal/30 text-center mt-4">No lock-in. Cancel anytime.</p>`;
}

function selectPlanAndJoin(plan) {
  closeDrawer();
  openModal('membership-modal');
  setTimeout(() => {
    const sel = document.getElementById('modal-plan');
    if (sel) sel.value = plan;
  }, 300);
}

// -------------------------------------------------------
// CLASSES — fetch from Stitch and render
// -------------------------------------------------------
async function loadClasses() {
  const container = document.getElementById('classes-list');

  // Show loading
  container.innerHTML = `<div class="flex items-center justify-center py-16">
    <div class="loading-spinner"></div>
    <span class="ml-4 font-body text-stone/60 text-sm">Loading classes...</span>
  </div>`;

  // Fetch via StitchService
  const classes = await StitchService.getClasses();
  renderClasses(classes, container);
}

function renderClasses(classes, container) {
  if (!classes || classes.length === 0) {
    container.innerHTML = `<p class="text-center text-cream/30 py-16 font-body text-sm">No classes available this week.</p>`;
    return;
  }

  const preview = classes.slice(0, 4);
  container.innerHTML = preview.map(c => `
    <div class="class-row" onclick="openModal('membership-modal')">
      <div>
        <span class="class-badge ${c.featured ? 'featured' : ''}">${c.type}</span>
        <div class="font-display font-black text-xl text-cream uppercase tracking-tight">${c.name}</div>
        <div class="font-body text-sm text-cream/40 mt-1">${c.trainer} · ${c.day} · ${c.time}</div>
      </div>
      <div class="text-right shrink-0">
        <div class="font-body text-xs text-cream/30 mb-1">${c.duration}</div>
        <div class="font-body text-xs ${c.spots <= 3 ? 'text-blush' : 'text-stone'}">${c.spots} spots left</div>
      </div>
    </div>`).join('');
}

async function loadFullSchedule() {
  const container = document.getElementById('full-schedule-list');
  const classes = await StitchService.getClasses();

  container.innerHTML = classes.map(c => `
    <div class="class-row" onclick="closeModal('schedule-modal'); openModal('membership-modal')">
      <div>
        <span class="class-badge ${c.featured ? 'featured' : ''}">${c.type}</span>
        <div class="font-display font-black text-lg text-cream uppercase">${c.name}</div>
        <div class="font-body text-sm text-cream/40 mt-1">${c.trainer} · ${c.day} at ${c.time}</div>
      </div>
      <div class="text-right shrink-0">
        <div class="font-body text-xs text-cream/30 mb-1">${c.duration}</div>
        <div class="font-body text-xs ${c.spots <= 3 ? 'text-blush' : 'text-stone'}">${c.spots} spots left</div>
      </div>
    </div>`).join('');
}

// Init class loading
loadClasses();

// -------------------------------------------------------
// LEAD CAPTURE FORM — Stitch API submission
// -------------------------------------------------------
async function handleLeadSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('lead-submit');
  const btnText = document.getElementById('lead-btn-text');
  const spinner = document.getElementById('lead-spinner');
  const success = document.getElementById('lead-success');
  const errMsg = document.getElementById('lead-error');

  // Build payload
  const payload = {
    name: document.getElementById('lead-name').value,
    email: document.getElementById('lead-email').value,
    phone: document.getElementById('lead-phone').value,
    interest: document.getElementById('lead-interest').value,
    source: 'website_footer_form',
    timestamp: new Date().toISOString(),
  };

  // Show loading state
  btnText.textContent = 'Sending...';
  spinner.classList.remove('hidden');
  btn.disabled = true;

  // Submit to Stitch
  const result = await StitchService.submitLead(payload);

  // Reset button
  btnText.textContent = 'Send My Details';
  spinner.classList.add('hidden');
  btn.disabled = false;

  if (result.success) {
    success.classList.remove('hidden');
    errMsg.classList.add('hidden');
    document.getElementById('lead-form').reset();
    setTimeout(() => success.classList.add('hidden'), 5000);
  } else {
    errMsg.classList.remove('hidden');
    success.classList.add('hidden');
  }
}

async function handleModalSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const inputs = form.querySelectorAll('input, select');
  const payload = {
    name: inputs[0].value,
    email: inputs[1].value,
    plan: inputs[2].value,
    source: 'website_modal_form',
    timestamp: new Date().toISOString(),
  };

  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Processing...';
  btn.disabled = true;

  const result = await StitchService.signUpMember(payload);

  if (result.success) {
    form.innerHTML = `
      <div class="text-center py-12">
        <div class="font-display font-black text-5xl text-stone mb-4">✓</div>
        <h4 class="font-display font-black text-xl text-cream uppercase tracking-tight mb-2">Welcome to the Club!</h4>
        <p class="font-body text-cream/50 text-sm">We'll email you your onboarding details shortly.</p>
      </div>`;
  } else {
    btn.textContent = 'Try Again';
    btn.disabled = false;
  }
}

// -------------------------------------------------------
// INTERSECTION OBSERVER — Scroll Reveal
// -------------------------------------------------------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

// -------------------------------------------------------
// COUNTER ANIMATION
// -------------------------------------------------------
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current.toLocaleString() + suffix;
      if (current >= target) clearInterval(timer);
    }, 28);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

// -------------------------------------------------------
// HERO PARALLAX on scroll
// -------------------------------------------------------
const heroImg = document.getElementById('hero-img');
if (heroImg) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroImg.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
    }
  }, { passive: true });
}

// -------------------------------------------------------
// COMMUNITY GRID: Subtle parallax per item
// -------------------------------------------------------
const gridItems = document.querySelectorAll('.grid-item img');
window.addEventListener('scroll', () => {
  gridItems.forEach(img => {
    const rect = img.parentElement.getBoundingClientRect();
    const mid = rect.top + rect.height / 2 - window.innerHeight / 2;
    img.style.transform = `translateY(${mid * 0.05}px)`;
  });
}, { passive: true });

// -------------------------------------------------------
// KEYBOARD: Close modals on ESC
// -------------------------------------------------------
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  ['membership-modal', 'schedule-modal'].forEach(id => {
    const el = document.getElementById(id);
    if (el && !el.classList.contains('hidden')) closeModal(id);
  });
  const drawer = document.getElementById('membership-drawer');
  if (drawer && !drawer.classList.contains('hidden')) closeDrawer();
  if (menuOpen) closeMenu();
});
