import React from 'react';

// Enlace optimizado para visualización directa desde Google Drive (Thumbnail endpoint con tamaño grande)
const LOGO_SRC = "https://drive.google.com/thumbnail?id=1lcX9jFMz8OVYX6LSSNcosVEjxwfaNLkx&sz=w1000";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src={LOGO_SRC} 
      alt="Cesar Carceglia Team Logo" 
      className={`object-contain ${className}`}
    />
  );
};