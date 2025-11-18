import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Briefing from './pages/Briefing';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import WhatsAppBtn from './components/WhatsAppBtn';

const App: React.FC = () => {
  // Theme Logic
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      // Default to dark as per brand identity, unless explicitly light
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Router>
      <div className="font-sans bg-gray-50 dark:bg-tech-dark min-h-screen text-slate-800 dark:text-slate-200 selection:bg-tech-electric selection:text-white transition-colors duration-300">
        <Navbar toggleTheme={toggleTheme} isDark={isDark} />
        <main>
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