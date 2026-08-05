import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import WhyValetech from '../components/sections/WhyValetech';
import SkillsSection from '../components/sections/SkillsSection';
import DigitalPresence from '../components/sections/DigitalPresence';
import FAQSection from '../components/sections/FAQSection';
import FinalCTA from '../components/sections/FinalCTA';

const Home: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black select-none md:select-auto">
      <Hero />
      <About />
      <ServicesSection />
      <ProjectsSection />
      <WhyValetech />
      <SkillsSection />
      <DigitalPresence />
      <FAQSection />
      <FinalCTA />
    </div>
  );
};

export default Home;