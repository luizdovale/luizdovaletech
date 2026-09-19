import React, { useEffect, useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
// @ts-ignore
import { Link, useNavigate } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

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
const BriefingCompleto: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [projectType, setProjectType] = useState('Site institucional');

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
        setSubmitError('Ocorreu um erro ao enviar. Por favor, tente novamente ou me chame no WhatsApp.');
        setIsSubmitting(false);
      }
    } catch {
      setSubmitError('Erro de conexão. Verifique sua internet e tente novamente.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-28 pb-24 px-4 md:px-6 relative">
      <PageMeta
        title="Briefing completo — ValeTech Soluções"
        description="Formulário detalhado para projetos maiores. Quanto mais detalhes, mais precisa é a proposta."
        path="/briefing-completo"
        noindex
      />

      {/* luz de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-3xl relative z-10">

        {/* ── cabeçalho ── */}
        <div className="mb-14 text-center space-y-4">
          <Link
            to="/briefing"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-2"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar para o formulário curto
          </Link>

          <span className="block text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
            Para projetos maiores
          </span>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Briefing{' '}
            <span className="text-zinc-400 font-light">completo</span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
            Quanto mais detalhes, mais precisa é a proposta. Não sabe responder alguma coisa? Pode deixar em branco: a gente resolve conversando.
          </p>
        </div>

        {/* ── formulário ── */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* campos ocultos Web3Forms */}
          <input type="hidden" name="access_key" value={SOCIAL_LINKS.web3formsKey} />
          <input type="hidden" name="subject" value="📌 NOVO BRIEFING COMPLETO — ValeTech Soluções" />
          <input type="hidden" name="from_name" value="Site ValeTech" />

          {/* erro de envio */}
          {submitError && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl text-sm text-center">
              {submitError}
            </div>
          )}

          {/* ── SEÇÃO 1: Dados de Contato ── */}
          <div className="glass-panel p-8 rounded-2xl">
            <SectionHeader num="01" title="Seus dados de contato" />
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Nome completo</label>
                <input
                  type="text"
                  name="1. Nome Completo"
                  required
                  placeholder="Ex.: João Silva"
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
                  placeholder="(11) 99999-9999"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* ── SEÇÃO 2: Visão do Projeto ── */}
          <div className="glass-panel p-8 rounded-2xl">
            <SectionHeader num="02" title="Sobre o projeto" />

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div className="relative">
                <label className={labelClass}>O que você precisa?</label>
                <select
                  name="3. Tipo de Solucao"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className={selectClass}
                >
                  <option value="Site institucional">Site institucional</option>
                  <option value="Página de vendas">Página de vendas / captação de clientes</option>
                  <option value="Loja virtual ou catálogo">Loja virtual / catálogo de produtos</option>
                  <option value="Sistema de gestão">Sistema de gestão / painel online</option>
                  <option value="App para celular">App para celular (Android e iPhone)</option>
                  <option value="App instalável pelo navegador">App instalável pelo navegador</option>
                  <option value="Outro">Outra coisa / ainda não sei</option>
                </select>
              </div>

              {projectType === 'Site institucional' && (
                <div>
                  <label className={labelClass}>Quer publicar novidades (blog)?</label>
                  <select
                    name="3.1 Blog ou Portfolio Gerenciavel"
                    className={selectClass}
                  >
                    <option value="Não, conteúdo fixo">Não, o conteúdo fica fixo</option>
                    <option value="Sim, quero blog ou portfólio que eu possa atualizar">Sim, quero blog ou portfólio que eu mesmo atualize</option>
                    <option value="Ainda não decidi">Ainda não decidi</option>
                  </select>
                </div>
              )}

              <div>
                <label className={labelClass}>Onde vai ser usado?</label>
                <div className="flex flex-wrap gap-4 pt-1">
                  {['Computador', 'Android', 'iPhone'].map((p) => (
                    <label key={p} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="4. Onde vai ser usado[]"
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
              <label className={labelClass}>Qual o principal objetivo?</label>
              <input
                type="text"
                name="5. Objetivo do Projeto"
                placeholder="Ex.: vender mais, organizar a empresa, automatizar tarefas, modernizar a marca..."
                className={inputClass}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Quem vai usar? (seu público)</label>
                <input
                  type="text"
                  name="6. Publico-Alvo"
                  placeholder="Ex.: jovens de 18 a 25 anos, outras empresas..."
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Concorrentes ou exemplos</label>
                <input
                  type="text"
                  name="7. Concorrentes"
                  placeholder="Ex.: site X, app Y (links são bem-vindos)"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* ── SEÇÃO 3: Detalhes e Conteúdo ── */}
          <div className="glass-panel p-8 rounded-2xl">
            <SectionHeader num="03" title="Detalhes e conteúdo" />

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className={labelClass}>Logo e cores da marca</label>
                <select name="8. Identidade Visual" className={selectClass}>
                  <option value="Tenho logotipo e manual da marca">Tenho logotipo e manual da marca</option>
                  <option value="Tenho apenas o logo">Tenho apenas o logo</option>
                  <option value="Não tenho, preciso criar">Não tenho, preciso criar do zero</option>
                  <option value="Quero modernizar a marca">Tenho, mas quero modernizar</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Textos e imagens</label>
                <select name="9. Status do Conteudo" className={selectClass}>
                  <option value="Tenho tudo pronto">Tenho tudo pronto</option>
                  <option value="Estou produzindo">Estou produzindo</option>
                  <option value="Preciso de ajuda para criar">Preciso de ajuda para criar</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Endereço do site (domínio) e hospedagem</label>
                <select name="10. Dominio e Hospedagem" className={selectClass}>
                  <option value="Já tenho">Já tenho domínio e hospedagem</option>
                  <option value="Preciso de orientação">Não tenho, preciso de orientação</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Ligação com outros sistemas</label>
                <input
                  type="text"
                  name="11. Integracoes"
                  placeholder="Ex.: pagamento online, Google Maps, um sistema que você já usa..."
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>O que o projeto precisa fazer?</label>
              <textarea
                name="12. Funcionalidades"
                rows={4}
                placeholder="Ex.: login para clientes, painel para eu acompanhar as vendas, chat, uma calculadora específica..."
                className={inputClass + ' resize-none'}
              />
            </div>
          </div>

          {/* ── SEÇÃO 4: Segurança e Crescimento ── */}
          <div className="glass-panel p-8 rounded-2xl">
            <SectionHeader num="04" title="Segurança e crescimento" />

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className={labelClass}>Dados dos seus clientes</label>
                <select name="13. Dados Sensiveis (LGPD)" className={selectClass}>
                  <option value="Não">Não vamos guardar dados pessoais</option>
                  <option value="Sim">Sim, vamos guardar dados como CPF, endereço ou pagamentos</option>
                  <option value="Não sei">Não tenho certeza</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Quantas pessoas devem usar por mês?</label>
                <select name="14. Uso Mensal Esperado" className={selectClass}>
                  <option value="Até 1.000">Até 1.000 pessoas (começando)</option>
                  <option value="1.000 a 50.000">De 1.000 a 50.000 pessoas</option>
                  <option value="Mais de 50.000">Mais de 50.000 pessoas</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Suporte depois de pronto</label>
                <select name="15. Suporte Pos-Lancamento" className={selectClass}>
                  <option value="Quero suporte mensal">Quero suporte mensal (eu cuido de tudo)</option>
                  <option value="Minha equipe cuida">Minha equipe vai cuidar</option>
                  <option value="Ainda não decidi">Ainda não decidi</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Preferência de tecnologia ou hospedagem</label>
                <input
                  type="text"
                  name="16. Preferencia Tecnica"
                  placeholder="Se tiver alguma. Ex.: Vercel, AWS, Hostgator..."
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>
                O que faria esse investimento valer a pena em 6 meses?
              </label>
              <textarea
                name="17. Resultado Esperado"
                rows={3}
                placeholder="Ex.: fechar 10 vendas a mais por mês, gastar menos tempo com tarefas manuais..."
                className={inputClass + ' resize-none'}
              />
            </div>
          </div>

          {/* ── SEÇÃO 5: Planejamento Final ── */}
          <div className="glass-panel p-8 rounded-2xl">
            <SectionHeader num="05" title="Planejamento final" />

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className={labelClass}>Prazo ideal</label>
                <input
                  type="text"
                  name="18. Prazo"
                  placeholder="Ex.: preciso lançar em 30 dias..."
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Quanto pretende investir?</label>
                <select name="19. Investimento" className={selectClass}>
                  <option value="Prefiro discutir após a análise">Prefiro discutir depois da análise</option>
                  <option value="Projeto inicial (mais enxuto)">Projeto inicial (mais enxuto)</option>
                  <option value="Projeto profissional (médio porte)">Projeto profissional (médio porte)</option>
                  <option value="Projeto robusto e personalizado">Projeto robusto e personalizado</option>
                </select>
              </div>
            </div>

            <div className="mb-5">
              <label className={labelClass}>Sites ou apps que você admira</label>
              <textarea
                name="20. Referencias"
                rows={2}
                placeholder="Cole links de sites ou apps que você gosta."
                className={inputClass + ' resize-none'}
              />
            </div>

            <div>
              <label className={labelClass}>Mais alguma coisa?</label>
              <textarea
                name="21. Observacoes"
                rows={3}
                placeholder="Qualquer informação que ajude a entender o projeto..."
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
                Enviar briefing completo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>

          {/* rodapé do form */}
          <p className="text-center text-xs text-zinc-600 font-mono pb-4">
            Suas informações são confidenciais e usadas só para preparar a proposta.
          </p>
        </form>
      </div>
    </div>
  );
};

export default BriefingCompleto;
