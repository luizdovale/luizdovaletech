import React from 'react';
import PageMeta from '../components/PageMeta';
import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import HowItWorks from '../components/sections/HowItWorks';
import About from '../components/sections/About';
import FAQSection from '../components/sections/FAQSection';
import FinalCTA from '../components/sections/FinalCTA';

const Home: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black select-none md:select-auto">
      <PageMeta
        title="ValeTech Soluções — Sistemas, sites e aplicativos sob medida | Luiz Fernando"
        description="Sou o Luiz, desenvolvedor. Crio sistemas de gestão, sites, aplicativos e automações sob medida para empresas e profissionais. Fale comigo no WhatsApp ou peça um orçamento."
        path="/"
      />
      <Hero />
      <ServicesSection />
      <ProjectsSection />
      <HowItWorks />
      <About />
      <FAQSection />
      <FinalCTA />
    </div>
  );
};

export default Home;
