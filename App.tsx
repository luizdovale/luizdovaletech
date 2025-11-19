import React, { useEffect } from 'react';
// @ts-ignore
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Briefing from './pages/Briefing';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import WhatsAppBtn from './components/WhatsAppBtn';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
  // Force Dark Mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
    // Optional: Clear legacy theme preference or enforce dark in storage
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <Router>
      <div className="font-sans bg-tech-dark min-h-screen text-slate-200 selection:bg-tech-electric selection:text-white relative">
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
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