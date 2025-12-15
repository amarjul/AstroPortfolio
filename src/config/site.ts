// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "AJ",
  title: "Portfolio - AJ",
  description: "Ein modernes Portfolio mit Astro",
  
  // Navigation
  navigation: {
    home: "Home",
    projects: "Projekte & Zertifikate",
    career: "Karriere",
    contact: "Kontakt",
},
  
  // Hero Section
  hero: {
    prefix: "Ich bin",
    name: "Amar Julardzija",
    intro: "und bin Webentwickler. Auf diesem Portfolio teile ich mein Wissen über Webentwicklung und zeige meine Projekte. Lass dich inspirieren und lerne mit mir neue Technologien kennen!",
    avatar: "/images/avatar.jpg",
    buttons: {
      viewProjects: "Meine Projekte",
      contactMe: "Kontaktiere mich",
    },
    socialLinks: [
      { name: "Mail", icon: "/svg/outlook.svg", url: "mailto:amar.julardzija@htl-saalfelden.at" },
      { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/amarjul" },
    ],
  },
  
  // About Section
  about: {
    title: "Über mich",
    text: "Mein Name ist Amar, ich bin 18 Jahre alt und besuche die HTL Saalfelden mit Schwerpunkt IT. Meine Leidenschaft gilt der Softwareentwicklung, besonders im Bereich Webentwicklung. Ich arbeite gerne mit modernen Technologien wie React und Node.js. Neben dem Programmieren interessiere ich mich Fußball und Kampfsport – Hobbys, die mir Teamgeist, Disziplin und Durchhaltevermögen beibringen.",  },
  
  // Contact Page
  contact: {
    title: "Melde dich",
    subtitle: "Hast du ein spannendes Projekt, eine kreative Idee oder möchtest du zusammenarbeiten? Ich freue mich auf deine Nachricht!",
    info: {
      email: {
        label: "Email",
        value: "amar.julardzija@htl-saalfelden.at",
        link: "mailto:amar.julardzija@htl-saalfelden.at",
      },
      phone: {
        label: "Telefonnummer",
        value: "+43 670 6012365",
        link: "tel:+43 670 6012365",
      },
      location: {
        label: "Standort",
        value: "Salzburg, Österreich",
      },
    },
    followMe: {
      title: "Follow Me",
      links: [
        { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/amarjul" },
      ],
    },
    footerText: [
      "I typically respond to messages within 24 hours during business days.",
      "Looking forward to hearing from you! 🚀",
    ],
  },
  
  // Footer
  footer: {
    copyright: "© 2025 Amar Julardzija. All rights reserved.",
    links: [
    ],
    github: {
      text: "Sehe dir das Projekt auf Github an",
      url: "https://github.com/amarjul/AstroPortfolio",
    },
  },
  
 projectsPage: {
    title: "Projekte & Zertifikate",
    subtitle: "Eine Übersicht meiner Projekte und erworbenen Zertifikate",
    tabs: {
      projects: "Projekte",
      certificates: "Zertifikate"
    },
    projects: [
      {
        title: "ChocoLocoParadise",
        description: "Eine Online-Casino Website mit Javascript und CSS.",
        technologies: ["Javascript", "CSS"],
        githubLink: "https://github.com/domifar/ChocoLocoParadise",
        featured: true
      },
      {
        title: "MBOT",
        description: "Entwicklung eines Systems zur Fernsteuerung des mBot2-Roboters über eine Website mit Echtzeit-Updates der Sensoren.",
        technologies: ["React", "CSS"],
        githubLink: "https://github.com/epicjoni2007/Mbot",
        featured: true
      },
      {
        title: "Portfolio Website",
        description: "Eine moderne, responsive Portfolio-Website mit Astro und TypeScript. Features: Blog-System, SEO-Optimierung und smooth Animations.",
        technologies: ["Astro", "TypeScript", "CSS"],
        githubLink: "https://github.com/amarjul/AstroPortfolio",
        featured: false
      },
      {
        title: "Prototype Design Pattern",
        description: "Ein ausprogrammiertes Design Pattern in C#",
        technologies: ["C#"],
        githubLink: "https://github.com/amarjul/Prototype_DesignPattern",
        featured: false
      }
    ],
    certificates: [
      {
        title: "Introduction to Cybersecurity",
        date: "Januar 2025",
        description: "Zertifizierung für einen erfolgreich abgeschlossenen Kurs über Cybersecurity",
        credentialUrl: "https://www.credly.com/badges/a5e050b8-6450-47b9-8bb2-fbd153b718dc",
      },
      {
        title: "Introduction to IoT",
        date: "Mai 2025",
        description: "Zertifizierung für einen erfolgreich abgeschlossenen Kurs über IoT",
        credentialUrl: "https://www.credly.com/badges/4cef3953-454b-47c0-8e37-8eccce29b272",
      },
    ]
  },
  
  // Career Page
  career: {
    title: "Mein Werdegang",
    subtitle: "Von der Ausbildung bis heute - hier ist meine Reise",
    timeline: [
      // Schule
      {
        year: "2021 - Heute",
        role: "HTL Saalfelden",
        location: "St. Johann im Pongau, Österreich",
        description: "Ausbildung im Bereich Informatik mit Schwerpunkt auf Softwareentwicklung, Webtechnologien, Datenbanken und Netzwerktechnik. Umsetzung praxisnaher Projekte in Einzel- und Teamarbeit.",
        type: "education"
      },
      {
        year: "2017 - 2021",
        role: "MMS Radstadt",
        location: "Radstadt, Österreich",
        description: "Allgemeinbildende Schulbildung mit Fokus auf Mathematik, Naturwissenschaften und grundlegenden IT-Kenntnissen.",
        type: "education"
      },
      {
        year: "2013 - 2017",
        role: "Volksschule Radstadt",
        location: "Radstadt, Österreich",
        description: "Grundschulbildung mit Schwerpunkt auf grundlegenden schulischen Fähigkeiten wie Lesen, Schreiben und Rechnen.",
        type: "education"
      },
      // Arbeit
      {
        year: "2023 - Heute",
        role: "Spar Landmarkt KG",
        location: "Altenmarkt, Österreich",
        description: "Verkäufer, Regalbetreuung, Büroarbeiten",
        type: "work"
      },
      {
        year: "2025",
        role: "CADstar Technology GmbH",
        location: "Bischofshofen, Österreich",
        description: "Mitarbeit bei der Entwicklung des Intraoral Scanner",
        type: "work"
      },
      {
        year: "2022",
        role: "Atomic Austria GmbH",
        location: "Altenmarkt, Österreich",
        description: "Produktion Abteilung Finish",
        type: "work"
      },
  
    ],
    skills: {
      title: "Fähigkeiten & Technologien",
      categories: [
        {
          name: "Frontend",
          items: ["React", "JavaScript", "Bootstrap", "TypeScript", "HTML/CSS", "Astro", "Angular"]
        },
        {
          name: "Backend",
          items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"]
        },
        {
          name: "Tools & Andere",
          items: ["Git", "Docker", "Figma", "VS Code & Community", "Postman"]
        }
      ]
    }
  },
};

