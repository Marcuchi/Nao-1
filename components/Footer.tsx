import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#inicio" className="flex items-center gap-3 mb-6 group">
               {/* Small Footer Logo */}
               <div className="w-12 h-12 rounded-full border border-yellow-500 bg-black flex items-center justify-center shrink-0 overflow-hidden">
                 <Logo className="w-full h-full" />
               </div>
               <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-white leading-none group-hover:text-yellow-500 transition-colors">
                  CARCEGLIA <span className="text-sky-500">TEAM</span>
                </span>
                <span className="text-[10px] text-yellow-500 font-bold tracking-widest uppercase">
                  Brazilian Jiu Jitsu
                </span>
               </div>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed">
              El evento más importante del año para la familia Carceglia. Técnica, respeto y evolución constante en el tatami.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li><a href="#inicio" className="hover:text-yellow-500 transition-colors">Inicio</a></li>
              <li><a href="#arte" className="hover:text-yellow-500 transition-colors">Sobre el Arte</a></li>
              <li><a href="#entrevistas" className="hover:text-yellow-500 transition-colors">Entrevistas</a></li>
              <li><a href="#ubicacion" className="hover:text-yellow-500 transition-colors">Ubicación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-sky-500" />
                <span>contacto@carcegliajjs.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-sky-500" />
                <span>+54 11 1234 5678</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/carcegliateaminternational?igsh=MXcwZHZra3BpdmQ2ag==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-yellow-500 hover:text-slate-900 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-yellow-500 hover:text-slate-900 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-yellow-500 hover:text-slate-900 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>&copy; 2024 Carceglia Team. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-slate-400">Política de Privacidad</a>
            <a href="#" className="hover:text-slate-400">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};