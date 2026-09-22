/**
 * SITO MATRIMONIO — APP
 * =====================
 * Legge da CONTENT (content.js) e costruisce il DOM.
 * Solo italiano — nessun cambio lingua.
 */

/* ── Helpers ────────────────────────────────────────────────── */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = typeof value === 'string' ? value : '';
}

function setHtml(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = typeof value === 'string' ? value : '';
}

/* ── Hero ───────────────────────────────────────────────────── */
function buildHero() {
  const { couple, date, hero } = CONTENT;

  const heroSection = document.querySelector('.section-hero');
  if (heroSection && hero.backgroundImage) {
    const isMobile = window.matchMedia('(max-width: 720px)').matches;
    const img = (isMobile && hero.backgroundImageMobile) ? hero.backgroundImageMobile : hero.backgroundImage;
    heroSection.style.backgroundImage = `url('${img}')`;

    window.matchMedia('(max-width: 720px)').addEventListener('change', e => {
      const src = (e.matches && hero.backgroundImageMobile) ? hero.backgroundImageMobile : hero.backgroundImage;
      heroSection.style.backgroundImage = `url('${src}')`;
    });
  }

  const overlay = document.getElementById('hero-overlay');
  if (overlay) overlay.style.background = `rgba(0,0,0,${hero.overlayOpacity})`;

  setHtml('hero-names',
    `${couple.name1} <span class="ampersand">${couple.ampersand}</span> ${couple.name2}`
  );
  document.title = `${couple.name1} & ${couple.name2} · ${date.display}`;
  setText('nav-logo', `${couple.name1} & ${couple.name2}`);
}

function renderHero() {
  const { couple, date, hero } = CONTENT;
  setText('hero-tagline',  couple.tagline);
  setText('hero-subtitle', couple.subtitle);
  setText('hero-date',     `${date.day} · ${date.display}`);
  setText('hero-venue',    hero.venueLabel);
}

/* ── Countdown ──────────────────────────────────────────────── */
function buildCountdown() {
  const target    = new Date(CONTENT.date.iso).getTime();
  const container = document.getElementById('countdown');
  if (!container) return;

  const labels = ['Giorni', 'Ore', 'Minuti', 'Secondi'];

  container.innerHTML = '';
  const units = labels.map(label => {
    const unit  = document.createElement('div');
    unit.className = 'countdown-unit';
    const num   = document.createElement('span');
    num.className = 'countdown-number';
    const lbl   = document.createElement('span');
    lbl.className = 'countdown-label';
    lbl.textContent = label;
    unit.append(num, lbl);
    container.appendChild(unit);
    return num;
  });

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      container.innerHTML = `<span style="font-family:var(--font-heading);font-size:1.5rem;font-style:italic">🎉</span>`;
      return;
    }
    const vals = [
      Math.floor(diff / 86400000),
      Math.floor((diff % 86400000) / 3600000),
      Math.floor((diff % 3600000) / 60000),
      Math.floor((diff % 60000) / 1000),
    ];
    vals.forEach((v, i) => { units[i].textContent = String(v).padStart(2, '0'); });
  }

  tick();
  setInterval(tick, 1000);
}

/* ── La Nostra Storia ───────────────────────────────────────── */
let lightboxImages = [];

function renderStory() {
  const { story } = CONTENT;
  setText('story-title', story.sectionTitle);

  const introEl = document.getElementById('story-intro');
  if (introEl) {
    introEl.innerHTML = story.intro
      .split('\n\n')
      .map(p => `<p>${p}</p>`)
      .join('');
  }

  const grid = document.getElementById('story-gallery');
  if (!grid) return;
  grid.innerHTML = '';

  lightboxImages = story.images || [];

  lightboxImages.forEach((imgData, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-thumb reveal';
    item.setAttribute('role', 'listitem');
    item.setAttribute('tabindex', '0');
    item.innerHTML = `
      <img src="${imgData.src}" alt="${imgData.alt}" loading="lazy" />
      <div class="gallery-thumb-overlay" aria-hidden="true">&#128269;</div>
    `;
    const open = () => openLightbox(index);
    item.addEventListener('click', open);
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
    grid.appendChild(item);
  });

  initLightbox();
}

/* ── Dettagli ───────────────────────────────────────────────── */
function renderDetails() {
  const { details } = CONTENT;
  setText('details-title', details.sectionTitle);

  const grid = document.getElementById('details-grid');
  if (!grid) return;
  grid.innerHTML = '';

  details.cards.forEach(card => {
    const div = document.createElement('div');
    div.className = 'detail-card reveal';
    div.setAttribute('role', 'listitem');
    const linesHtml = card.lines.map(l => `<p>${l}</p>`).join('');
    div.innerHTML = `
      <span class="detail-icon" aria-hidden="true">${card.icon}</span>
      <h3>${card.title}</h3>
      ${linesHtml}
    `;
    grid.appendChild(div);
  });
}

/* ── Programma ──────────────────────────────────────────────── */
function renderSchedule() {
  const { schedule } = CONTENT;
  setText('schedule-title', schedule.sectionTitle);
  setText('schedule-subtitle', schedule.subtitle);

  const list = document.getElementById('schedule-list');
  if (!list) return;
  list.innerHTML = '';

  schedule.items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'schedule-item reveal';
    li.innerHTML = `
      <span class="schedule-time">${item.time}</span>
      <div class="schedule-body">
        <p class="schedule-label">${item.label}</p>
        ${item.note ? `<p class="schedule-note">${item.note}</p>` : ''}
      </div>
    `;
    list.appendChild(li);
  });
}

/* ── Location ───────────────────────────────────────────────── */
function renderVenue() {
  const { venue } = CONTENT;
  setText('venue-title',       venue.sectionTitle);
  setText('venue-name',        venue.name);
  setText('venue-description', venue.description);
  setText('venue-address',     venue.address);

  const dir = document.getElementById('venue-directions');
  if (dir) { dir.href = venue.directionsUrl; dir.textContent = venue.directionsLabel; }

  const web = document.getElementById('venue-website');
  if (web) { web.href = venue.website; web.textContent = venue.websiteLabel; }

  const iframe = document.getElementById('venue-map-iframe');
  if (iframe && !iframe.src) iframe.src = venue.mapsEmbedUrl;

  // Planimetria del castello (si apre a schermo intero nella lightbox)
  const plan = venue.plan;
  const planBtn = document.getElementById('venue-plan-btn');
  const planImg = document.getElementById('venue-plan-img');
  if (plan && planBtn && planImg) {
    setText('venue-plan-title',   plan.title);
    setText('venue-plan-caption', plan.caption);
    setText('venue-plan-zoom',    plan.zoomHint);
    planImg.src = plan.src;
    planImg.alt = plan.alt;
    planBtn.setAttribute('aria-label', plan.zoomHint);
    planBtn.onclick = () => openLightbox(0, [{ src: plan.src, alt: plan.alt }]);

    // Tour virtuali 3D
    setText('venue-plan-tours-label', plan.toursLabel);
    const tours = document.getElementById('venue-plan-tours');
    if (tours) {
      tours.innerHTML = (plan.tours || []).map(tour => `
        <a href="${tour.url}" class="btn btn-outline venue-plan-tour" target="_blank" rel="noopener">
          <span class="venue-plan-tour-icon" aria-hidden="true">&#x1F3E0;</span>${tour.label}
        </a>
      `).join('');
    }
  }
}

/* ── FAQ ────────────────────────────────────────────────────── */
function renderFaq() {
  const { faq } = CONTENT;
  setText('faq-title', faq.sectionTitle);

  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = '';

  faq.items.forEach((item, i) => {
    const answerId = `faq-answer-${i}`;
    const dt = document.createElement('dt');
    dt.className = 'faq-item reveal';
    dt.innerHTML = `
      <button class="faq-question" aria-expanded="false" aria-controls="${answerId}">
        ${item.q}
        <span class="faq-icon" aria-hidden="true">+</span>
      </button>
    `;
    const dd = document.createElement('dd');
    dd.className = 'faq-answer';
    dd.id = answerId;
    dd.innerHTML = `<p>${item.a}</p>`;
    dt.appendChild(dd);
    list.appendChild(dt);

    dt.querySelector('.faq-question').addEventListener('click', () => {
      const isOpen = dt.classList.toggle('open');
      dt.querySelector('.faq-question').setAttribute('aria-expanded', isOpen);
    });
  });
}

/* ── Regalo ─────────────────────────────────────────────────── */
function renderGifts() {
  const { gifts } = CONTENT;
  setText('gifts-title', gifts.sectionTitle);
  setText('gifts-intro', gifts.intro);
  setText('gifts-toggle-label', gifts.detailsToggle);

  const grid = document.getElementById('gifts-grid');
  if (!grid) return;
  grid.innerHTML = '';

  gifts.options.forEach(option => {
    const card = document.createElement('div');
    card.className = 'gift-card reveal';

    const textHtml = option.text ? `<p>${option.text}</p>` : '';

    const details = option.details || [];
    const detailsHtml = details.length
      ? `<dl class="gift-details">${details.map(row => `
          <div class="gift-detail-row">
            <dt>${row.label}</dt>
            <dd>${row.value}</dd>
          </div>`).join('')}</dl>`
      : '';

    card.innerHTML = `
      <span class="gift-icon" aria-hidden="true">${option.icon}</span>
      <h3>${option.title}</h3>
      ${textHtml}
      ${detailsHtml}
    `;

    grid.appendChild(card);
  });
}

/* ── Lightbox ───────────────────────────────────────────────── */
let lightboxIndex = 0;
/** Set di immagini attualmente mostrato nella lightbox (galleria della storia di default, oppure un set ad hoc come la planimetria). */
let activeLightboxImages = [];

function initLightbox() {
  const lb    = document.getElementById('lightbox');
  const close = document.getElementById('lightbox-close');
  const prev  = document.getElementById('lightbox-prev');
  const next  = document.getElementById('lightbox-next');
  if (!lb) return;

  close.addEventListener('click', closeLightbox);
  prev.addEventListener('click',  () => navigateLightbox(-1));
  next.addEventListener('click',  () => navigateLightbox(1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function navigateLightbox(dir) {
  if (activeLightboxImages.length < 2) return;
  lightboxIndex = (lightboxIndex + dir + activeLightboxImages.length) % activeLightboxImages.length;
  setLightboxImage(lightboxIndex);
}

function setLightboxImage(index) {
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  const { src, alt } = activeLightboxImages[index];
  if (img) { img.src = src; img.alt = alt; }
  if (cap) cap.textContent = alt;
}

/**
 * @param {number} index    Indice dell'immagine da mostrare.
 * @param {Array}  [images] Set di immagini opzionale; di default la galleria della storia.
 */
function openLightbox(index, images) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  activeLightboxImages = images || lightboxImages;
  lightboxIndex = index;
  setLightboxImage(index);
  // Nasconde le frecce quando c'è una sola immagine
  const single = activeLightboxImages.length < 2;
  const prev = document.getElementById('lightbox-prev');
  const next = document.getElementById('lightbox-next');
  if (prev) prev.hidden = single;
  if (next) next.hidden = single;
  lb.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.hidden = true;
  document.body.style.overflow = '';
}

/* ── RSVP ───────────────────────────────────────────────────── */
function renderRsvp() {
  const { rsvp } = CONTENT;
  setText('rsvp-title', rsvp.sectionTitle);
  setText('rsvp-intro', rsvp.intro);

  const iframe = document.getElementById('rsvp-iframe');
  if (iframe) {
    iframe.height = rsvp.formHeight;
    if (!iframe.src) iframe.src = rsvp.formUrl;
  }

  const calBtn = document.getElementById('calendar-btn');
  if (calBtn) {
    calBtn.href      = rsvp.calendar.url;
    calBtn.innerHTML = rsvp.calendar.icon + rsvp.calendar.label;
  }
}

/* ── Footer ─────────────────────────────────────────────────── */
function renderFooter() {
  setText('footer-text', CONTENT.footer.text);
}

/* ── Nav labels ─────────────────────────────────────────────── */
function renderNav() {
  document.querySelectorAll('[data-nav]').forEach(link => {
    const key = link.dataset.nav;
    if (CONTENT.nav[key]) link.textContent = CONTENT.nav[key];
  });
}

/* ── Navbar (scroll + hamburger) ────────────────────────────── */
function initNav() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks  = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
  navbar.classList.toggle('scrolled', window.scrollY > 40);

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── Scroll-reveal ──────────────────────────────────────────── */
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ── Boot ───────────────────────────────────────────────────── */
function boot() {
  buildHero();
  buildCountdown();
  initNav();

  renderHero();
  renderNav();
  renderStory();
  renderDetails();
  renderSchedule();
  renderVenue();
  renderFaq();
  renderGifts();
  renderRsvp();
  renderFooter();

  requestAnimationFrame(initReveal);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
