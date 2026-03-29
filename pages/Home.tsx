import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactCTA from '../components/sections/ContactCTA';

const Home: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-tech-dark select-none md:select-auto">
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <ContactCTA />
    </div>
  );
};

export default Home;