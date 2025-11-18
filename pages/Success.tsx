import React from 'react';
// @ts-ignore
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants';

const Success: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-tech-dark relative overflow-hidden px-4">
       {/* Decorative Glows */}
       <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tech-electric/20 rounded-full blur-[100px]"></div>
       <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-tech-gold/10 rounded-full blur-[100px]"></div>

       <div className="text-center relative z-10 max-w-lg">
         <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-green-500 animate-pulse">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
         </div>
         
         <h1 className="font-display text-4xl font-bold text-white mb-4">Briefing Enviado!</h1>
         <p className="text-tech-gray text-lg mb-8">
           Obrigado pelo interesse. Analisarei seus dados e entrarei em contato pelo WhatsApp o mais rápido possível para darmos vida ao seu projeto.
         </p>

         <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 bg-green-600 rounded font-bold text-white hover:bg-green-500 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              Chamar no WhatsApp Agora
            </a>
            <Link 
              to="/"
              className="px-8 py-3 border border-tech-gray/50 rounded font-bold text-tech-gray hover:text-white hover:border-white transition-colors"
            >
              Voltar ao Início
            </Link>
         </div>
       </div>
    </div>
  );
};

export default Success;