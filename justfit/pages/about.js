/* pages/about.js — About page template */
window.PAGE_ABOUT = `

<!-- ═══ PAGE HERO ═══ -->
<section class="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
  <div class="page-hero-bg" style="background-image:url('assets/images/hero-bg.png')"></div>
  <div class="hero-gradient absolute inset-0 z-[1]"></div>
  <div class="grid-overlay"></div>
  <div class="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
    <p class="eyebrow mb-4 reveal">Our Story</p>
    <h1 class="font-bebas text-[clamp(3rem,9vw,7rem)] leading-none tracking-wide text-white reveal" style="animation-delay:0.1s">
      Built for Delhi.<br/><span class="text-[#D72638] font-playfair italic">Built for You.</span>
    </h1>
    <p class="font-barlow text-white/60 text-lg max-w-xl mt-4 reveal" style="animation-delay:0.2s">A gym built on inclusivity, excellence and community — right in the heart of Dwarka</p>
  </div>
</section>

<!-- ═══ STORY SECTION ═══ -->
<section class="py-28">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid lg:grid-cols-2 gap-16 items-start">

      <!-- Left -->
      <div class="reveal">
        <p class="eyebrow mb-4">Who We Are</p>
        <h2 class="font-bebas text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-wide text-white mb-8">
          More Than a Gym.<br/><span class="text-[#D72638] font-playfair italic">A Movement.</span>
        </h2>
        <p class="font-barlow text-white/60 text-base leading-relaxed mb-4">
          Just Fitt Gym was born from a simple idea — that fitness should be accessible, empowering, and welcoming to everyone. Nestled in the bustling heart of Sector 11 Dwarka, we've become Delhi's go-to destination for those who take their health seriously.
        </p>
        <p class="font-barlow text-white/60 text-base leading-relaxed mb-4">
          With a 4.7-star rating and 553+ glowing Google reviews, we're not just a gym — we're a community that lifts each other up. From first-timers to competitive athletes, our doors are open to all.
        </p>
        <p class="font-barlow text-white/60 text-base leading-relaxed mb-10">
          We are proudly <strong class="text-white">LGBTQ+ friendly</strong> and completely <strong class="text-white">unisex</strong>, because fitness knows no boundaries.
        </p>
        <a href="tel:+919899450419" class="inline-flex items-center gap-2 bg-[#D72638] hover:bg-[#B01E2D] text-white font-bebas tracking-widest px-8 py-4 transition-colors">GET IN TOUCH</a>
      </div>

      <!-- Right: image + stats panel -->
      <div class="reveal" style="animation-delay:0.15s">
        <div class="relative overflow-hidden mb-6">
          <img src="assets/images/strength.png" alt="Just Fitt Gym" class="w-full h-72 object-cover filter brightness-75"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        <div class="grid grid-cols-2 gap-px bg-white/5">
          <div class="bg-[#111] p-6 text-center">
            <p class="font-bebas text-3xl text-[#D72638] tracking-wider">4.7★</p>
            <p class="font-barlow text-xs text-white/40 uppercase tracking-widest mt-1">Google Rating</p>
          </div>
          <div class="bg-[#111] p-6 text-center">
            <p class="font-bebas text-3xl text-white tracking-wider">100%</p>
            <p class="font-barlow text-xs text-white/40 uppercase tracking-widest mt-1">Inclusive Space</p>
          </div>
          <div class="bg-[#111] p-6 text-center">
            <p class="font-bebas text-3xl text-[#D72638] tracking-wider">11PM</p>
            <p class="font-barlow text-xs text-white/40 uppercase tracking-widest mt-1">Open Till</p>
          </div>
          <div class="bg-[#111] p-6 text-center">
            <p class="font-bebas text-3xl text-white tracking-wider">553+</p>
            <p class="font-barlow text-xs text-white/40 uppercase tracking-widest mt-1">Happy Members</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ═══ CORE VALUES ═══ -->
<section class="py-24 bg-[#0d0d0d]">
  <div class="max-w-7xl mx-auto px-6">
    <div class="mb-16 reveal">
      <p class="eyebrow mb-3">What Drives Us</p>
      <h2 class="font-bebas text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-wide text-white">
        Our Core <span class="text-[#D72638] font-playfair italic">Values</span>
      </h2>
    </div>

    <div class="grid md:grid-cols-3 gap-px bg-white/5">
      <div class="bg-[#0d0d0d] p-10 hover:bg-[#111] transition-colors reveal">
        <svg class="w-8 h-8 text-[#D72638] mb-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        <div class="w-8 h-px bg-[#D72638] mb-6"></div>
        <h3 class="font-bebas text-2xl tracking-wider text-white mb-3">Inclusivity</h3>
        <p class="font-barlow text-white/50 text-sm leading-relaxed">We welcome everyone — regardless of age, gender, background or fitness level. Every body belongs at Just Fitt.</p>
      </div>
      <div class="bg-[#0d0d0d] p-10 hover:bg-[#111] transition-colors reveal" style="animation-delay:0.1s">
        <svg class="w-8 h-8 text-[#D72638] mb-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        <div class="w-8 h-px bg-[#D72638] mb-6"></div>
        <h3 class="font-bebas text-2xl tracking-wider text-white mb-3">Excellence</h3>
        <p class="font-barlow text-white/50 text-sm leading-relaxed">From premium equipment to certified trainers, we hold every aspect of our gym to the highest standard.</p>
      </div>
      <div class="bg-[#0d0d0d] p-10 hover:bg-[#111] transition-colors reveal" style="animation-delay:0.2s">
        <svg class="w-8 h-8 text-[#D72638] mb-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        <div class="w-8 h-px bg-[#D72638] mb-6"></div>
        <h3 class="font-bebas text-2xl tracking-wider text-white mb-3">Community</h3>
        <p class="font-barlow text-white/50 text-sm leading-relaxed">We're not just a gym — we're a family. Our members support, motivate, and inspire each other every day.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══ TESTIMONIALS ═══ -->
<section class="py-28">
  <div class="max-w-7xl mx-auto px-6">
    <div class="mb-16 reveal">
      <p class="eyebrow mb-3">What Members Say</p>
      <h2 class="font-bebas text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-wide text-white">
        Real People. <span class="text-[#D72638] font-playfair italic">Real Results.</span>
      </h2>
    </div>

    <div class="grid md:grid-cols-3 gap-6">

      <div class="bg-[#111] border border-white/10 p-8 hover:border-[#D72638]/30 transition-colors reveal">
        <p class="text-[#D72638] text-lg mb-5">★★★★★</p>
        <p class="font-barlow text-white/70 text-sm leading-relaxed mb-8 italic">"Just Fitt is hands down the best gym in Dwarka. The equipment is top-notch, trainers are incredibly supportive, and the ambience is unmatched. I've lost 12kg in 4 months!"</p>
        <div class="flex items-center gap-4 border-t border-white/10 pt-6">
          <div class="w-10 h-10 rounded-full bg-[#D72638] flex items-center justify-center font-bebas text-white text-sm shrink-0">RS</div>
          <div>
            <p class="font-barlow font-semibold text-white text-sm">Rahul Sharma</p>
            <p class="font-barlow text-xs text-[#D72638]">✓ Verified Member · 4 months</p>
          </div>
        </div>
      </div>

      <div class="bg-[#111] border border-white/10 p-8 hover:border-[#D72638]/30 transition-colors reveal" style="animation-delay:0.1s">
        <p class="text-[#D72638] text-lg mb-5">★★★★★</p>
        <p class="font-barlow text-white/70 text-sm leading-relaxed mb-8 italic">"As a woman, I finally found a gym where I feel completely safe and welcome. The unisex and inclusive environment is real, not just marketing. Love this place!"</p>
        <div class="flex items-center gap-4 border-t border-white/10 pt-6">
          <div class="w-10 h-10 rounded-full bg-[#D72638] flex items-center justify-center font-bebas text-white text-sm shrink-0">PG</div>
          <div>
            <p class="font-barlow font-semibold text-white text-sm">Priya Gupta</p>
            <p class="font-barlow text-xs text-[#D72638]">✓ Verified Member · 8 months</p>
          </div>
        </div>
      </div>

      <div class="bg-[#111] border border-white/10 p-8 hover:border-[#D72638]/30 transition-colors reveal" style="animation-delay:0.2s">
        <p class="text-[#D72638] text-lg mb-5">★★★★★</p>
        <p class="font-barlow text-white/70 text-sm leading-relaxed mb-8 italic">"The sauna is a game-changer for recovery. Open till 11 PM is perfect for my schedule. Nutrition coaching has completely transformed my diet. Highly recommend!"</p>
        <div class="flex items-center gap-4 border-t border-white/10 pt-6">
          <div class="w-10 h-10 rounded-full bg-[#D72638] flex items-center justify-center font-bebas text-white text-sm shrink-0">AK</div>
          <div>
            <p class="font-barlow font-semibold text-white text-sm">Amit Kumar</p>
            <p class="font-barlow text-xs text-[#D72638]">✓ Verified Member · 1 year</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ═══ CTA STRIP ═══ -->
<section class="bg-[#D72638] py-20">
  <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
    <div>
      <p class="font-barlow text-xs text-white/60 tracking-[0.3em] uppercase mb-3">Join the Community</p>
      <h2 class="font-bebas text-[clamp(2rem,5vw,4rem)] leading-none tracking-wide text-white">Start your journey <em class="font-playfair">today.</em></h2>
    </div>
    <div class="flex flex-col sm:flex-row gap-4 shrink-0">
      <a href="tel:+919899450419" class="inline-flex items-center justify-center bg-white text-[#D72638] hover:bg-gray-100 font-bebas tracking-widest px-8 py-4 transition-colors">CALL US NOW</a>
      <a href="#" data-page="pricing" class="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-[#D72638] font-bebas tracking-widest px-8 py-4 transition-colors">SEE PLANS</a>
    </div>
  </div>
</section>

${window.FOOTER_HTML}
`;
