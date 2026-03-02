// oak_sections.js — injects Sections 6–14 into #sections-placeholder
// Dark Theme: #0A0A0A background, #00C8B4 teal accent, #FFFFFF text
document.getElementById('sections-placeholder').innerHTML = `

<!-- ============================================================
     SECTION 6: CLASSES
============================================================ -->
<section id="classes" class="py-28 section-darker border-t border-[#00C8B4]/10" style="position:relative;overflow:hidden;">
  <!-- Glow orbs -->
  <div class="glow-orb glow-orb-2" style="top:-5%;left:-5%;"></div>
  <div class="glow-orb glow-orb-1" style="bottom:-10%;right:-5%;"></div>
  <div class="max-w-7xl mx-auto px-6" style="position:relative;z-index:1;">
    <div class="text-center mb-16 fade-up">
      <div class="flex items-center justify-center gap-3 mb-6">
        <div class="w-8 h-px bg-[#20B2AA]"></div>
        <span class="text-[#20B2AA] font-condensed font-700 uppercase tracking-[0.3em] text-sm">What We Offer</span>
        <div class="w-8 h-px bg-[#20B2AA]"></div>
      </div>
      <h2 class="font-condensed font-black uppercase text-5xl lg:text-6xl leading-none text-white mb-4">Classes For Every <span class="text-[#20B2AA]">Athlete</span></h2>
      <p class="text-white/50 text-base max-w-lg mx-auto">Expert-led sessions across every training style — book your spot in seconds.</p>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      ${[
    { name: 'Powerlifting', img: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=600&auto=format&fit=crop&q=80', duration: '60 min', level: 'Advanced', levelColor: 'bg-[#20B2AA] text-black', trainer: 'Vikram Singh' },
    { name: 'HIIT', img: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=600&auto=format&fit=crop&q=80', duration: '45 min', level: 'Intermediate', levelColor: 'bg-amber-500 text-black', trainer: 'Priya Mehta' },
    { name: 'Zumba', img: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=600&auto=format&fit=crop&q=80', duration: '60 min', level: 'Beginner', levelColor: 'bg-white/20 text-white', trainer: 'Anjali Rawat' },
    { name: 'Yoga', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop&q=80', duration: '75 min', level: 'All Levels', levelColor: 'bg-purple-600 text-white', trainer: 'Deepa Kumar' },
    { name: 'Boxing', img: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600&auto=format&fit=crop&q=80', duration: '60 min', level: 'Intermediate', levelColor: 'bg-amber-500 text-black', trainer: 'Karan Thakur' },
    { name: 'CrossFit', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80', duration: '60 min', level: 'Advanced', levelColor: 'bg-[#20B2AA] text-black', trainer: 'Rahul Verma' },
  ].map(c => `
        <div class="class-card card-left-accent group overflow-hidden fade-up">
          <div class="relative h-52 overflow-hidden">
            <img src="${c.img}" alt="${c.name} class at Oak Fitness" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-75" loading="lazy"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <span class="absolute top-4 left-4 px-3 py-1 text-xs font-condensed font-700 uppercase tracking-wider ${c.levelColor}">${c.level}</span>
          </div>
          <div class="p-6">
            <h3 class="font-condensed font-black uppercase text-2xl text-white mb-1">${c.name}</h3>
            <div class="flex items-center gap-3 mb-4">
              <span class="text-white/40 text-xs">${c.duration}</span>
              <span class="text-[#20B2AA]/40">·</span>
              <span class="text-white/40 text-xs">with ${c.trainer}</span>
            </div>
            <a href="#booking" class="inline-block w-full text-center py-2.5 bg-transparent border border-[#20B2AA]/40 text-[#20B2AA] font-condensed uppercase tracking-widest text-xs hover:bg-[#20B2AA] hover:text-black transition-all duration-200">Book Now</a>
          </div>
        </div>
      `).join('')}

    </div>
  </div>
</section>

<!-- ============================================================
     SECTION 7: TRAINERS
============================================================ -->
<section id="trainers" class="py-28 section-dark border-t border-[#00C8B4]/10" style="position:relative;overflow:hidden;">
  <!-- Glow orbs -->
  <div class="glow-orb glow-orb-3" style="top:10%;right:-10%;opacity:0.08;"></div>
  <div class="glow-orb glow-orb-2" style="bottom:-10%;left:-5%;"></div>
  <div class="max-w-7xl mx-auto px-6" style="position:relative;z-index:1;">
    <div class="text-center mb-16 fade-up">
      <div class="flex items-center justify-center gap-3 mb-6">
        <div class="w-8 h-px bg-[#00C8B4]"></div>
        <span class="text-[#00C8B4] font-condensed font-700 uppercase tracking-[0.3em] text-sm">The Team</span>
        <div class="w-8 h-px bg-[#00C8B4]"></div>
      </div>
      <h2 class="font-condensed font-black uppercase text-5xl lg:text-6xl leading-none text-white mb-4">Meet Our <span class="text-[#20B2AA]">Expert Trainers</span></h2>
      <p class="text-white/50 text-base max-w-lg mx-auto">World-class coaches dedicated entirely to your transformation.</p>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

      ${[
    { name: 'Vikram Singh', title: 'Head of Strength', spec: 'Olympic Lifting · Powerlifting · Conditioning', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format&fit=crop&q=80' },
    { name: 'Priya Mehta', title: 'Cardio & HIIT Expert', spec: 'HIIT · Fat Loss · Functional Training', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=80' },
    { name: 'Anjali Rawat', title: 'Yoga & Wellness Coach', spec: 'Vinyasa Yoga · Mobility · Breathwork', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format&fit=crop&q=80' },
    { name: 'Karan Thakur', title: 'Combat & Boxing Coach', spec: 'Boxing · MMA · Kickboxing', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&auto=format&fit=crop&q=80' },
  ].map(t => `
        <div class="trainer-card card-left-accent group overflow-hidden fade-up relative">
          <div class="relative h-72 overflow-hidden">
            <img src="${t.img}" alt="${t.name} — trainer at Oak Fitness" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-75" loading="lazy"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <!-- Hover overlay -->
            <div class="trainer-overlay absolute inset-0 flex items-center justify-center">
              <a href="#booking" class="px-6 py-3 bg-black border-2 border-[#20B2AA] text-[#20B2AA] font-condensed font-black uppercase tracking-widest text-sm hover:bg-[#20B2AA] hover:text-black transition-all">View Profile</a>
            </div>
          </div>
          <div class="p-6">
            <h3 class="font-condensed font-black uppercase text-xl text-white mb-1">${t.name}</h3>
            <p class="text-[#20B2AA] text-xs font-condensed uppercase tracking-widest mb-3">${t.title}</p>
            <p class="text-white/40 text-xs leading-relaxed">${t.spec}</p>
            <div class="flex gap-3 mt-4">
              <a href="#" class="text-white/30 hover:text-[#20B2AA] transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" class="text-white/30 hover:text-[#20B2AA] transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      `).join('')}

    </div>
  </div>
</section>

<!-- ============================================================
     SECTION 8: MEMBERSHIP PRICING
============================================================ -->
<section id="membership" class="py-28 section-darker border-t border-[#00C8B4]/10" style="position:relative;overflow:hidden;">
  <!-- Glow orbs -->
  <div class="glow-orb glow-orb-1" style="top:-15%;left:30%;"></div>
  <div class="glow-orb glow-orb-2" style="bottom:-10%;right:-5%;"></div>
  <div class="max-w-7xl mx-auto px-6" style="position:relative;z-index:1;">
    <div class="text-center mb-16 fade-up">
      <div class="flex items-center justify-center gap-3 mb-6">
        <div class="w-8 h-px bg-[#00C8B4]"></div>
        <span class="text-[#00C8B4] font-condensed font-700 uppercase tracking-[0.3em] text-sm">Plans & Pricing</span>
        <div class="w-8 h-px bg-[#00C8B4]"></div>
      </div>
      <h2 class="font-condensed font-black uppercase text-5xl lg:text-6xl leading-none text-white mb-4">Choose Your <span class="text-[#00C8B4]">Path</span></h2>
      <p class="text-white/50 text-base max-w-md mx-auto">No gimmicks. Just world-class training at honest prices.</p>
    </div>
    <div class="grid lg:grid-cols-3 gap-6 items-center">

      <!-- Starter -->
      <div class="membership-card p-8 fade-up">
        <p class="text-white/40 font-condensed uppercase tracking-widest text-xs mb-4">Starter</p>
        <div class="mb-8">
          <span class="font-condensed font-black text-5xl text-white">₹1,999</span>
          <span class="text-white/40 text-sm ml-1">/month</span>
        </div>
        <ul class="space-y-3 mb-8">
          ${['Gym floor access (6AM–10PM)', 'Cardio theatre', 'Standard locker', '1 fitness assessment', 'App access'].map(f => `
          <li class="flex items-start gap-3 text-sm text-white/50">
            <svg class="w-4 h-4 text-[#20B2AA] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"/></svg>
            ${f}
          </li>`).join('')}
        </ul>
        <a href="#booking" class="block text-center py-3 border border-[#20B2AA]/40 text-[#20B2AA] font-condensed uppercase tracking-widest text-sm hover:bg-[#20B2AA] hover:text-black transition-all duration-200">Get Started</a>
      </div>

      <!-- Elite (highlighted) -->
      <div class="membership-card featured p-8 fade-up delay-100 relative -mt-4 -mb-4 lg:-mt-6 lg:-mb-6">
        <div class="absolute -top-4 left-1/2 -translate-x-1/2">
          <span class="px-5 py-1.5 bg-[#20B2AA] text-black font-condensed font-black uppercase tracking-widest text-xs whitespace-nowrap">Most Popular</span>
        </div>
        <p class="text-[#20B2AA] font-condensed uppercase tracking-widest text-xs mb-4 mt-4">Pro Athlete</p>
        <div class="mb-8">
          <span class="font-condensed font-black text-5xl text-white">₹3,499</span>
          <span class="text-white/40 text-sm ml-1">/month</span>
        </div>
        <ul class="space-y-3 mb-8">
          ${['All Basic features', 'All 5 training zones', 'Unlimited group classes', '2 PT sessions/month', 'Spa & steam access', 'Nutrition consultation'].map(f => `
          <li class="flex items-start gap-3 text-sm text-white/80">
            <svg class="w-4 h-4 text-[#20B2AA] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"/></svg>
            ${f}
          </li>`).join('')}
        </ul>
        <a href="#booking" class="block text-center py-3 bg-[#20B2AA] text-black font-condensed font-black uppercase tracking-widest text-sm hover:bg-[#17a39c] transition-all duration-200">Join Now</a>
      </div>

      <!-- Premium -->
      <div class="membership-card p-8 fade-up delay-200">
        <p class="text-white/40 font-condensed uppercase tracking-widest text-xs mb-4">Elite</p>
        <div class="mb-8">
          <span class="font-condensed font-black text-5xl text-white">₹5,999</span>
          <span class="text-white/40 text-sm ml-1">/month</span>
        </div>
        <ul class="space-y-3 mb-8">
          ${['All Pro features', 'Unlimited PT sessions', 'Priority booking', 'Guest passes (2/month)', 'Nutrition bar credit ₹500', 'VIP locker assigned'].map(f => `
          <li class="flex items-start gap-3 text-sm text-white/50">
            <svg class="w-4 h-4 text-[#20B2AA] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"/></svg>
            ${f}
          </li>`).join('')}
        </ul>
        <a href="#booking" class="block text-center py-3 border border-[#20B2AA]/40 text-[#20B2AA] font-condensed uppercase tracking-widest text-sm hover:bg-[#20B2AA] hover:text-black transition-all duration-200">Go Elite</a>
      </div>

    </div>
    <p class="text-center text-white/30 text-sm mt-10 fade-up">✦ Annual plans available — save up to 20% · No joining fee this month · <a href="#" class="text-[#20B2AA] hover:underline">View Annual Plans →</a></p>
  </div>
</section>

<!-- ============================================================
     SECTION 9: TESTIMONIALS
============================================================ -->
<section id="testimonials" class="py-28 section-dark overflow-hidden border-t border-[#00C8B4]/10" style="position:relative;">
  <!-- Glow orbs -->
  <div class="glow-orb glow-orb-3" style="top:0;left:50%;transform:translateX(-50%);opacity:0.07;"></div>
  <div class="max-w-7xl mx-auto px-6 text-center mb-16 fade-up" style="position:relative;z-index:1;">
    <div class="flex items-center justify-center gap-3 mb-6">
      <div class="w-8 h-px bg-[#00C8B4]"></div>
      <span class="text-[#00C8B4] font-condensed font-700 uppercase tracking-[0.3em] text-sm">Success Stories</span>
      <div class="w-8 h-px bg-[#00C8B4]"></div>
    </div>
    <h2 class="font-condensed font-black uppercase text-5xl lg:text-6xl leading-none text-white">Real Results. <span class="text-[#00C8B4]">Real People.</span></h2>
  </div>

  <!-- Row 1: scroll left -->
  <div class="testimonial-track mb-4">
    <div class="testimonial-inner flex gap-4">
      ${[
    { q: 'Lost 18kg in 5 months. The trainers here are on another level.', name: 'Rohit K.', plan: 'Elite Member' },
    { q: 'The powerlifting zone is insane. Best equipment in the entire facility.', name: 'Sanjay M.', plan: 'Premium Member' },
    { q: 'Zumba classes are so fun! I actually look forward to working out now.', name: 'Meera P.', plan: 'Starter Member' },
    { q: 'Sauna after every leg day is a game changer. Worth every rupee.', name: 'Ankit S.', plan: 'Elite Member' },
    { q: 'Personal training with Vikram gave me my first 100kg bench. Life changing!', name: 'Dev R.', plan: 'Premium Member' },
    { q: 'The community here pushes you to be better every single day.', name: 'Rohit K.', plan: 'Elite Member' },
    { q: 'Zumba classes are so fun! I actually look forward to working out now.', name: 'Meera P.', plan: 'Starter Member' },
  ].map(t => `
        <div class="testimonial-card flex-shrink-0 w-80 p-6">
          <div class="flex gap-1 mb-4">${'★'.repeat(5).split('').map(() => '<span class="text-[#20B2AA] text-sm">★</span>').join('')}</div>
          <p class="text-white/60 text-sm leading-relaxed mb-5 italic">"${t.q}"</p>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-[#20B2AA]/20 border border-[#20B2AA]/40 flex items-center justify-center text-[#20B2AA] text-xs font-condensed font-black">${t.name[0]}</div>
            <div>
              <p class="text-white font-condensed font-700 text-sm">${t.name}</p>
              <span class="text-xs px-2 py-0.5 bg-[#20B2AA]/10 text-[#20B2AA] font-condensed uppercase tracking-wider">${t.plan}</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>

  <!-- Row 2: scroll right -->
  <div class="testimonial-track reverse">
    <div class="testimonial-inner flex gap-4">
      ${[
    { q: 'The gym is so clean and spacious. Never felt rushed, ever.', name: 'Kavya T.', plan: 'Elite Member' },
    { q: 'Nutrition bar smoothies are incredible. My post-workout ritual now.', name: 'Naina V.', plan: 'Starter Member' },
    { q: 'Best CrossFit programming around. Coaches push you just right.', name: 'Arjun B.', plan: 'Premium Member' },
    { q: 'HIIT with Priya is absolutely brutal — in the best way possible.', name: 'Ritika S.', plan: 'Elite Member' },
    { q: 'Joined 3 months ago and already see results. Community is amazing.', name: 'Pankaj D.', plan: 'Starter Member' },
    { q: 'Steam room after every session is pure luxury. No other gym offers this.', name: 'Shreya R.', plan: 'Premium Member' },
    { q: 'The gym is so clean and spacious. Never felt rushed, ever.', name: 'Kavya T.', plan: 'Elite Member' },
  ].map(t => `
        <div class="testimonial-card flex-shrink-0 w-80 p-6">
          <div class="flex gap-1 mb-4">${'★'.repeat(5).split('').map(() => '<span class="text-[#20B2AA] text-sm">★</span>').join('')}</div>
          <p class="text-white/60 text-sm leading-relaxed mb-5 italic">"${t.q}"</p>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-[#20B2AA]/20 border border-[#20B2AA]/40 flex items-center justify-center text-[#20B2AA] text-xs font-condensed font-black">${t.name[0]}</div>
            <div>
              <p class="text-white font-condensed font-700 text-sm">${t.name}</p>
              <span class="text-xs px-2 py-0.5 bg-[#20B2AA]/10 text-[#20B2AA] font-condensed uppercase tracking-wider">${t.plan}</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- ============================================================
     SECTION 10: EVENTS
============================================================ -->
<section id="events" class="py-28 section-darker border-t border-[#00C8B4]/10" style="position:relative;overflow:hidden;">
  <!-- Glow orbs -->
  <div class="glow-orb glow-orb-2" style="top:-5%;right:-5%;"></div>
  <div class="glow-orb glow-orb-1" style="bottom:-15%;left:-5%;"></div>
  <div class="max-w-7xl mx-auto px-6" style="position:relative;z-index:1;">
    <div class="text-center mb-16 fade-up">
      <div class="flex items-center justify-center gap-3 mb-6">
        <div class="w-8 h-px bg-[#00C8B4]"></div>
        <span class="text-[#00C8B4] font-condensed font-700 uppercase tracking-[0.3em] text-sm">Upcoming Events</span>
        <div class="w-8 h-px bg-[#00C8B4]"></div>
      </div>
      <h2 class="font-condensed font-black uppercase text-5xl lg:text-6xl leading-none text-white">Challenges. <span class="text-[#00C8B4]">Workshops.</span> Meetups.</h2>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      ${[
    { title: 'Summer Shred Challenge', img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80', date: 'March 15, 2025', loc: 'Main Floor', note: 'Free for Elite+ members' },
    { title: '30-Day Strength Program', img: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&auto=format&fit=crop&q=80', date: 'April 1, 2025', loc: 'Olympic Zone', note: 'Limited to 20 participants' },
    { title: 'Nutrition Workshop', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&auto=format&fit=crop&q=80', date: 'March 22, 2025', loc: 'Nutrition Bar', note: 'Free with registration' },
  ].map(e => `
        <div class="blog-card card-left-accent group overflow-hidden fade-up">
          <div class="relative h-52 overflow-hidden">
            <img src="${e.img}" alt="${e.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-75" loading="lazy"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
          <div class="p-6">
            <p class="text-[#20B2AA] font-condensed uppercase tracking-widest text-xs mb-2">${e.date}</p>
            <h3 class="font-condensed font-black uppercase text-xl text-white mb-2">${e.title}</h3>
            <p class="text-white/40 text-xs mb-1">📍 ${e.loc}</p>
            <p class="text-white/40 text-xs mb-5">${e.note}</p>
            <a href="#booking" class="inline-block px-5 py-2 bg-[#20B2AA] text-black font-condensed font-black uppercase tracking-widest text-xs hover:bg-[#17a39c] transition-all">Register Now</a>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
  </div>
</section>

<!-- ============================================================
     SECTION 11: APP DOWNLOAD
============================================================ -->
<section id="app" class="py-28 section-dark relative overflow-hidden border-t border-[#00C8B4]/10">
  <!-- Glow orbs -->
  <div class="glow-orb glow-orb-2" style="top:0;left:10%;"></div>
  <div class="glow-orb glow-orb-1" style="bottom:-10%;right:-5%;"></div>
  <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative" style="z-index:1;">
    <div class="fade-up">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-8 h-px bg-[#00C8B4]"></div>
        <span class="text-[#00C8B4] font-condensed font-700 uppercase tracking-[0.3em] text-sm">Oak Fitness App</span>
      </div>
      <h2 class="font-condensed font-black uppercase text-5xl lg:text-6xl leading-none text-white mb-6">Train Anytime.<br/><span class="text-[#20B2AA]">Book Anywhere.</span></h2>
      <p class="text-white/50 text-base leading-relaxed mb-8">Track workouts, book classes, connect with your trainer, and manage your membership — all from your phone.</p>
      <ul class="space-y-3 mb-10">
        ${['Book classes in seconds', 'Live workout tracking', 'Direct trainer messaging', 'Nutrition & calorie logging', 'Membership management'].map(f => `
        <li class="flex items-center gap-3 text-sm text-white/60">
          <div class="w-1.5 h-1.5 rounded-full bg-[#20B2AA] flex-shrink-0"></div>
          ${f}
        </li>`).join('')}
      </ul>
      <div class="flex flex-wrap gap-4">
        <a href="#" class="app-badge flex items-center gap-3 px-5 py-3">
          <svg class="w-6 h-6 text-white/60" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          <div>
            <p class="text-white/40 text-xs leading-none mb-0.5">Download on the</p>
            <p class="text-white font-condensed font-700 text-sm">App Store</p>
          </div>
        </a>
        <a href="#" class="app-badge flex items-center gap-3 px-5 py-3">
          <svg class="w-6 h-6 text-white/60" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.35.2.74.24 1.1.14l12.73-7.35-2.79-2.79-11.04 9.99v.01zm16.33-9.42L16.64 12l2.88-2.34-9.95-5.75c-.07-.04-.15-.07-.22-.1l9.16 10.53zM2.25.87a1.49 1.49 0 00-.25.83v20.6c0 .3.08.57.25.83L13.36 12 2.25.87zm13.04 7.52L4.28.24c-.36-.2-.75-.25-1.1-.15l11.04 10.1 1.07-1.8z"/></svg>
          <div>
            <p class="text-white/40 text-xs leading-none mb-0.5">Get it on</p>
            <p class="text-white font-condensed font-700 text-sm">Google Play</p>
          </div>
        </a>
      </div>
    </div>
    <!-- Phone Mockup -->
    <div class="fade-up delay-200 flex justify-center">
      <div class="relative w-64">
        <div class="bg-[#0A0A0F] border-4 border-[#20B2AA]/20 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#20B2AA]/5">
          <div class="px-4 py-6">
            <div class="flex items-center justify-between mb-6">
              <div>
                <p class="text-white/40 text-xs">Good morning,</p>
                <p class="text-white font-condensed font-black text-lg">Rohit</p>
              </div>
              <div class="w-9 h-9 rounded-full bg-[#20B2AA]/20 border border-[#20B2AA]/40"></div>
            </div>
            <div class="bg-[#20B2AA]/10 border border-[#20B2AA]/20 p-3 rounded mb-4">
              <p class="text-[#20B2AA] text-xs font-condensed uppercase tracking-wider mb-1">Next Session</p>
              <p class="text-white font-condensed font-700 text-sm">Powerlifting</p>
              <p class="text-white/40 text-xs">Today · 7:00 AM · Vikram Singh</p>
            </div>
            ${['HIIT', 'Yoga', 'Boxing'].map((c, i) => `
            <div class="flex items-center justify-between py-2 border-b border-[#20B2AA]/10">
              <div>
                <p class="text-white text-xs font-condensed">${c}</p>
                <p class="text-white/30 text-xs">${['Mon · 6PM', 'Wed · 8AM', 'Fri · 5PM'][i]}</p>
              </div>
              <button class="px-3 py-1 bg-[#20B2AA]/15 text-[#20B2AA] text-xs font-condensed">Book</button>
            </div>`).join('')}
          </div>
        </div>
        <!-- Teal Glow -->
        <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-20 bg-[#20B2AA]/15 blur-2xl rounded-full"></div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     SECTION 12: BLOG
============================================================ -->
<section id="blog" class="py-28 section-darker border-t border-[#00C8B4]/10" style="position:relative;overflow:hidden;">
  <!-- Glow orbs -->
  <div class="glow-orb glow-orb-3" style="top:-10%;right:-5%;opacity:0.08;"></div>
  <div class="glow-orb glow-orb-2" style="bottom:-10%;left:-5%;"></div>
  <div class="max-w-7xl mx-auto px-6" style="position:relative;z-index:1;">
    <div class="flex items-end justify-between mb-16 fade-up flex-wrap gap-4">
      <div>
        <div class="flex items-center gap-3 mb-4">
          <div class="w-8 h-px bg-[#00C8B4]"></div>
          <span class="text-[#00C8B4] font-condensed font-700 uppercase tracking-[0.3em] text-sm">From the Blog</span>
        </div>
        <h2 class="font-condensed font-black uppercase text-5xl lg:text-6xl leading-none text-white">Fitness Tips &amp; <span class="text-[#00C8B4]">Insights</span></h2>
      </div>
      <a href="#" class="text-[#00C8B4] font-condensed uppercase tracking-widest text-xs hover:underline">View All Posts →</a>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      ${[
    { img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&auto=format&fit=crop&q=80', cat: 'Training', catColor: 'bg-[#20B2AA]/20 text-[#20B2AA]', title: '5 Exercises for Explosive Strength', excerpt: 'These compound movements form the foundation of every elite strength program at Oak Fitness.' },
    { img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80', cat: 'Nutrition', catColor: 'bg-amber-500/20 text-amber-400', title: 'The Best Pre-Workout Meals for Max Energy', excerpt: 'What you eat 2 hours before training directly impacts your performance. Here\'s what our team recommends.' },
    { img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=80', cat: 'Recovery', catColor: 'bg-purple-600/20 text-purple-400', title: 'How to Use the Sauna for Faster Recovery', excerpt: 'Heat exposure post-training can dramatically improve muscle recovery. Here\'s the Oak Fitness protocol.' },
  ].map(b => `
        <div class="blog-card card-left-accent group overflow-hidden fade-up">
          <div class="relative h-52 overflow-hidden">
            <img src="${b.img}" alt="${b.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-75" loading="lazy"/>
          </div>
          <div class="p-6">
            <span class="inline-block px-3 py-1 text-xs font-condensed uppercase tracking-widest ${b.catColor} mb-4">${b.cat}</span>
            <h3 class="font-condensed font-black uppercase text-xl text-white mb-3 leading-tight">${b.title}</h3>
            <p class="text-white/40 text-sm leading-relaxed mb-4">${b.excerpt}</p>
            <a href="#" class="text-[#20B2AA] font-condensed uppercase tracking-widest text-xs hover:underline">Read More →</a>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
  </div>
</section>

<!-- ============================================================
     SECTION 13: FINAL CTA BANNER
============================================================ -->
<section class="cta-section relative py-40 overflow-hidden text-center">
  <div class="relative max-w-4xl mx-auto px-6 fade-up">
    <div class="flex items-center justify-center gap-3 mb-6">
      <div class="w-8 h-px bg-[#20B2AA]"></div>
      <span class="text-[#20B2AA] font-condensed font-700 uppercase tracking-[0.3em] text-sm">Limited Time Offer</span>
      <div class="w-8 h-px bg-[#20B2AA]"></div>
    </div>
    <h2 class="font-condensed font-black uppercase text-7xl lg:text-8xl xl:text-9xl leading-none text-white mb-6">Start Your<br/><span class="text-[#20B2AA]">Transformation.</span></h2>
    <p class="text-white/50 text-xl mb-12 max-w-lg mx-auto">First 7 days are completely on us. No commitment. No credit card required.</p>
    <a href="#booking" class="btn-teal inline-block text-base px-12 py-5">Claim Free Trial</a>
    <p class="text-white/30 text-sm mt-6">Join 3,000+ members already training at Oak Fitness</p>
  </div>
</section>

<!-- ============================================================
     SECTION 14: FOOTER
============================================================ -->
<footer id="footer">
  <div class="max-w-7xl mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
    <!-- Col 1 -->
    <div>
      <div class="flex flex-col items-start hover:scale-105 transition-transform duration-300 mb-5">
        <div class="flex items-center gap-2">
          <svg class="w-6 h-6 text-[#20B2AA]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20 22,3 22,3,21,5 14,5.25 17,8Z"/>
          </svg>
          <span class="font-condensed font-black text-3xl md:text-4xl tracking-[0.15em] text-white">OAK</span>
        </div>
        <span class="font-condensed font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#20B2AA] mt-1">Fitness</span>
      </div>
      <p class="text-white/40 text-sm leading-relaxed mb-6">Where strength meets nature. Where champions are made, every single day.</p>
      <div class="flex gap-4">
        <a href="#" class="w-8 h-8 bg-[#20B2AA]/10 border border-[#20B2AA]/20 flex items-center justify-center text-white/40 hover:text-[#20B2AA] hover:border-[#20B2AA]/50 transition-all">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="#" class="w-8 h-8 bg-[#20B2AA]/10 border border-[#20B2AA]/20 flex items-center justify-center text-white/40 hover:text-[#20B2AA] hover:border-[#20B2AA]/50 transition-all">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
        </a>
        <a href="https://wa.me/918920306202" target="_blank" class="w-8 h-8 bg-[#20B2AA]/10 border border-[#20B2AA]/20 flex items-center justify-center text-white/40 hover:text-[#20B2AA] hover:border-[#20B2AA]/50 transition-all">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </a>
      </div>
    </div>
    <!-- Col 2 -->
    <div>
      <h4 class="font-condensed font-black uppercase tracking-widest text-sm text-[#20B2AA] mb-6">Quick Links</h4>
      <ul class="space-y-3">
        ${['Home', 'About', 'Facilities', 'Classes', 'Trainers', 'Membership', 'Blog'].map(l => `
        <li><a href="#${l.toLowerCase()}" class="text-white/40 text-sm hover:text-[#20B2AA] transition-colors">${l}</a></li>
        `).join('')}
      </ul>
    </div>
    <!-- Col 3 -->
    <div>
      <h4 class="font-condensed font-black uppercase tracking-widest text-sm text-[#20B2AA] mb-6">Support</h4>
      <ul class="space-y-3">
        ${['FAQs', 'Book a Tour', 'Contact Us', 'Refund Policy', 'Privacy Policy', 'Terms of Service'].map(l => `
        <li><a href="#" class="text-white/40 text-sm hover:text-[#20B2AA] transition-colors">${l}</a></li>
        `).join('')}
      </ul>
    </div>
    <!-- Col 4 -->
    <div>
      <h4 class="font-condensed font-black uppercase tracking-widest text-sm text-[#20B2AA] mb-6">Get In Touch</h4>
      <ul class="space-y-4 text-sm text-white/40">
        <li class="flex items-start gap-3">
          <svg class="w-4 h-4 text-[#20B2AA] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          Rohini Sector 24, New Delhi — 110085
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-4 h-4 text-[#20B2AA] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Mon–Sun: 5:00 AM – 11:00 PM
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-4 h-4 text-[#20B2AA] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          +91 89203 06202
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-4 h-4 text-[#20B2AA] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          hello@oakfitness.in
        </li>
      </ul>
    </div>
  </div>
  <!-- Bottom bar -->
  <div class="border-t border-[#20B2AA]/10">
    <div class="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
      <p>© 2025 Oak Fitness. All rights reserved.</p>
      <div class="flex gap-5">
        <a href="#" class="hover:text-[#20B2AA] transition-colors">Privacy Policy</a>
        <a href="#" class="hover:text-[#20B2AA] transition-colors">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
`;
