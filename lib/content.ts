export type Locale = "en" | "pt"

type Skill = { label: string; level: number }

export type Dictionary = {
  meta: { title: string; description: string }
  nav: { home: string; about: string; skills: string; experience: string; education: string; contact: string }
  hero: {
    availableForWork: string
    greeting: string
    name: string
    roles: string[]
    summary: string
    downloadCv: string
    chooseCvLanguage: string
    downloadCvEnglish: string
    downloadCvPortuguese: string
    cancel: string
    getInTouch: string
    stats: { value: string; label: string }[]
  }
  about: {
    title: string
    lead: string
    paragraphs: string[]
    info: { label: string; value: string }[]
  }
  skills: {
    title: string
    subtitle: string
    groups: { name: string; items: Skill[] }[]
    stackTitle: string
    stack: string[]
  }
  experience: {
    title: string
    subtitle: string
    items: { role: string; company: string; period: string; description: string; tags: string[] }[]
  }
  education: {
    title: string
    subtitle: string
    degrees: { title: string; school: string; period: string }[]
    certsTitle: string
    certs: string[]
    awardsTitle: string
    awards: string[]
    languagesTitle: string
    languages: { name: string; level: string }[]
  }
  contact: {
    title: string
    subtitle: string
    emailLabel: string
    phoneLabel: string
    locationLabel: string
    location: string
    linkedinLabel: string
    portfolioLabel: string
  }
  footer: { rights: string; builtWith: string }
}

const enSkillGroups = [
  {
    name: "Backend",
    items: [
      { label: "Java / Spring", level: 90 },
      { label: "C# / .NET / ASP.NET Core", level: 92 },
      { label: "Node.js / NestJS / Express", level: 88 },
    ],
  },
  {
    name: "Frontend & Mobile",
    items: [
      { label: "React / Next.js", level: 90 },
      { label: "React Native", level: 82 },
      { label: "TypeScript / JavaScript", level: 90 },
    ],
  },
  {
    name: "Data & DevOps",
    items: [
      { label: "SQL / MySQL / Oracle", level: 88 },
      { label: "MongoDB / NoSQL", level: 84 },
      { label: "Git / Azure DevOps / CI/CD", level: 86 },
    ],
  },
]

const ptSkillGroups = [
  {
    name: "Backend",
    items: [
      { label: "Java / Spring", level: 90 },
      { label: "C# / .NET / ASP.NET Core", level: 92 },
      { label: "Node.js / NestJS / Express", level: 88 },
    ],
  },
  {
    name: "Frontend & Mobile",
    items: [
      { label: "React / Next.js", level: 90 },
      { label: "React Native", level: 82 },
      { label: "TypeScript / JavaScript", level: 90 },
    ],
  },
  {
    name: "Dados & DevOps",
    items: [
      { label: "SQL / MySQL / Oracle", level: 88 },
      { label: "MongoDB / NoSQL", level: 84 },
      { label: "Git / Azure DevOps / CI/CD", level: 86 },
    ],
  },
]

const stack = [
  "Java",
  "C#",
  "TypeScript",
  "Python",
  "Spring",
  ".NET",
  "ASP.NET Core",
  "Node.js",
  "NestJS",
  "Express",
  "React",
  "Next.js",
  "React Native",
  "MySQL",
  "Oracle",
  "MongoDB",
  "Cypress",
  "Azure DevOps",
  "CI/CD",
  "Microservices",
  "REST APIs",
  "SOLID",
]

export const content: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "Lucas Pires — Senior Full Stack Software Engineer",
      description:
        "Senior Full Stack Software Engineer with 6+ years building scalable web and mobile applications with Java, .NET, Node.js, React and AI.",
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      availableForWork: "Available for new opportunities",
      greeting: "Hi, I'm",
      name: "Lucas Pires",
      roles: ["Senior Full Stack Engineer", "Backend Developer", "Applied AI Enthusiast"],
      summary:
        "Senior Full Stack Software Engineer with over 6 years designing, developing and maintaining scalable web and mobile applications. I care about clean code, SOLID principles, system scalability and bringing AI into real-world products.",
      downloadCv: "Download CV",
      chooseCvLanguage: "Choose a language to download",
      downloadCvEnglish: "English CV",
      downloadCvPortuguese: "Portuguese CV",
      cancel: "Cancel",
      getInTouch: "Get in touch",
      stats: [
        { value: "6+", label: "Years of experience" },
        { value: "20+", label: "Technologies mastered" },
        { value: "10", label: "Companies impacted" },
      ],
    },
    about: {
      title: "About me",
      lead: "Engineering scalable products from backend to mobile.",
      paragraphs: [
        "I build production-grade systems across the stack — from distributed backend services and REST APIs to responsive web and mobile apps. My background spans Java, .NET, Node.js, React and React Native, backed by microservices and cloud-native architectures.",
        "I'm passionate about clean code, SOLID principles and software engineering best practices. Lately I've been focused on integrating machine learning models and AI-driven features into real production environments.",
      ],
      info: [
        { label: "Location", value: "Gravataí, RS — Brazil" },
        { label: "Email", value: "lfpires1993@gmail.com" },
        { label: "Phone", value: "+55 51 99480-3936" },
        { label: "Availability", value: "Open to work" },
      ],
    },
    skills: {
      title: "Skills & Expertise",
      subtitle: "The tools and technologies I use to ship reliable software.",
      groups: enSkillGroups,
      stackTitle: "Tech stack",
      stack,
    },
    experience: {
      title: "Experience",
      subtitle: "Where I've been building.",
      items: [
        {
          role: "Senior System Software Engineer",
          company: "Datum",
          period: "Jun 2025 — Present",
          description:
            "Building scalable full-stack applications with Java, .NET, Node.js, React and React Native. Designing and maintaining RESTful APIs and distributed services, integrating AI-driven features, optimizing SQL/NoSQL data models and implementing automated testing with Cypress.",
          tags: ["Java", ".NET", "Node.js", "React", "AI"],
        },
        {
          role: "Software Engineer",
          company: "Instituto de Pesquisas Eldorado",
          period: "May 2021 — Jun 2025",
          description:
            "Developed microservices with Node.js and .NET (C#), built responsive web apps with React and mobile apps with Flutter, designed MongoDB and Oracle solutions, and maintained CI/CD pipelines in Scrum/Kanban environments using Azure DevOps and Jira.",
          tags: ["Node.js", ".NET", "React", "MongoDB", "CI/CD"],
        },
        {
          role: "Computer Science Instructor",
          company: "QI Faculdade & Escola Técnica",
          period: "Mar 2024 — Dec 2024",
          description:
            "Delivered theoretical and hands-on classes for Computer Science students, developed educational materials, and mentored students on software development projects.",
          tags: ["Teaching", "Mentoring"],
        },
      ],
    },
    education: {
      title: "Education & Credentials",
      subtitle: "Continuous learning is part of the job.",
      degrees: [
        {
          title: "Postgraduate — Digital forensics",
          school: "Líbano",
          period: "2026",
        },
        {
          title: "Postgraduate — Cross-Platform Mobile Applications",
          school: "Descomplica",
          period: "2023",
        },
        {
          title: "Associate Degree — Systems Analysis and Development",
          school: "University of Marília (UNIMAR)",
          period: "2020 — 2023",
        },
      ],
      certsTitle: "Certifications",
      certs: [
        "TDC Future 2021 — API Development",
        "SQL Foundation",
        ".NET Core 3.1 / .NET 5 API Development",
        "SOLID Principles with C#",
      ],
      awardsTitle: "Awards",
      awards: ["PEEC — Eldorado Excellence Contribution Award"],
      languagesTitle: "Languages",
      languages: [
        { name: "English", level: "Professional working proficiency" },
        { name: "Portuguese", level: "Native" },
      ],
    },
    contact: {
      title: "Let's work together",
      subtitle: "Have a project or role in mind? I'd love to hear about it.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      location: "Gravataí, RS — Brazil",
      linkedinLabel: "LinkedIn",
      portfolioLabel: "Portfolio",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js & Tailwind CSS",
    },
  },
  pt: {
    meta: {
      title: "Lucas Pires — Engenheiro de Software Full Stack Sênior",
      description:
        "Engenheiro de Software Full Stack Sênior com mais de 6 anos criando aplicações web e mobile escaláveis com Java, .NET, Node.js, React e IA.",
    },
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Habilidades",
      experience: "Experiência",
      education: "Formação",
      contact: "Contato",
    },
    hero: {
      availableForWork: "Disponível para novas oportunidades",
      greeting: "Olá, eu sou",
      name: "Lucas Pires",
      roles: ["Engenheiro Full Stack Sênior", "Engenheiro Backend Sênior"],
      summary:
        "Engenheiro de Software Full Stack Sênior com mais de 6 anos desenvolvendo e mantendo aplicações web e mobile escaláveis. Apaixonado por código limpo, princípios SOLID, escalabilidade de sistemas e integração de soluções de IA em produtos reais.",
      downloadCv: "Baixar Currículo",
      chooseCvLanguage: "Escolha o idioma para baixar",
      downloadCvEnglish: "Currículo em Inglês",
      downloadCvPortuguese: "Currículo em Português",
      cancel: "Cancelar",
      getInTouch: "Fale comigo",
      stats: [
        { value: "6+", label: "Anos de experiência" },
        { value: "20+", label: "Tecnologias dominadas" },
        { value: "10", label: "Empresas impactadas" },
      ],
    },
    about: {
      title: "Sobre mim",
      lead: "Construindo produtos escaláveis do backend ao mobile.",
      paragraphs: [
        "Desenvolvo sistemas prontos para produção em toda a stack — de serviços backend distribuídos e APIs REST a aplicações web responsivas e mobile. Minha bagagem inclui Java, .NET, Node.js, React e React Native, apoiada por microsserviços e arquiteturas cloud-native.",
        "Sou apaixonado por código limpo, princípios SOLID e boas práticas de engenharia de software. Recentemente venho focando na integração de modelos de machine learning e recursos de IA em ambientes reais de produção.",
      ],
      info: [
        { label: "Localização", value: "Gravataí, RS — Brasil" },
        { label: "E-mail", value: "lfpires1993@gmail.com" },
        { label: "Telefone", value: "+55 51 99480-3936" },
        { label: "Disponibilidade", value: "Aberto a propostas" },
      ],
    },
    skills: {
      title: "Habilidades & Competências",
      subtitle: "As ferramentas e tecnologias que uso para entregar software confiável.",
      groups: ptSkillGroups,
      stackTitle: "Stack de tecnologias",
      stack,
    },
    experience: {
      title: "Experiência",
      subtitle: "Onde venho construindo.",
      items: [
        {
          role: "Engenheiro de Software Sênior",
          company: "Datum",
          period: "Jun 2025 — Atual",
          description:
            "Desenvolvimento de aplicações full-stack escaláveis com Java, .NET, Node.js, React e React Native. Criação e manutenção de APIs REST e serviços distribuídos, integração de recursos com IA, otimização de modelos de dados SQL/NoSQL e testes automatizados com Cypress.",
          tags: ["Java", ".NET", "Node.js", "React", "IA"],
        },
        {
          role: "Engenheiro de Software",
          company: "Instituto de Pesquisas Eldorado",
          period: "Mai 2021 — Jun 2025",
          description:
            "Desenvolvimento de microsserviços com Node.js e .NET (C#), aplicações web responsivas com React e mobile com Flutter, soluções em MongoDB e Oracle, além de pipelines de CI/CD em ambientes Scrum/Kanban com Azure DevOps e Jira.",
          tags: ["Node.js", ".NET", "React", "MongoDB", "CI/CD"],
        },
        {
          role: "Professor de Informática",
          company: "QI Faculdade & Escola Técnica",
          period: "Mar 2024 — Dez 2024",
          description:
            "Ministrei aulas teóricas e práticas para estudantes de Computação, desenvolvi materiais didáticos e orientei alunos em projetos de desenvolvimento de software.",
          tags: ["Ensino", "Mentoria"],
        },
      ],
    },
    education: {
      title: "Formação & Credenciais",
      subtitle: "Aprender continuamente faz parte do trabalho.",
      degrees: [
        {
          title: "Pós-graduação — Perícia Digital",
          school: "Líbano",
          period: "2026",
        },
        {
          title: "Pós-graduação — Desenvolvimento de Aplicações Mobile Multiplataforma",
          school: "Descomplica",
          period: "2023",
        },
        {
          title: "Tecnólogo — Análise e Desenvolvimento de Sistemas",
          school: "Universidade de Marília (UNIMAR)",
          period: "2020 — 2023",
        },
      ],
      certsTitle: "Certificações",
      certs: [
        "TDC Future 2021 — Desenvolvimento de APIs",
        "SQL Foundation",
        "APIs com .NET Core 3.1 / .NET 5",
        "Princípios SOLID com C#",
      ],
      awardsTitle: "Prêmios",
      awards: ["PEEC — Prêmio Eldorado de Excelência e Contribuição"],
      languagesTitle: "Idiomas",
      languages: [
        { name: "Inglês", level: "Proficiência profissional" },
        { name: "Português", level: "Nativo" },
      ],
    },
    contact: {
      title: "Vamos trabalhar juntos",
      subtitle: "Tem um projeto ou vaga em mente? Vou adorar saber mais.",
      emailLabel: "E-mail",
      phoneLabel: "Telefone",
      locationLabel: "Localização",
      location: "Gravataí, RS — Brasil",
      linkedinLabel: "LinkedIn",
      portfolioLabel: "Portfólio",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      builtWith: "Feito com Next.js & Tailwind CSS",
    },
  },
}

export const links = {
  email: "lfpires1993@gmail.com",
  phone: "+55 51 99480-3936",
  phoneHref: "+5551994803936",
  linkedin: "https://www.linkedin.com/in/lucaspires-ti/",
  portfolio: "https://lfpires1993.github.io",
}
