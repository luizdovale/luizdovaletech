import React, { useEffect, useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
// @ts-ignore
import { Link, useNavigate } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

const inputClass =
  'w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm font-light placeholder:text-zinc-600 focus:border-white/40 focus:bg-white/[0.05] outline-none transition-all duration-200';

const labelClass = 'block text-xs font-mono uppercase tracking-[0.15em] text-zinc-500 mb-2';

const Briefing: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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
        title="Pedir orçamento — ValeTech Soluções"
        description="Conte o que você precisa em um formulário curto. Respondo em até 24 horas com o melhor caminho para o seu projeto."
        path="/briefing"
      />

      {/* luz de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-2xl relative z-10">

        {/* cabeçalho */}
        <div className="mb-12 text-center space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-2"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar para o início
          </Link>

          <span className="block text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
            Pedir orçamento
          </span>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Me conte o que você{' '}
            <span className="text-zinc-400 font-light">precisa.</span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
            Leva cerca de 1 minuto. Não precisa saber termos técnicos: escreva do seu jeito. Eu respondo em até 24 horas.
          </p>
        </div>

        {/* formulário */}
        <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl space-y-6">

          {/* campos ocultos Web3Forms */}
          <input type="hidden" name="access_key" value={SOCIAL_LINKS.web3formsKey} />
          <input type="hidden" name="subject" value="📌 NOVO PEDIDO DE ORÇAMENTO — ValeTech Soluções" />
          <input type="hidden" name="from_name" value="Site ValeTech" />

          {/* erro de envio */}
          {submitError && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl text-sm text-center">
              {submitError}
            </div>
          )}

          <div>
            <label htmlFor="nome" className={labelClass}>Seu nome</label>
            <input
              id="nome"
              type="text"
              name="1. Nome"
              required
              autoComplete="name"
              placeholder="Ex.: João Silva"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className={labelClass}>Seu WhatsApp</label>
            <input
              id="whatsapp"
              type="tel"
              name="2. WhatsApp"
              required
              autoComplete="tel"
              placeholder="(11) 99999-9999"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="necessidade" className={labelClass}>Conte o que você precisa</label>
            <textarea
              id="necessidade"
              name="3. O que precisa"
              rows={5}
              placeholder="Ex.: quero um sistema para controlar o estoque da minha loja. Ou: preciso de um site para a minha clínica. Ou: ainda não sei bem, quero conversar."
              className={inputClass + ' resize-none'}
            />
          </div>

          {/* botão de envio */}
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
                Enviar pedido
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>

          <p className="text-center text-xs text-zinc-600 font-mono">
            Seus dados são usados só para eu te responder.
          </p>
        </form>

        {/* outros caminhos */}
        <div className="mt-10 text-center space-y-3 text-sm font-light text-zinc-400">
          <p>
            Prefere conversar agora?{' '}
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">
              Falar no WhatsApp
            </a>
          </p>
          <p>
            Tem um projeto maior e quer detalhar tudo?{' '}
            <Link to="/briefing-completo" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">
              Preencher o briefing completo
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Briefing;
