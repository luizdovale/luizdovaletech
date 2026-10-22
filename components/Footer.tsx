import React from 'react';
import { SOCIAL_LINKS, BRAND_INFO, NAV_LINKS, SERVICES } from '../constants';
// @ts-ignore
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogoMain } from './Logos';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const linkClasses = 'cursor-pointer text-left text-[15px] text-muted transition-colors hover:text-ink';

  const contactLinks = [
    { label: 'WhatsApp', href: SOCIAL_LINKS.whatsapp },
    { label: 'E-mail', href: `mailto:${BRAND_INFO.contactEmail}` },
    { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
    { label: 'Instagram', href: SOCIAL_LINKS.instagram },
    { label: 'GitHub', href: SOCIAL_LINKS.github },
  ];

  return (
    <footer className="border-t border-line bg-white">
      <div className="container mx-auto max-w-7xl px-6 pb-8 pt-16 md:px-8">
        <div className="mb-14 grid gap-12 md:grid-cols-12">
          {/* Marca */}
          <div className="space-y-5 md:col-span-4">
            <button onClick={handleScrollToTop} className="cursor-pointer" aria-label="Voltar ao topo">
              <LogoMain className="h-8" />
            </button>
            <p className="max-w-xs text-[15px] leading-relaxed text-muted">
              Sistemas, sites e aplicativos sob medida para empresas e profissionais que querem trabalhar melhor.
            </p>
            <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3.5 py-1.5 text-[13px] font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-ok" aria-hidden="true" />
              Disponível para novos projetos
            </span>
          </div>

          {/* Navegação */}
          <div className="md:col-span-2">
            <h4 className="mb-4 text-[13px] font-bold uppercase tracking-[0.1em] text-ink">Navegação</h4>
            <nav className="flex flex-col gap-3" aria-label="Rodapé">
              <button onClick={handleScrollToTop} className={linkClasses}>Início</button>
              {NAV_LINKS.map((link) => (
                <button key={link.id} onClick={() => handleScrollTo(link.id)} className={linkClasses}>
                  {link.label}
                </button>
              ))}
              <Link to="/sobre" className={linkClasses}>Minha história</Link>
            </nav>
          </div>

          {/* Serviços */}
          <div className="md:col-span-3">
            <h4 className="mb-4 text-[13px] font-bold uppercase tracking-[0.1em] text-ink">Serviços</h4>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button onClick={() => handleScrollTo('services')} className={linkClasses}>
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="md:col-span-3">
            <h4 className="mb-4 text-[13px] font-bold uppercase tracking-[0.1em] text-ink">Fale comigo</h4>
            <ul className="flex flex-col gap-3">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noreferrer"
                    className={linkClasses}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Link to="/briefing" className="btn btn-dark btn-sm mt-6">
              Pedir orçamento
            </Link>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="flex flex-col gap-4 border-t border-line pt-6 text-[13px] text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {BRAND_INFO.year} {BRAND_INFO.fullName}. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>
              {BRAND_INFO.location} · {BRAND_INFO.coverage}
            </span>
            <Link to="/privacidade" className="transition-colors hover:text-ink">
              Política de privacidade
            </Link>
            <button onClick={handleScrollToTop} className="cursor-pointer transition-colors hover:text-ink">
              Voltar ao topo ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
