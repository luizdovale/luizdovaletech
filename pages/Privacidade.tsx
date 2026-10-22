import React, { useEffect } from 'react';
// @ts-ignore
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { BRAND_INFO, SOCIAL_LINKS } from '../constants';

const UPDATED_AT = '21 de outubro de 2026';

const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="mb-4 font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">{children}</h2>
);

const List: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="ml-1 space-y-2.5">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3">
        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Privacidade: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mail = BRAND_INFO.contactEmail;

  return (
    <div className="relative bg-white pb-24 pt-32 sm:pt-36">
      <PageMeta
        title="Política de privacidade — ValeTech Soluções"
        description="Como a ValeTech Soluções coleta, usa e protege os dados de quem pede orçamento, fala pelo WhatsApp ou assina um contrato."
        path="/privacidade"
      />

      <div className="container mx-auto max-w-3xl px-6 md:px-8">
        <header className="mb-12 space-y-4">
          <span className="eyebrow block">Privacidade</span>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            Política de privacidade
          </h1>
          <p className="text-lg leading-relaxed text-muted">
            Aqui está, em linguagem simples, o que acontece com os seus dados quando você usa este site, fala comigo ou assina um contrato.
          </p>
          <p className="text-sm text-muted">Última atualização: {UPDATED_AT}</p>
        </header>

        {/* Resumo */}
        <div className="mb-14 rounded-[24px] bg-tint/60 p-7 sm:p-8">
          <h2 className="mb-4 font-display text-lg font-extrabold text-ink">Em resumo</h2>
          <List
            items={[
              'Peço só o que preciso para responder o seu pedido: nome, contato e a descrição do que você quer.',
              'Não vendo nem alugo os seus dados, e o site não usa cookies de publicidade nem de rastreamento.',
              'Você pode pedir a qualquer momento uma cópia, a correção ou a exclusão dos seus dados.',
            ]}
          />
        </div>

        <div className="space-y-12 text-base leading-relaxed text-muted [&_strong]:font-bold [&_strong]:text-ink">
          <section>
            <H2>1. Quem é o responsável</H2>
            <p>
              O responsável pelos dados é <strong>{BRAND_INFO.founder}</strong>, que atua com o nome <strong>{BRAND_INFO.fullName}</strong>, em {BRAND_INFO.location}. Para qualquer assunto sobre privacidade, escreva para{' '}
              <a href={`mailto:${mail}`} className="font-bold text-accent underline underline-offset-4">{mail}</a>.
            </p>
          </section>

          <section>
            <H2>2. Quais dados eu coleto e por quê</H2>
            <div className="space-y-5">
              <p><strong>Formulários de orçamento (curto e completo).</strong> Nome, WhatsApp ou telefone, e-mail (no formulário completo) e o que você escrever sobre o projeto. Uso para entender o seu pedido, responder e preparar a proposta.</p>
              <p><strong>Conversas por WhatsApp ou e-mail.</strong> O que você me enviar. Uso para atender você.</p>
              <p><strong>Assinatura online de contratos.</strong> Quando você assina um contrato pelo sistema da ValeTech, registro nome, CPF, data e hora, endereço IP e dados do aparelho. Esses registros servem para comprovar quem assinou e que o texto não foi alterado (Lei 14.063/2020 e MP 2.200-2/2001).</p>
              <p><strong>Dados técnicos da visita.</strong> Como em qualquer site, o servidor de hospedagem pode registrar endereço IP, tipo de navegador e horário do acesso, para manter o site seguro e funcionando. Eu não uso esses dados para traçar o seu perfil.</p>
            </div>
          </section>

          <section>
            <H2>3. Em que base legal eu me apoio</H2>
            <List
              items={[
                <>Seu <strong>consentimento</strong> ao enviar um formulário ou me chamar (Lei 13.709/2018, LGPD, art. 7º, I).</>,
                <>A <strong>preparação e a execução de um contrato</strong> com você (art. 7º, V).</>,
                <>O <strong>cumprimento de obrigações legais</strong>, como as fiscais (art. 7º, II), e o <strong>exercício de direitos</strong> em eventual disputa, usando os registros de assinatura (art. 7º, VI).</>,
              ]}
            />
          </section>

          <section>
            <H2>4. Com quem os dados passam</H2>
            <p className="mb-4">Eu não vendo os seus dados. Eles passam apenas por serviços que o site precisa para funcionar:</p>
            <List
              items={[
                <><strong>Web3Forms</strong>, que entrega os formulários na minha caixa de e-mail.</>,
                <><strong>Google (Gmail e Google Fonts)</strong>, que recebe os e-mails e entrega as fontes de letra do site.</>,
                <><strong>WhatsApp (Meta)</strong>, se você me chamar por lá.</>,
                <><strong>Vercel</strong>, que hospeda o site, e <strong>Supabase</strong>, que guarda os contratos assinados.</>,
              ]}
            />
            <p className="mt-4">
              Alguns desses serviços podem armazenar dados fora do Brasil. Também posso compartilhar informações com autoridades, quando a lei exigir.
            </p>
          </section>

          <section>
            <H2>5. Por quanto tempo eu guardo</H2>
            <p>
              Se você pediu um orçamento e não contratou, guardo o pedido pelo tempo necessário para responder e acompanhar a conversa. Se houver contrato, mantenho os dados durante o contrato e pelos prazos que a lei exige depois dele. Os registros de assinatura ficam guardados junto com o contrato, porque são a prova dele.
            </p>
          </section>

          <section>
            <H2>6. Os seus direitos</H2>
            <p className="mb-4">Pela LGPD (art. 18), você pode pedir a qualquer momento:</p>
            <List
              items={[
                'confirmação de que eu trato dados seus e acesso a eles;',
                'correção de dados incompletos ou errados;',
                'anonimização, bloqueio ou exclusão de dados desnecessários;',
                'portabilidade dos dados, informação sobre com quem eu os compartilho e retirada do consentimento.',
              ]}
            />
            <p className="mt-4">
              É só escrever para{' '}
              <a href={`mailto:${mail}`} className="font-bold text-accent underline underline-offset-4">{mail}</a>{' '}
              ou chamar no{' '}
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="font-bold text-accent underline underline-offset-4">WhatsApp</a>. Respondo em até 15 dias. Alguns dados, como os registros de um contrato assinado, precisam ser mantidos por obrigação legal.
            </p>
          </section>

          <section>
            <H2>7. Segurança</H2>
            <p>
              O site usa conexão criptografada (HTTPS), o acesso aos contratos é restrito e protegido por senha, e cada link de assinatura é único e tem prazo de validade. Nenhum sistema é totalmente imune a falhas, mas trabalho para reduzir os riscos e, se houver um incidente que afete você, aviso.
            </p>
          </section>

          <section>
            <H2>8. Crianças e adolescentes</H2>
            <p>O site e os serviços são voltados a empresas e profissionais. Não coleto dados de crianças de propósito.</p>
          </section>

          <section>
            <H2>9. Mudanças nesta política</H2>
            <p>
              Se eu mudar algo importante, atualizo esta página e a data no topo. A versão em vigor é sempre a que está aqui.
            </p>
          </section>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">Ficou com alguma dúvida? Pergunte sem compromisso.</p>
          <Link to="/briefing" className="btn btn-dark btn-sm self-start">
            Pedir orçamento
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Privacidade;
