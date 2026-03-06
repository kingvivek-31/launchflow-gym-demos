/* pages/classes.js — Classes page template */
window.PAGE_CLASSES = `

<!-- ═══ PAGE HERO ═══ -->
<section class="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
  <div class="page-hero-bg" style="background-image:url('assets/images/cardio.png')"></div>
  <div class="hero-gradient absolute inset-0 z-[1]"></div>
  <div class="grid-overlay"></div>
  <div class="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
    <p class="eyebrow mb-4 reveal">Our Programs</p>
    <h1 class="font-bebas text-[clamp(3rem,9vw,7rem)] leading-none tracking-wide text-white reveal" style="animation-delay:0.1s">
      Train Hard.<br/><span class="text-[#D72638] font-playfair italic">Train Smart.</span>
    </h1>
    <p class="font-barlow text-white/60 text-lg max-w-xl mt-4 reveal" style="animation-delay:0.2s">
      Six powerful programs designed to unlock your potential — whatever your level
    </p>
  </div>
</section>

<!-- ═══ CLASSES SECTION ═══ -->
<section class="py-24">
  <div class="max-w-7xl mx-auto px-6">

    <!-- Filter Tabs -->
    <div class="flex flex-wrap gap-3 mb-16 reveal">
      <button data-filter="all"      class="filter-tab active-tab font-bebas tracking-widest text-sm px-6 py-3 border border-white/20 text-white transition-colors hover:border-[#D72638]">ALL</button>
      <button data-filter="strength" class="filter-tab font-bebas tracking-widest text-sm px-6 py-3 border border-white/20 text-white/60 transition-colors hover:border-[#D72638] hover:text-white">STRENGTH</button>
      <button data-filter="cardio"   class="filter-tab font-bebas tracking-widest text-sm px-6 py-3 border border-white/20 text-white/60 transition-colors hover:border-[#D72638] hover:text-white">CARDIO</button>
      <button data-filter="wellness" class="filter-tab font-bebas tracking-widest text-sm px-6 py-3 border border-white/20 text-white/60 transition-colors hover:border-[#D72638] hover:text-white">WELLNESS</button>
    </div>

    <!-- Cards Grid -->
    <div id="classesGrid" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">

      <!-- 1 -->
      <div class="class-card bg-[#0d0d0d] p-8 hover:bg-[#111] transition-colors reveal" data-category="strength">
        <div class="font-bebas text-7xl text-white/[0.05] leading-none mb-4">01</div>
        <span class="badge badge-strength inline-block font-barlow text-xs font-semibold px-3 py-1 border tracking-widest uppercase mb-5">Strength</span>
        <div class="w-full h-px bg-white/10 mb-5"></div>
        <h3 class="font-bebas text-2xl tracking-wider text-white mb-3">Weight Training</h3>
        <p class="font-barlow text-white/50 text-sm leading-relaxed mb-6">Master the fundamentals. Barbells, dumbbells, machines — tailored programming for progressive overload and real results.</p>
        <div class="flex gap-6 mb-6">
          <span class="flex items-center gap-1.5 font-barlow text-xs text-white/40">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>60 min
          </span>
          <span class="flex items-center gap-1.5 font-barlow text-xs text-white/40">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>All Levels
          </span>
        </div>
        <a href="tel:+919899450419" class="font-barlow text-sm text-[#D72638] hover:text-white transition-colors font-medium">Enquire Now →</a>
      </div>

      <!-- 2 -->
      <div class="class-card bg-[#0d0d0d] p-8 hover:bg-[#111] transition-colors reveal" data-category="strength" style="animation-delay:0.05s">
        <div class="font-bebas text-7xl text-white/[0.05] leading-none mb-4">02</div>
        <span class="badge badge-strength inline-block font-barlow text-xs font-semibold px-3 py-1 border tracking-widest uppercase mb-5">Strength</span>
        <div class="w-full h-px bg-white/10 mb-5"></div>
        <h3 class="font-bebas text-2xl tracking-wider text-white mb-3">Strength &amp; Conditioning</h3>
        <p class="font-barlow text-white/50 text-sm leading-relaxed mb-6">High-intensity strength work combined with conditioning drills. Build raw power and forge an athletic physique.</p>
        <div class="flex gap-6 mb-6">
          <span class="flex items-center gap-1.5 font-barlow text-xs text-white/40">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>75 min
          </span>
          <span class="flex items-center gap-1.5 font-barlow text-xs text-white/40">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>Intermediate+
          </span>
        </div>
        <a href="tel:+919899450419" class="font-barlow text-sm text-[#D72638] hover:text-white transition-colors font-medium">Enquire Now →</a>
      </div>

      <!-- 3 -->
      <div class="class-card bg-[#0d0d0d] p-8 hover:bg-[#111] transition-colors reveal" data-category="cardio" style="animation-delay:0.1s">
        <div class="font-bebas text-7xl text-white/[0.05] leading-none mb-4">03</div>
        <span class="badge badge-cardio inline-block font-barlow text-xs font-semibold px-3 py-1 border tracking-widest uppercase mb-5">Cardio</span>
        <div class="w-full h-px bg-white/10 mb-5"></div>
        <h3 class="font-bebas text-2xl tracking-wider text-white mb-3">Cardio Training</h3>
        <p class="font-barlow text-white/50 text-sm leading-relaxed mb-6">Structured cardio sessions using our premium equipment. Burn fat, boost stamina, and improve cardiovascular health.</p>
        <div class="flex gap-6 mb-6">
          <span class="flex items-center gap-1.5 font-barlow text-xs text-white/40">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>45 min
          </span>
          <span class="flex items-center gap-1.5 font-barlow text-xs text-white/40">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>All Levels
          </span>
        </div>
        <a href="tel:+919899450419" class="font-barlow text-sm text-[#D72638] hover:text-white transition-colors font-medium">Enquire Now →</a>
      </div>

      <!-- 4 -->
      <div class="class-card bg-[#0d0d0d] p-8 hover:bg-[#111] transition-colors reveal" data-category="strength" style="animation-delay:0.15s">
        <div class="font-bebas text-7xl text-white/[0.05] leading-none mb-4">04</div>
        <span class="badge badge-personal inline-block font-barlow text-xs font-semibold px-3 py-1 border tracking-widest uppercase mb-5">Personal</span>
        <div class="w-full h-px bg-white/10 mb-5"></div>
        <h3 class="font-bebas text-2xl tracking-wider text-white mb-3">Personal Training</h3>
        <p class="font-barlow text-white/50 text-sm leading-relaxed mb-6">One-on-one sessions with certified trainers. Fully customised programming, real-time feedback, and accountability.</p>
        <div class="flex gap-6 mb-6">
          <span class="flex items-center gap-1.5 font-barlow text-xs text-white/40">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>60 min
          </span>
          <span class="flex items-center gap-1.5 font-barlow text-xs text-white/40">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>Any Level
          </span>
        </div>
        <a href="tel:+919899450419" class="font-barlow text-sm text-[#D72638] hover:text-white transition-colors font-medium">Enquire Now →</a>
      </div>

      <!-- 5 -->
      <div class="class-card bg-[#0d0d0d] p-8 hover:bg-[#111] transition-colors reveal" data-category="wellness" style="animation-delay:0.2s">
        <div class="font-bebas text-7xl text-white/[0.05] leading-none mb-4">05</div>
        <span class="badge badge-wellness inline-block font-barlow text-xs font-semibold px-3 py-1 border tracking-widest uppercase mb-5">Wellness</span>
        <div class="w-full h-px bg-white/10 mb-5"></div>
        <h3 class="font-bebas text-2xl tracking-wider text-white mb-3">Nutrition Coaching</h3>
        <p class="font-barlow text-white/50 text-sm leading-relaxed mb-6">Expert nutritional guidance tailored to your fitness goals. Transform your diet and sustain long-term change.</p>
        <div class="flex gap-6 mb-6">
          <span class="flex items-center gap-1.5 font-barlow text-xs text-white/40">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>30 min
          </span>
          <span class="flex items-center gap-1.5 font-barlow text-xs text-white/40">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>All Members
          </span>
        </div>
        <a href="tel:+919899450419" class="font-barlow text-sm text-[#D72638] hover:text-white transition-colors font-medium">Enquire Now →</a>
      </div>

      <!-- 6 -->
      <div class="class-card bg-[#0d0d0d] p-8 hover:bg-[#111] transition-colors reveal" data-category="wellness" style="animation-delay:0.25s">
        <div class="font-bebas text-7xl text-white/[0.05] leading-none mb-4">06</div>
        <span class="badge badge-recovery inline-block font-barlow text-xs font-semibold px-3 py-1 border tracking-widest uppercase mb-5">Recovery</span>
        <div class="w-full h-px bg-white/10 mb-5"></div>
        <h3 class="font-bebas text-2xl tracking-wider text-white mb-3">Sauna &amp; Recovery</h3>
        <p class="font-barlow text-white/50 text-sm leading-relaxed mb-6">Full access to our premium sauna for deep muscle recovery, stress relief, and holistic well-being. Available to all members.</p>
        <div class="flex gap-6 mb-6">
          <span class="flex items-center gap-1.5 font-barlow text-xs text-white/40">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Open Access
          </span>
          <span class="flex items-center gap-1.5 font-barlow text-xs text-white/40">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>All Members
          </span>
        </div>
        <a href="tel:+919899450419" class="font-barlow text-sm text-[#D72638] hover:text-white transition-colors font-medium">Enquire Now →</a>
      </div>

    </div>
  </div>
</section>

<!-- ═══ CTA STRIP ═══ -->
<section class="bg-[#D72638] py-20">
  <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
    <div>
      <p class="font-barlow text-xs text-white/60 tracking-[0.3em] uppercase mb-3">Pick Your Program</p>
      <h2 class="font-bebas text-[clamp(2rem,5vw,4rem)] leading-none tracking-wide text-white">Let's build your <em class="font-playfair">perfect plan.</em></h2>
    </div>
    <div class="flex flex-col sm:flex-row gap-4 shrink-0">
      <a href="tel:+919899450419" class="inline-flex items-center justify-center bg-white text-[#D72638] hover:bg-gray-100 font-bebas tracking-widest px-8 py-4 transition-colors">CALL +91 98994 50419</a>
      <a href="#" data-page="pricing" class="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-[#D72638] font-bebas tracking-widest px-8 py-4 transition-colors">VIEW PLANS</a>
    </div>
  </div>
</section>

${window.FOOTER_HTML}
`;
