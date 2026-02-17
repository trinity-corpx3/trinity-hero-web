import React from 'react';
import ScrollReveal from './ui/ScrollReveal';

const BoutiqueInfo: React.FC = () => {
  return (
    <section className="py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
        
        <div className="w-full md:w-1/2">
          <ScrollReveal>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
               No somos una <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-600">fábrica de software.</span>
             </h2>
             <div className="h-1 w-20 bg-electric rounded-full"></div>
          </ScrollReveal>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <ScrollReveal delay={200}>
            <h3 className="text-2xl text-white font-semibold">Somos su brazo tecnológico.</h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              A diferencia de las grandes consultoras masivas, en <span className="text-white">Trinity Corp</span> seleccionamos proyectos donde nuestra intervención genere un cambio real en el estilo de vida del dueño y la salud financiera de la empresa.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
               Calidad sobre volumen. Resultados sobre promesas.
            </p>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default BoutiqueInfo;