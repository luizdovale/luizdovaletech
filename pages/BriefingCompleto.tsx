import React, { useEffect, useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
// @ts-ignore
import { Link, useNavigate } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

/* ─── estilos reutilizáveis ─── */
const inputClass = 'field';
const selectClass = 'field cursor-pointer appearance-none';
const labelClass = 'field-label';

const SectionHeader: React.FC<{ num: string; title: string }> = ({ num, title }) => (
  <div className="mb-8 flex items-center gap-4 border-b border-line pb-6">
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tint font-display text-sm font-extrabold text-accent">
      {num}
    </span>
    <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">{title}</h3>
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
    <div className="relative min-h-screen bg-white px-4 pb-24 pt-32 md:px-6">
      <PageMeta
        title="Briefing completo — ValeTech Soluções"
        description="Formulário detalhado para projetos maiores. Quanto mais detalhes, mais precisa é a proposta."
        path="/briefing-completo"
        noindex
      />

      {/* tom azul-claro no topo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(50%_70%_at_50%_0%,rgb(var(--c-tint))_0%,transparent_75%)]"
      />

      <div className="container relative mx-auto max-w-3xl">

        {/* ── cabeçalho ── */}
        <div className="mb-14 text-center space-y-4">
          <Link
            to="/briefing"
            className="mb-2 inline-flex items-center gap-2 text-sm font-bold text-muted transition-colors hover:text-ink"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar para o formulário curto
          </Link>

          <span className="eyebrow block">Para projetos maiores</span>

          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            Briefing{' '}
            <span className="text-accent">completo</span>
          </h1>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted">
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
            <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 p-4 text-center text-sm font-medium text-red-700">
              {submitError}
            </div>
          )}

          {/* ── SEÇÃO 1: Dados de Contato ── */}
          <div className="card p-6 sm:p-8">
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
          <div className="card p-6 sm:p-8">
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
                    <label key={p} className="group flex cursor-pointer items-center gap-2.5">
                      <input
                        type="checkbox"
                        name="4. Onde vai ser usado[]"
                        value={p}
                        className="h-5 w-5 cursor-pointer rounded border-line accent-accent"
                      />
                      <span className="text-[15px] text-muted transition-colors group-hover:text-ink">{p}</span>
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
          <div className="card p-6 sm:p-8">
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
          <div className="card p-6 sm:p-8">
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
          <div className="card p-6 sm:p-8">
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
            className="btn btn-primary w-full py-4"
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
          <p className="pb-4 text-center text-sm text-muted">
            Suas informações são confidenciais e usadas só para preparar a proposta. Veja a{' '}
            <Link to="/privacidade" className="font-bold text-ink underline decoration-line underline-offset-4 hover:decoration-ink/40">
              política de privacidade
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default BriefingCompleto;
