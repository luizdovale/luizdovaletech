import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tech-dark border-t border-tech-blue/30 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-tech-gold/50 blur-[50px]"></div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
           <h3 className="font-display text-2xl font-bold text-white mb-2">
            luizdovale<span className="text-tech-electric">tech</span>
          </h3>
          <p className="text-tech-gray text-sm">Transformando código em futuro.</p>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-6">
                {/* Social Icons Mockup */}
                <a href="#" className="text-tech-gray hover:text-tech-gold transition-colors">GitHub</a>
                <a href="#" className="text-tech-gray hover:text-tech-gold transition-colors">LinkedIn</a>
                <a href="#" className="text-tech-gray hover:text-tech-gold transition-colors">Instagram</a>
            </div>
            <p className="text-xs text-tech-gray/50">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;