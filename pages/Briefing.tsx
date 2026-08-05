import React, { useEffect, useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
// @ts-ignore
import { Link, useNavigate } from 'react-router-dom';

/* ─── estilos reutilizáveis ─── */
const inputClass =
  'w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm font-light placeholder:text-zinc-600 focus:border-white/40 focus:bg-white/[0.05] outline-none transition-all duration-200';

const selectClass =
  'w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm font-light focus:border-white/40 focus:bg-white/[0.05] outline-none transition-all duration-200 appearance-none cursor-pointer';

const labelClass = 'block text-xs font-mono uppercase tracking-[0.15em] text-zinc-500 mb-2';

const SectionHeader: React.FC<{ num: string; title: string }> = ({ num, title }) => (
  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/[0.06]">
    <span className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.12] flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
      {num}
    </span>
    <h3 className="font-display text-lg font-semibold text-white tracking-tight">{title}</h3>
  </div>
);

/* ─── componente principal ─── */
const Briefing: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [projectType, setProjectType] = useState('Site Institucional');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        navigate('/sucesso');
      } else {
        setSubmitError('Ocorreu um erro ao enviar. Por favor, tente novamente.');
        setIsSubmitting(false);
      }
    } catch {
      setSubmitError('Erro de conexão. Verifique sua internet e tente novamente.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20 pb-24 px-4 md:px-6 relative">
      {/* luz de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-3xl relative z-10">

        {/* ── cabeçalho ── */}
        <div className="mb-14 text-center space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-2"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar para Home
          </Link>

          <span className="block text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
            ValeTech · Briefing de Projeto
          </span>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Briefing{' '}
            <span className="text-zinc-400 font-light">de Projeto</span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
            Preencha com precisão. Cada detalhe contribui diretamente para a qualidade e agilidade da proposta técnica.
          </p>
        </div>

        {/* ── formulário ── */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* campos ocultos Web3Forms */}
          <input type="hidden" name="access_key" value={SOCIAL_LINKS.web3formsKey} />
          <input type="hidden" name="subject" value="📌 NOVO BRIEFING — ValeTech Tecnologia & Inovação" />
          <input type="hidden" name="from_name" value="Site ValeTech" />
          <input type="hidden" name="replyto" value="email" />

          {/* erro de envio */}
          {submitError && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl text-sm text-center">
              {submitError}
            </div>
          )}

          {/* ── SEÇÃO 1: Dados de Contato ── */}
          <div className="glass-panel p-8 rounded-2xl">
            <SectionHeader num="01" title="Seus Dados de Contato" />
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Nome Completo</label>
                <input
                  type="text"
                  name="1. Nome Completo"
                  required
                  placeholder="Ex: João Silva"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>E-mail</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="seu@email.com"
                  className={inputClass}
                />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>WhatsApp / Telefone</label>
                <input
                  type="tel"
                  name="2. WhatsApp ou Telefone"
                  required
                  placeholder="+55 (11) 99999-9999"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* ── SEÇÃO 2: Visão do Projeto ── */}
          <div className="glass-panel p-8 rounded-2xl">
            <SectionHeader num="02" title="Visão do Projeto" />

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div className="relative">
                <label className={labelClass}>Tipo de Solução</label>
                <select
                  name="3. Tipo de Solucao"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className={selectClass}
                >
                  <option value="Site Institucional">Site Institucional</option>
                  <option value="App Mobile (Flutter)">App Mobile (Flutter)</option>
                  <option value="Landing Page">Landing Page (Alta Conversão)</option>
                  <option value="E-commerce">Loja Virtual / Catálogo</option>
                  <option value="Sistema Web / SaaS">Sistema Web / SaaS / Dashboard</option>
                  <option value="PWA">PWA (Progressive Web App)</option>
                  <option value="Consultoria/Outros">Consultoria / Outros</option>
                </select>
              </div>

              {projectType === 'Site Institucional' && (
                <div>
                  <label className={labelClass}>Área de Postagem / Blog</label>
                  <select
                    name="3.1 Gestao de Conteudo (Blog/Projetos)"
                    className={selectClass}
                  >
                    <option value="Não preciso (Fotos fixas)">Não, conteúdo fixo (sem área de gestão)</option>
                    <option value="Sim, quero um Blog/Portfólio Dinâmico">Sim, quero Blog/Portfólio gerenciável</option>
                    <option value="Não tenho certeza ainda">Ainda não decidi</option>
                  </select>
                </div>
              )}

              <div>
                <label className={labelClass}>Plataformas Alvo</label>
                <div className="flex flex-wrap gap-4 pt-1">
                  {['Web Desktop', 'Android', 'iOS'].map((p) => (
                    <label key={p} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="4. Plataformas Alvo[]"
                        value={p}
                        className="w-4 h-4 rounded border-white/20 bg-white/[0.03] accent-white cursor-pointer"
                      />
                      <span className="text-zinc-400 text-sm font-light group-hover:text-white transition-colors">{p}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label className={labelClass}>Objetivo Principal do Projeto</label>
              <input
                type="text"
                name="5. Objetivo do Projeto"
                placeholder="Ex: Aumentar vendas, automatizar processos, modernizar marca..."
                className={inputClass}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Público-Alvo</label>
                <input
                  type="text"
                  name="6. Publico-Alvo"
                  placeholder="Ex: Jovens 18–25, Empresas B2B..."
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Principais Concorrentes</label>
                <input
                  type="text"
                  name="7. Principais Concorrentes"
                  placeholder="Ex: Site X, App Y (links são bem-vindos)"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* ── SEÇÃO 3: Detalhes Técnicos ── */}
          <div className="glass-panel p-8 rounded-2xl">
            <SectionHeader num="03" title="Detalhes Técnicos & Conteúdo" />

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className={labelClass}>Identidade Visual (Logo/Cores)</label>
                <select name="8. Identidade Visual" className={selectClass}>
                  <option value="Já possuo Logotipo e Manual da Marca">Tenho logotipo e manual da marca</option>
                  <option value="Tenho apenas o Logo (preciso expandir)">Tenho apenas o logo (preciso expandir)</option>
                  <option value="Não tenho, preciso criar do zero">Não tenho, criar do zero</option>
                  <option value="Tenho, mas quero modernizar (Redesign)">Quero modernizar (Redesign)</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Conteúdo (Textos / Imagens)</label>
                <select name="9. Status do Conteudo" className={selectClass}>
                  <option value="Já tenho todos os textos e fotos prontos">Tenho tudo pronto</option>
                  <option value="Estou produzindo o conteúdo">Estou produzindo</option>
                  <option value="Não tenho nada, preciso de ajuda para criar">Preciso de ajuda para criar</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Domínio / Hospedagem</label>
                <select name="10. Infraestrutura" className={selectClass}>
                  <option value="Já tenho Domínio e Hospedagem/Contas nas Lojas">Já tenho domínio e hospedagem</option>
                  <option value="Não tenho, preciso de orientação para contratar">Não tenho, preciso de orientação</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Integrações Necessárias</label>
                <input
                  type="text"
                  name="11. Integracoes Necessarias"
                  placeholder="Ex: PagSeguro, Google Maps, CRM, API externa..."
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Funcionalidades Específicas / Requisitos</label>
              <textarea
                name="12. Funcionalidades Requisitadas"
                rows={4}
                placeholder="Ex: Login social, área de membros, chat em tempo real, painel administrativo, calculadora personalizada..."
                className={inputClass + ' resize-none'}
              />
            </div>
          </div>

          {/* ── SEÇÃO 4: Segurança & Visão de Futuro ── */}
          <div className="glass-panel p-8 rounded-2xl">
            <SectionHeader num="04" title="Segurança & Visão de Futuro" />

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className={labelClass}>Proteção de Dados (LGPD)</label>
                <select name="13. Coleta de Dados Sensiveis (LGPD)" className={selectClass}>
                  <option value="Não">Não coletaremos dados sensíveis</option>
                  <option value="Sim">Sim, coletaremos CPF, endereço ou pagamentos</option>
                  <option value="Ainda não sei">Não tenho certeza</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Expectativa de Tráfego Mensal</label>
                <select name="14. Expectativa de Visitas Mensais" className={selectClass}>
                  <option value="Até 1.000 (Início)">Até 1.000 pessoas/mês (início)</option>
                  <option value="Entre 1.000 e 50.000 (Médio)">1.000 a 50.000 pessoas (escala média)</option>
                  <option value="Grande Escala">Acima de 100.000 visitas (alta performance)</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Suporte Pós-Lançamento</label>
                <select name="15. Manutencao do Site" className={selectClass}>
                  <option value="Quero suporte Luiz Vale Tech">Quero suporte mensal (ValeTech cuida de tudo)</option>
                  <option value="Eu ou minha equipe vamos cuidar">Minha equipe vai gerenciar</option>
                  <option value="Ainda não decidi">Ainda não decidi</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Preferência de Tecnologia / Hospedagem</label>
                <input
                  type="text"
                  name="16. Preferencia de Tecnologia/Hospedagem"
                  placeholder="Ex: AWS, Vercel, Hostgator..."
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>
                O que faria seu investimento valer a pena em 6 meses?
              </label>
              <textarea
                name="17. Meta Principal de Negocio (ROI)"
                rows={3}
                placeholder="Ex: Fechar 10 vendas extras/mês, reduzir custo operacional com o app..."
                className={inputClass + ' resize-none'}
              />
            </div>
          </div>

          {/* ── SEÇÃO 5: Planejamento Final ── */}
          <div className="glass-panel p-8 rounded-2xl">
            <SectionHeader num="05" title="Planejamento Final" />

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className={labelClass}>Prazo Ideal de Lançamento</label>
                <input
                  type="text"
                  name="18. Prazo Estimado de Lancamento"
                  placeholder="Ex: Preciso lançar em 30 dias..."
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Investimento Estimado (Budget)</label>
                <select name="19. Investimento Pretendido" className={selectClass}>
                  <option value="Prefiro discutir após análise">Prefiro discutir após análise</option>
                  <option value="Projeto MVP / Entrada (Baixo Custo)">MVP / Entrada (baixo custo)</option>
                  <option value="Projeto Profissional (Médio Porte)">Projeto Profissional (médio porte)</option>
                  <option value="Projeto Robusto / Personalizado (Alto Nível)">Projeto Robusto / Personalizado (alto nível)</option>
                </select>
              </div>
            </div>

            <div className="mb-5">
              <label className={labelClass}>Referências Visuais (links que você admira)</label>
              <textarea
                name="20. Referencias e Links Visuais"
                rows={2}
                placeholder="Cole links de sites ou apps que você gosta."
                className={inputClass + ' resize-none'}
              />
            </div>

            <div>
              <label className={labelClass}>Observações Finais</label>
              <textarea
                name="21. Observacoes Extras"
                rows={3}
                placeholder="Qualquer informação adicional relevante..."
                className={inputClass + ' resize-none'}
              />
            </div>
          </div>

          {/* ── botão de envio ── */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-5 rounded-2xl font-semibold text-sm tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 ${
              isSubmitting
                ? 'bg-white/10 text-zinc-500 cursor-not-allowed border border-white/[0.06]'
                : 'bg-white text-black hover:bg-zinc-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] active:scale-[0.99]'
            }`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Enviando...
              </>
            ) : (
              <>
                Enviar Briefing Completo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>

          {/* rodapé do form */}
          <p className="text-center text-xs text-zinc-600 font-mono pb-4">
            Suas informações são confidenciais e utilizadas exclusivamente para elaboração da proposta.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Briefing;