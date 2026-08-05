export const BRAND_INFO = {
  name: "ValeTech",
  fullName: "ValeTech — Tecnologia & Inovação",
  tagline: "Tecnologia & Inovação",
  description: "Desenvolvimento de sistemas sob medida, aplicações web de alta performance, aplicativos mobile e automações inteligentes para empresas que buscam liderar o mercado.",
  contactEmail: "luizdovaletech@gmail.com",
  phone: "+55 (12) 97403-3027",
  location: "São Paulo, Brasil",
  year: new Date().getFullYear(),
};

export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/5512974033027?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto%20com%20a%20ValeTech%20%E2%80%94%20Tecnologia%20%26%20Inova%C3%A7%C3%A3o.",
  formAction: "https://formsubmit.co/luizdovaletech@gmail.com",
  web3formsKey: "aa00e3e1-13a8-4535-a695-894473969c24",
  github: "https://github.com/luizdovale",
  linkedin: "https://linkedin.com/in/luizdovale",
  instagram: "https://instagram.com/luizdovaletech",
};

export type ProjectCategory = "sistemas" | "web" | "apps" | "solucoes";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  link: string;
  tags: string[];
  category: ProjectCategory;
  image: string;
  featured?: boolean;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "jornada360",
    title: "Jornada360",
    subtitle: "Sistema de Gestão de Jornada & PWA",
    desc: "Plataforma avançada para controle de ponto digital, jornada de trabalho e gestão de horas extras em tempo real, com operação offline-first.",
    link: "https://jornada360.vercel.app/",
    tags: ["Sistema Web", "PWA", "Offline-First", "TypeScript"],
    category: "sistemas",
    featured: true,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMc_HmvB2iJ6y8lTk4SgwP9718_4gJD6g8c7HFlTu4j31sgxEii-L6nwpnLzF0pVa2nmL05Ymmkr3_4gq9bYIa1X14xj-DVeI2WvCUyAEowJ-VTFIqOaMYWL76GfMYDKMWpBJB9H3KhNz2unS0p7ic=w969-h595-s-no-gm?authuser=4"
  },
  {
    id: "geartech",
    title: "GearTech",
    subtitle: "ERP & Gestão para Auto Peças",
    desc: "Software de gestão empresarial com controle inteligente de estoque, faturamento, emissão de ordens de serviço e relatórios analíticos.",
    link: "https://geartechsytem.vercel.app/",
    tags: ["ERP", "Gestão Empresarial", "Analytics", "Database"],
    category: "sistemas",
    featured: true,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNLD5LBZvcG6P0aQN6rc0hkdOIv5y7rFpGVaguufloS0PeGe7UWh-IPLHngDCy7flbvehRnCcAQtLhcqb5Vf8ClSE5FykTb13PkATntwYsfBhImdHdU0_LS78HgCyJtf4phLKTWCMQgW__d-AHAUPzK=w1137-h599-s-no-gm?authuser=1"
  },
  {
    id: "smartnutri",
    title: "SmartNutri",
    subtitle: "Software Clínico & Prescrição Nutricional",
    desc: "Ecossistema digital para profissionais de saúde com acompanhamento de pacientes, cálculos antropométricos e planos alimentares dinâmicos.",
    link: "https://tatianedovale.com.br",
    tags: ["HealthTech", "SaaS", "Dashboard", "Alta Conversão"],
    category: "web",
    featured: true,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNomseUTg1qkHD1wIYQ4nVBwpZIqb49ZkY7MT9y4QpOiUC1_hm1aQqT1Jw1UqSXawVMgr6FGAxkZmc7aClT__AQm5vxt7b-vxeIsmTZwk3x07LmkjS7obqcaHj_VABIO7n1zSMQaznpClNGVklyVHE5=w1141-h599-s-no-gm?authuser=3"
  },
  {
    id: "churchflow",
    title: "ChurchFlow",
    subtitle: "Plataforma SaaS de Gestão Eclesiástica",
    desc: "Solução completa para administração de comunidades: cadastro de membros, tesouraria, fluxo financeiro, células e relatórios executivos.",
    link: "https://churchflowbr.vercel.app/",
    tags: ["SaaS Multi-tenant", "Cloud Architecture", "Financeiro"],
    category: "sistemas",
    featured: true,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMrFbsJmHOP8YSbUWgZ6BtWVuxNHBMXgs3HmxNmG0TkGKTCepUnNw-FZic2cNodfpRxf4V-hpexh0G8kc7JkosODkLPyttoIvzNt4OFIAGmQvxPtiA6K6mBOLUCgaLh4jxM2Dlz-Tls_ghdc2MvT5dv=w1352-h597-s-no-gm?authuser=2"
  },
  {
    id: "acai-beach",
    title: "Açaí Beach System",
    subtitle: "PDV & Gestão Operacional para Franquias",
    desc: "Sistema ágil de ponto de venda, gestão de pedidos por mesas/delivery e controle de fluxo de caixa em tempo real para o setor de alimentação.",
    link: "https://studiobynean.vercel.app/",
    tags: ["PDV", "FoodTech", "Interface Touch", "Real-Time"],
    category: "sistemas",
    image: "https://lh3.googleusercontent.com/pw/AP1GczPeLEMz5VvxtkMzmCGyrQG6iDNUS2yUQKHQqo3EWKxS0slV8ZM5SFHBCK1Vwvt11vWjcy2QIt9V4BDdC6Nz8KL6DHd2TKdfck-aHJ2BxbOpO94CbMx2hxX-MlWWy21pHJbDHAXRb9iqxyZCeVXlaf7=w1351-h598-s-no-gm?authuser=1"
  },
  {
    id: "gas-calculator",
    title: "Gas Calculator",
    subtitle: "Aplicação Industrial de Engenharia",
    desc: "Ferramenta técnica de alta precisão para dimensionamento, cálculo de vazão e logística de gases industriais e medicinais.",
    link: "https://luizdovale.github.io/gascalculatorweb/",
    tags: ["Engenharia", "Algoritmos", "Mobile Application"],
    category: "apps",
    image: "https://lh3.googleusercontent.com/pw/AP1GczMqSExG1zehlIT6hW4_IgNCa7Dbt-Hrt2Uyh8NOmDK8_pV1rIEJWhc5uuI6pn9bXq5xOO4Yw8VvCsWFU2MG4joHs3iYnsEHbSNI8L9bIRXw5GZm7l9UIeleVL4amaqsHB-5vS3HAFgSUpUuV77k9uc=w975-h607-s-no-gm?authuser=4"
  },
  {
    id: "grigoleti",
    title: "Grigoleti Arquitetura",
    subtitle: "Portal Digital de Alto Padrão",
    desc: "Plataforma institucional de apresentação arquitetônica de luxo, com renderização de portfólio visual, blog integrado e SEO avançado.",
    link: "https://grigoleti.com.br/",
    tags: ["Experiência Imersiva", "SEO Avançado", "Design Minimalista"],
    category: "web",
    image: "https://lh3.googleusercontent.com/pw/AP1GczNW0I5-DESmGJ8Dy9JqwljwFNijUJpX6dAqLBO7Vx_Bi2ZIHG8hDEQYNbDq8ZtlxstxSKv0r7x5B8l5tUYqSFjO7w1IBZ1kIs17JK5MawMEOYHad3Ca-I4TDEh43hIPcrwfm6-676hRAAHZvpYUg50Y=w1363-h597-s-no-gm?authuser=2"
  },
  {
    id: "jps-autopecas",
    title: "JPS Auto Peças",
    subtitle: "Hub Corporativo & Catálogo Digital",
    desc: "Estrutura web moderna para distribuição de autopeças com geolocalização integrada, catálogo dinâmico e integração direta com força de vendas.",
    link: "https://jpsautopecas.vercel.app/",
    tags: ["Catálogo Digital", "Geolocalização", "Performance"],
    category: "web",
    image: "https://lh3.googleusercontent.com/pw/AP1GczP8QmiB-yCVzRAJ4wH-VUv5Am3gauz6UJimM0bDJSQt0njSAatWZjn2im5VS9O2RHqM-t4tdxEkqTZBTkn5iEQcnrIcgbH9HOLfqRoz4SqRBmb_tPuyBTnFDlta8bTJoJ7s83fN3v__8kTm85WLS6w=w977-h607-s-no-gm?authuser=4"
  }
];

export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  icon?: string;
  items: string[];
  techStack: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    id: "sistemas",
    title: "Desenvolvimento de Sistemas",
    subtitle: "Arquitetura sob medida para operações complexas",
    desc: "Projetamos e construímos softwares de gestão completos, ERPs, CRMs e painéis analíticos desenvolvidos especificamente para as regras do seu negócio.",
    icon: "server",
    items: [
      "ERPs e CRMs customizados",
      "Dashboards gerenciais em tempo real",
      "Autenticação de múltiplos níveis e RBAC",
      "Banco de dados relacional e escalabilidade em nuvem"
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Supabase", "TypeScript"]
  },
  {
    number: "02",
    id: "web",
    title: "Aplicações Web",
    subtitle: "Portais e plataformas de alta performance",
    desc: "Desenvolvemos sites corporativos, portais institucionais e landing pages com arquitetura moderna, pontuação máxima no Core Web Vitals e foco em conversão.",
    icon: "globe",
    items: [
      "Websites corporativos e institucionais",
      "Landing pages de alta conversão",
      "SEO técnico avançado e estruturação semântica",
      "PWA (Progressive Web Apps) de alto desempenho"
    ],
    techStack: ["Next.js", "Vite", "Tailwind CSS", "Edge Functions", "SEO"]
  },
  {
    number: "03",
    id: "mobile",
    title: "Aplicativos Mobile",
    subtitle: "Experiências fluidas em iOS e Android",
    desc: "Criação de aplicativos móveis nativos e híbridos com design ergonômico, sincronização em tempo real e experiência consistente entre plataformas.",
    icon: "mobile",
    items: [
      "Aplicativos iOS e Android",
      "Arquitetura Offline-First",
      "Notificações push inteligentes",
      "Publicação e homologação nas lojas App Store e Google Play"
    ],
    techStack: ["React Native", "Flutter", "PWA", "Push APIs"]
  },
  {
    number: "04",
    id: "automacao",
    title: "Automação de Processos",
    subtitle: "Inteligência Artificial e eficiência operacional",
    desc: "Automatizamos fluxos operacionais repetitivos integrando APIs, agentes autônomos com modelos de linguagem (IA) e pipelines de dados inteligentes.",
    icon: "brain",
    items: [
      "Integrações entre múltiplos sistemas via API",
      "Agentes de IA e assistentes contextuais",
      "Automação de atendimento e triagem",
      "Pipelines de processamento de dados em segundo plano"
    ],
    techStack: ["OpenAI / Anthropic APIs", "Webhooks", "Edge Workers", "Serverless"]
  },
  {
    number: "05",
    id: "personalizadas",
    title: "Soluções Personalizadas",
    subtitle: "Engenharia de software focada no seu diferencial",
    desc: "Quando soluções prontas de mercado limitam sua empresa, desenvolvemos produtos digitais proprietários desenhados para gerar vantagem competitiva.",
    icon: "target",
    items: [
      "Produtos SaaS do zero à escala",
      "Calculadoras e ferramentas de engenharia técnica",
      "Migração de sistemas legados",
      "Consultoria de arquitetura e infraestrutura"
    ],
    techStack: ["Cloud Architecture", "Docker", "CI/CD", "Security Hardening"]
  }
];

export const VALETECH_PILLARS = [
  {
    number: "01",
    title: "Engenharia de Alto Padrão",
    desc: "Código limpo, arquitetura escalável e padrões de projeto que garantem durabilidade, segurança e facilidade de evolução contínua."
  },
  {
    number: "02",
    title: "Design Minimalista & Funcional",
    desc: "Interfaces limpas, focadas no usuário, livres de distrações e pensadas para acelerar a tomada de decisão e a taxa de conversão."
  },
  {
    number: "03",
    title: "Performance Extrema",
    desc: "Carregamento ultrarrápido, otimização minuciosa de assets e estruturas prontas para atender aos mais altos padrões de SEO e Core Web Vitals."
  },
  {
    number: "04",
    title: "Comunicação Técnica Direta",
    desc: "Sem intermediários ou burocracia. Alinhamento estratégico direto entre a liderança do seu projeto e especialistas em engenharia."
  }
];

export const WHY_LDV = VALETECH_PILLARS;
export const WHY_VALETECH = VALETECH_PILLARS.map(p => ({ title: p.title, desc: p.desc, icon: "⚡" }));

export const FAQ_ITEMS = [
  {
    q: "Como a ValeTech desenvolve seus sistemas e aplicações?",
    a: "Trabalhamos com metodologia de engenharia moderna: iniciamos com um briefing estratégico profundo, desenhamos a arquitetura do software e os protótipos visuais, executamos o desenvolvimento em ciclos ágeis com código sob medida e entregamos com deploy contínuo, monitoramento e garantia técnica."
  },
  {
    q: "Qual a diferença entre uma solução sob medida e um template pronto?",
    a: "Soluções sob medida são programadas linha por linha para atender exclusivamente aos fluxos, regras e diferenciais da sua empresa. Não há custos ocultos com plugins desnecessários, o código é 100% proprietário, a segurança é superior e a escalabilidade não possui limites."
  },
  {
    q: "Quanto tempo leva o ciclo de desenvolvimento de um projeto?",
    a: "Landing pages e websites institucionais de alto padrão são tipicamente entregues entre 1 e 3 semanas. Sistemas de gestão, plataformas SaaS e aplicativos completos demandam de 4 a 10 semanas conforme a densidade dos requisitos. O cronograma exato é estabelecido no alinhamento inicial."
  },
  {
    q: "A ValeTech desenvolve soluções com Inteligência Artificial?",
    a: "Sim. Criamos integrações inteligentes com IA generativa, assistentes contextuais treinados na base da sua empresa, automação de atendimento e processamento analítico de documentos."
  },
  {
    q: "Como funciona o suporte e a evolução após a entrega?",
    a: "Oferecemos acompanhamento pós-lançamento, garantia de funcionamento e planos de manutenção técnica contínua para manter seu sistema seguro, veloz e atualizado com as novas demandas do mercado."
  },
  {
    q: "Como posso iniciar um projeto com a ValeTech?",
    a: "Você pode clicar no botão 'Solicitar Orçamento' para preencher nosso briefing digital detalhado ou iniciar um contato direto pelo WhatsApp. Responderemos com uma análise técnica e proposta personalizada."
  }
];

export const TECH_STACK = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "PWA Architecture"],
  backend: ["Node.js", "PostgreSQL", "Supabase", "REST & GraphQL APIs", "Serverless Functions"],
  infra: ["Vercel Edge", "Docker", "CI/CD Pipelines", "Cloudflare", "GitHub Actions", "SEO Técnico"]
};

export const SKILLS = TECH_STACK;
