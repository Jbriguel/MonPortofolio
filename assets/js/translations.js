'use strict';

const translations = {
  fr: {
    "sidebar-title": "Lead Développeur Mobile",
    "sidebar-btn": "Voir Contacts",
    "contact-label-email": "Email",
    "contact-label-phone": "Téléphone",
    "contact-label-location": "Localisation",
    "interests-title": "Centres d'intérêts",
    "interest-sport": "Sport",
    "interest-cyber": "Cybersécurité",
    "interest-ai": "Intelligence Artificielle",

    "nav-about": "Informations",
    "nav-resume": "Resume",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contact",

    "cv-download": "Télécharger mon CV (French)",
    "bio-1": "Lead Mobile Developer spécialisé en Flutter avec une forte expertise en architecture modulaire, performance mobile et intégration API. Expérience confirmée dans la conception UI/UX, le pilotage d'équipes techniques, et le développement d'applications complexes allant de la maquette à la mise en production.",
    "bio-2": "Approche orientée scalabilité, sécurité et qualité logicielle.",
    "services-title": "Ce que je fais",
    "service-mobile-title": "Développement Mobile",
    "service-mobile-text": "Conception et développement d'applications mobiles cross-platform avec Flutter.",
    "service-design-title": "Conception de Maquettes",
    "service-design-text": "Création de maquettes interactives avec Figma pour une expérience utilisateur optimale.",
    "service-arch-title": "Architecture Applicative",
    "service-arch-text": "Mise en place de Clean Architecture, modularisation et composants réutilisables pour des apps scalables.",
    "service-api-title": "Intégration d'API & Backend",
    "service-api-text": "Intégration d'API externes, SDK et services tiers pour connecter des applications à des fonctionnalités avancées.",

    "resume-title": "CV",
    "education-title": "Éducation",
    "education-1-title": "Formation Amazon Web Services (AWS)",
    "education-1-period": "Mars - Juillet 2023",
    "education-1-text": "Orange Digital Center, Bamako, Mali.<br>Compétences acquises : Programmation Python, Bases de données, Réseautage, Introduction à la sécurité, Cloud Computing.",
    "education-2-title": "Licence en Ingénierie des Systèmes, Réseaux Informatiques et Sécurité",
    "education-2-period": "2021 – 2022",
    "education-2-text": "Institut Supérieur de Technologies Appliquées (Technolab ISTA), Bamako, Mali.<br>Spécialisation en réseaux informatiques et sécurité, mise en réseau de systèmes informatiques et télécommunications.",
    "education-3-title": "Diplôme Universitaire de Technologie (DUT), Électronique et Maintenance Informatique",
    "education-3-period": "2019 – 2021",
    "education-3-text": "Institut Supérieur de Technologies Appliquées (Technolab ISTA), Bamako, Mali.",

    "experience-title": "Expérience Professionnelle",
    "exp-1-title": "Lead Développeur Mobile – SUPERBRAND",
    "exp-1-period": "Mai 2025 – Présent",
    "exp-1-text": "Pilotage technique de l'équipe mobile (Flutter / Android & iOS).<br>Conception UI/UX et architecture applicative (Clean Architecture, modularisation).<br>Optimisation des performances, sécurité et gestion des releases Android & iOS.",
    "exp-2-title": "Lead Développeur Flutter – Korix Africa",
    "exp-2-period": "2023 – 2025",
    "exp-2-text": "Supervision d'une équipe de développeurs et optimisation des performances Flutter.<br>Décisions techniques sur l'architecture et intégration avancée d'API & Firebase.<br>Collaboration avec les équipes produit et design pour améliorer l'expérience utilisateur.<br><strong>Projets réalisés :</strong><br>– Web App Telegram <em>GANDALVERSE</em> – Monde Virtuel : application intégrée à un bot Telegram, proposant exploration d'un monde virtuel, gestion d'actifs, formations et actualités.<br>– Application <em>Acxes</em> – Suivi d'Événements d'Artistes : suivi de shows, badges d'événements et streaming live.",

    "freelance-title": "Missions Freelance",
    "freelance-1-title": "FlyBagage – Application mobile",
    "freelance-1-period": "2025",
    "freelance-1-text": "Corrections de bugs, nouvelles interfaces et fonctionnalités, optimisation des modules existants.<br><a href=\"https://flybagage.com\" target=\"_blank\">flybagage.com</a>",
    "freelance-2-title": "Développeur Mobile – Application Karrou",
    "freelance-2-period": "2024 – 2025",
    "freelance-2-text": "Application mobile de rencontres avec Flutter, BLoC et intégration d'API REST.<br>Système de messagerie via polling en l'absence de WebSockets.",
    "freelance-3-title": "Gestion Immobilière – Banque BMS",
    "freelance-3-period": "2023",
    "freelance-3-text": "Application de gestion immobilière avec intégration d'API pour la synchronisation des données.",
    "freelance-4-title": "Localisation de Produits Pharmaceutiques",
    "freelance-4-period": "2022",
    "freelance-4-text": "Application facilitant la recherche et la localisation de produits pharmaceutiques via intégration d'API.",

    "references-title": "Références",
    "ref-1-role": "Co-founder & COO – Wassa Technologie",

    "personal-title": "Projets Personnels",
    "personal-1-title": "Développeur et Concepteur – Erudite (Projet Personnel)",
    "personal-1-period": "2023 – Présent",
    "personal-1-text": "Application éducative avec des cours interactifs et des quiz.<br>Intégration de Firebase pour la gestion des données et l'authentification.<br>En phase de test avec plus de 30 utilisateurs.",

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

    "contact-page-title": "Contact",
    "form-title": "Formulaire de Contact",
    "form-name": "Nom complet",
    "form-email": "Adresse email",
    "form-message": "Votre message",
    "form-send": "Envoyer",
  },

  en: {
    "sidebar-title": "Lead Mobile Developer",
    "sidebar-btn": "Show Contacts",
    "contact-label-email": "Email",
    "contact-label-phone": "Phone",
    "contact-label-location": "Location",
    "interests-title": "Interests",
    "interest-sport": "Sports",
    "interest-cyber": "Cybersecurity",
    "interest-ai": "Artificial Intelligence",

    "nav-about": "About",
    "nav-resume": "Resume",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contact",

    "cv-download": "Download my Resume",
    "bio-1": "Lead Mobile Developer specialized in Flutter with strong expertise in modular architecture, mobile performance and API integration. Proven experience in UI/UX design, leading technical teams, and developing complex applications from wireframe to production.",
    "bio-2": "Scalability, security and software quality driven approach.",
    "services-title": "What I do",
    "service-mobile-title": "Mobile Development",
    "service-mobile-text": "Design and development of cross-platform mobile applications with Flutter.",
    "service-design-title": "UI/UX Mockups",
    "service-design-text": "Creation of interactive mockups with Figma for an optimal user experience.",
    "service-arch-title": "Application Architecture",
    "service-arch-text": "Implementation of Clean Architecture, modularization and reusable components for scalable apps.",
    "service-api-title": "API & Backend Integration",
    "service-api-text": "Integration of external APIs, SDKs and third-party services to connect applications to advanced features.",

    "resume-title": "Resume",
    "education-title": "Education",
    "education-1-title": "Amazon Web Services (AWS) Training",
    "education-1-period": "March – July 2023",
    "education-1-text": "Orange Digital Center, Bamako, Mali.<br>Skills acquired: Python Programming, Databases, Networking, Introduction to Security, Cloud Computing.",
    "education-2-title": "Bachelor's Degree – Systems Engineering, Computer Networks & Security",
    "education-2-period": "2021 – 2022",
    "education-2-text": "Institut Supérieur de Technologies Appliquées (Technolab ISTA), Bamako, Mali.<br>Specialization in computer networks and security, computer systems networking and telecommunications.",
    "education-3-title": "University Diploma of Technology (DUT) – Electronics & Computer Maintenance",
    "education-3-period": "2019 – 2021",
    "education-3-text": "Institut Supérieur de Technologies Appliquées (Technolab ISTA), Bamako, Mali.",

    "experience-title": "Professional Experience",
    "exp-1-title": "Lead Mobile Developer – SUPERBRAND",
    "exp-1-period": "May 2025 – Present",
    "exp-1-text": "Technical leadership of the mobile team (Flutter / Android & iOS).<br>UI/UX design and application architecture (Clean Architecture, modularization).<br>Performance optimization, security and Android & iOS release management.",
    "exp-2-title": "Lead Flutter Developer – Korix Africa",
    "exp-2-period": "2023 – 2025",
    "exp-2-text": "Supervision of Flutter developers team and performance optimization.<br>Technical decisions on architecture and advanced API & Firebase integration.<br>Collaboration with product and design teams to improve user experience.<br><strong>Projects delivered:</strong><br>– Telegram Web App <em>GANDALVERSE</em> – Virtual World: app integrated into a Telegram bot, featuring virtual world exploration, asset management, training and news.<br>– <em>Acxes</em> App – Artist Event Tracking: show tracking, event badges and live streaming.",

    "freelance-title": "Freelance Projects",
    "freelance-1-title": "FlyBagage – Mobile Application",
    "freelance-1-period": "2025",
    "freelance-1-text": "Bug fixes, new UI screens and features, optimization of existing modules for better performance.<br><a href=\"https://flybagage.com\" target=\"_blank\">flybagage.com</a>",
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
    "personal-1-title": "Developer & Designer – Erudite (Personal Project)",
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

    "contact-page-title": "Contact",
    "form-title": "Contact Form",
    "form-name": "Full name",
    "form-email": "Email address",
    "form-message": "Your message",
    "form-send": "Send",
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
