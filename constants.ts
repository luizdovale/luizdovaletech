export const BRAND_INFO = {
  name: "ValeTech",
  fullName: "ValeTech Soluções",
  tagline: "Sistemas, sites e aplicativos sob medida",
  description: "Sistemas de gestão, sites, aplicativos e automações sob medida para empresas e profissionais que querem trabalhar melhor.",
  founder: "Luiz Fernando",
  founderPhoto: "/assets/luiz.jpg",
  contactEmail: "luizdovaletech@gmail.com",
  phone: "+55 (12) 97403-3027",
  location: "São Paulo, Brasil",
  year: new Date().getFullYear(),
};

export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/5512974033027?text=Ol%C3%A1%2C%20Luiz!%20Vi%20o%20site%20da%20ValeTech%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.",
  formAction: "https://formsubmit.co/luizdovaletech@gmail.com",
  web3formsKey: "aa00e3e1-13a8-4535-a695-894473969c24",
  github: "https://github.com/luizdovale",
  linkedin: "https://linkedin.com/in/luizdovale",
  instagram: "https://instagram.com/luizdovaletech",
};

// Ids das seções da Home usados pelo menu e pelo rodapé.
export const NAV_LINKS = [
  { id: "services", label: "O que eu faço" },
  { id: "projects", label: "Projetos" },
  { id: "how", label: "Como funciona" },
  { id: "about", label: "Sobre mim" },
  { id: "faq", label: "Dúvidas" },
];

export type ProjectCategory = "sistemas" | "sites" | "apps";

export const PROJECT_CATEGORY_LABEL: Record<ProjectCategory, string> = {
  sistemas: "Sistema de gestão",
  sites: "Site profissional",
  apps: "Ferramenta / App",
};

export interface ProjectItem {
  id: string;
  title: string;
  audience: string;
  desc: string;
  link: string;
  tags: string[];
  category: ProjectCategory;
  image: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "jornada360",
    title: "Jornada360",
    audience: "Para quem precisa controlar horas de trabalho e horas extras",
    desc: "Aplicativo para registrar a jornada de trabalho e acompanhar as horas extras em tempo real. Continua funcionando mesmo sem internet, e nenhum registro se perde.",
    link: "https://jornada360.vercel.app/",
    tags: ["Controle de ponto", "Funciona sem internet", "Instala no celular"],
    category: "sistemas",
    image: "/projects/jornada360.jpg"
  },
  {
    id: "gas-calculator",
    title: "Gas Calculator",
    audience: "Para profissionais que trabalham com gases industriais e medicinais",
    desc: "Calculadora técnica que faz as contas de dimensionamento, vazão e logística de gases, com precisão e de forma simples de usar.",
    link: "https://gascalculator.valetechsolucoes.com.br",
    tags: ["Cálculos técnicos", "Gases industriais e medicinais"],
    category: "apps",
    image: "/projects/gas-calculator.jpg"
  },
  {
    id: "geartech",
    title: "GearTech",
    audience: "Para lojas de autopeças e oficinas",
    desc: "Sistema que reúne estoque, vendas e ordens de serviço em um só lugar, com relatórios que mostram como o negócio está indo.",
    link: "https://geartech.valetechsolucoes.com.br",
    tags: ["Controle de estoque", "Vendas e faturamento", "Relatórios"],
    category: "sistemas",
    image: "/projects/geartech.png"
  },
  {
    id: "tatiane-nutricionista",
    title: "Tatiane do Vale — Nutrição",
    audience: "Para uma nutricionista",
    desc: "Site profissional que apresenta o método de trabalho, os serviços e os resultados, e leva o paciente direto para o agendamento da consulta.",
    link: "https://tatianedovale.com.br",
    tags: ["Site profissional", "Agendamento de consultas"],
    category: "sites",
    image: "/projects/tatiane-nutricionista.png"
  },
  {
    id: "climatizacao",
    title: "Instalador de Ar Condicionado",
    audience: "Para instaladores e lojas de ar condicionado",
    desc: "Site institucional com layout moderno e responsivo, apresentação dos serviços, informações da empresa e canais de contato, proporcionando uma presença digital profissional e acessível.",
    link: "https://instalador.valetechsolucoes.com.br",
    tags: ["Site profissional", "Responsivo", "Canais de contato"],
    category: "sites",
    image: "/projects/climatizacao.png"
  },
  {
    id: "grigoleti",
    title: "Grigoleti Arquitetura",
    audience: "Para um escritório de arquitetura",
    desc: "Site elegante que coloca os projetos do escritório em destaque, com blog próprio e preparado para ser encontrado no Google.",
    link: "https://grigoleti.com.br/",
    tags: ["Portfólio visual", "Blog", "Aparece no Google"],
    category: "sites",
    image: "/projects/grigoleti.png"
  },
  {
    id: "jps-autopecas",
    title: "JPS Auto Peças",
    audience: "Para uma distribuidora de autopeças",
    desc: "Site com catálogo de produtos, localização da loja e contato direto com a equipe de vendas.",
    link: "https://jpsautopecas.vercel.app/",
    tags: ["Catálogo de produtos", "Localização", "Contato com vendedores"],
    category: "sites",
    image: "/projects/jps-autopecas.jpg"
  },
  {
    id: "edusheets",
    title: "EduSheets",
    audience: "Para professores e escolas",
    desc: "EduSheets é uma plataforma que automatiza o lançamento de notas e o preenchimento de planilhas, agilizando a rotina dos professores, reduzindo tarefas repetitivas e tornando o processo mais rápido e eficiente.",
    link: "https://edusheets.valetechsolucoes.com.br",
    tags: ["Professores", "Escolas", "Automatização"],
    category: "sistemas",
    image: "/projects/edusheets.png"
  }
];

export interface ServiceItem {
  id: string;
  problem: string;
  title: string;
  desc: string;
  icon: string;
  items: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "sistemas",
    problem: "Quero organizar a minha empresa",
    title: "Sistemas de gestão",
    desc: "Troco planilhas, cadernos e mensagens soltas por um sistema feito para o jeito que a sua empresa trabalha: estoque, vendas, clientes e financeiro em um só lugar.",
    icon: "server",
    items: [
      "Controle de estoque, vendas e financeiro",
      "Relatórios claros para decidir com segurança",
      "Cada pessoa da equipe vê só o que precisa",
      "Acesso de qualquer lugar, no computador ou no celular"
    ]
  },
  {
    id: "sites",
    problem: "Quero ser encontrado por mais clientes",
    title: "Sites e páginas de venda",
    desc: "Site profissional que abre rápido, aparece nas buscas do Google e leva o cliente direto para o seu WhatsApp ou agendamento.",
    icon: "globe",
    items: [
      "Site institucional e catálogo de produtos",
      "Página para captar clientes (landing page)",
      "Preparado para aparecer no Google",
      "Bonito e rápido no celular"
    ]
  },
  {
    id: "apps",
    problem: "Quero um aplicativo para o meu negócio",
    title: "Aplicativos para celular",
    desc: "Aplicativo que a sua equipe ou os seus clientes usam no dia a dia, no Android e no iPhone. Pode ser instalado direto do navegador ou pelas lojas.",
    icon: "mobile",
    items: [
      "Android e iPhone",
      "Continua funcionando sem internet e sincroniza depois",
      "Avisos (notificações) no celular",
      "Publicação na Google Play e na App Store"
    ]
  },
  {
    id: "automacao",
    problem: "Perco tempo com tarefas repetitivas",
    title: "Automação e inteligência artificial",
    desc: "Coloco a tecnologia para fazer o trabalho repetitivo: responder as dúvidas mais comuns, conectar sistemas que não conversam e organizar informações.",
    icon: "brain",
    items: [
      "Assistente de IA que responde dúvidas dos clientes",
      "Ligação entre sistemas que hoje não se falam",
      "Triagem automática de pedidos e mensagens",
      "Tarefas rodando sozinhas, sem ninguém apertar botão"
    ]
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "A gente conversa",
    desc: "Você me conta o que precisa, do seu jeito, pelo WhatsApp ou por um formulário curto. Sem termos técnicos."
  },
  {
    number: "02",
    title: "Você recebe o plano",
    desc: "Envio a proposta com o que será feito, prazo e valor, e você vê como o projeto vai ficar antes de eu começar a programar."
  },
  {
    number: "03",
    title: "Eu construo e entrego",
    desc: "Desenvolvo em etapas e mostro o andamento. Entrego funcionando e continuo por perto para suporte e melhorias."
  }
];

export const DELIVERY_TIMES = [
  { label: "Sites e páginas de venda", time: "1 a 3 semanas" },
  { label: "Sistemas e aplicativos", time: "4 a 10 semanas" }
];

export const PRINCIPLES = [
  {
    title: "Sob medida de verdade",
    desc: "Cada projeto parte do jeito que o seu negócio funciona. Não adapto um modelo pronto: construo o que a sua empresa precisa."
  },
  {
    title: "Simples de usar",
    desc: "Telas limpas e objetivas, para a sua equipe aprender rápido e o seu cliente não se perder."
  },
  {
    title: "Rápido e seguro",
    desc: "Sites e sistemas que carregam depressa, funcionam bem no celular e protegem os dados dos seus clientes."
  },
  {
    title: "Conversa direta",
    desc: "Você fala comigo, sem atendente nem intermediário, e acompanha cada etapa do projeto."
  }
];

export const FAQ_ITEMS = [
  {
    q: "Como funciona o trabalho, do primeiro contato até a entrega?",
    a: "Primeiro a gente conversa para eu entender o seu problema. Depois envio uma proposta com o que será feito, o prazo e o valor, e mostro como o projeto vai ficar. Com a proposta aprovada, desenvolvo em etapas curtas, mostrando o andamento, e entrego tudo funcionando, com acompanhamento depois."
  },
  {
    q: "Quanto custa um projeto?",
    a: "Depende do tamanho do projeto e do que você precisa, por isso não tenho uma tabela fixa. Você me conta a ideia e eu envio uma proposta com valor e prazo antes de começar."
  },
  {
    q: "Quanto tempo leva para ficar pronto?",
    a: "Sites e páginas de venda ficam prontos, em geral, entre 1 e 3 semanas. Sistemas e aplicativos levam de 4 a 10 semanas, dependendo do que precisam fazer. O prazo exato é combinado na proposta."
  },
  {
    q: "Preciso entender de tecnologia para contratar?",
    a: "Não. Você me explica o problema do seu jeito, com as palavras do seu dia a dia, e eu cuido da parte técnica, sem termos complicados."
  },
  {
    q: "Qual a diferença entre \"sob medida\" e um modelo pronto (template)?",
    a: "Um modelo pronto é igual para muita gente e você precisa se adaptar a ele. Sob medida significa que eu crio do zero, seguindo o jeito que a sua empresa trabalha: você não paga por recursos que não usa e o sistema pode crescer junto com o negócio."
  },
  {
    q: "Você trabalha com inteligência artificial?",
    a: "Sim. Posso criar, por exemplo, um assistente que responde as dúvidas mais comuns dos seus clientes, ou automatizar tarefas repetitivas, como organizar pedidos, documentos e mensagens."
  },
  {
    q: "E depois que o projeto for entregue?",
    a: "Continuo por perto. Ofereço acompanhamento depois do lançamento, garantia de funcionamento e planos de manutenção para o sistema continuar seguro, rápido e atualizado."
  },
  {
    q: "Como eu começo?",
    a: "É simples: me chame no WhatsApp ou peça um orçamento pelo formulário curto, que leva cerca de 1 minuto. Eu respondo em até 24 horas."
  }
];

// Ferramentas usadas nos projetos, mostradas só na página "Sobre mim".
export const TOOLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Flutter",
  "Vercel",
  "APIs de IA"
];
