    let currentLang = 'nl';
    let currentBenchmarkMode = 'typical';

    const translations = {
      nl: {
        nav_features: "Voordelen",
        nav_portfolio: "Portfolio",
        nav_pricing: "Prijzen",
        nav_faq: "FAQ",
        nav_cta: "Offerte Aanvragen",
        hero_badge: "Sneller dan 99% van het web",
        hero_heading_html: 'Trage websites kosten klanten. Wij bouwen ze <span class="text-blue-600 underline decoration-blue-200 underline-offset-8">razendsnel</span>.',
        hero_sub: "Geen trage WordPress plugins of maandelijkse updates. Wij coderen op maat gemaakte statische websites die direct laden en maximaal converteren in Google.",
        hero_cta_primary: "Bekijk Tarieven",
        hero_cta_secondary: "Bekijk Live Demo's",
        hero_proof_1: "100% PageSpeed Score",
        hero_proof_2: "iDEAL & SEPA Geschikt",
        bench_title: "Vergelijk Snelheid",
        bench_tab_typical: "Standaard CMS",
        bench_tab_custom: "Onze Code ⚡",
        bench_metric_load: "Laadtijd",
        bench_sec_label: "Beveiliging",
        bench_cost_label: "Kosten",
        bench_time_typical: "4.2s (Traag)",
        bench_time_custom: "0.3s (Bliksemsnel)",
        bench_sec_typical: "Kwetsbaar voor bugs",
        bench_sec_custom: "Onkraakbaar (Statisch)",
        bench_cost_typical: "Hoge maandlasten",
        bench_cost_custom: "Nul onderhoud nodig",
        bench_status_typical: "⚠️ <strong>Resultaat:</strong> Bezoekers haken af door lange wachttijden.",
        bench_status_custom: "⚡ <strong>Resultaat:</strong> Directe interactie, maximale klantconversie en topposities in Google.",
        feat_tag: "Waarom Pure Code?",
        feat_title: "Minder onderhoud. Alleen pure prestaties.",
        feat_1_title: "0.3s Laadsnelheid",
        feat_1_desc: "Geen logge databases. Pagina's laden direct, wat leidt tot maximale conversie en topposities in Google.",
        feat_2_title: "100% Veilig & Onderhoudsvrij",
        feat_2_desc: "Statische code kan niet worden gehackt via database-lekken of verouderde plugins. Nooit meer zorgen over updates.",
        feat_3_title: "Geen Maandelijkse Kosten",
        feat_3_desc: "Dankzij ultra-efficiënte CDN-infrastructuur betaalt u geen honderden euro's per jaar aan zware hosting en abonnementen.",
        port_tag: "Recent Werk",
        port_title: "Bekijk live demo projecten",
        port_sub: "Elk project wordt pixel-perfect ontworpen en op maat geschreven met HTML, CSS en pure JavaScript.",
        port_1_cat: "Dienstverlening",
        port_1_desc: "Conversiegerichte one-page website met online afspraakfunctionaliteit en WhatsApp-integratie.",
        port_2_cat: "Beglazing & Glaszetter",
        port_2_desc: "Moderne glashandel presentatie met productcatalogus en directe offerte-aanvragen.",
        port_3_cat: "Bouw & Techniek",
        port_3_desc: "Leadgeneratie met offerte-calculator, fotogalerij en lokale Google SEO optimalisatie.",
        port_4_cat: "Industrie & Pompen",
        port_4_desc: "Productpresentatie voor industriële hydroforen en pompsystemen met direct contact.",
        port_5_cat: "Horeca & Ontspanning",
        port_5_desc: "Een hippe, nieuwe generatie koffiebar waar jongeren samenkomen, met een modern en sfeervol webdesign.",
        port_demo_link: "Bekijk Live Demo →",
        price_tag: "Transparante Prijzen",
        price_title: "Geen verborgen kosten. Eenmalige investering.",
        pkg_once: "eenmalig",
        pkg_popular: "Meest Gekozen",
        pkg_btn: "Pakket Kiezen",
        pkg_1_title: "One-Page Website",
        pkg_1_desc: "Ideaal voor zzp'ers en lokale dienstverleners die snel online willen.",
        pkg_1_f1: "1 Krachtige One-Page Landingpage",
        pkg_1_f2: "100% Mobiel Responsive & Snel",
        pkg_1_f3: "Contactformulier & WhatsApp Knop",
        pkg_1_f5: "Oplevering binnen 3 werkdagen",
        pkg_2_title: "Complete Bedrijfswebsite",
        pkg_2_desc: "Voor gevestigde bedrijven die maximale leads en vertrouwen willen opbouwen.",
        pkg_2_btn: "Direct Starten met Pro",
        pkg_2_f1: "Tot 5 Pagina's op Maat Gecodeerd",
        pkg_2_f2: "100/100 Google PageSpeed Score",
        pkg_2_f4: "Interactieve Elementen & Galerij",
        pkg_2_f5: "1 Jaar Gratis Snelle Hosting",
        pkg_3_title: "Maatwerk & Webshop",
        pkg_3_desc: "Complexe wensen, iDEAL e-commerce of specifieke maatwerk functionaliteiten.",
        pkg_3_price: "Vanaf €1.250",
        pkg_3_btn: "Neem Contact Op",
        pkg_3_f1: "Onbeperkte pagina's & Custom UI",
        pkg_3_f2: "iDEAL Betalingsintegratie",
        pkg_3_f3: "Geavanceerde formulieren & API's",
        pkg_3_f4: "Volledige broncode eigendom",
        guarantee_title: "Probeer het een week uit",
        guarantee_desc: "Na een week niet tevreden? Krijg 75% terug, zonder lastige vragen.",
        calc_badge: "⚙️ Directe Prijsindicatie",
        calc_title: "Stel uw project samen",
        calc_subtitle: "Kies uw gewenste functies en bekijk direct de vaste, eenmalige investering zonder verrassingen.",
        calc_pages_label: "Kies uw pakket",
        calc_slider_min: "STARTER",
        calc_slider_mid: "PROFESSIONAL",
        calc_slider_max: "CUSTOM",
        calc_addons_label: "Gewenste Functionaliteiten",
        calc_tier_starter: "Starter",
        calc_tier_pro: "Professional",
        calc_tier_custom: "Custom / Webshop",
        calc_per_month: "/mnd",
        calc_summary_title: "Project Specificatie",
        calc_fixed_badge: "Vaste Prijs",
        calc_est_label: "Geschatte Investering",
        calc_once_label: "eenmalig / excl. btw",
        calc_delivery_label: "Oplevertijd:",
        calc_speed_label: "PageSpeed Garantie:",
        calc_speed_val: "100/100 Mobile & Desktop",
        calc_ownership_label: "Code Eigendom:",
        calc_ownership_val: "100% Volledig Eigendom",
        calc_btn_lock: "Neem Deze Configuratie Over",
        calc_no_risk: "Geen verplichtingen. U ontvangt eerst een formeel voorstel.",
        calc_from_label: "Vanaf",
        calc_days_fast: "3 tot 5 werkdagen",
        calc_days_mid: "5 tot 7 werkdagen",
        calc_days_custom: "8 tot 12 werkdagen",
        calc_auto_msg: "Hallo Clansa Studio,\n\nIk wil graag een offerte voor de volgende calculator selectie:\n- Pakket: {plan} ({total}){addons}\n\nKunt u contact met mij opnemen?",
        faq_tag: "Veelgestelde Vragen",
        faq_title: "Alles wat u moet weten",
        faq_1_q: "Wat is het verschil tussen een statische website en WordPress?",
        faq_1_a: "Een statische website bestaat uit pure HTML, CSS en JavaScript zonder trage database. Hierdoor laadt de website direct (0.3s), is hij onkwetsbaar voor hackers en heeft u geen last van plugins die stukgaan na updates.",
        faq_2_q: "Hoe kan ik betalen voor het project?",
        faq_2_a: "Wij accepteren directe betalingen via <strong>iDEAL</strong>, Bancontact, creditcard en SEPA-bankoverschrijvingen. U ontvangt een officiële factuur voor uw administratie.",
        faq_3_q: "Ben ik zelf eigenaar van de website en de code?",
        faq_3_a: "Ja, 100%. Zodra het project is afgerond, bent u de volledige eigenaar van de broncode, het ontwerp en alle rechten. Geen wurgcontracten of maandelijkse verplichtingen.",
        form_tag: "Vrijblijvend Contact",
        form_title: "Start uw project vandaag",
        form_sub: "Vul het formulier in en ontvang binnen 24 uur een reactie en voorstel.",
        form_name: "Uw Naam",
        form_email: "E-mailadres",
        form_company: "Bedrijfsnaam of Website",
        form_pkg_label: "Gewenst Pakket",
        form_msg: "Vertel kort over uw wensen",
        form_btn: "Aanvraag Verzenden →",
        footer_rights: "Alle rechten voorbehouden.",
        footer_privacy: "Privacybeleid",
        footer_terms: "Algemene Voorwaarden"
      },
      en: {
        nav_features: "Features",
        nav_portfolio: "Portfolio",
        nav_pricing: "Pricing",
        nav_faq: "FAQ",
        nav_cta: "Get a Quote",
        hero_badge: "Faster than 99% of the web",
        hero_heading_html: 'Slow websites lose customers. We build them <span class="text-blue-600 underline decoration-blue-200 underline-offset-8">lightning fast</span>.',
        hero_sub: "No bloated WordPress plugins or monthly maintenance headaches. We code modern, static websites that load instantly and rank higher on Google.",
        hero_cta_primary: "View Packages",
        hero_cta_secondary: "View Live Demos",
        hero_proof_1: "100% PageSpeed Score",
        hero_proof_2: "iDEAL & SEPA Ready",
        bench_title: "Benchmark Speed",
        bench_tab_typical: "Standard CMS",
        bench_tab_custom: "Our Code ⚡",
        bench_metric_load: "Load Time",
        bench_sec_label: "Security",
        bench_cost_label: "Costs",
        bench_time_typical: "4.2s (Slow)",
        bench_time_custom: "0.3s (Instant)",
        bench_sec_typical: "Vulnerable to exploits",
        bench_sec_custom: "Unhackable (Static)",
        bench_cost_typical: "High monthly plugins",
        bench_cost_custom: "Zero maintenance needed",
        bench_status_typical: "⚠️ <strong>Result:</strong> Visitors bounce due to long loading times.",
        bench_status_custom: "⚡ <strong>Result:</strong> Instant engagement, peak conversions, and top Google rankings.",
        feat_tag: "Why Custom Code?",
        feat_title: "Less maintenance. Pure performance for your business.",
        feat_1_title: "0.3s Load Times",
        feat_1_desc: "No heavy databases. Pages load instantly, delivering higher conversion rates and better Google rankings.",
        feat_2_title: "100% Secure & Maintenance-Free",
        feat_2_desc: "Static files cannot be hacked via database vulnerabilities or outdated plugins. Never worry about broken updates.",
        feat_3_title: "Zero Heavy Hosting Fees",
        feat_3_desc: "Powered by modern global CDNs so you never overpay for heavy server architectures.",
        port_tag: "Recent Work",
        port_title: "Explore our live demos",
        port_sub: "Every project is crafted pixel-perfect with clean HTML, CSS, and vanilla JavaScript.",
        port_1_cat: "Local Services",
        port_1_desc: "Conversion-optimized one-page site with online booking and direct WhatsApp integration.",
        port_2_cat: "Glazing & Glass Services",
        port_2_desc: "Modern glazing workshop showcase with product catalog and fast quote requests.",
        port_3_cat: "Construction & Trade",
        port_3_desc: "Lead generation platform featuring quote calculators and local SEO structure.",
        port_4_cat: "Industry & Pumps",
        port_4_desc: "Product showcase for industrial booster and pump systems with direct inquiry.",
        port_5_cat: "Cafe & Social",
        port_5_desc: "A trendy, new generation coffee shop where young people gather, featuring a modern and cozy web design.",
        port_demo_link: "View Live Demo →",
        price_tag: "Transparent Pricing",
        price_title: "No hidden fees. One-time investment.",
        pkg_once: "one-time",
        pkg_popular: "Most Popular",
        pkg_btn: "Choose Package",
        pkg_1_title: "One-Page Website",
        pkg_1_desc: "Ideal for freelancers and local businesses needing a fast online presence.",
        pkg_1_f1: "1 High-Converting Landing Page",
        pkg_1_f2: "100% Mobile Responsive & Fast",
        pkg_1_f3: "Contact Form & WhatsApp Button",
        pkg_1_f5: "Delivery within 3 business days",
        pkg_2_title: "Full Business Website",
        pkg_2_desc: "For established businesses aiming for maximum leads and credibility.",
        pkg_2_btn: "Get Started with Pro",
        pkg_2_f1: "Up to 5 Custom Coded Pages",
        pkg_2_f2: "100/100 Google PageSpeed Score",
        pkg_2_f4: "Interactive Features & Gallery",
        pkg_2_f5: "1 Year Free Ultra-Fast Hosting",
        pkg_3_title: "Custom & E-Commerce",
        pkg_3_desc: "Complex scopes, iDEAL payment integrations, or custom web apps.",
        pkg_3_price: "From €1,250",
        pkg_3_btn: "Contact Us",
        pkg_3_f1: "Unlimited pages & Bespoke UI",
        pkg_3_f2: "iDEAL & Card Checkout Setup",
        pkg_3_f3: "Advanced forms & API connections",
        pkg_3_f4: "Full source code ownership",
        guarantee_title: "Try it for a week",
        guarantee_desc: "Not loving it after a week? Get 75% back, no questions asked.",
        calc_badge: "⚙️ Instant Estimate",
        calc_title: "Configure Your Project",
        calc_subtitle: "Select your desired features and get an instant, fixed one-time investment price.",
        calc_pages_label: "Choose Your Plan",
        calc_slider_min: "STARTER",
        calc_slider_mid: "PROFESSIONAL",
        calc_slider_max: "CUSTOM",
        calc_addons_label: "Required Add-Ons",
        calc_tier_starter: "Starter",
        calc_tier_pro: "Professional",
        calc_tier_custom: "Custom / E-Commerce",
        calc_per_month: "/mo",
        calc_summary_title: "Project Specification",
        calc_fixed_badge: "Fixed Price",
        calc_est_label: "Estimated Investment",
        calc_once_label: "one-time / excl. VAT",
        calc_delivery_label: "Turnaround Time:",
        calc_speed_label: "PageSpeed Guarantee:",
        calc_speed_val: "100/100 Mobile & Desktop",
        calc_ownership_label: "Code Ownership:",
        calc_ownership_val: "100% Full Ownership",
        calc_btn_lock: "Apply This Configuration",
        calc_no_risk: "No obligations. You will receive a formal proposal first.",
        calc_from_label: "From",
        calc_days_fast: "3 to 5 business days",
        calc_days_mid: "5 to 7 business days",
        calc_days_custom: "8 to 12 business days",
        calc_auto_msg: "Hello Clansa Studio,\n\nI would like to request a quote for the following calculator selection:\n- Package: {plan} ({total}){addons}\n\nCould you contact me?",
        faq_tag: "FAQ",
        faq_title: "Frequently Asked Questions",
        faq_1_q: "What is the difference between a static site and WordPress?",
        faq_1_a: "A static website uses clean HTML, CSS, and JS without a database. It loads instantly (0.3s), cannot be broken by plugin updates, and offers bulletproof security.",
        faq_2_q: "How can I pay for the project?",
        faq_2_a: "We accept payments via <strong>iDEAL</strong>, Bancontact, credit cards, and direct SEPA bank transfers with an official invoice.",
        faq_3_q: "Do I own the full website and code?",
        faq_3_a: "Yes, 100%. Once completed, you own all rights, design assets, and source code. No lock-in contracts.",
        form_tag: "Get in Touch",
        form_title: "Start your project today",
        form_sub: "Fill out the form below and receive a reply and proposal within 24 hours.",
        form_name: "Your Name",
        form_email: "Email Address",
        form_company: "Business Name or Website",
        form_pkg_label: "Select Package",
        form_msg: "Tell us about your project",
        form_btn: "Send Inquiry →",
        footer_rights: "All rights reserved.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms & Conditions"
      }
    };

    // Extra services per plan tier, keyed by language.
    // type "monthly" = recurring subscription add-on (shown as "+ €X/mnd" or "+ €X/mo" on the total)
    // type "once" = one-time add-on (added straight into the fixed total)
    const addonsData = {
      nl: {
        starter: [
          { id: 'care', type: 'monthly', icon: '🛠️', title: 'Website Zorgplan', desc: "Maandelijkse tekst- & fotoupdates, directe WhatsApp support", price: 29 },
          { id: 'seo', type: 'once', icon: '📍', title: 'Lokale SEO & Google Bedrijfsprofiel', desc: 'Schema.org markup en Google Bedrijfsprofiel koppeling', price: 80 },
          { id: 'whatsapp', type: 'once', icon: '💬', title: 'WhatsApp Snelbestel Knop', desc: 'Directe bestelling of afspraak via een voorgevuld WhatsApp-bericht', price: 60 }
        ],
        pro: [
          { id: 'care', type: 'monthly', icon: '🛠️', title: 'Website Zorgplan Pro', desc: "Maandelijkse updates op meerdere pagina's, prioriteit support", price: 39 },
          { id: 'lang', type: 'once', icon: '🌐', title: 'Meertalig Systeem (NL / EN)', desc: 'Volledige vertaling met dynamische taalschakelaar', price: 120 },
          { id: 'seo', type: 'once', icon: '📍', title: 'Lokale SEO & Google Bedrijfsprofiel', desc: 'Schema.org markup en Google Bedrijfsprofiel koppeling', price: 80 },
          { id: 'blog', type: 'once', icon: '📰', title: 'Blog / Nieuws Sectie', desc: 'Zelf artikelen publiceren voor meer verkeer en vertrouwen', price: 150 }
        ],
        custom: [
          { id: 'care', type: 'monthly', icon: '🛡️', title: 'Onderhoud & Beveiliging Plan', desc: 'Backups, updates, monitoring en prioriteit support', price: 59 },
          { id: 'ideal', type: 'once', icon: '💳', title: 'iDEAL & Card Checkout', desc: 'Directe online betalingen voor uw diensten', price: 150 },
          { id: 'lang', type: 'once', icon: '🌐', title: 'Meertalig Systeem (NL / EN)', desc: 'Volledige vertaling met dynamische taalschakelaar', price: 120 },
          { id: 'inventory', type: 'once', icon: '📦', title: 'Voorraad- & Productbeheer', desc: 'Zelf producten en voorraad beheren zonder ontwikkelaar', price: 250 }
        ]
      },
      en: {
        starter: [
          { id: 'care', type: 'monthly', icon: '🛠️', title: 'Website Care Plan', desc: 'Monthly text & photo updates, direct WhatsApp support', price: 29 },
          { id: 'seo', type: 'once', icon: '📍', title: 'Local SEO & Google Business Profile', desc: 'Schema.org markup and Google Business Profile setup', price: 80 },
          { id: 'whatsapp', type: 'once', icon: '💬', title: 'WhatsApp Quick-Order Button', desc: 'Instant orders or bookings via a pre-filled WhatsApp message', price: 60 }
        ],
        pro: [
          { id: 'care', type: 'monthly', icon: '🛠️', title: 'Website Care Plan Pro', desc: 'Monthly updates across multiple pages, priority support', price: 39 },
          { id: 'lang', type: 'once', icon: '🌐', title: 'Multi-Language System (NL / EN)', desc: 'Full translation setup with dynamic client-side switcher', price: 120 },
          { id: 'seo', type: 'once', icon: '📍', title: 'Local SEO & Google Business Profile', desc: 'Schema.org markup and Google Business Profile setup', price: 80 },
          { id: 'blog', type: 'once', icon: '📰', title: 'Blog / News Section', desc: 'Publish your own articles for more traffic and trust', price: 150 }
        ],
        custom: [
          { id: 'care', type: 'monthly', icon: '🛡️', title: 'Maintenance & Security Plan', desc: 'Backups, updates, monitoring and priority support', price: 59 },
          { id: 'ideal', type: 'once', icon: '💳', title: 'iDEAL & Card Checkout', desc: 'Accept instant online payments for your services', price: 150 },
          { id: 'lang', type: 'once', icon: '🌐', title: 'Multi-Language System (NL / EN)', desc: 'Full translation setup with dynamic client-side switcher', price: 120 },
          { id: 'inventory', type: 'once', icon: '📦', title: 'Inventory & Product Management', desc: 'Manage products and stock yourself, no developer needed', price: 250 }
        ]
      }
    };

    let checkedAddonIds = new Set();
    let lastRenderedTier = null;

    const basePriceByTier = { starter: 349, pro: 499, custom: 1250 };

    function getTier(index) {
      const tiers = ['starter', 'pro', 'custom'];
      return tiers[index] || 'starter';
    }

    function onAddonToggle(id, isChecked) {
      if (isChecked) {
        checkedAddonIds.add(id);
      } else {
        checkedAddonIds.delete(id);
      }
      updateCalc();
    }

    function renderAddons() {
      const container = document.getElementById('calc-addons-container');
      const pagesInput = document.getElementById('calc-pages');
      const tierBadge = document.getElementById('calc-tier-badge');
      if (!container || !pagesInput) return;

      const dict = translations[currentLang];
      const tier = getTier(parseInt(pagesInput.value, 10));
      const list = addonsData[currentLang][tier];

      if (tierBadge) {
        tierBadge.textContent = dict[`calc_tier_${tier}`];
      }

      container.innerHTML = list.map(item => {
        const isChecked = checkedAddonIds.has(item.id) ? 'checked' : '';
        const priceLabel = item.type === 'monthly'
          ? `€${item.price}${dict.calc_per_month}`
          : `€${item.price}`;
        return `
            <label class="flex items-center justify-between p-4 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all cursor-pointer group">
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold">${item.icon}</span>
                <div>
                  <div class="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">${item.title} <span class="text-slate-400 font-semibold">— ${priceLabel}</span></div>
                  <div class="text-[11px] text-slate-500">${item.desc}</div>
                </div>
              </div>
              <input type="checkbox" onchange="onAddonToggle('${item.id}', this.checked)" class="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" ${isChecked}>
            </label>`;
      }).join('');

      lastRenderedTier = tier;
    }

    function switchLanguage(lang) {
      currentLang = lang;
      const dict = translations[lang];

      const btnNl = document.getElementById('lang-nl');
      const btnEn = document.getElementById('lang-en');

      if (lang === 'nl') {
        btnNl.className = 'px-2.5 py-1 rounded-lg bg-white text-blue-600 shadow-sm transition-all';
        btnEn.className = 'px-2.5 py-1 rounded-lg text-slate-500 hover:text-slate-900 transition-all';
      } else {
        btnEn.className = 'px-2.5 py-1 rounded-lg bg-white text-blue-600 shadow-sm transition-all';
        btnNl.className = 'px-2.5 py-1 rounded-lg text-slate-500 hover:text-slate-900 transition-all';
      }

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.innerHTML = dict[key];
        }
      });

      document.getElementById('hero_heading').innerHTML = dict.hero_heading_html;
      setMode(currentBenchmarkMode);
      renderAddons();
      updateCalc();
    }

    function setMode(mode) {
      currentBenchmarkMode = mode;
      const dict = translations[currentLang];

      const btnTypical = document.getElementById('btn-typical');
      const btnCustom = document.getElementById('btn-custom');
      const metricTime = document.getElementById('metric-time');
      const barTime = document.getElementById('bar-time');
      const metricScore = document.getElementById('metric-score');
      const barScore = document.getElementById('bar-score');
      const metricSec = document.getElementById('metric-sec');
      const metricMaint = document.getElementById('metric-maint');
      const statusCard = document.getElementById('status-card');

      if (mode === 'custom') {
        btnCustom.className = 'px-3 py-1.5 rounded-lg text-xs font-semibold transition-all bg-white text-blue-600 shadow-sm';
        btnTypical.className = 'px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 transition-all hover:text-slate-900';

        metricTime.textContent = dict.bench_time_custom;
        metricTime.className = 'font-bold text-emerald-600';
        barTime.style.width = '12%';
        barTime.className = 'h-full bg-emerald-500 transition-all duration-500 rounded-full';

        metricScore.textContent = '100 / 100';
        metricScore.className = 'font-bold text-emerald-600';
        barScore.style.width = '100%';
        barScore.className = 'h-full bg-emerald-500 transition-all duration-500 rounded-full';

        metricSec.textContent = dict.bench_sec_custom;
        metricMaint.textContent = dict.bench_cost_custom;

        statusCard.className = 'bg-emerald-50 border border-emerald-100 rounded-2xl p-4 text-xs text-emerald-900 leading-relaxed transition-all';
        statusCard.innerHTML = dict.bench_status_custom;
      } else {
        btnTypical.className = 'px-3 py-1.5 rounded-lg text-xs font-semibold transition-all bg-white text-slate-900 shadow-sm';
        btnCustom.className = 'px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 transition-all hover:text-slate-900';

        metricTime.textContent = dict.bench_time_typical;
        metricTime.className = 'font-bold text-red-500';
        barTime.style.width = '85%';
        barTime.className = 'h-full bg-red-500 transition-all duration-500 rounded-full';

        metricScore.textContent = '38 / 100';
        metricScore.className = 'font-bold text-red-500';
        barScore.style.width = '38%';
        barScore.className = 'h-full bg-red-500 transition-all duration-500 rounded-full';

        metricSec.textContent = dict.bench_sec_typical;
        metricMaint.textContent = dict.bench_cost_typical;

        statusCard.className = 'bg-red-50 border border-red-100 rounded-2xl p-4 text-xs text-red-800 leading-relaxed transition-all';
        statusCard.innerHTML = dict.bench_status_typical;
      }
    }

    function updateCalc() {
      const dict = translations[currentLang];
      const pagesInput = document.getElementById('calc-pages');
      const pagesBadge = document.getElementById('calc-pages-badge');
      const totalPriceEl = document.getElementById('calc-total-price');
      const deliveryEl = document.getElementById('calc-delivery');

      if (!pagesInput) return;

      const index = parseInt(pagesInput.value, 10);
      const tier = getTier(index);

      // Re-render the add-on cards only when the plan tier actually changes
      // (avoids re-rendering on every single slider tick).
      if (tier !== lastRenderedTier) {
        renderAddons();
      }

      const basePrice = basePriceByTier[tier];

      let oneTimeAddons = 0;
      let monthlyAddons = 0;
      addonsData[currentLang][tier].forEach(item => {
        if (checkedAddonIds.has(item.id)) {
          if (item.type === 'monthly') {
            monthlyAddons += item.price;
          } else {
            oneTimeAddons += item.price;
          }
        }
      });

      const total = basePrice + oneTimeAddons;

      pagesBadge.textContent = dict[`calc_tier_${tier}`];

      const priceLabel = tier === 'custom' ? `${dict.calc_from_label} €${total}` : `€${total}`;
      totalPriceEl.textContent = monthlyAddons > 0
        ? `${priceLabel} + €${monthlyAddons}${dict.calc_per_month}`
        : priceLabel;

      if (tier === 'starter') {
        deliveryEl.textContent = dict.calc_days_fast;
      } else if (tier === 'pro') {
        deliveryEl.textContent = dict.calc_days_mid;
      } else {
        deliveryEl.textContent = dict.calc_days_custom;
      }
    }

    function lockInProposal() {
      const dict = translations[currentLang];
      const index = parseInt(document.getElementById('calc-pages').value, 10);
      const tier = getTier(index);
      const planLabel = dict[`calc_tier_${tier}`];
      const total = document.getElementById('calc-total-price').textContent;

      const selectedAddons = addonsData[currentLang][tier]
        .filter(item => checkedAddonIds.has(item.id))
        .map(item => `+ ${item.title}`)
        .join(' ');

      let message = dict.calc_auto_msg
        .replace('{plan}', planLabel)
        .replace('{total}', total)
        .replace('{addons}', selectedAddons ? ` ${selectedAddons}` : '');

      const msgBox = document.querySelector('textarea[name="message"]');
      if (msgBox) {
        msgBox.value = message;
      }

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
