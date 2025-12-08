import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre el Arte', href: '#arte' },
  { label: 'Historia', href: '#historia' },
  { label: 'Entrevistas', href: '#entrevistas' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      // Controla el fondo del navbar
      setIsScrolled(window.scrollY > 50);

      // Lógica para detectar la sección activa (Scroll Spy)
      const scrollPosition = window.scrollY + 150; // Offset para que el cambio ocurra antes de llegar arriba del todo

      for (const item of navItems) {
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      }
      
      // Caso especial: si estamos al final de la página, activar 'contacto'
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection('contacto');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al montar para setear el estado inicial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Altura aproximada del navbar para el offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Actualizar URL sin salto
      window.history.pushState(null, '', href);
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#inicio" 
          onClick={(e) => scrollToSection(e, '#inicio')}
          className="flex items-center gap-3 group"
        >
          {/* Carceglia JJS Logo SVG */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)] bg-black flex items-center justify-center">
             <svg viewBox="0 0 100 100" className="w-full h-full p-1">
              <circle cx="50" cy="50" r="48" fill="black" />
              <path d="M50 15 L85 82 L15 82 Z" fill="#EAB308" />
              <circle cx="50" cy="58" r="14" fill="#0EA5E9" />
            </svg>
          </div>
          <div className="flex flex-col">
             <span className="text-lg font-black tracking-tighter text-white leading-none group-hover:text-yellow-500 transition-colors">
              CARCEGLIA <span className="text-sky-500 group-hover:text-sky-400">JJS</span>
            </span>
            <span className="text-[10px] text-yellow-500 font-bold tracking-widest uppercase">
              Brazilian Jiu Jitsu
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-sm font-semibold transition-colors uppercase tracking-widest relative group ${
                  isActive ? 'text-yellow-500' : 'text-slate-300 hover:text-yellow-500'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-sky-500 transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-yellow-500 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-4 flex flex-col space-y-4 shadow-xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`block text-center py-2 font-bold transition-colors ${
                  isActive ? 'text-yellow-500 bg-slate-800 rounded-lg' : 'text-slate-300 hover:text-yellow-500'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};