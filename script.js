const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const languageButton = document.querySelector('.language-toggle');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? (document.documentElement.lang === 'fr' ? 'Fermer le menu' : 'Close menu') : (document.documentElement.lang === 'fr' ? 'Ouvrir le menu' : 'Open menu'));
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', document.documentElement.lang === 'fr' ? 'Ouvrir le menu' : 'Open menu');
  });
});

const translations = {
  'meta[name="description"]': ['Volt & Ligne conçoit et réalise vos installations électriques, solutions solaires et systèmes de sécurité au Cameroun.', 'Volt & Ligne designs and delivers electrical installations, solar energy solutions and security systems in Cameroon.'],
  '.main-nav[aria-label]': ['Navigation principale', 'Main navigation'],
  '.main-nav > a:nth-child(1)': ['Expertises', 'Expertise'],
  '.main-nav > a:nth-child(2)': ['Notre approche', 'Our approach'],
  '.main-nav > a:nth-child(3)': ['Réalisations', 'Projects'],
  '.nav-cta': ['Parlons de votre projet <span>↗</span>', 'Let’s talk about your project <span>↗</span>'],
  '.hero-copy .eyebrow': ['<span></span> ÉNERGIE · INGÉNIERIE · CONFIANCE', '<span></span> ENERGY · ENGINEERING · TRUST'],
  '.hero h1': ['Le courant<br>passe <em>mieux</em><br>quand tout est bien pensé.', 'Power<br>works <em>better</em><br>when it’s well designed.'],
  '.hero-intro': ['Des installations électriques fiables et des solutions énergétiques conçues pour durer. De l’étude à la mise en service, nous donnons vie à vos projets.', 'Reliable electrical installations and energy solutions built to last. From planning to commissioning, we bring your projects to life.'],
  '.hero-actions .button': ['Parler à un ingénieur <span>↗</span>', 'Talk to an engineer <span>↗</span>'],
  '.hero-actions .text-link': ['Découvrir nos expertises <span>↓</span>', 'Explore our expertise <span>↓</span>'],
  '.hero-note > span': ['Une équipe engagée<br><b>à chaque étape</b>', 'A committed team<br><b>at every step</b>'],
  '.photo-label': ['<span class="pulse"></span> SUR LE TERRAIN <b>·</b> DOUALA, CAMEROUN', '<span class="pulse"></span> ON SITE <b>·</b> DOUALA, CAMEROON'],
  '.energy-card strong': ['Énergie maîtrisée.', 'Energy, under control.'],
  '.energy-card small': ['Performance à long terme.', 'Performance that lasts.'],
  '.hero-bottom > span': ['01 — 04 <i></i> UNE ÉNERGIE QUI VOUS RESSEMBLE', '01 — 04 <i></i> ENERGY THAT WORKS FOR YOU'],
  '.trust-strip > p': ['VOTRE PARTENAIRE TECHNIQUE, DU PREMIER PLAN AU DERNIER TEST.', 'YOUR TECHNICAL PARTNER, FROM FIRST PLAN TO FINAL TEST.'],
  '.trust-items': ['<span>01 <b>ÉTUDE</b></span><span>02 <b>INSTALLATION</b></span><span>03 <b>MISE EN SERVICE</b></span><span>04 <b>MAINTENANCE</b></span>', '<span>01 <b>PLANNING</b></span><span>02 <b>INSTALLATION</b></span><span>03 <b>COMMISSIONING</b></span><span>04 <b>MAINTENANCE</b></span>'],
  '.expertise .eyebrow': ['<span></span> CE QUE NOUS FAISONS', '<span></span> WHAT WE DO'],
  '.expertise h2': ['L’électricité,<br><em>bien pensée.</em>', 'Electrical work,<br><em>well thought out.</em>'],
  '.heading-note p': ['La bonne solution commence par les bonnes questions. Nous combinons rigueur technique et sens du terrain pour répondre à vos vrais besoins.', 'The right solution starts with the right questions. We combine technical rigor and on-the-ground experience to meet your real needs.'],
  '.heading-note .text-link': ['Parlons de vos besoins <span>↗</span>', 'Let’s discuss your needs <span>↗</span>'],
  '.service-card:nth-child(1) .service-top': ['<span>01 / INSTALLATION</span><span class="service-icon">⌁</span>', '<span>01 / INSTALLATION</span><span class="service-icon">⌁</span>'],
  '.service-card:nth-child(1) h3': ['Installations électriques', 'Electrical installations'],
  '.service-card:nth-child(1) p': ['Courant fort, courant faible et tableaux électriques conçus pour la sécurité et la continuité.', 'Power, low-voltage and electrical panel systems designed for safety and reliability.'],
  '.service-card:nth-child(2) .service-top': ['<span>02 / SOLAIRE</span><span class="service-icon">☼</span>', '<span>02 / SOLAR</span><span class="service-icon">☼</span>'],
  '.service-card:nth-child(2) h3': ['Solaire & autonomie', 'Solar & energy independence'],
  '.service-card:nth-child(2) p': ['Dimensionnement, installation et suivi de systèmes solaires adaptés à votre consommation.', 'Solar systems sized, installed and monitored to match your energy use.'],
  '.service-card:nth-child(3) .service-top': ['<span>03 / SÉCURITÉ</span><span class="service-icon">◈</span>', '<span>03 / SECURITY</span><span class="service-icon">◈</span>'],
  '.service-card:nth-child(3) h3': ['Sécurité & contrôle', 'Security & access control'],
  '.service-card:nth-child(3) p': ['Détection incendie, vidéosurveillance et contrôle d’accès pour protéger vos espaces.', 'Fire detection, video surveillance and access control to protect your spaces.'],
  '.service-card:nth-child(1) > a': ['En savoir plus sur les installations électriques', 'Learn more about electrical installations'],
  '.service-card:nth-child(2) > a': ['En savoir plus sur le solaire', 'Learn more about solar solutions'],
  '.service-card:nth-child(3) > a': ['En savoir plus sur les solutions de sécurité', 'Learn more about security solutions'],
  '.approach-copy .eyebrow': ['<span></span> DU PLAN À LA RÉALITÉ', '<span></span> FROM PLAN TO REALITY'],
  '.approach h2': ['La technique<br>avec <em>du sens.</em>', 'Engineering<br>with <em>purpose.</em>'],
  '.approach-copy > p:not(.eyebrow)': ['Un bon chantier, c’est une solution qui fonctionne le jour de la livraison et longtemps après. Nous sommes présents à chaque étape, avec méthode et transparence.', 'A successful project delivers a solution that works on handover day and long after. We are there at every stage, with care and transparency.'],
  '.photo-index': ['SUR LE TERRAIN <span>— 02 / 04</span>', 'ON SITE <span>— 02 / 04</span>'],
  '.steps > div:nth-child(1) p': ['<b>Écouter & étudier</b><small>Nous comprenons vos usages avant de dimensionner.</small>', '<b>Listen & assess</b><small>We understand how you work before sizing a solution.</small>'],
  '.steps > div:nth-child(2) p': ['<b>Concevoir & installer</b><small>Chaque détail est pensé pour votre site.</small>', '<b>Design & install</b><small>Every detail is tailored to your site.</small>'],
  '.steps > div:nth-child(3) p': ['<b>Tester & accompagner</b><small>Nous vérifions, expliquons et restons disponibles.</small>', '<b>Test & support</b><small>We verify, explain and stay available.</small>'],
  '.projects .eyebrow': ['<span></span> QUELQUES PROJETS', '<span></span> SELECTED PROJECTS'],
  '.projects h2': ['Du concret.<br><em>Du courant.</em>', 'Real work.<br><em>Real power.</em>'],
  '.projects-intro': ['Chaque site a ses contraintes. Voici quelques exemples de solutions que nous avons mises en œuvre avec nos clients.', 'Every site has its own needs. Here are a few solutions we have delivered with our clients.'],
  '.project-card:nth-child(1) .project-overlay': ['<span>SOLAIRE · COMMERCIAL</span><h3>Plus d’autonomie,<br>moins d’incertitude.</h3><p>Installation solaire photovoltaïque</p><b>↗</b>', '<span>SOLAR · COMMERCIAL</span><h3>More independence,<br>less uncertainty.</h3><p>Photovoltaic solar installation</p><b>↗</b>'],
  '.project-card:nth-child(2) .project-overlay': ['<span>ÉLECTRICITÉ · TERTIAIRE</span><h3>Un espace<br>qui fonctionne.</h3><p>Courant fort & faible</p><b>↗</b>', '<span>ELECTRICAL · COMMERCIAL</span><h3>A space<br>that works.</h3><p>Power & low-voltage systems</p><b>↗</b>'],
  '.project-card:nth-child(3) .project-overlay': ['<span>SÉCURITÉ · RÉSIDENTIEL</span><h3>La tranquillité<br>bien installée.</h3><p>Sécurité & contrôle d’accès</p><b>↗</b>', '<span>SECURITY · RESIDENTIAL</span><h3>Peace of mind,<br>well installed.</h3><p>Security & access control</p><b>↗</b>'],
  '.contact .eyebrow': ['<span></span> UN PROJET EN TÊTE ?', '<span></span> HAVE A PROJECT IN MIND?'],
  '.contact h2': ['Parlons de ce<br>qui vous <em>anime.</em>', 'Let’s talk about<br>what <em>moves you.</em>'],
  '.contact-content > p:not(.eyebrow)': ['Besoin d’une étude, d’une installation ou d’un conseil ? Décrivez-nous votre projet, nous vous répondrons rapidement.', 'Need a study, installation or advice? Tell us about your project and we’ll get back to you soon.'],
  '.button-light': ['bonjour@voltligne.cm <span>↗</span>', 'hello@voltligne.cm <span>↗</span>'],
  '.contact-info > div:nth-child(1) span': ['APPELEZ-NOUS', 'CALL US'],
  '.contact-info > div:nth-child(2) span': ['RETROUVEZ-NOUS', 'FIND US'],
  '.contact-info > div:nth-child(2) p': ['Douala, Cameroun<br>Interventions sur tout le territoire', 'Douala, Cameroon<br>Working nationwide'],
  '.contact-info > div:nth-child(3) span': ['HORAIRES', 'HOURS'],
  '.contact-info > div:nth-child(3) p': ['Lundi – Vendredi<br>08:00 – 17:00', 'Monday – Friday<br>08:00 – 17:00'],
  '.footer > span': ['© <span id="year"></span> Volt & Ligne. Tous droits réservés.', '© <span id="year"></span> Volt & Ligne. All rights reserved.'],
  '.footer > a:last-child': ['RETOUR EN HAUT ↑', 'BACK TO TOP ↑']
};

let currentLanguage = 'fr';
const savedLanguage = localStorage.getItem('voltligne-language');

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  Object.entries(translations).forEach(([selector, values]) => {
    const element = document.querySelector(selector);
    if (!element) return;
    const value = values[language === 'fr' ? 0 : 1];
    if (selector === 'title') document.title = value;
    else if (selector.startsWith('meta[')) element.content = value;
    else if (selector.includes('aria-label')) element.setAttribute('aria-label', value);
    else element.innerHTML = value;
  });

  document.querySelectorAll('[data-en]').forEach((element) => {
    element.innerHTML = language === 'en' ? element.dataset.en : element.dataset.fr;
  });
  document.querySelectorAll('[data-placeholder-en]').forEach((element) => {
    element.placeholder = language === 'en' ? element.dataset.placeholderEn : element.dataset.placeholderFr;
  });

  document.querySelectorAll('.service-card > a').forEach((link, index) => {
    const key = `.service-card:nth-child(${index + 1}) > a`;
    link.setAttribute('aria-label', translations[key][language === 'fr' ? 0 : 1]);
  });
  const heroImage = document.querySelector('.hero-photo img');
  if (heroImage) heroImage.alt = language === 'fr' ? 'Ingénieur électricien vérifiant un tableau électrique' : 'Electrical engineer checking a distribution board';
  const approachImage = document.querySelector('.approach-photo img');
  if (approachImage) approachImage.alt = language === 'fr' ? 'Équipe technique travaillant sur une installation' : 'Technical team working on an installation';
  menuButton?.setAttribute('aria-label', navigation?.classList.contains('open') ? (language === 'fr' ? 'Fermer le menu' : 'Close menu') : (language === 'fr' ? 'Ouvrir le menu' : 'Open menu'));
  if (languageButton) {
    languageButton.textContent = language === 'fr' ? 'EN' : 'FR';
    languageButton.setAttribute('aria-label', language === 'fr' ? 'Switch language to English' : 'Changer la langue en français');
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
  const pageFile = location.pathname.split('/').pop() || 'index.html';
  const metadata = {
    'index.html': ['Volt & Ligne — Ingénierie électrique', 'Volt & Ligne — Electrical Engineering', 'Volt & Ligne conçoit et réalise vos installations électriques, solutions solaires et systèmes de sécurité au Cameroun.', 'Volt & Ligne designs and delivers electrical installations, solar energy solutions and security systems in Cameroon.'],
    'about.html': ['À propos — Volt & Ligne', 'About — Volt & Ligne', 'Découvrez Volt & Ligne, entreprise d’ingénierie électrique au Cameroun.', 'Meet Volt & Ligne, an electrical engineering company in Cameroon.'],
    'services.html': ['Services & produits — Volt & Ligne', 'Services & products — Volt & Ligne', 'Installations électriques, solaire et sécurité : découvrez les services et produits Volt & Ligne.', 'Electrical installations, solar and security: explore Volt & Ligne services and products.'],
    'projects.html': ['Projets — Volt & Ligne', 'Projects — Volt & Ligne', 'Quelques projets électriques, solaires et de sécurité réalisés par Volt & Ligne.', 'Selected electrical, solar and security projects by Volt & Ligne.'],
    'blog.html': ['Journal — Volt & Ligne', 'Journal — Volt & Ligne', 'Conseils pratiques et actualités autour de l’électricité, du solaire et de la sécurité.', 'Practical advice and news about electrical systems, solar energy and security.'],
    'contact.html': ['Contact — Volt & Ligne', 'Contact — Volt & Ligne', 'Contactez Volt & Ligne pour vos projets d’ingénierie électrique, solaire et sécurité.', 'Contact Volt & Ligne about your electrical engineering, solar and security projects.']
  }[pageFile];
  if (metadata) {
    document.title = metadata[language === 'fr' ? 0 : 1];
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = metadata[language === 'fr' ? 2 : 3];
  }
  localStorage.setItem('voltligne-language', language);
}

languageButton?.addEventListener('click', () => setLanguage(currentLanguage === 'fr' ? 'en' : 'fr'));
setLanguage(savedLanguage === 'en' ? 'en' : 'fr');

const contactForm = document.querySelector('#contact-form');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const service = formData.get('service') || (currentLanguage === 'fr' ? 'Non précisé' : 'Not specified');
  const subject = currentLanguage === 'fr' ? `Demande de ${service}` : `${service} enquiry`;
  const message = [
    `${currentLanguage === 'fr' ? 'Nom' : 'Name'}: ${formData.get('name')}`,
    `${currentLanguage === 'fr' ? 'E-mail' : 'Email'}: ${formData.get('email')}`,
    `${currentLanguage === 'fr' ? 'Besoin' : 'Service'}: ${service}`,
    '',
    `${currentLanguage === 'fr' ? 'Message' : 'Message'}:`,
    formData.get('message')
  ].join('\n');
  window.location.href = `mailto:bonjour@voltligne.cm?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
});
