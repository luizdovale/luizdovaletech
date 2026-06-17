import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import ServicesSection from '../components/sections/ServicesSection';
import WhyValetech from '../components/sections/WhyValetech';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import FAQSection from '../components/sections/FAQSection';
import FinalCTA from '../components/sections/FinalCTA';

const Home: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-tech-dark select-none md:select-auto">
      <Hero />
      <About />
      <ServicesSection />
      <WhyValetech />
      <SkillsSection />
      <ProjectsSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
};

export default Home;