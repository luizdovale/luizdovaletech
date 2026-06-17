import React, { useEffect } from 'react';
// @ts-ignore
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Briefing from './pages/Briefing';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import WhatsAppBtn from './components/WhatsAppBtn';
import ParticleBackground from './components/ParticleBackground';

// Reset scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  // Force Dark Mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
    // Optional: Clear legacy theme preference or enforce dark in storage
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
      <div className="font-sans bg-tech-dark min-h-screen text-slate-200 selection:bg-tech-electric selection:text-white relative">
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/briefing" element={<Briefing />} />
            <Route path="/sucesso" element={<Success />} />
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