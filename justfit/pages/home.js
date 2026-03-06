/* pages/home.js — Home page HTML template */
window.PAGE_HOME = `

<!-- ═══ HERO ═══ -->
<section class="relative min-h-screen flex flex-col justify-center overflow-hidden">
  <div class="hero-bg-img"></div>
  <div class="hero-gradient"></div>
  <div class="grid-overlay"></div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
    <div class="max-w-3xl">
      <div class="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 mb-8 reveal">
        <svg class="w-3.5 h-3.5 text-[#D72638]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span class="font-barlow text-xs text-white/70 tracking-widest">SECTOR 11 DWARKA, DELHI</span>
      </div>

      <h1 class="font-bebas leading-none tracking-wider mb-6 reveal" style="animation-delay:0.1s">
        <span class="block text-[clamp(4rem,12vw,9rem)] text-white">FORGE YOUR</span>
        <span class="block text-[clamp(4rem,12vw,9rem)] text-[#D72638]">LIMITS</span>
      </h1>

      <p class="font-barlow text-white/60 text-lg md:text-xl font-light max-w-xl mb-10 reveal" style="animation-delay:0.2s">
        Delhi's most inclusive gym — strength, cardio, wellness &amp; community under one roof.
      </p>

      <!-- Stats -->
      <div class="flex flex-wrap gap-8 mb-12 reveal" style="animation-delay:0.3s">
        <div>
          <p class="font-bebas text-3xl text-white tracking-wider">4.7<span class="text-[#D72638]">★</span></p>
          <p class="font-barlow text-xs text-white/50 tracking-widest uppercase">553+ Reviews</p>
        </div>
        <div class="w-px bg-white/10"></div>
        <div>
          <p class="font-bebas text-3xl text-white tracking-wider">553<span class="text-[#D72638]">+</span></p>
          <p class="font-barlow text-xs text-white/50 tracking-widest uppercase">Members</p>
        </div>
        <div class="w-px bg-white/10"></div>
        <div>
          <p class="font-bebas text-3xl text-white tracking-wider">11<span class="text-[#D72638]">PM</span></p>
          <p class="font-barlow text-xs text-white/50 tracking-widest uppercase">Open Till</p>
        </div>
      </div>

      <!-- CTAs -->
      <div class="flex flex-wrap gap-4 reveal" style="animation-delay:0.4s">
        <a href="#" data-page="pricing" class="inline-flex items-center gap-2 bg-[#D72638] hover:bg-[#B01E2D] text-white font-bebas tracking-widest text-base px-8 py-4 transition-colors">
          VIEW MEMBERSHIPS
        </a>
        <a href="#" data-page="classes" class="inline-flex items-center gap-2 border border-white/30 hover:border-[#D72638] text-white font-bebas tracking-widest text-base px-8 py-4 transition-colors hover:text-[#D72638]">
          EXPLORE CLASSES
        </a>
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="relative z-10 flex flex-col items-center gap-2 pb-10">
    <span class="font-barlow text-[10px] tracking-[0.3em] text-white/30 uppercase">Scroll</span>
    <div class="scroll-line"></div>
  </div>
</section>

<!-- ═══ TICKER ═══ -->
<div class="bg-[#D72638] py-3.5 overflow-hidden border-y border-[#B01E2D]">
  <div class="ticker-track">
    ${['Strength Training','Cardio Zone','Personal Training','Sauna & Recovery','Nutrition Support','Locker Room','Unisex Gym','LGBTQ+ Friendly','Strength Training','Cardio Zone','Personal Training','Sauna & Recovery','Nutrition Support','Locker Room','Unisex Gym','LGBTQ+ Friendly'].map(t => `
      <span class="font-bebas text-sm tracking-[0.25em] text-white/90 mx-4">${t}</span>
      <span class="text-white/40 mx-2">◆</span>
    `).join('')}
  </div>
</div>

<!-- ═══ ABOUT STRIP ═══ -->
<section class="relative py-28 overflow-hidden">
  <!-- Ghost BG text -->
  <div class="absolute right-0 top-1/2 -translate-y-1/2 font-bebas text-[clamp(8rem,25vw,20rem)] text-white/[0.025] select-none pointer-events-none leading-none pr-4">FIT</div>

  <div class="max-w-7xl mx-auto px-6">
    <div class="grid md:grid-cols-2 gap-16 items-center">

      <!-- Left text -->
      <div class="reveal">
        <p class="eyebrow mb-4">Who We Are</p>
        <h2 class="font-bebas text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-wide mb-6 text-white">
          Built for Delhi.<br/>Built for <span class="text-[#D72638] font-playfair italic">You.</span>
        </h2>
        <p class="font-barlow text-white/60 text-base leading-relaxed mb-4">
          Just Fitt Gym is Dwarka's premium unisex fitness destination — a space that champions everyone, from first-timers to competitive athletes. Located in the heart of Sector 11, we've built a community where hard work meets heart.
        </p>
        <p class="font-barlow text-white/60 text-base leading-relaxed mb-10">
          Proudly <strong class="text-white">LGBTQ+ friendly</strong> and completely unisex, because fitness knows no boundaries.
        </p>
        <a href="#" data-page="about" class="inline-flex items-center gap-3 bg-[#D72638] hover:bg-[#B01E2D] text-white font-bebas tracking-widest px-8 py-4 transition-colors">
          OUR STORY
        </a>
      </div>

      <!-- Trainer card -->
      <div class="reveal" style="animation-delay:0.15s">
        <div class="relative bg-[#111] border border-white/10 overflow-hidden">
          <div class="trainer-img-wrap h-80">
            <img src="assets/images/trainer.png" alt="Just Fitt Trainer" class="w-full h-full object-cover"/>
          </div>
          <div class="p-6">
            <p class="eyebrow mb-1">Expert Trainers</p>
            <h3 class="font-bebas text-2xl tracking-wider text-white mb-2">Certified Professionals</h3>
            <p class="font-barlow text-white/50 text-sm leading-relaxed mb-4">Our certified team brings years of experience across strength, cardio, and wellness disciplines.</p>
            <div class="flex gap-8 border-t border-white/10 pt-4">
              <div><p class="font-bebas text-xl text-[#D72638]">4.7★</p><p class="font-barlow text-xs text-white/40 uppercase tracking-widest">Rated</p></div>
              <div><p class="font-bebas text-xl text-white">553+</p><p class="font-barlow text-xs text-white/40 uppercase tracking-widest">Members</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ FEATURES GRID ═══ -->
<section class="py-24 bg-[#0d0d0d]">
  <div class="max-w-7xl mx-auto px-6">
    <div class="mb-16 reveal">
      <p class="eyebrow mb-3">What We Offer</p>
      <h2 class="font-bebas text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-wide text-white">
        Everything You Need to <span class="text-[#D72638] font-playfair italic">Thrive</span>
      </h2>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">

      <!-- Card 1 -->
      <div class="feature-card-wrap bg-[#0d0d0d] p-8 flex flex-col gap-5 hover:bg-[#111] transition-colors reveal group">
        <div class="font-bebas text-6xl text-white/[0.06] leading-none">01</div>
        <svg class="w-7 h-7 text-[#D72638]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M6 5v14M18 5v14M6 12h12M3 7h3M18 7h3M3 17h3M18 17h3"/></svg>
        <div>
          <h3 class="font-bebas text-xl tracking-wider text-white mb-2">Strength Training</h3>
          <p class="font-barlow text-white/50 text-sm leading-relaxed">Free weights, machines &amp; power racks for every level — from beginner to advanced lifters.</p>
        </div>
        <div class="overflow-hidden mt-auto h-40">
          <img src="assets/images/strength.png" alt="Strength Training" class="feature-card-img w-full h-full object-cover"/>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="feature-card-wrap bg-[#0d0d0d] p-8 flex flex-col gap-5 hover:bg-[#111] transition-colors reveal group" style="animation-delay:0.1s">
        <div class="font-bebas text-6xl text-white/[0.06] leading-none">02</div>
        <svg class="w-7 h-7 text-[#D72638]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        <div>
          <h3 class="font-bebas text-xl tracking-wider text-white mb-2">Cardio Zone</h3>
          <p class="font-barlow text-white/50 text-sm leading-relaxed">Premium treadmills, bikes, ellipticals &amp; rowing machines to maximise your endurance.</p>
        </div>
        <div class="overflow-hidden mt-auto h-40">
          <img src="assets/images/cardio.png" alt="Cardio Zone" class="feature-card-img w-full h-full object-cover"/>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="feature-card-wrap bg-[#0d0d0d] p-8 flex flex-col gap-5 hover:bg-[#111] transition-colors reveal group" style="animation-delay:0.2s">
        <div class="font-bebas text-6xl text-white/[0.06] leading-none">03</div>
        <svg class="w-7 h-7 text-[#D72638]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        <div>
          <h3 class="font-bebas text-xl tracking-wider text-white mb-2">Nutrition Support</h3>
          <p class="font-barlow text-white/50 text-sm leading-relaxed">Expert nutrition guidance to complement your training and accelerate results.</p>
        </div>
        <div class="flex items-center justify-center mt-auto h-40 bg-[#1a0a0a]">
          <svg class="w-16 h-16 text-[#D72638] opacity-20" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="feature-card-wrap bg-[#0d0d0d] p-8 flex flex-col gap-5 hover:bg-[#111] transition-colors reveal group" style="animation-delay:0.3s">
        <div class="font-bebas text-6xl text-white/[0.06] leading-none">04</div>
        <svg class="w-7 h-7 text-[#D72638]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/><circle cx="8" cy="6" r="2" fill="currentColor"/><circle cx="16" cy="12" r="2" fill="currentColor"/><circle cx="8" cy="18" r="2" fill="currentColor"/></svg>
        <div>
          <h3 class="font-bebas text-xl tracking-wider text-white mb-2">Sauna &amp; Recovery</h3>
          <p class="font-barlow text-white/50 text-sm leading-relaxed">Premium sauna facility for muscle recovery, stress relief, and deep relaxation.</p>
        </div>
        <div class="flex items-center justify-center mt-auto h-40 bg-gradient-to-br from-[#1a0505] to-[#0d0d0d]">
          <svg class="w-16 h-16 text-[#D72638] opacity-20" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ HOURS BAR ═══ -->
<section class="py-16">
  <div class="max-w-7xl mx-auto px-6">
    <div class="border border-white/10 bg-[#111] p-8 md:p-10 reveal">
      <div class="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-0 lg:justify-between">
        <div class="flex items-center gap-3">
          <span class="text-2xl">🕐</span>
          <h3 class="font-bebas text-2xl tracking-widest text-white">OPERATING HOURS</h3>
        </div>
        <div class="flex flex-col sm:flex-row gap-6 sm:gap-12">
          <div>
            <p class="font-barlow text-xs text-white/40 tracking-widest uppercase mb-1">Mon – Fri</p>
            <p class="font-bebas text-xl tracking-wider text-white">5:00 AM – <span class="text-[#D72638]">11:00 PM</span></p>
          </div>
          <div>
            <p class="font-barlow text-xs text-white/40 tracking-widest uppercase mb-1">Saturday</p>
            <p class="font-bebas text-xl tracking-wider text-white">6:00 AM – 10:00 PM</p>
          </div>
          <div>
            <p class="font-barlow text-xs text-white/40 tracking-widest uppercase mb-1">Sunday</p>
            <p class="font-bebas text-xl tracking-wider text-white">7:00 AM – 9:00 PM</p>
          </div>
        </div>
        <div class="flex items-center gap-2.5 bg-[#D72638]/10 border border-[#D72638]/20 px-5 py-3">
          <span class="peak-dot"></span>
          <span class="font-barlow text-sm text-white/70">Peak Hours: <strong class="text-white">6 PM – 8 PM</strong></span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ CTA STRIP ═══ -->
<section class="bg-[#D72638] py-20">
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
      <div>
        <p class="font-barlow text-xs text-white/60 tracking-[0.3em] uppercase mb-3">Ready to Start?</p>
        <h2 class="font-bebas text-[clamp(2rem,5vw,4rem)] leading-none tracking-wide text-white mb-4">Your first step starts <em class="font-playfair">today.</em></h2>
        <div class="flex items-start gap-2 text-white/70">
          <svg class="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <p class="font-barlow text-sm">Plot No. 3, Manish Twin Plaza, Ashirwad Chowk, Sector 11 Dwarka, Delhi – 110075</p>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 shrink-0">
        <a href="tel:+919899450419" class="inline-flex items-center gap-2 bg-white text-[#D72638] hover:bg-gray-100 font-bebas tracking-widest px-8 py-4 text-base transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 5.39 5.39l.87-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          +91 98994 50419
        </a>
        <a href="#" data-page="pricing" class="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-[#D72638] font-bebas tracking-widest px-8 py-4 text-base transition-colors">
          VIEW PLANS
        </a>
      </div>
    </div>
  </div>
</section>

${window.FOOTER_HTML}
`;
