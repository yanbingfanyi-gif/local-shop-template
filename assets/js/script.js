(() => {
  const CFG = window.SITE_CONFIG;
  const root = document.documentElement;

  /* ============================================================
   * Theme — apply a preset from config.js to CSS custom properties
   * ============================================================ */
  const THEME_PROPS = {
    primaryColor:     '--primary-color',
    primaryColorDark: '--primary-color-dark',
    primaryColorRgb:  '--primary-color-rgb',
    dark:      '--dark',
    darkRgb:   '--dark-rgb',
    charcoal:  '--charcoal',
    cream:     '--cream',
    creamDark: '--cream-dark',
    body:      '--body',
    muted:     '--muted',
    border:    '--border',
  };

  function applyTheme(name) {
    const preset = CFG.theme.presets[name];
    if (!preset) return;
    Object.entries(THEME_PROPS).forEach(([key, cssVar]) => {
      if (preset[key] !== undefined) root.style.setProperty(cssVar, preset[key]);
    });
    root.setAttribute('data-theme', name);
    document.querySelectorAll('.theme-dot').forEach(dot => {
      dot.classList.toggle('active', dot.dataset.preset === name);
    });
  }

  // localStorage can throw under file:// (opaque-origin) in some browsers —
  // fall back to in-memory only so the page still renders via double-click.
  function getStoredTheme() {
    try { return localStorage.getItem('site-theme'); } catch (e) { return null; }
  }
  function setStoredTheme(name) {
    try { localStorage.setItem('site-theme', name); } catch (e) { /* ignore */ }
  }

  const presetNames = Object.keys(CFG.theme.presets);
  let activeTheme = getStoredTheme();
  if (!activeTheme || !presetNames.includes(activeTheme)) activeTheme = CFG.theme.active;

  /* ============================================================
   * Render — meta, demo banner, topbar, nav, theme toggle
   * ============================================================ */
  document.title = `${CFG.meta.siteName} | ${CFG.meta.tagline}`;

  const navLogo = document.getElementById('navLogo');
  if (CFG.meta.logoUrl) {
    navLogo.innerHTML = `<img src="${CFG.meta.logoUrl}" alt="${CFG.meta.siteName}" />`;
  } else {
    navLogo.textContent = CFG.meta.siteName;
  }

  const demoBanner = document.getElementById('demoBanner');
  if (CFG.meta.demoBanner && CFG.meta.demoBanner.show) {
    demoBanner.className = 'demo-banner';
    demoBanner.textContent = CFG.meta.demoBanner.text;
  } else {
    demoBanner.remove();
  }

  document.getElementById('topbarAddress').textContent = `📍 ${CFG.contact.address}`;
  document.getElementById('topbarPhone').textContent = `📞 ${CFG.contact.phone}`;
  document.getElementById('topbarHours').textContent = `🕐 ${CFG.contact.hours.weekday}`;

  const navLinksEl = document.getElementById('navLinks');
  navLinksEl.innerHTML = CFG.navLinks.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')
    + `<li><a href="tel:${CFG.contact.phone}" class="btn-call">📞 Call Us</a></li>`;

  const themeToggle = document.getElementById('themeToggle');
  themeToggle.innerHTML = presetNames.map(name => {
    const p = CFG.theme.presets[name];
    return `<span class="theme-dot" data-preset="${name}" style="background:linear-gradient(135deg,${p.primaryColor},${p.cream})"></span>`;
  }).join('');
  themeToggle.addEventListener('click', () => {
    const i = presetNames.indexOf(activeTheme);
    activeTheme = presetNames[(i + 1) % presetNames.length];
    applyTheme(activeTheme);
    setStoredTheme(activeTheme);
  });

  applyTheme(activeTheme);

  /* ============================================================
   * Render — Hero
   * ============================================================ */
  const hero = CFG.pages.home.hero;
  document.getElementById('heroEyebrow').textContent = hero.eyebrow;
  document.getElementById('heroTitle').textContent = hero.title;
  document.getElementById('heroDesc').textContent = hero.desc;

  const ctaPrimary = document.getElementById('heroCtaPrimary');
  ctaPrimary.textContent = hero.ctaPrimary.label;
  ctaPrimary.href = hero.ctaPrimary.href;

  const ctaSecondary = document.getElementById('heroCtaSecondary');
  ctaSecondary.textContent = hero.ctaSecondary.label;
  ctaSecondary.href = CFG.contact.mapUrl;

  document.getElementById('heroHighlights').innerHTML = hero.highlights
    .map(h => `<div class="highlight">${h.icon} <span>${h.text}</span></div>`)
    .join('<div class="highlight-divider">|</div>');

  /* ============================================================
   * Render — About
   * ============================================================ */
  const about = CFG.pages.about;
  document.getElementById('aboutEyebrow').textContent = about.eyebrow;
  document.getElementById('aboutTitle').textContent = about.title;
  document.getElementById('aboutQuote').textContent = `"${about.quote}"`;
  document.getElementById('aboutAuthor').textContent = `— ${about.author}`;
  document.getElementById('aboutParagraphs').innerHTML = about.paragraphs.map(p => `<p>${p}</p>`).join('');

  const badgeStat = about.stats[0];
  const aboutBadgeNum = document.getElementById('aboutBadgeNum');
  aboutBadgeNum.dataset.target = badgeStat.target;
  aboutBadgeNum.dataset.suffix = badgeStat.suffix || '';
  if (badgeStat.format) aboutBadgeNum.dataset.format = badgeStat.format;
  document.getElementById('aboutBadgeTxt').textContent = badgeStat.label;

  document.getElementById('aboutStats').innerHTML = about.stats.map(s => `
    <div class="astat">
      <span class="astat-num counter" data-target="${s.target}" data-suffix="${s.suffix || ''}"${s.format ? ` data-format="${s.format}"` : ''}>0</span>
      <span class="astat-lbl">${s.label}</span>
    </div>`).join('');

  /* ============================================================
   * Render — Services
   * ============================================================ */
  const services = CFG.pages.services;
  document.getElementById('servicesEyebrow').textContent = services.eyebrow;
  document.getElementById('servicesTitle').textContent = services.title;
  document.getElementById('servicesIntro').textContent = services.intro;
  document.getElementById('servicesFooterNote').textContent = services.footerNote;
  document.getElementById('servicesFooterCta').href = `tel:${CFG.contact.phone}`;

  document.getElementById('servicesTabs').innerHTML = `<button class="mtab active" data-cat="all">All</button>`
    + services.categories.map(c => `<button class="mtab" data-cat="${c.id}">${c.label}</button>`).join('');

  document.getElementById('servicesGrid').innerHTML = services.items.map(item => `
    <div class="menu-item fade-in" data-cat="${item.cat}">
      <div class="menu-item-img"><span class="menu-icon">${item.icon}</span></div>
      <div class="menu-item-body">
        <div class="menu-top">
          <h3>${item.name}</h3>
          <span class="menu-price">${CFG.meta.currency}${item.price}</span>
        </div>
        <p>${item.desc}</p>
        <div class="menu-tags">${item.tags.map(t => `<span>${t}</span>`).join('')}</div>
      </div>
    </div>`).join('');

  /* ============================================================
   * Render — Gallery
   * ============================================================ */
  const gallery = CFG.pages.gallery;
  document.getElementById('galleryEyebrow').textContent = gallery.eyebrow;
  document.getElementById('galleryTitle').textContent = gallery.title;

  const galLayout = ['gal-large', '', '', '', 'gal-wide', ''];
  document.getElementById('galleryGrid').innerHTML = gallery.items.map((item, i) => `
    <div class="gal-item ${galLayout[i] || ''}">
      <div class="gal-img gal-${i + 1}"><span class="gal-icon">${item.icon}</span></div>
      <div class="gal-overlay"><span>${item.caption}</span></div>
    </div>`).join('');

  /* ============================================================
   * Render — Reviews
   * ============================================================ */
  const reviews = CFG.pages.reviews;
  document.getElementById('reviewsEyebrow').textContent = reviews.eyebrow;
  document.getElementById('reviewsTitle').textContent = reviews.title;

  document.getElementById('reviewsGrid').innerHTML = reviews.items.map((r, i) => `
    <div class="review-card fade-in">
      <div class="review-stars">★★★★★</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-author">
        <div class="review-avatar review-avatar-${i + 1}">${r.initial}</div>
        <div>
          <strong>${r.name}</strong>
          <span>${r.info}</span>
        </div>
        <div class="review-source">${r.source}</div>
      </div>
    </div>`).join('');

  const summary = reviews.summary;
  const ratingInt = Math.floor(summary.rating);
  const ratingDec = Math.round((summary.rating - ratingInt) * 10);
  const ratingSuffix = ratingDec > 0 ? `.${ratingDec}` : '';
  document.getElementById('reviewsSummary').innerHTML = `
    <div class="rs-item"><span class="rs-num counter" data-target="${ratingInt}" data-suffix="${ratingSuffix}">0</span><span class="rs-lbl">Avg. Rating</span></div>
    <div class="rs-item"><span class="rs-num counter" data-target="${summary.totalCount}" data-suffix="+" data-format="comma">0</span><span class="rs-lbl">Total Reviews</span></div>
    <div class="rs-item"><span class="rs-num counter" data-target="${summary.satisfaction}" data-suffix="%">0</span><span class="rs-lbl">Satisfaction</span></div>`;

  /* ============================================================
   * Render — Visit
   * ============================================================ */
  const visit = CFG.pages.visit;
  document.getElementById('visitEyebrow').textContent = visit.eyebrow;
  document.getElementById('visitTitle').textContent = visit.title;
  document.getElementById('visitIntro').textContent = visit.intro;

  document.getElementById('hoursWeekday').textContent = CFG.contact.hours.weekday;
  document.getElementById('hoursWeekend').textContent = CFG.contact.hours.weekend;
  document.getElementById('hoursHoliday').textContent = CFG.contact.hours.holiday;

  document.getElementById('visitAddress').textContent = CFG.contact.address;
  document.getElementById('visitMapLink').href = CFG.contact.mapUrl;

  const visitPhoneLink = document.getElementById('visitPhoneLink');
  visitPhoneLink.href = `tel:${CFG.contact.phone}`;
  visitPhoneLink.textContent = CFG.contact.phone;
  document.getElementById('visitWechat').textContent = CFG.contact.wechat;

  document.getElementById('visitQrImg').src = CFG.contact.wechatQrImage;
  document.getElementById('visitQrCaption').textContent = CFG.contact.wechatQrCaption;

  /* ============================================================
   * Render — Careers / Join Us
   * ============================================================ */
  const careers = CFG.pages.careers;
  document.getElementById('careersEyebrow').textContent = careers.eyebrow;
  document.getElementById('careersTitle').textContent = careers.title;
  document.getElementById('careersIntro').textContent = careers.intro;

  document.getElementById('careersGrid').innerHTML = careers.manuals.map(m => `
    <div class="career-card fade-in">
      <div class="career-card-head">
        <div class="career-icon">${m.icon}</div>
        <h3>${m.name}</h3>
      </div>
      <p class="career-card-desc">${m.desc}</p>
      <ul class="career-points">${m.points.map(p => `<li>${p}</li>`).join('')}</ul>
    </div>`).join('');

  document.getElementById('careersCtaText').textContent = careers.ctaText;
  const careersCtaBtn = document.getElementById('careersCtaBtn');
  careersCtaBtn.textContent = careers.ctaLabel;
  careersCtaBtn.href = `tel:${CFG.contact.phone}`;

  /* ============================================================
   * Render — Footer
   * ============================================================ */
  const footer = CFG.footer;
  document.getElementById('footerLogo').textContent = CFG.meta.siteName;
  document.getElementById('footerDesc').textContent = footer.description;
  document.getElementById('footerSocials').innerHTML = footer.socials
    .map(s => `<a href="${s.href}" aria-label="${s.label}">${s.icon}</a>`).join('');

  document.getElementById('footerNavLinks').innerHTML = CFG.navLinks
    .map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('');

  document.getElementById('footerContact').innerHTML = `
    <li>📍 ${CFG.contact.address}</li>
    <li>📞 <a href="tel:${CFG.contact.phone}">${CFG.contact.phone}</a></li>
    <li>🕐 ${CFG.contact.hours.weekday}</li>
    <li>
      <button type="button" class="footer-wechat-btn" id="footerWechatBtn">
        <img src="${CFG.contact.wechatQrImage}" alt="WhatsApp QR code placeholder" class="footer-qr-thumb" />
        <span>💬 WhatsApp: ${CFG.contact.wechat}<br/><small>Tap to view QR code</small></span>
      </button>
    </li>`;

  document.getElementById('footerCopyright').textContent = `© ${footer.copyrightYear} ${CFG.meta.siteName}. All rights reserved.`;
  if (footer.credit && footer.credit.show) {
    document.getElementById('footerCredit').innerHTML =
      `Demo site designed &amp; built by <strong>${footer.credit.name}</strong> · <a href="mailto:${footer.credit.email}">${footer.credit.email}</a>`;
  }

  /* ============================================================
   * Render — Mobile sticky bar & WeChat QR modal
   * ============================================================ */
  document.getElementById('mobileBarPhone').href = `tel:${CFG.contact.phone}`;
  document.getElementById('mobileBarMap').href = CFG.contact.mapUrl;
  document.getElementById('qrModalImg').src = CFG.contact.wechatQrImage;
  document.getElementById('qrModalWechat').textContent = CFG.contact.wechat;

  /* ============================================================
   * Interactivity (runs after the DOM above has been populated)
   * ============================================================ */

  // Progress bar
  const bar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    bar.style.width = pct + '%';
  });

  // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  hamburger.addEventListener('click', () => navLinksEl.classList.toggle('open'));
  navLinksEl.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinksEl.classList.remove('open'))
  );

  // Fade-in on scroll
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.12 }
  );
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Animated counters
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const fmt    = el.dataset.format === 'comma';
    const isDecimal = String(target).includes('.');
    const duration = 1600, step = 16;
    const increment = target / (duration / step);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { current = target; clearInterval(timer); }
      const display = fmt
        ? Math.floor(current).toLocaleString()
        : isDecimal ? current.toFixed(1) : Math.floor(current);
      el.textContent = display + suffix;
    }, step);
  }
  const cObs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.animated) {
        e.target.dataset.animated = '1';
        animateCounter(e.target);
      }
    }),
    { threshold: 0.5 }
  );
  document.querySelectorAll('.counter').forEach(el => cObs.observe(el));

  // Services filter tabs
  document.querySelectorAll('.mtab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.mtab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.cat;
      document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.toggle('hidden', filter !== 'all' && item.dataset.cat !== filter);
      });
    });
  });

  // WeChat QR modal
  const qrModal = document.getElementById('qrModal');
  function openQrModal() {
    qrModal.classList.add('open');
    qrModal.setAttribute('aria-hidden', 'false');
  }
  function closeQrModal() {
    qrModal.classList.remove('open');
    qrModal.setAttribute('aria-hidden', 'true');
  }
  document.getElementById('mobileBarWechat').addEventListener('click', openQrModal);
  document.getElementById('openWechat').addEventListener('click', openQrModal);
  document.getElementById('footerWechatBtn').addEventListener('click', openQrModal);
  document.getElementById('visitQrBtn').addEventListener('click', openQrModal);
  document.getElementById('qrModalClose').addEventListener('click', closeQrModal);
  document.getElementById('qrModalBackdrop').addEventListener('click', closeQrModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeQrModal();
  });

  // Back to top
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 500);
  });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const y = window.scrollY + 140;
    sections.forEach(sec => {
      const link = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
      if (!link) return;
      link.style.color = (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight)
        ? 'var(--primary-color)' : '';
    });
  });

})();
