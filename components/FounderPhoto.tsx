import React, { useState } from 'react';
import { BRAND_INFO } from '../constants';

interface FounderPhotoProps {
  className?: string;
}

// Mostra a foto em BRAND_INFO.founderPhoto; enquanto o arquivo não existir, cai nas iniciais.
const FounderPhoto: React.FC<FounderPhotoProps> = ({ className = '' }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={BRAND_INFO.founder}
        className={`flex select-none items-center justify-center bg-surface font-display font-bold text-ink ${className}`}
      >
        LF
      </div>
    );
  }

  return (
    <img
      src={BRAND_INFO.founderPhoto}
      alt={`Foto de ${BRAND_INFO.founder}`}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
      draggable={false}
    />
  );
};

export default FounderPhoto;
