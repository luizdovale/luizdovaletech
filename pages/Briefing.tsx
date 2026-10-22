import React, { useEffect, useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
// @ts-ignore
import { Link, useNavigate } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

const inputClass = 'field';
const labelClass = 'field-label';

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
    <div className="relative min-h-screen bg-white px-4 pb-24 pt-32 md:px-6">
      <PageMeta
        title="Pedir orçamento — ValeTech Soluções"
        description="Conte o que você precisa em um formulário curto. Respondo em até 24 horas com o melhor caminho para o seu projeto."
        path="/briefing"
      />

      {/* tom azul-claro no topo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(50%_70%_at_50%_0%,rgb(var(--c-tint))_0%,transparent_75%)]"
      />

      <div className="container relative mx-auto max-w-2xl">

        {/* cabeçalho */}
        <div className="mb-12 text-center space-y-4">
          <Link
            to="/"
            className="mb-2 inline-flex items-center gap-2 text-sm font-bold text-muted transition-colors hover:text-ink"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar para o início
          </Link>

          <span className="eyebrow block">Pedir orçamento</span>

          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            Me conte o que você{' '}
            <span className="text-accent">
              precisa
              <span className="-ml-[0.09em]">.</span>
            </span>
          </h1>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted">
            Leva cerca de 1 minuto. Não precisa saber termos técnicos: escreva do seu jeito. Eu respondo em até 24 horas.
          </p>
        </div>

        {/* formulário */}
        <form onSubmit={handleSubmit} className="card space-y-6 p-6 sm:p-8">

          {/* campos ocultos Web3Forms */}
          <input type="hidden" name="access_key" value={SOCIAL_LINKS.web3formsKey} />
          <input type="hidden" name="subject" value="📌 NOVO PEDIDO DE ORÇAMENTO — ValeTech Soluções" />
          <input type="hidden" name="from_name" value="Site ValeTech" />

          {/* erro de envio */}
          {submitError && (
            <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 p-4 text-center text-sm font-medium text-red-700">
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
                Enviar pedido
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>

          <p className="text-center text-sm text-muted">
            Seus dados são usados só para eu te responder. Veja a{' '}
            <Link to="/privacidade" className="font-bold text-ink underline decoration-line underline-offset-4 hover:decoration-ink/40">
              política de privacidade
            </Link>
            .
          </p>
        </form>

        {/* outros caminhos */}
        <div className="mt-10 space-y-3 text-center text-[15px] text-muted">
          <p>
            Prefere conversar agora?{' '}
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="font-bold text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-ink/40">
              Falar no WhatsApp
            </a>
          </p>
          <p>
            Tem um projeto maior e quer detalhar tudo?{' '}
            <Link to="/briefing-completo" className="font-bold text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-ink/40">
              Preencher o briefing completo
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Briefing;
