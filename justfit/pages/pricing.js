/* pages/pricing.js — Pricing page template */
window.PAGE_PRICING = `

<!-- ═══ PAGE HERO ═══ -->
<section class="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
  <div class="page-hero-bg" style="background-image:url('assets/images/strength.png')"></div>
  <div class="hero-gradient absolute inset-0 z-[1]"></div>
  <div class="grid-overlay"></div>
  <div class="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
    <p class="eyebrow mb-4 reveal">Membership Plans</p>
    <h1 class="font-bebas text-[clamp(3rem,9vw,7rem)] leading-none tracking-wide text-white reveal" style="animation-delay:0.1s">
      Flexible Plans.<br/><span class="text-[#D72638] font-playfair italic">Real Results.</span>
    </h1>
    <p class="font-barlow text-white/60 text-lg max-w-xl mt-4 reveal" style="animation-delay:0.2s">
      Choose the plan that fits your lifestyle — no hidden fees, no compromises
    </p>
  </div>
</section>

<!-- ═══ PRICING CARDS ═══ -->
<section class="py-28">
  <div class="max-w-7xl mx-auto px-6">

    <div class="grid md:grid-cols-3 gap-6 mb-10">

      <!-- Starter -->
      <div class="border border-white/10 bg-[#111] p-10 flex flex-col reveal hover:border-white/20 transition-colors">
        <p class="font-bebas text-xl tracking-[0.2em] text-white/50 mb-4">STARTER</p>
        <div class="flex items-end gap-1 mb-2">
          <span class="font-barlow text-2xl text-white/60 self-start mt-2">₹</span>
          <span class="font-bebas text-7xl text-white leading-none tracking-tight">999</span>
          <span class="font-barlow text-white/40 self-end mb-2">/mo</span>
        </div>
        <p class="font-barlow text-white/50 text-sm leading-relaxed mb-8">Perfect for beginners looking to kickstart their fitness journey with essential gym access.</p>
        <ul class="flex flex-col gap-3 mb-10 flex-1">
          <li class="flex items-center gap-3 font-barlow text-sm text-white/70"><span class="text-[#D72638] font-bold text-base shrink-0">✓</span>Full Gym Access</li>
          <li class="flex items-center gap-3 font-barlow text-sm text-white/70"><span class="text-[#D72638] font-bold text-base shrink-0">✓</span>Cardio Zone</li>
          <li class="flex items-center gap-3 font-barlow text-sm text-white/70"><span class="text-[#D72638] font-bold text-base shrink-0">✓</span>Locker Room</li>
          <li class="flex items-center gap-3 font-barlow text-sm text-white/70"><span class="text-[#D72638] font-bold text-base shrink-0">✓</span>Shower Facility</li>
          <li class="flex items-center gap-3 font-barlow text-sm text-white/30"><span class="text-white/20 font-bold text-base shrink-0">✗</span>Personal Training</li>
          <li class="flex items-center gap-3 font-barlow text-sm text-white/30"><span class="text-white/20 font-bold text-base shrink-0">✗</span>Nutrition Coaching</li>
          <li class="flex items-center gap-3 font-barlow text-sm text-white/30"><span class="text-white/20 font-bold text-base shrink-0">✗</span>Sauna Access</li>
        </ul>
        <a href="tel:+919899450419" class="w-full text-center border border-[#D72638] text-[#D72638] hover:bg-[#D72638] hover:text-white font-bebas tracking-widest py-4 transition-colors">GET STARTED</a>
      </div>

      <!-- Pro (Featured) -->
      <div class="pricing-featured border p-10 flex flex-col reveal relative" style="animation-delay:0.1s">
        <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D72638] font-bebas text-xs tracking-[0.2em] text-white px-5 py-1.5 whitespace-nowrap">MOST POPULAR</div>
        <p class="font-bebas text-xl tracking-[0.2em] text-[#D72638] mb-4">PRO</p>
        <div class="flex items-end gap-1 mb-2">
          <span class="font-barlow text-2xl text-white/60 self-start mt-2">₹</span>
          <span class="font-bebas text-7xl text-white leading-none tracking-tight">1,799</span>
          <span class="font-barlow text-white/40 self-end mb-2">/mo</span>
        </div>
        <p class="font-barlow text-white/50 text-sm leading-relaxed mb-8">The complete fitness package for members serious about making real, measurable progress.</p>
        <ul class="flex flex-col gap-3 mb-10 flex-1">
          <li class="flex items-center gap-3 font-barlow text-sm text-white/70"><span class="text-[#D72638] font-bold text-base shrink-0">✓</span>Full Gym Access</li>
          <li class="flex items-center gap-3 font-barlow text-sm text-white/70"><span class="text-[#D72638] font-bold text-base shrink-0">✓</span>Cardio Zone</li>
          <li class="flex items-center gap-3 font-barlow text-sm text-white/70"><span class="text-[#D72638] font-bold text-base shrink-0">✓</span>Locker Room</li>
          <li class="flex items-center gap-3 font-barlow text-sm text-white/70"><span class="text-[#D72638] font-bold text-base shrink-0">✓</span>Shower Facility</li>
          <li class="flex items-center gap-3 font-barlow text-sm text-white/70"><span class="text-[#D72638] font-bold text-base shrink-0">✓</span>4 Personal Training Sessions</li>
          <li class="flex items-center gap-3 font-barlow text-sm text-white/70"><span class="text-[#D72638] font-bold text-base shrink-0">✓</span>Nutrition Coaching</li>
          <li class="flex items-center gap-3 font-barlow text-sm text-white/30"><span class="text-white/20 font-bold text-base shrink-0">✗</span>Sauna Access</li>
        </ul>
        <a href="tel:+919899450419" class="w-full text-center bg-[#D72638] hover:bg-[#B01E2D] text-white font-bebas tracking-widest py-4 transition-colors">GET STARTED</a>
      </div>

      <!-- Elite -->
      <div class="border border-white/10 bg-[#111] p-10 flex flex-col reveal hover:border-white/20 transition-colors" style="animation-delay:0.2s">
        <p class="font-bebas text-xl tracking-[0.2em] text-white/50 mb-4">ELITE</p>
        <div class="flex items-end gap-1 mb-2">
          <span class="font-barlow text-2xl text-white/60 self-start mt-2">₹</span>
          <span class="font-bebas text-7xl text-white leading-none tracking-tight">2,999</span>
          <span class="font-barlow text-white/40 self-end mb-2">/mo</span>
        </div>
        <p class="font-barlow text-white/50 text-sm leading-relaxed mb-8">The ultimate all-inclusive membership for those who demand the very best in fitness support.</p>
        <ul class="flex flex-col gap-3 mb-10 flex-1">
          <li class="flex items-center gap-3 font-barlow text-sm text-white/70"><span class="text-[#D72638] font-bold text-base shrink-0">✓</span>Full Gym Access</li>
          <li class="flex items-center gap-3 font-barlow text-sm text-white/70"><span class="text-[#D72638] font-bold text-base shrink-0">✓</span>Cardio Zone</li>
          <li class="flex items-center gap-3 font-barlow text-sm text-white/70"><span class="text-[#D72638] font-bold text-base shrink-0">✓</span>Locker Room</li>
          <li class="flex items-center gap-3 font-barlow text-sm text-white/70"><span class="text-[#D72638] font-bold text-base shrink-0">✓</span>Shower Facility</li>
          <li class="flex items-center gap-3 font-barlow text-sm text-white/70"><span class="text-[#D72638] font-bold text-base shrink-0">✓</span>Unlimited Personal Training</li>
          <li class="flex items-center gap-3 font-barlow text-sm text-white/70"><span class="text-[#D72638] font-bold text-base shrink-0">✓</span>Nutrition Coaching</li>
          <li class="flex items-center gap-3 font-barlow text-sm text-white/70"><span class="text-[#D72638] font-bold text-base shrink-0">✓</span>Sauna Access</li>
        </ul>
        <a href="tel:+919899450419" class="w-full text-center border border-[#D72638] text-[#D72638] hover:bg-[#D72638] hover:text-white font-bebas tracking-widest py-4 transition-colors">GET STARTED</a>
      </div>
    </div>

    <!-- Savings Banner -->
    <div class="flex flex-col sm:flex-row items-center gap-6 bg-[#111] border border-[#D72638]/20 p-8 mb-24 reveal">
      <span class="text-3xl shrink-0">🎯</span>
      <div class="flex-1">
        <p class="font-bebas text-xl tracking-wider text-white mb-1">Save up to 20% with Quarterly Plans</p>
        <p class="font-barlow text-sm text-white/50">Pay for 3 months and get a significant discount on any plan. Call us for quarterly pricing.</p>
      </div>
      <a href="tel:+919899450419" class="shrink-0 bg-[#D72638] hover:bg-[#B01E2D] text-white font-bebas tracking-widest px-8 py-4 transition-colors whitespace-nowrap">ASK ABOUT QUARTERLY</a>
    </div>

    <!-- Every Plan Includes -->
    <div class="reveal">
      <p class="eyebrow mb-3">No Compromise</p>
      <h2 class="font-bebas text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-wide text-white mb-12">
        Every Plan <span class="text-[#D72638] font-playfair italic">Includes</span>
      </h2>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
      <div class="bg-[#0d0d0d] p-8 hover:bg-[#111] transition-colors reveal text-center">
        <div class="text-4xl mb-4">🔒</div>
        <h3 class="font-bebas text-xl tracking-wider text-white mb-2">Secure Lockers</h3>
        <p class="font-barlow text-white/50 text-sm leading-relaxed">Personal lockers with secure combination locks available on every visit.</p>
      </div>
      <div class="bg-[#0d0d0d] p-8 hover:bg-[#111] transition-colors reveal text-center" style="animation-delay:0.1s">
        <div class="text-4xl mb-4">🚿</div>
        <h3 class="font-bebas text-xl tracking-wider text-white mb-2">Shower Facility</h3>
        <p class="font-barlow text-white/50 text-sm leading-relaxed">Clean, well-maintained shower rooms so you can head straight to work or home.</p>
      </div>
      <div class="bg-[#0d0d0d] p-8 hover:bg-[#111] transition-colors reveal text-center" style="animation-delay:0.2s">
        <div class="text-4xl mb-4">✨</div>
        <h3 class="font-bebas text-xl tracking-wider text-white mb-2">Great Ambience</h3>
        <p class="font-barlow text-white/50 text-sm leading-relaxed">Premium interiors, curated music, and energy that makes you push harder.</p>
      </div>
      <div class="bg-[#0d0d0d] p-8 hover:bg-[#111] transition-colors reveal text-center" style="animation-delay:0.3s">
        <div class="text-4xl mb-4">🤝</div>
        <h3 class="font-bebas text-xl tracking-wider text-white mb-2">Supportive Staff</h3>
        <p class="font-barlow text-white/50 text-sm leading-relaxed">Our friendly team is always on hand to guide, motivate, and support your journey.</p>
      </div>
    </div>

  </div>
</section>

<!-- ═══ CTA STRIP ═══ -->
<section class="bg-[#D72638] py-20">
  <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
    <div>
      <p class="font-barlow text-xs text-white/60 tracking-[0.3em] uppercase mb-3">Questions?</p>
      <h2 class="font-bebas text-[clamp(2rem,5vw,4rem)] leading-none tracking-wide text-white">We'll find the <em class="font-playfair">right plan for you.</em></h2>
    </div>
    <div class="flex flex-col sm:flex-row gap-4 shrink-0">
      <a href="tel:+919899450419" class="inline-flex items-center gap-2 bg-white text-[#D72638] hover:bg-gray-100 font-bebas tracking-widest px-8 py-4 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 5.39 5.39l.87-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        +91 98994 50419
      </a>
      <a href="#" data-page="classes" class="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-[#D72638] font-bebas tracking-widest px-8 py-4 transition-colors">EXPLORE CLASSES</a>
    </div>
  </div>
</section>

${window.FOOTER_HTML}
`;
