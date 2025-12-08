import React from 'react';

export const AboutArt: React.FC = () => {
  return (
    <section id="arte" className="py-24 bg-slate-950 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-yellow-500/20 to-sky-500/20 rounded-2xl rotate-3 group-hover:rotate-1 transition-transform" />
            <img 
              src="https://picsum.photos/id/160/800/1000" 
              alt="Combate de JJB" 
              className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover h-[500px] w-full border border-slate-800"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              El Estilo <span className="text-yellow-500">Carceglia</span>: <br/>
              <span className="text-sky-500">Eficiencia y Control</span>
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Para el <strong className="text-white">Carceglia Team</strong>, el Jiu-Jitsu Brasileño es más que un sistema de combate; es una herramienta de transformación personal.
              </p>
              <p>
                A diferencia de otras disciplinas que priorizan los golpes, el JJB promueve el concepto de que una persona más pequeña y débil puede defenderse con éxito contra un agresor más grande y fuerte mediante el uso de la técnica adecuada, el apalancamiento y, sobre todo, llevando la lucha al suelo.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="p-4 border border-slate-800 border-l-4 border-l-yellow-500 rounded-lg bg-slate-900/50 hover:bg-slate-900 transition-colors">
                  <h3 className="text-white font-bold text-xl mb-2">Técnica</h3>
                  <p className="text-sm">Precisión técnica sobre fuerza bruta, el sello de nuestra academia.</p>
                </div>
                <div className="p-4 border border-slate-800 border-l-4 border-l-sky-500 rounded-lg bg-slate-900/50 hover:bg-slate-900 transition-colors">
                  <h3 className="text-white font-bold text-xl mb-2">Comunidad</h3>
                  <p className="text-sm">Un equipo unido donde cada cinturón ayuda al otro a crecer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};