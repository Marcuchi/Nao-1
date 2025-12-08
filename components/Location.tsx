import React from 'react';
import { MapPin, Clock, Calendar, ExternalLink } from 'lucide-react';

export const Location: React.FC = () => {
  const mapLink = "https://www.google.com/maps/search/?api=1&query=Av.+Ejército+Argentino+1067,+Córdoba";

  return (
    <section id="ubicacion" className="py-24 bg-slate-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Map Area */}
          <div className="h-96 lg:h-auto min-h-[400px] relative bg-slate-800 group">
             {/* Map updated to Av. Ejército Argentino 1067, Córdoba */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.670679803023!2d-64.23705482436186!3d-31.39562197427142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298c078021f9d%3A0x6a11756535567d26!2sAv.%20Ej%C3%A9rcito%20Argentino%201067%2C%20X5000%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
              allowFullScreen={false} 
              loading="lazy"
              title="Mapa del Evento"
              className="group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <a 
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 left-4 bg-sky-600 text-white font-bold px-4 py-2 rounded-lg shadow-lg border border-sky-400 hover:bg-sky-500 transition-colors z-10 flex items-center gap-2"
            >
              <MapPin size={16} />
              <span>Ver Ubicación Exacta</span>
            </a>
          </div>

          {/* Details */}
          <div className="p-8 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-2">¿Cómo llegar?</h2>
            <p className="text-yellow-500 font-medium mb-8 uppercase tracking-widest text-sm">Meeting Anual Carceglia Team</p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-slate-900 rounded-lg text-sky-500 border border-slate-800 group-hover:border-sky-500 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Dirección</h4>
                  <a 
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-yellow-500 transition-colors flex items-center gap-1 group-hover:underline"
                  >
                    Av. Ejército Argentino 1067, Córdoba
                    <ExternalLink size={14} className="inline ml-1" />
                  </a>
                  <p className="text-sm text-slate-500 mt-2">Sede del Evento</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-slate-900 rounded-lg text-sky-500 border border-slate-800 group-hover:border-sky-500 transition-colors">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Fecha</h4>
                  <p className="text-slate-400">21 y 22 de noviembre, 2025</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-slate-900 rounded-lg text-sky-500 border border-slate-800 group-hover:border-sky-500 transition-colors">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Horarios</h4>
                  <p className="text-slate-400">Apertura: 18:00</p>
                  <p className="text-slate-400">Cierre: 22:00</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};