import React, { useEffect, useState } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './contratos.css';
import { supabase } from './supabase';
import { checkIsAdmin, signOut } from './api';
import { BrandMark, FullPageMessage, GhostButton, Spinner } from './components/ui';
import Assinar from './pages/Assinar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Modelo from './pages/Modelo';
import NovoContrato from './pages/NovoContrato';
import NovoModelo from './pages/NovoModelo';
import ContratoDetalhe from './pages/ContratoDetalhe';
import Comprovante from './pages/Comprovante';

/* Área privada: fora do Google, fora do cache e sem vazar o endereço (que tem o token) por Referer. */
function usePrivatePage() {
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('contratos-theme');

    const setMeta = (name: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      const created = !el;
      if (!el) {
        el = document.createElement('meta');
        el.name = name;
        document.head.appendChild(el);
      }
      const previous = el.content;
      el.content = content;
      return () => {
        if (created) el?.remove();
        else if (el) el.content = previous;
      };
    };

    const previousTitle = document.title;
    document.title = 'Contratos — ValeTech';
    const restoreRobots = setMeta('robots', 'noindex, nofollow, noarchive, nosnippet');
    const restoreReferrer = setMeta('referrer', 'no-referrer');

    return () => {
      html.classList.remove('contratos-theme');
      document.title = previousTitle;
      restoreRobots();
      restoreReferrer();
    };
  }, []);
}

type AuthState = { status: 'loading' | 'out' | 'denied' | 'admin'; email: string };

function useAuthState(): AuthState {
  const [state, setState] = useState<AuthState>({ status: 'loading', email: '' });

  useEffect(() => {
    let alive = true;

    const evaluate = async (email: string | undefined) => {
      if (!email) {
        if (alive) setState({ status: 'out', email: '' });
        return;
      }
      const isAdmin = await checkIsAdmin();
      if (alive) setState({ status: isAdmin ? 'admin' : 'denied', email });
    };

    supabase.auth.getSession().then(({ data }) => evaluate(data.session?.user.email));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      // não chamar o Supabase direto dentro do callback (pode travar o cliente): adia para o próximo ciclo
      setTimeout(() => evaluate(session?.user.email), 0);
    });

    return () => {
      alive = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  return state;
}

const AdminShell: React.FC<{ email: string }> = ({ email }) => (
  <div className="min-h-screen min-h-dvh bg-white font-sans text-slate-900">
    <header className="no-print sticky top-0 z-20 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-5 py-3.5">
        <Link to="/contratos" className="flex items-center gap-3">
          <BrandMark size={36} />
          <div className="leading-tight">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">ValeTech</div>
            <div className="text-[14px] font-extrabold text-slate-900">Contratos</div>
          </div>
        </Link>
        <div className="ml-auto flex items-center gap-3">
          <span className="hidden text-sm text-slate-500 sm:block">{email}</span>
          <GhostButton onClick={() => signOut()}>Sair</GhostButton>
        </div>
      </div>
    </header>
    <main className="mx-auto max-w-5xl px-5 py-8 sm:py-10">
      <Routes>
        <Route path="/contratos" element={<Dashboard />} />
        <Route path="/contratos/novo-modelo" element={<NovoModelo />} />
        <Route path="/contratos/modelo/:slug" element={<Modelo />} />
        <Route path="/contratos/modelo/:slug/novo" element={<NovoContrato />} />
        <Route path="/contratos/contrato/:id" element={<ContratoDetalhe />} />
        <Route path="*" element={<Navigate to="/contratos" replace />} />
      </Routes>
    </main>
  </div>
);

const AdminArea: React.FC = () => {
  const auth = useAuthState();

  if (auth.status === 'loading') {
    return (
      <div className="flex min-h-screen min-h-dvh items-center justify-center bg-white text-slate-400">
        <Spinner className="h-7 w-7" />
      </div>
    );
  }
  if (auth.status === 'out') return <Login />;
  if (auth.status === 'denied') {
    return (
      <FullPageMessage title="Sem permissão" icon="🔒">
        A conta <b className="text-slate-700">{auth.email}</b> não tem acesso a esta área.
        <div className="mt-5">
          <GhostButton onClick={() => signOut()}>Sair</GhostButton>
        </div>
      </FullPageMessage>
    );
  }

  return (
    <Routes>
      <Route path="/contratos/comprovante/:id" element={<Comprovante />} />
      <Route path="*" element={<AdminShell email={auth.email} />} />
    </Routes>
  );
};

const ContratosApp: React.FC = () => {
  usePrivatePage();
  const { pathname } = useLocation();

  // a página de assinatura é pública (acesso por token, sem login)
  if (pathname.startsWith('/contratos/assinar/')) {
    return (
      <Routes>
        <Route path="/contratos/assinar/:token" element={<Assinar />} />
      </Routes>
    );
  }
  return <AdminArea />;
};

export default ContratosApp;
