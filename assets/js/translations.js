'use strict';

const translations = {
  fr: {
    "sidebar-title": "Tech Lead Mobile",
    "sidebar-subtitle": "Mobile · Web · UI/UX · Product Development",
    "sidebar-slogan": "I design. I build. I ship.",
    "sidebar-btn": "Voir Contacts",
    "status-badge": "Disponible pour opportunités",
    "contact-label-email": "Email",
    "contact-label-phone": "Téléphone",
    "contact-label-location": "Localisation",
    "location-val": "Bamako, Mali • Remote",
    "cv-fr-btn": "CV Français",
    "cv-en-btn": "CV English",
    "interests-title": "Centres d'intérêts",
    "interest-sport": "Sport",
    "interest-cyber": "Cybersécurité",
    "interest-ai": "Intelligence Artificielle",

    "nav-about": "Informations",
    "nav-resume": "CV",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contact",

    "stat-exp-lbl": "Ans d'expérience",
    "stat-proj-lbl": "Projets réalisés",
    "stat-cert-lbl": "Certifications AWS",
    "stat-lead-lbl": "Postes Lead",

    "bio-1": "Développeur mobile (Flutter / Android & iOS) avec un intérêt marqué pour le design d’interfaces et les produits numériques. J'aime transformer une idée en application concrète, de la conception UI/UX sur Figma jusqu'au développement et à la mise en production.",
    "bio-2": "Tech Lead chez BrandOpera et développeur indépendant via FloysTech, je conçois des architectures modulaires (Clean Architecture, BLoC) et intègre des APIs et services Cloud (Firebase, REST). Basé à Bamako, j'interviens sur des projets locaux comme à l'international en remote.",
    "services-title": "Ce que je fais",
    "service-mobile-title": "Développement Mobile",
    "service-mobile-text": "Applications Flutter multiplateformes (Android & iOS), interfaces fluides, animations, composants réutilisables et expérience utilisateur soignée.",
    "service-design-title": "UI / UX Design",
    "service-design-text": "Conception sur Figma, création de Design Systems, prototypes interactifs et intégration pixel-perfect dans Flutter.",
    "service-arch-title": "Architecture Logicielle",
    "service-arch-text": "Conception d'architectures modulaires avec Clean Architecture, séparation des responsabilités, BLoC et organisation d'un code maintenable.",
    "service-api-title": "Backend & Intégration",
    "service-api-text": "Firebase, Firestore, Authentication, Storage, Cloud Functions et intégration d'API REST avec synchronisation sécurisée des données.",
    "service-leadership-title": "Leadership Technique",
    "service-leadership-text": "Encadrement d'équipes Flutter, revue de code, définition des bonnes pratiques, accompagnement des développeurs et préparation des releases Android & iOS.",

    "resume-title": "CV",
    "education-title": "Éducation",
    "education-1-title": "Formation Amazon Web Services (AWS)",
    "education-1-period": "Mars – Juillet 2023",
    "education-1-text": "Orange Digital Center, Bamako, Mali.<br>Compétences acquises : Programmation Python, Bases de données, Réseautage, Introduction à la sécurité, Cloud Computing.",
    "education-2-title": "Licence en Ingénierie des Systèmes, Réseaux Informatiques et Sécurité",
    "education-2-period": "2021 – 2022",
    "education-2-text": "Institut Supérieur de Technologies Appliquées (Technolab ISTA), Bamako, Mali.<br>Spécialisation en réseaux informatiques et sécurité, mise en réseau de systèmes informatiques et télécommunications.",
    "education-3-title": "Diplôme Universitaire de Technologie (DUT), Électronique et Maintenance Informatique",
    "education-3-period": "2019 – 2021",
    "education-3-text": "Institut Supérieur de Technologies Appliquées (Technolab ISTA), Bamako, Mali.",

    "experience-title": "Expérience Professionnelle",
    "exp-1-title": "Tech Lead Mobile – BrandOpera",
    "exp-1-period": "Mai 2025 – Présent",
    "exp-1-text": "Pilotage technique de l'équipe mobile (Flutter / Android & iOS).<br>Conception UI/UX et architecture applicative (Clean Architecture, modularisation).<br>Optimisation des performances, sécurité et gestion des releases Android & iOS.",
    "exp-2-title": "Lead Développeur Flutter – Korix Africa",
    "exp-2-period": "2023 – 2025",
    "exp-2-text": "Supervision d'une équipe de développeurs et optimisation des performances Flutter.<br>Décisions techniques sur l'architecture et intégration avancée d'API & Firebase.<br>Collaboration avec les équipes produit et design pour améliorer l'expérience utilisateur.<br><strong>Projets phares réalisés :</strong><br>– Web App Telegram <em>GANDALVERSE</em> – Monde Virtuel : application accessible via un bot Telegram, hébergée sur Firebase (monde virtuel, gestion d'actifs, formations et actualités).<br>– Application <em>Acxes</em> – Suivi d'Événements d'Artistes : application de suivi des shows d'artistes, achat de badges d'événements et visionnage de lives.",
    "exp-floystech-title": "Développeur Mobile & Web Indépendant – FloysTech",
    "exp-floystech-period": "Août 2022 – Présent",
    "exp-floystech-text": "Conception et développement de solutions mobiles et web adaptées aux besoins des clients. Intervention complète : de l'analyse des besoins jusqu'au développement et à la mise en production, principalement avec Flutter, Dart et les technologies web.",

    "freelance-title": "Missions Freelance",
    "freelance-1-title": "FlyBagage – Application mobile",
    "freelance-1-period": "2025",
    "freelance-1-text": "Intervention sur l'application mobile FlyBagage : corrections de bugs, création de nouvelles interfaces et fonctionnalités, et optimisation des modules existants pour de meilleures performances.<br><a href=\"https://flybagage.com\" target=\"_blank\">flybagage.com</a>",
    "freelance-2-title": "Développeur Mobile – Application Karrou",
    "freelance-2-period": "2024 – 2025",
    "freelance-2-text": "Développement d'une application mobile de rencontres avec Flutter, BLoC et intégration d'API REST.<br>Mise en place d'un système de messagerie via polling en l'absence de WebSockets.",
    "freelance-3-title": "Gestion Immobilière – Banque BMS",
    "freelance-3-period": "2023",
    "freelance-3-text": "Développement d'une application de gestion immobilière avec intégration d'API pour la synchronisation des données.",
    "freelance-4-title": "Localisation de Produits Pharmaceutiques",
    "freelance-4-period": "2022",
    "freelance-4-text": "Création d'une application facilitant la recherche et la localisation de produits pharmaceutiques via intégration d'API.",

    "references-title": "Références",
    "ref-1-role": "Co-founder & COO – Wassa Technologie",

    "personal-title": "Projets Personnels",
    "personal-1-title": "Développeur et Concepteur – Erudite",
    "personal-1-period": "2023 – Présent",
    "personal-1-text": "Application éducative avec cours interactifs et quiz.<br>Intégration de Firebase pour la gestion des données et l'authentification.<br>Actuellement en test avec plus de 30 utilisateurs.",

    "skills-title": "Mes Compétences",
    "skill-cat-mobile": "Développement Mobile",
    "skill-cat-web": "Développement Web",
    "skill-cat-cloud": "Cloud & Outils",
    "cert-title": "Certifications",
    "lang-section-title": "Langues",
    "prog-lang-title": "Langages de Programmation",
    "lang-fr": "Français – courant",
    "lang-en": "Anglais – technique / professionnel",

    "portfolio-title": "Portfolio",
    "filter-all": "All",
    "filter-webdesign": "Web design",
    "filter-apps": "Applications",
    "filter-webdev": "Web development",
    "modal-close-aria": "Fermer",
    "modal-open-project": "Visiter le projet",
    "modal-open-image": "Aperçu plein écran",
    "modal-tech-stack": "Stack technique",

    "contact-page-title": "Contact",
    "contact-quick-title": "Have a project in mind?",
    "contact-quick-subtitle": "Construisons votre prochain produit. Disponible par messagerie instantanée ou appel :",
    "contact-whatsapp": "WhatsApp",
    "contact-call": "Appeler",
    "contact-map-caption": "Basé à Bamako, Mali • Disponible en Remote pour des missions partout dans le monde.",
    "form-title": "Envoyer un Message",
    "form-name": "Nom complet",
    "form-email": "Adresse email",
    "form-message": "Votre message",
    "form-send": "Envoyer le message"
  },

  en: {
    "sidebar-title": "Tech Lead Mobile",
    "sidebar-subtitle": "Mobile · Web · UI/UX · Product Development",
    "sidebar-slogan": "I design. I build. I ship.",
    "sidebar-btn": "Show Contacts",
    "status-badge": "Available for opportunities",
    "contact-label-email": "Email",
    "contact-label-phone": "Phone",
    "contact-label-location": "Location",
    "location-val": "Bamako, Mali • Remote",
    "cv-fr-btn": "French CV",
    "cv-en-btn": "English CV",
    "interests-title": "Interests",
    "interest-sport": "Sports",
    "interest-cyber": "Cybersecurity",
    "interest-ai": "Artificial Intelligence",

    "nav-about": "About",
    "nav-resume": "Resume",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contact",

    "stat-exp-lbl": "Years Experience",
    "stat-proj-lbl": "Projects Delivered",
    "stat-cert-lbl": "AWS Certifications",
    "stat-lead-lbl": "Lead Roles",

    "bio-1": "Mobile developer (Flutter / Android & iOS) with a keen eye for interface design and digital products. I enjoy taking an idea from initial Figma UI/UX mockups all the way through to deployment.",
    "bio-2": "Tech Lead at BrandOpera and freelance developer with FloysTech, I build modular applications (Clean Architecture, BLoC) with Flutter and integrate Cloud services (Firebase, REST APIs). Based in Bamako, Mali, working both locally and remotely worldwide.",
    "services-title": "What I do",
    "service-mobile-title": "Mobile Development",
    "service-mobile-text": "Cross-platform Flutter applications (Android & iOS), smooth interfaces, animations, reusable components, and polished user experiences.",
    "service-design-title": "UI / UX Design",
    "service-design-text": "Conception in Figma, Design Systems creation, interactive prototyping, and pixel-perfect integration into Flutter.",
    "service-arch-title": "Software Architecture",
    "service-arch-text": "Modular architecture design with Clean Architecture, separation of concerns, BLoC, and maintainable codebase organization.",
    "service-api-title": "Backend & Integration",
    "service-api-text": "Firebase, Firestore, Authentication, Storage, Cloud Functions, and REST API integration with secure data synchronization.",
    "service-leadership-title": "Technical Leadership",
    "service-leadership-text": "Flutter team mentoring, code reviews, establishing engineering best practices, developer support, and managing Android & iOS store releases.",

    "resume-title": "Resume",
    "education-title": "Education",
    "education-1-title": "Amazon Web Services (AWS) Training",
    "education-1-period": "March – July 2023",
    "education-1-text": "Orange Digital Center, Bamako, Mali.<br>Skills acquired: Python Programming, Databases, Networking, Introduction to Security, Cloud Computing.",
    "education-2-title": "Bachelor's Degree – Systems Engineering, Computer Networks & Security",
    "education-2-period": "2021 – 2022",
    "education-2-text": "Institut Supérieur de Technologies Appliquées (Technolab ISTA), Bamako, Mali.<br>Specialization in computer networks and security, computer systems networking, and telecommunications.",
    "education-3-title": "University Diploma of Technology (DUT) – Electronics & Computer Maintenance",
    "education-3-period": "2019 – 2021",
    "education-3-text": "Institut Supérieur de Technologies Appliquées (Technolab ISTA), Bamako, Mali.",

    "experience-title": "Professional Experience",
    "exp-1-title": "Tech Lead Mobile – BrandOpera",
    "exp-1-period": "May 2025 – Present",
    "exp-1-text": "Technical leadership of the mobile team (Flutter / Android & iOS).<br>UI/UX design and application architecture (Clean Architecture, modularization).<br>Performance optimization, security and Android & iOS store releases management.",
    "exp-2-title": "Lead Flutter Developer – Korix Africa",
    "exp-2-period": "2023 – 2025",
    "exp-2-text": "Supervision of Flutter developers team and performance optimization.<br>Technical decisions on architecture and advanced API & Firebase integration.<br>Collaboration with product and design teams to elevate user experience.<br><strong>Key delivered projects:</strong><br>– Telegram Web App <em>GANDALVERSE</em> – Virtual World: app integrated into a Telegram bot, featuring virtual world exploration, asset management, courses, and news.<br>– <em>Acxes</em> App – Artist Event Tracking: show tracking, event passes, and live streaming.",
    "exp-floystech-title": "Independent Mobile & Web Developer – FloysTech",
    "exp-floystech-period": "August 2022 – Present",
    "exp-floystech-text": "Design and development of tailored mobile and web solutions. End-to-end delivery: requirements analysis, architecture, Flutter/Dart and web development, through to production deployment.",

    "freelance-title": "Freelance Projects",
    "freelance-1-title": "FlyBagage – Mobile Application",
    "freelance-1-period": "2025",
    "freelance-1-text": "Mobile application contribution on FlyBagage: bug fixes, new UI screens and features, optimization of existing modules for higher performance.<br><a href=\"https://flybagage.com\" target=\"_blank\">flybagage.com</a>",
    "freelance-2-title": "Mobile Developer – Karrou App",
    "freelance-2-period": "2024 – 2025",
    "freelance-2-text": "Dating mobile app with Flutter, BLoC and REST API integration.<br>Messaging system implementation via polling in the absence of WebSockets.",
    "freelance-3-title": "Real Estate Management – BMS Bank",
    "freelance-3-period": "2023",
    "freelance-3-text": "Real estate management application with API integration for data synchronization.",
    "freelance-4-title": "Pharmaceutical Product Locator",
    "freelance-4-period": "2022",
    "freelance-4-text": "Application facilitating pharmaceutical product search and location via API integration.",

    "references-title": "References",
    "ref-1-role": "Co-founder & COO – Wassa Technologie",

    "personal-title": "Personal Projects",
    "personal-1-title": "Developer & Designer – Erudite",
    "personal-1-period": "2023 – Present",
    "personal-1-text": "Educational application with interactive courses and quizzes.<br>Firebase integration for data management and authentication.<br>Currently in beta testing with over 30 users.",

    "skills-title": "My Skills",
    "skill-cat-mobile": "Mobile Development",
    "skill-cat-web": "Web Development",
    "skill-cat-cloud": "Cloud & Tools",
    "cert-title": "Certifications",
    "lang-section-title": "Languages",
    "prog-lang-title": "Programming Languages",
    "lang-fr": "French – fluent",
    "lang-en": "English – technical / professional",

    "portfolio-title": "Portfolio",
    "filter-all": "All",
    "filter-webdesign": "Web design",
    "filter-apps": "Applications",
    "filter-webdev": "Web development",
    "modal-close-aria": "Close",
    "modal-open-project": "Visit project",
    "modal-open-image": "Fullscreen preview",
    "modal-tech-stack": "Tech Stack",

    "contact-page-title": "Contact",
    "contact-quick-title": "Have a project in mind?",
    "contact-quick-subtitle": "Let's build your next product. Available via instant messaging or call:",
    "contact-whatsapp": "WhatsApp",
    "contact-call": "Call",
    "contact-map-caption": "Based in Bamako, Mali • Available for Remote worldwide.",
    "form-title": "Send a Message",
    "form-name": "Full name",
    "form-email": "Email address",
    "form-message": "Your message",
    "form-send": "Send Message"
  }
};

let currentLang = 'fr';

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = lang === 'fr' ? 'EN' : 'FR';
}

function toggleLang() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  applyTranslations(currentLang);
  document.documentElement.lang = currentLang;
}
