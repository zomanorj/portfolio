export const profile = {
  name: "RAJAONAH Zo Manoa",
  firstName: "Manoa",
  role: "Étudiant en Licence 3 Informatique & Génie Logiciel",
  location: "Antananarivo, Madagascar",
  flag: "MG",
  email: "manoarajaonah05@gmail.com",
  phone: "+261 34 96 058 39",

  tagline:
    "Développeur Full-Stack passionné par React, Django et les technologies web modernes. Je recherche un stage afin de renforcer mes compétences et contribuer à des projets concrets.",

  availability: "Disponible immédiatement pour un stage de 3 mois",

  years: "3",

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/zomanorj",
      icon: "github",
    },
    {
      label: "Email",
      href: "mailto:manoarajaonah05@gmail.com",
      icon: "mail",
    },
  ],
};

export const about = {
  paragraphs: [
    "Je suis Manoa, étudiant en Licence 3 Informatique & Génie Logiciel à Arovy University.",

    "Je développe principalement des applications web Full-Stack avec React, Django, Node.js et PostgreSQL. J'apprécie particulièrement la conception d'interfaces modernes et le développement d'API robustes.",

    "Au travers de mes projets académiques et personnels, j'ai conçu plusieurs solutions complètes telles qu'un ERP de gestion de transport, un système RH et une application de gestion de stock.",

    "Je recherche actuellement un stage développeur afin d'acquérir une expérience professionnelle et continuer à progresser dans le domaine de l'ingénierie logicielle.",
  ],

  stats: [
    {
      label: "Projets réalisés",
      value: "3+",
    },
    {
      label: "Technologies utilisées",
      value: "10+",
    },
    {
      label: "Années d'apprentissage",
      value: "3",
    },
    {
      label: "Stage recherché",
      value: "3 mois",
    },
  ],
};

export const skills = {
  frontend: {
    title: "Frontend",
    icon: "palette",

    items: [
      { name: "HTML / CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React.js", level: 75 },
      { name: "Bootstrap 5", level: 80 },
      { name: "Tailwind CSS", level: 75 },
    ],
  },

  backend: {
    title: "Backend",
    icon: "server",

    items: [
      { name: "Django", level: 75 },
      { name: "Node.js", level: 70 },
      { name: "Laravel", level: 65 },
      { name: "REST API", level: 75 },
      { name: "JWT Authentication", level: 70 },
    ],
  },

  database: {
    title: "Bases de données",
    icon: "database",

    items: [
      { name: "SQL", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "Merise (MCD / MLD)", level: 75 },
      { name: "Conception BDD", level: 75 },
    ],
  },

  tools: {
    title: "Outils & Méthodes",
    icon: "wrench",

    items: [
      { name: "Git & GitHub", level: 80 },
      { name: "Docker", level: 55 },
      { name: "UML", level: 70 },
      { name: "Génie Logiciel", level: 75 },
      { name: "Vercel / Render / Railway", level: 75 },
    ],
  },

  soft: {
    title: "Soft Skills",
    icon: "heart",

    items: [
      { name: "Résolution de problèmes", level: 85 },
      { name: "Esprit d'analyse", level: 85 },
      { name: "Travail en équipe", level: 80 },
      { name: "Autonomie", level: 80 },
      { name: "Apprentissage continu", level: 90 },
    ],
  },
};

export const projects = [
  {
    title: "TransiFlow",

    description:
      "ERP complet de gestion de transport couvrant la gestion des véhicules, chauffeurs, missions, clients, finances et maintenances avec authentification JWT et cartographie interactive.",

    tags: ["React", "Node.js", "PostgreSQL", "Leaflet.js"],

    year: "2026",

    category: "ERP",

    featured: true,

    accent: "from-blue-500 to-cyan-500",

    link: "https://github.com/zomanorj/Gestion_flotte.git",

    icon: "🚚",
  },

  {
    title: "HRFlow",

    description:
      "Système de gestion des ressources humaines permettant la gestion des employés, congés, présences, audit et notifications.",

    tags: [
      "React",
      "Django REST Framework",
      "MySQL",
      "JWT",
      "Tailwind CSS",
    ],

    year: "2026",

    category: "Gestion RH",

    featured: true,

    accent: "from-violet-500 to-purple-500",

    link: "https://github.com/zomanorj/HRFlow.git",

    icon: "👥",
  },

  {
    title: "Gestion de Stock",

    description:
      "Application web d'inventaire avec dashboard analytique, alertes automatiques, export Excel/PDF et gestion avancée des rôles utilisateurs.",

    tags: [
      "Laravel",
      "PHP",
      "MySQL",
      "Chart.js",
      "Bootstrap 5",
    ],

    year: "2025",

    category: "Gestion",

    featured: true,

    accent: "from-emerald-500 to-green-500",

    link: "https://github.com/zomanorj/Gestion_stock.git",

    icon: "📦",
  },
];

export const experience = [
  {
    title: "Licence 3 Informatique & Génie Logiciel",

    org: "Arovy University",

    period: "2023 — 2026",

    type: "Formation",

    description:
      "Formation en algorithmique, bases de données, génie logiciel, réseaux, développement web, développement mobile et intelligence artificielle.",
  },

  {
    title: "Développement de projets Full-Stack",

    org: "Projets personnels",

    period: "2024 — Présent",

    type: "Projet",

    description:
      "Conception et développement d'applications web complètes utilisant React, Django, Node.js, PostgreSQL et MySQL.",
  },

  {
    title: "TransiFlow",

    org: "Projet ERP",

    period: "2026",

    type: "Projet",

    description:
      "Développement d'un ERP de gestion de transport avec API REST sécurisée, authentification JWT, gestion des rôles et cartographie interactive.",
  },

  {
    title: "Baccalauréat Série C",

    org: "Saint Joseph de Cluny",

    period: "2023",

    type: "Formation",

    description:
      "Formation scientifique avec spécialisation en mathématiques et physique.",
  },
];

export const techMarquee = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Django",
  "Laravel",
  "Python",
  "Java",
  "C#",
  "PostgreSQL",
  "MySQL",
  "SQL",
  "Git",
  "GitHub",
  "Docker",
  "JWT",
  "REST API",
  "Bootstrap 5",
  "Tailwind CSS",
  "Leaflet.js",
  "Vercel",
  "Render",
  "Railway",
];