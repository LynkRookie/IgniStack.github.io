"use client"

// ============================================================================
// PORTFOLIO DATA STORE
// ============================================================================
// Fuente central de datos del portafolio.
// Los datos se guardan en localStorage para persistir entre sesiones.
// El panel de administración los edita y los componentes públicos los leen.
// ============================================================================

const STORAGE_KEY = "portfolio_data"

// ---- Default data ----

const defaultData = {
  services: [
    {
      id: 1,
      icon: "Code2",
      title: "Desarrollo Web",
      description:
        "Desarrollo de sitios web modernos, responsivos y optimizados para todos los dispositivos.",
    },
    {
      id: 2,
      icon: "Database",
      title: "Desarrollo Backend",
      description:
        "Creación de APIs y servicios del servidor robustos, seguros y escalables.",
    },
    {
      id: 3,
      icon: "Smartphone",
      title: "Aplicaciones Móviles",
      description:
        "Desarrollo de aplicaciones móviles nativas y multiplataforma para iOS y Android.",
    },
    {
      id: 4,
      icon: "Monitor",
      title: "Reparación y Optimización",
      description:
        "Mantengo y optimizo equipos con limpieza, formateo, mejora de rendimiento e instalación de apps.",
    },
    {
      id: 5,
      icon: "Wrench",
      title: "Reparación de Dispositivos",
      description:
        "Reparo fallos menores en celulares, como configuración, volumen y correos, además de formateo y desbloqueo.",
    },
  ],

  experiences: [
    {
      id: 1,
      period: "2021 - Actualidad",
      title: "Soporte IT",
      achievement:
        "Soporte técnico a usuarios, mantenimiento de equipos y redes. Resolución de incidencias y configuración de sistemas.",
    },
    {
      id: 2,
      period: "Julio 2022 - Noviembre 2022",
      title: "Desarrollador - Cesfam Fray Jorge (Colaboración)",
      achievement:
        "En colaboración con un equipo multidisciplinario, participé en el desarrollo de una aplicación web destinada a los adultos mayores.",
    },
    {
      id: 3,
      period: "Enero 2023 - Junio 2023",
      title: "Gestor de Informe de Mantenimiento, Municipalidad Ovalle",
      achievement:
        "Desarrollo de aplicaciones web, mantenimiento y optimización de sistemas existentes.",
    },
    {
      id: 4,
      period: "Enero 2023 - Junio 2023",
      title: "Practicante en Desarrollo Web",
      achievement:
        "Desarrollo de componentes frontend y colaboración en proyectos de diseño web. Aprendizaje de tecnologías modernas.",
    },
    {
      id: 5,
      period: "2023 - Presente",
      title: "Desarrollador Web en portafolio TechnoCraftOvalle",
      achievement:
        "Desarrollo de aplicaciones web y mantenimiento de sistemas existentes. Implementación de nuevas funcionalidades y mejoras de rendimiento.",
    },
  ],

  technologies: [
    { id: 1, name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { id: 2, name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { id: 3, name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { id: 4, name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { id: 5, name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { id: 6, name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { id: 7, name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { id: 8, name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { id: 9, name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { id: 10, name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { id: 11, name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { id: 12, name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { id: 13, name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  ],

  certifications: [
    {
      id: 1,
      title: "Curso de Ciberseguridad en CertifProf",
      institution: "CertifProf",
      year: "2023",
      description:
        "Certificación completa en ciberseguridad cubriendo análisis de vulnerabilidades, pentesting, y mejores prácticas de seguridad informática.",
      image: "/img/cert-ciberseguridad.png",
      skills: ["Pentesting", "Análisis de Vulnerabilidades", "Seguridad de Redes"],
    },
    {
      id: 2,
      title: "Curso Introducción a Networks Cisco",
      institution: "Cisco Networking Academy",
      year: "2023",
      description:
        "Fundamentos de redes, configuración de dispositivos Cisco, protocolos de red y resolución de problemas de conectividad.",
      image: "/img/cert-networks.png",
      skills: ["Redes", "Protocolos TCP/IP", "Configuración de Routers"],
    },
    {
      id: 3,
      title: "Curso de React Basico a Avanzado",
      institution: "Udemy",
      year: "2026",
      description:
        "Hooks, Routers, CRUD Firebase-firestore, Context API, Styled-components, Vite, Crear componentes",
      image: "/img/cert-networks.png",
      skills: ["Redes", "Protocolos TCP/IP", "Configuración de Routers"],
    }
  ],
//aca son los proyectos realizados 
// Sección solo para administradores: proyectos que aparecen únicamente en la página de Proyectos (no en la página principal).
  adminProjects: [
    {
      id: 1,
      title: "Gestor de Curriculum",
      category: "Web",
      description: "Sistema completo de gestión de currículum con interfaz moderna y funcional.",
      image: "/img/gestor.png",
      link: "https://technocraftovalle.vercel.app/vista/inicio_gestor_cv.html",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP"],
    },
    {
      id: 2,
      title: "TechnoCraft Ovalle",
      category: "Web",
      description: "Portafolio web en el cual consiste las primeras versiones de mi portafolio web.",
      image: "/img/portafolio-1.png",
      link: "https://technocraftovalle.netlify.app",
      tech: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      id: 3,
      title: "Portafolio de Hacking Ético",
      category: "Ciberseguridad",
      description: "Portafolio especializado en ciberseguridad y hacking ético.",
      image: "/img/portafolio_h.png",
      link: "https://lynkrookie.github.io/Hkdamian.github.io/",
      tech: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      id: 4,
      title: "5 Fases de Ataque",
      category: "Ciberseguridad",
      description: "Plataforma educativa sobre las fases de ataque en ciberseguridad.",
      image: "/img/5fases.png",
      link: "https://hketicodamianjinel.vercel.app",
      tech: ["React", "CSS3"],
    },
    {
      id: 5,
      title: "Creador de Sitios Web",
      category: "Web",
      description: "Herramienta interactiva para crear sitios web de forma visual.",
      image: "/img/sitios.png",
      link: "https://constructordesitiosweb.vercel.app",
      tech: ["JavaScript", "HTML5", "CSS3"],
    },
    {
      id: 6,
      title: "Gestor Municipal",
      category: "Web",
      description: "Sistema de gestión de informes y documentos municipales.",
      image: "/img/municipalidad.png",
      link: "https://municipalidad-informes.vercel.app",
      tech: ["React", "Node.js", "SQL"],
    },
    {
      id: 7,
      title: "Minería de Datos",
      category: "Aplicaciones",
      description: "Aplicación para análisis y visualización de datos.",
      image: "/img/mineria.png",
      link: "https://lynkrookie.github.io/Grmineria.github.io/index.html",
      tech: ["Python", "JavaScript"],
    },
    {
      id: 8,
      title: "Las Bertas",
      category: "Aplicaciones",
      description: "Sistema de gestión para restaurante con menú digital.",
      image: "/img/lasbertas.png",
      link: "https://lasbertas.vercel.app",
      tech: ["React", "CSS3"],
    },
    {
      id: 9,
      title: "BPM y BPMN 2.0",
      category: "Web",
      description: "Plataforma educativa sobre gestión de procesos de negocio.",
      image: "/img/bpm-bpmn.png",
      link: "https://bpm-y-bpmn.vercel.app",
      tech: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      id: 10,
      title: "Centro Cultural Ovalle",
      category: "Aplicaciones",
      description: "Sistema de agendamiento para eventos culturales.",
      image: "/img/centro-cultural.png",
      link: "https://saccmo.cloud/",
      tech: ["React", "Javascript", "Vite", "Node.js", "Express"],
    },
    {
      id: 11,
      title: "SirOS",
      category: "Aplicaciones",
      description: "Sistema de recursos para el teatro municipal y centro cultural.",
      image: "/img/siros.png",
      link: "https://saccmo.cloud/",
      tech: ["React", "Javascript", "Vite", "Node.js", "Express"],
    },
    {
      id: 12,
      title: "IgniStack",
      category: "Web",
      description: "Portafolio web actual en el cual consiste en nuevas mejoras visuales ademas de cambio de lenguaje de progrmacion de html a next.js.",
      image: "/img/IgniStack.png",
      link: "https://saccmo.cloud/",
      tech: ["React", "Javascript", "Next.js", "Nodemailer"],
    }
  ],
}

// ---- Public API ----

function loadData() {
  if (typeof window === "undefined") return defaultData
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultData
    const parsed = JSON.parse(raw)
    // Merge with defaults to handle any new keys
    return {
      ...defaultData,
      ...parsed,
    }
  } catch {
    return defaultData
  }
}

function saveData(data) {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function getPortfolioData() {
  return loadData()
}

export function updatePortfolioSection(section, value) {
  const data = loadData()
  data[section] = value
  saveData(data)
}

export function resetPortfolioData() {
  if (typeof window === "undefined") return
  localStorage.removeItem(STORAGE_KEY)
}

export { defaultData }
