import React from 'react';

const events = [
  { 
    year: '1914', 
    title: 'Orígenes', 
    desc: 'Mitsuyo Maeda llega a Brasil, conoce a Gastao Gracie quien le enseña a su hijo Carlos Gracie. Pero el que perfecciona la técnica fue su otro hijo Helio Gracie quien más tarde planta la semilla de lo que sería el Jiu-Jitsu Brasileño.' 
  },
  { 
    year: 'Fundación', 
    title: 'Nace Carceglia Team', 
    desc: 'El Mestre Cesar Carceglia funda la academia en 2014, logrando introducir el JJB en Córdoba.' 
  },
  { 
    year: 'Expansión', 
    title: 'Crecimiento Regional', 
    desc: 'Córdoba al ser una ciudad universitaria le da la oportunidad de al Mestre Cesar de tener alumnos de todos lados del país, los cuales al volver llevaban esta disciplina a sus ciudades.' 
  },
  { 
    year: '2025', 
    title: 'Encuentro Anual', 
    desc: 'Esta expansión de la academia se hace más presente que nunca al tener el Meeting Anual. Este año se presentaron mas de 200 personas de todas las filiales de Carceglia Team, viniendo de varias provincias de país.' 
  },
];

export const History: React.FC = () => {
  return (
    <section id="historia" className="py-24 bg-slate-900 relative overflow-hidden scroll-mt-24">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestro Legado</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Desde las raíces del arte suave hasta la consolidación del <span className="text-sky-500 font-semibold">Carceglia Team</span>.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-700 hidden md:block"></div>

          <div className="space-y-12">
            {events.map((event, index) => {
               const isEven = index % 2 === 0;
               const accentColor = isEven ? 'text-yellow-500 border-yellow-500 bg-yellow-500' : 'text-sky-500 border-sky-500 bg-sky-500';
               const borderColor = isEven ? 'hover:border-yellow-500/50' : 'hover:border-sky-500/50';
               
               return (
                <div key={index} className={`flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-5/12"></div>
                  
                  <div className={`relative z-10 w-10 h-10 rounded-full ${accentColor} flex items-center justify-center border-4 border-slate-900 shrink-0 mb-4 md:mb-0 shadow-lg`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  <div className={`w-full md:w-5/12 bg-slate-800 p-6 rounded-xl border border-slate-700 ${borderColor} transition-all duration-300 shadow-lg`}>
                    <span className={`font-bold text-xl block mb-2 ${isEven ? 'text-yellow-500' : 'text-sky-500'}`}>{event.year}</span>
                    <h3 className="text-white font-bold text-lg mb-2">{event.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};