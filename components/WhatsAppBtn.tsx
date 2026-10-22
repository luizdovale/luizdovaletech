import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { WhatsAppIcon } from './Icons';

const WhatsAppBtn: React.FC = () => {
  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com o Luiz pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6"
    >
      <div className="relative flex items-center">
        {/* Dica ao passar o mouse */}
        <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full border border-line bg-white px-4 py-2 text-[13px] font-bold text-ink opacity-0 shadow-float transition-opacity duration-300 group-hover:opacity-100 md:block">
          Falar com o Luiz
        </span>

        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-white text-[#1FA855] shadow-float transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lift">
          <WhatsAppIcon className="h-7 w-7" />
        </span>
      </div>
    </a>
  );
};

export default WhatsAppBtn;
