import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const WhatsAppBtn: React.FC = () => {
  return (
    <a 
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-tech-gold rounded-full blur opacity-40 group-hover:opacity-70 animate-pulse"></div>
        <button className="relative w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg transition-transform transform group-hover:scale-110 border-2 border-tech-gold">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
             <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.466c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.68-2.03-.967-.272-.297-.471-.446-.966-.446-.495 0-.867.198-1.313.693-.446.495-1.707 1.671-1.707 4.071s1.746 4.716 1.993 5.063c.248.347 3.438 5.253 8.327 7.366 4.889 2.113 4.889 1.412 5.78 1.336.891-.075 2.894-1.19 3.316-2.338.422-1.149.422-2.133.297-2.338z"/>
          </svg>
        </button>
      </div>
    </a>
  );
};

export default WhatsAppBtn;