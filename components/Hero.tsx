import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Logo } from './Logo';

const images = [
  "https://picsum.photos/id/1059/1920/1080", // Generic focus/people
  "https://picsum.photos/id/1025/1920/1080", // Wrapped/cloth texture like a Gi
  "https://picsum.photos/id/106/1920/1080",  // Dynamic movement
];

export const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-20">
      {/* Background Carousel */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          {/* Subtle Blue/Gold Overlay gradient for branding */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 to-sky-900/20 mix-blend-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Main Logo Display */}
        <div className="mb-6 md:mb-8 relative group cursor-default">
          <div className="absolute inset-0 bg-sky-500 blur-3xl opacity-20 rounded-full group-hover:opacity-30 transition-opacity"></div>
          <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full shadow-[0_0_30px_rgba(234,179,8,0.3)] bg-black overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
             <Logo className="w-full h-full" />
          </div>
        </div>

        <span className="inline-block py-1 px-4 border border-sky-500/50 bg-sky-500/10 text-sky-400 text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 md:mb-6 rounded-full backdrop-blur-sm">
          Informe Anual 2024
        </span>
        
        <h1 className="text-4xl md:text-7xl font-black text-white mb-4 md:mb-6 leading-tight tracking-tight uppercase">
          Carceglia <span className="text-yellow-500">Team</span><br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600 text-2xl md:text-5xl block mt-2">
            Brazilian Jiu Jitsu
          </span>
        </h1>
        
        <p className="text-base md:text-xl text-slate-300 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-light">
          Unión, Técnica y Honor. El encuentro definitivo para nuestra familia y la comunidad del arte suave.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0">
          <a 
            href="#ubicacion"
            className="inline-flex justify-center items-center gap-2 bg-yellow-500 text-slate-950 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.4)]"
          >
            Ver Ubicación
          </a>
          <a 
            href="#historia"
            className="inline-flex justify-center items-center gap-2 bg-transparent border border-sky-500 text-sky-400 font-bold py-3 px-8 rounded-full hover:bg-sky-500/10 transition-all hover:scale-105"
          >
            Nuestra Historia
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-sky-500 hidden md:block">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};