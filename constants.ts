export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/5512974033027?text=Ol%C3%A1%20ValeTech%20Solu%C3%A7%C3%B5es%2C%20vim%20do%20seu%20site.%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
  formAction: "https://formsubmit.co/luizdovaletech@gmail.com",
  web3formsKey: "aa00e3e1-13a8-4535-a695-894473969c24",
  github: "https://github.com/luizdovale",
  linkedin: "https://linkedin.com/in/luizdovale",
  instagram: "https://instagram.com/valetechsolucoes",
};

export type ProjectCategory = "sites" | "sistemas" | "apps" | "empresarial";

export const PROJECTS = [
  {
    title: "JPS Auto Peças",
    subtitle: "Site Institucional",
    desc: "Site empresarial profissional com carrossel, mapa integrado, CTA e formulário de contato otimizado para conversão.",
    link: "https://jpsautopecas.vercel.app/",
    tags: ["Site Institucional", "SEO", "Responsivo"],
    category: "sites" as ProjectCategory,
    image: "https://lh3.googleusercontent.com/pw/AP1GczP8QmiB-yCVzRAJ4wH-VUv5Am3gauz6UJimM0bDJSQt0njSAatWZjn2im5VS9O2RHqM-t4tdxEkqTZBTkn5iEQcnrIcgbH9HOLfqRoz4SqRBmb_tPuyBTnFDlta8bTJoJ7s83fN3v__8kTm85WLS6w=w977-h607-s-no-gm?authuser=4"
  },
  {
    title: "Grigoleti Arquitetos",
    subtitle: "Site Institucional",
    desc: "Site institucional premium para escritório de arquitetura com galeria de projetos, blog integrado e imagens profissionais.",
    link: "https://grigoleti.com.br/",
    tags: ["Site Institucional", "Blog", "SEO", "PWA"],
    category: "sites" as ProjectCategory,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNW0I5-DESmGJ8Dy9JqwljwFNijUJpX6dAqLBO7Vx_Bi2ZIHG8hDEQYNbDq8ZtlxstxSKv0r7x5B8l5tUYqSFjO7w1IBZ1kIs17JK5MawMEOYHad3Ca-I4TDEh43hIPcrwfm6-676hRAAHZvpYUg50Y=w1363-h597-s-no-gm?authuser=2"
  },
  {
    title: "Tatiane Nutricionista",
    subtitle: "Landing Page",
    desc: "Landing page profissional com foco em captação de leads, integração com WhatsApp e design orientado à conversão.",
    link: "https://tatianedovalenutri.vercel.app",
    tags: ["Landing Page", "Captação de Leads", "WhatsApp"],
    category: "sites" as ProjectCategory,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMA1-gJUfmA1hmtV0gRC4uaiEVYcMVUXaGkOjvO4J_t_XGQZ22y1SQt6T1fCEUmwEG_MZtzDdgQF9aqUWfWfljQSQa2MIzLJkD7YIqEl3QWEAeQ41zmOOJbr_cRzTrBEq7AlNkUkiQaA2qwlGwF1QA=w974-h604-s-no-gm?authuser=4"
  },
  {
    title: "Studio By Nean",
    subtitle: "Landing Page",
    desc: "Landing page para academia de dança com galeria de imagens profissionais, agenda e integração com redes sociais.",
    link: "https://studiobynean.vercel.app/",
    tags: ["Landing Page", "SEO", "PWA"],
    category: "sites" as ProjectCategory,
    image: "https://lh3.googleusercontent.com/pw/AP1GczPeLEMz5VvxtkMzmCGyrQG6iDNUS2yUQKHQqo3EWKxS0slV8ZM5SFHBCK1Vwvt11vWjcy2QIt9V4BDdC6Nz8KL6DHd2TKdfckp-aHJ2BxbOpO94CbMx2hxX-MlWWy21pHJbDHAXRb9iqxyZCeVXlaf7=w1351-h598-s-no-gm?authuser=1"
  },
  {
    title: "GearTech",
    subtitle: "Sistema de Gestão para Auto Peças",
    desc: "Sistema ERP completo para auto peças com controle de estoque, gestão de vendas, clientes e relatórios gerenciais.",
    link: "https://geartechsytem.vercel.app/",
    tags: ["Sistema Web", "ERP", "Dashboard"],
    category: "sistemas" as ProjectCategory,
    image: "https://lh3.googleusercontent.com/pw/AP1GczNLD5LBZvcG6P0aQN6rc0hkdOIv5y7rFpGVaguufloS0PeGe7UWh-IPLHngDCy7flbvehRnCcAQtLhcqb5Vf8ClSE5FykTb13PkATntwYsfBhImdHdU0_LS78HgCyJtf4phLKTWCMQgW__d-AHAUPzK=w1137-h599-s-no-gm?authuser=1"
  },
  {
    title: "ChurchFlow",
    subtitle: "Sistema de Gestão Eclesiástica",
    desc: "Plataforma SaaS para gestão de igrejas: controle de membros, finanças, eventos e relatórios administrativos.",
    link: "https://churchflowbr.vercel.app/",
    tags: ["Sistema Web", "SaaS", "Dashboard"],
    category: "sistemas" as ProjectCategory,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMrFbsJmHOP8YSbUWgZ6BtWVuxNHBMXgs3HmxNmG0TkGKTCepUnNw-FZic2cNodfpRxf4V-hpexh0G8kc7JkosODkLPyttoIvzNt4OFIAGmQvxPtiA6K6mBOLUCgaLh4jxM2Dlz-Tls_ghdc2MvT5dv=w1352-h597-s-no-gm?authuser=2"
  },
  {
    title: "Jornada360",
    subtitle: "Sistema Web e PWA",
    desc: "Sistema digital para gestão de jornada de trabalho e horas extras, acessível como app e web com funcionamento offline.",
    link: "https://jornada360.vercel.app/",
    tags: ["Sistema Web", "PWA", "App"],
    category: "apps" as ProjectCategory,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMc_HmvB2iJ6y8lTk4SgwP9718_4gJD6g8c7HFlTu4j31sgxEii-L6nwpnLzF0pVa2nmL05Ymmkr3_4gq9bYIa1X14xj-DVeI2WvCUyAEowJ-VTFIqOaMYWL76GfMYDKMWpBJB9H3KhNz2unS0p7ic=w969-h595-s-no-gm?authuser=4"
  },
  {
    title: "Gas Calculator",
    subtitle: "App Industrial",
    desc: "Aplicativo de cálculos industriais para distribuição de gases, utilizado por profissionais da área com precisão técnica.",
    link: "https://luizdovale.github.io/gascalculatorweb/",
    tags: ["App", "Cálculo Industrial", "Mobile"],
    category: "apps" as ProjectCategory,
    image: "https://lh3.googleusercontent.com/pw/AP1GczMqSExG1zehlIT6hW4_IgNCa7Dbt-Hrt2Uyh8NOmDK8_pV1rIEJWhc5uuI6pn9bXq5xOO4Yw8VvCsWFU2MG4joHs3iYnsEHbSNI8L9bIRXw5GZm7l9UIeleVL4amaqsHB-5vS3HAFgSUpUuV77k9uc=w975-h607-s-no-gm?authuser=4"
  }
];

export const SERVICES = [
  {
    id: "sites",
    icon: "globe",
    title: "Sites Institucionais",
    subtitle: "Presença digital profissional",
    desc: "Sites empresariais, corporativos e portfólios profissionais com foco em SEO, performance e conversão de clientes.",
    items: ["Sites empresariais", "Websites corporativos", "Portfólios profissionais", "SEO otimizado", "100% responsivos"],
    color: "electric"
  },
  {
    id: "landing",
    icon: "target",
    title: "Landing Pages",
    subtitle: "Captação de leads e conversão",
    desc: "Páginas de alta conversão integradas com WhatsApp, formulários e ferramentas de marketing digital.",
    items: ["Captação de leads", "Integração com WhatsApp", "Campanhas de marketing", "A/B testing", "Analytics integrado"],
    color: "gold"
  },
  {
    id: "sistemas",
    icon: "server",
    title: "Sistemas Web",
    subtitle: "Soluções digitais sob medida",
    desc: "Plataformas, ERPs, CRMs e dashboards personalizados para automatizar processos e aumentar a eficiência da empresa.",
    items: ["ERP e CRM", "Dashboards gerenciais", "Sistemas administrativos", "Automação de processos", "Integrações via API"],
    color: "purple"
  },
  {
    id: "ia",
    icon: "brain",
    title: "Inteligência Artificial",
    subtitle: "Automações inteligentes",
    desc: "Assistentes virtuais, automações com IA e integrações com modelos de linguagem para otimizar operações empresariais.",
    items: ["Assistentes virtuais", "Automações com IA", "Chatbots empresariais", "Análise de dados", "Integrações com LLMs"],
    color: "cyan"
  },
  {
    id: "apps",
    icon: "mobile",
    title: "Aplicativos Mobile",
    subtitle: "Android e iOS",
    desc: "Aplicativos empresariais nativos e PWAs que funcionam em qualquer dispositivo, com foco em usabilidade e performance.",
    items: ["Android e iOS", "PWA modernos", "Apps empresariais", "Offline first", "Publicação nas lojas"],
    color: "green"
  }
];

export const WHY_VALETECH = [
  { icon: "👤", title: "Atendimento Direto", desc: "Você fala diretamente com o desenvolvedor responsável pelo projeto." },
  { icon: "🎯", title: "Projetos Personalizados", desc: "Cada solução é desenvolvida sob medida para as necessidades do seu negócio." },
  { icon: "📈", title: "Otimizado para Google", desc: "Sites com SEO técnico avançado para ranquear nos resultados de busca." },
  { icon: "⚡", title: "Sistemas Escaláveis", desc: "Arquitetura pensada para crescer junto com a sua empresa." },
  { icon: "🤖", title: "Inteligência Artificial", desc: "Integração com IA para automação e inteligência nos seus processos." },
  { icon: "📱", title: "PWA e Apps Modernos", desc: "Aplicações que funcionam como app nativo em qualquer dispositivo." },
  { icon: "🌐", title: "Hospedagem Profissional", desc: "Deploy em infraestrutura de alta performance e disponibilidade 24/7." },
  { icon: "🚀", title: "Deploy Profissional", desc: "Entrega com CI/CD, ambientes de produção e estabilidade garantida." },
  { icon: "🛡️", title: "Suporte e Acompanhamento", desc: "Suporte contínuo e acompanhamento após a entrega do projeto." },
  { icon: "💼", title: "Foco em Resultados", desc: "Cada decisão é tomada com foco em gerar resultados reais para sua empresa." }
];

export const FAQ_ITEMS = [
  {
    q: "Quanto custa criar um site profissional?",
    a: "O investimento varia conforme o escopo do projeto. Um site institucional básico começa a partir de R$ 1.500, enquanto projetos com recursos avançados, integração de sistemas e SEO completo podem variar. Entre em contato para receber um orçamento personalizado e sem compromisso."
  },
  {
    q: "Quanto custa desenvolver um sistema web?",
    a: "Sistemas web personalizados são orçados após análise detalhada dos requisitos. O investimento depende da complexidade, número de módulos, integrações e usuários. Agende uma conversa gratuita para discutirmos seu projeto."
  },
  {
    q: "Quanto tempo leva para desenvolver um projeto?",
    a: "Um site institucional pode ser entregue em 1 a 3 semanas. Landing pages em 3 a 7 dias. Sistemas web completos podem levar de 4 a 12 semanas, dependendo da complexidade. O prazo exato é definido após análise do briefing."
  },
  {
    q: "Vocês desenvolvem aplicativos mobile?",
    a: "Sim! Desenvolvemos aplicativos para Android e iOS, além de PWAs (Progressive Web Apps) que funcionam como aplicativo nativo em qualquer dispositivo sem precisar de instalação."
  },
  {
    q: "O site será responsivo e adaptado para celular?",
    a: "Todos os projetos são desenvolvidos com design responsivo, garantindo uma experiência perfeita em smartphones, tablets e computadores. A performance mobile é uma prioridade em todos os nossos projetos."
  },
  {
    q: "Vocês oferecem suporte após a entrega?",
    a: "Sim. Oferecemos suporte e acompanhamento após a entrega do projeto. Podemos estruturar um plano de manutenção mensal conforme as necessidades da sua empresa."
  },
  {
    q: "É possível integrar Inteligência Artificial ao meu projeto?",
    a: "Sim! Integramos soluções com IA como chatbots, assistentes virtuais, automações inteligentes e análise de dados. Entre em contato para discutirmos as possibilidades para o seu negócio."
  },
  {
    q: "O sistema pode ser totalmente personalizado para minha empresa?",
    a: "Com certeza. Todos os nossos sistemas são desenvolvidos sob medida, sem templates genéricos. Cada funcionalidade, fluxo e interface é pensada especificamente para os processos e objetivos do seu negócio."
  }
];

export const SKILLS = {
  frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "UI/UX Design", "PWA", "Responsivo"],
  backend: ["Node.js", "APIs REST", "Firebase", "Supabase", "PostgreSQL", "Autenticação"],
  tools: ["Vercel", "GitHub", "Figma", "VSCode", "CI/CD", "SEO Técnico", "Flutter", "Dart"]
};
