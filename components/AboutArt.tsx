import React from 'react';

export const AboutArt: React.FC = () => {
  return (
    <section id="arte" className="py-24 bg-slate-950 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            {/* Removed rotation classes (rotate-3, group-hover:rotate-1) for a vertical, static look */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-yellow-500/20 to-sky-500/20 rounded-2xl" />
            <img 
              src="https://scontent.fcor10-3.fna.fbcdn.net/v/t51.82787-15/588986738_18542660293062517_4988684779670039708_n.jpg?stp=dst-jpegr_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG_ZD7Mg-JOR2g-NG2J7AN3HcZYtMyh6gAdxli0zKHqAN7dOJAO14v71H8TqO2NrGneJyDJfmbtF9xn8D3qgBtf&_nc_ohc=Tx56FV3txdgQ7kNvwHAc76H&_nc_oc=AdlxCtDakLccmsCd8Ue8-c3MVi4-sBM71E3MkREKwH_J-Q6O9rWtgbQX-i6nRH8KmOc&_nc_zt=23&se=-1&_nc_ht=scontent.fcor10-3.fna&_nc_gid=U9zHJBFrO7epXoVIDLNcKg&oh=00_AfktrENQC4f-1peMPMVIN4HOiGw8tctM9TKQHgbJxIm5ig&oe=693D2FB7" 
              alt="Combate de JJB" 
              className="relative rounded-2xl shadow-2xl hover:grayscale-0 transition-all duration-700 object-cover h-[500px] w-full border border-slate-800"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              Sobre el <span className="text-yellow-500">Arte</span>
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                El Jiu-Jitsu Brasileño (JJB) se encuentra en una etapa de crecimiento sostenido en Argentina y se posiciona como una disciplina con impacto tanto deportivo como social. Su relevancia no reside únicamente en el rendimiento físico, sino también en los valores, hábitos y procesos de transformación personal que promueve. En la academia Carceglia Team esta dimensión formativa es especialmente visible: la primacía de la técnica por sobre la fuerza, la disciplina, el respeto y la idea de “aprender a estar cómodos en la incomodidad”, como expresa su fundador, César Carceglia, constituyen pilares fundamentales del entrenamiento. Estos elementos reflejan el carácter integral del arte marcial y su aporte al desarrollo individual.
              </p>
              <p>
                Asimismo, el JJB funciona como una herramienta de inclusión social. En sus espacios se conforman comunidades diversas, integradas por personas de distintas edades, géneros y contextos, unidas por un marco común de respeto y cooperación. La expansión de esta mentalidad resulta significativa en términos sociales, educativos y comunitarios, ya que fomenta la resiliencia, la autoconfianza y la capacidad de adaptación frente a los desafíos cotidianos. De esta manera, el Jiu-Jitsu contribuye a la formación de individuos capaces de generar aportes positivos en sus ámbitos de pertenencia.
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