import React, { Suspense, useEffect } from 'react';
// @ts-ignore
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Briefing from './pages/Briefing';
import BriefingCompleto from './pages/BriefingCompleto';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import WhatsAppBtn from './components/WhatsAppBtn';
import Privacidade from './pages/Privacidade';

// Área privada de contratos (/contratos): carregada só quando alguém acessa, para não pesar no site normal.
const ContratosApp = React.lazy(() => import('./contratos/ContratosApp'));

// Ao trocar de rota volta ao topo, ou rola até a seção pedida em navigate('/', { state: { scrollTo: id } }).
const ScrollToTop: React.FC = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    const targetId = (state as { scrollTo?: string } | null)?.scrollTo;
    const target = targetId ? document.getElementById(targetId) : null;

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
};

// O site público tem menu, rodapé e WhatsApp. As páginas /contratos têm tema próprio e não têm nada disso.
const AppShell: React.FC = () => {
  const { pathname } = useLocation();
  const isContracts = pathname === '/contratos' || pathname.startsWith('/contratos/');
  // nas páginas de formulário o botão flutuante cobriria os campos (e a própria página já oferece o WhatsApp)
  const hideWhatsApp = pathname.startsWith('/briefing') || pathname === '/sucesso';

  if (isContracts) {
    return (
      <Suspense fallback={<div className="min-h-screen min-h-dvh bg-white" />}>
        <ContratosApp />
      </Suspense>
    );
  }

  return (
    <div className="relative min-h-screen bg-white font-sans text-ink">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/briefing" element={<Briefing />} />
          <Route path="/briefing-completo" element={<BriefingCompleto />} />
          <Route path="/sucesso" element={<Success />} />
          <Route path="/privacidade" element={<Privacidade />} />
          {/* Blog escondido até existir o primeiro artigo de verdade (pages/Blog.tsx e BlogPost.tsx continuam no projeto). */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!hideWhatsApp && <WhatsAppBtn />}
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      <AppShell />
    </Router>
  );
};

export default App;
