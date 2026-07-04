/* ============================================================
 * Local Business Website Starter Kit — Site Configuration
 * ============================================================
 * This is the ONLY file you need to edit.
 * Change the client, change the industry — just update this
 * file. No touching index.html, style.css, or script.js.
 *
 * Uses plain <script> globals (not ES modules) so you can
 * open index.html directly in a browser — no local server or
 * npm run dev required.
 * ============================================================ */

window.SITE_CONFIG = {

  /* ── Basic Info ── */
  meta: {
    siteName: "Your Business Name",
    tagline: "Your one-line brand tagline goes here",
    logoUrl: "", // leave empty = text logo; set an image path to show a logo image
    currency: "$", // currency symbol for service prices, e.g. "¥" / "$" / "€"
    // demo banner shown at the top — set show: false before delivering to a real client
    demoBanner: { show: true, text: "🚀 3-Day Delivery for Local Shops | Mobile-First | No Coding Needed" },
  },

  /* ── Color Themes ──
   * active points to one of the preset keys below.
   * Changing primaryColor updates buttons, links, and hover effects site-wide.
   * To add a new preset: copy "warm" or "fresh", give it a new key — the
   * theme-switcher button auto-discovers all presets. */
  theme: {
    active: "warm", // "warm" | "fresh" | any custom preset name

    presets: {
      warm: {
        primaryColor:     "#b6783c",
        primaryColorDark: "#8f5c2a",
        primaryColorRgb:  "182,120,60",
        dark:      "#2e2117",
        darkRgb:   "46,33,23",
        charcoal:  "#3d2e22",
        cream:     "#faf3ea",
        creamDark: "#f0e4d4",
        body:      "#4a3a2c",
        muted:     "#9c8a78",
        border:    "#ece0d2",
      },
      fresh: {
        primaryColor:     "#5fa37e",
        primaryColorDark: "#44805f",
        primaryColorRgb:  "95,163,126",
        dark:      "#1f2e26",
        darkRgb:   "31,46,38",
        charcoal:  "#2a3b32",
        cream:     "#f3f9f5",
        creamDark: "#e6f2ec",
        body:      "#3a4a42",
        muted:     "#8aa499",
        border:    "#dcebe3",
      },
    },
  },

  /* ── Top Navigation ── */
  navLinks: [
    { label: "About",    href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery",  href: "#gallery" },
    { label: "Reviews",  href: "#reviews" },
    { label: "Visit Us", href: "#visit" },
    { label: "Join Us",  href: "#careers" },
  ],

  /* ── Contact Info (reused in header / nav / visit section / footer / mobile bar) ── */
  contact: {
    address: "123 Main Street, Your City, State 00000",
    mapUrl:  "https://maps.google.com/?q=your+business+address",
    phone:   "+1 (555) 000-0000",
    wechat:  "+1 (555) 000-0000",
    wechatQrImage: "assets/img/wechat-qr-placeholder.svg",
    wechatQrCaption: "Scan to connect on WhatsApp",
    hours: {
      weekday: "Mon – Fri: 9:00 AM – 6:00 PM",
      weekend: "Sat – Sun: 10:00 AM – 5:00 PM",
      holiday: "Public Holidays: By appointment",
    },
  },

  /* ── Page Content ── */
  pages: {

    home: {
      hero: {
        eyebrow: "Welcome",
        title: "Your Business Name",
        desc: "Your one-line brand tagline — introduce your core service and value proposition here.",
        ctaPrimary:   { label: "View Our Services", href: "#services" },
        ctaSecondary: { label: "Get Directions" }, // href auto-filled from contact.mapUrl
        highlights: [
          { icon: "🌱", text: "Key selling point one" },
          { icon: "✨", text: "Key selling point two" },
          { icon: "⭐", text: "Key selling point three" },
        ],
      },
    },

    about: {
      eyebrow: "About Us",
      title: "Our Story",
      quote: "Your brand philosophy or one-line mission statement",
      author: "Founder / Owner Name",
      paragraphs: [
        "Tell your story here — your origins, mission, and core values. Let customers know who you are and why you do what you do.",
        "Introduce your team, expertise, or service range. Build trust with a second paragraph that highlights what makes you different.",
      ],
      stats: [
        { target: 5,   suffix: "",  label: "Years in Business" },
        { target: 20,  suffix: "+", label: "Core Services" },
        { target: 500, suffix: "+", label: "Happy Clients", format: "comma" },
        { target: 98,  suffix: "%", label: "Repeat Customer Rate" },
      ],
    },

    services: {
      eyebrow: "What We Offer",
      title: "Our Services",
      intro: "A brief introduction to your services — one or two sentences covering your highlights and who you serve.",
      categories: [
        { id: "cat1", label: "Category One" },
        { id: "cat2", label: "Category Two" },
        { id: "cat3", label: "Category Three" },
        { id: "cat4", label: "Category Four" },
      ],
      items: [
        { cat: "cat1", icon: "💼", name: "Service Item 1", price: "9.99", desc: "Short description of this service — what's included and who it's for.", tags: ["Tag A", "Tag B"] },
        { cat: "cat1", icon: "📋", name: "Service Item 2", price: "XXX", desc: "Short description of this service — what's included and who it's for.", tags: ["Tag A", "Tag B"] },
        { cat: "cat2", icon: "🤝", name: "Service Item 3", price: "XXX", desc: "Short description of this service — what's included and who it's for.", tags: ["Tag A", "Tag B"] },
        { cat: "cat2", icon: "📈", name: "Service Item 4", price: "XXX", desc: "Short description of this service — what's included and who it's for.", tags: ["Tag A", "Tag B"] },
        { cat: "cat3", icon: "🎯", name: "Service Item 5", price: "XXX", desc: "Short description of this service — what's included and who it's for.", tags: ["Tag A", "Tag B"] },
        { cat: "cat3", icon: "💡", name: "Service Item 6", price: "XXX", desc: "Short description of this service — what's included and who it's for.", tags: ["Tag A", "Tag B"] },
        { cat: "cat4", icon: "🏆", name: "Service Item 7", price: "XXX", desc: "Short description of this service — what's included and who it's for.", tags: ["Tag A", "Tag B"] },
        { cat: "cat4", icon: "📊", name: "Service Item 8", price: "XXX", desc: "Short description of this service — what's included and who it's for.", tags: ["Tag A", "Tag B"] },
      ],
      footerNote: "Want to learn more or get a quote? Give us a call — we're happy to help.",
    },

    gallery: {
      eyebrow: "Our Space",
      title: "Take a Look Inside",
      items: [
        { icon: "🛋️", caption: "Interior photo caption 1" },
        { icon: "💼", caption: "Interior photo caption 2" },
        { icon: "🪴", caption: "Interior photo caption 3" },
        { icon: "🖥️", caption: "Interior photo caption 4" },
        { icon: "🪟", caption: "Interior photo caption 5" },
        { icon: "🎨", caption: "Interior photo caption 6" },
      ],
    },

    reviews: {
      eyebrow: "What Clients Say",
      title: "Real Feedback",
      items: [
        { name: "Sarah M.", initial: "S", info: "Downtown District", source: "Google Reviews", text: "Absolutely professional team. They transformed our space beyond expectations — highly recommend to anyone looking for quality work." },
        { name: "James T.", initial: "J", info: "Riverside Area", source: "Yelp", text: "Transparent pricing, no hidden fees, and they finished ahead of schedule. The craftsmanship is excellent." },
        { name: "Client Name", initial: "C", info: "Client location", source: "Platform name", text: "Placeholder review text — a short, genuine testimonial from a happy customer." },
      ],
      summary: { rating: 4.9, totalCount: 300, satisfaction: 95 },
    },

    visit: {
      eyebrow: "Come See Us",
      title: "Visit Us",
      intro: "Find our hours, address, and contact details below — everything you need to plan your visit.",
    },

    careers: {
      eyebrow: "Join Our Team",
      title: "Team Training & Brand Standards",
      intro: "We care about every team member's growth and maintaining a consistent brand experience. Below are excerpts from our internal Staff Handbook and Brand Standards Guide to help new members get up to speed quickly.",
      manuals: [
        {
          icon: "📘",
          name: "Staff Handbook (Excerpt)",
          desc: "Core guidelines new members can reference in their first week — standardizing service and reducing repeat training.",
          points: [
            "Service Philosophy: Greet every customer with a smile, be proactive, and answer questions patiently.",
            "Appearance: Wear the uniform and name badge; keep a clean, professional appearance consistent with the brand.",
            "Attendance: Arrive 10 minutes before your shift; request time off at least 1 day in advance through the designated channel.",
            "Responsibilities: Opening/closing checklists, POS procedures, and sanitation standards are all documented.",
            "Growth Path: After completing basic training, apply for rotation or promotion review — criteria are transparent and public.",
          ],
        },
        {
          icon: "🎨",
          name: "Brand Standards Guide (Excerpt)",
          desc: "Unify our external image and communication so every team member represents the brand consistently.",
          points: [
            "Logo Usage: Know when to use the standard vs. monochrome version; never stretch or distort the logo.",
            "Colors & Fonts: Stick to the defined primary/accent colors and heading/body font pairings.",
            "Tone of Voice: Use a warm, professional tone in all external communications; avoid casual abbreviations.",
            "Visual Standards: Follow the unified layout, color, and typesetting templates for in-store materials and social posts.",
            "Common Scripts: Use standard responses for pricing, hours, and return/refund questions.",
          ],
        },
      ],
      ctaText: "Interested in joining our team? Reach out to learn about open positions.",
      ctaLabel: "Call Us",
    },
  },

  /* ── Footer ── */
  footer: {
    description: "Your service promise — fast response, reliable delivery, satisfaction guaranteed.",
    socials: [
      { icon: "📸", label: "Instagram", href: "#" },
      { icon: "⭐", label: "Google",    href: "#" },
      { icon: "👍", label: "Facebook",  href: "#" },
    ],
    copyrightYear: 2026,
    // demo credit — set show: false before delivering to a real client
    credit: { show: true, name: "George Wang", email: "yanbingfanyi@gmail.com" },
  },

};
