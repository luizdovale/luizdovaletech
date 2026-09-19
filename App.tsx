import React, { useEffect } from 'react';
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
import ParticleBackground from './components/ParticleBackground';

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

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      <div className="font-sans bg-black min-h-screen text-zinc-200 selection:bg-white selection:text-black relative">
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/briefing" element={<Briefing />} />
            <Route path="/briefing-completo" element={<BriefingCompleto />} />
            <Route path="/sucesso" element={<Success />} />
            {/* Blog escondido até existir o primeiro artigo de verdade (pages/Blog.tsx e BlogPost.tsx continuam no projeto). */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <WhatsAppBtn />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
