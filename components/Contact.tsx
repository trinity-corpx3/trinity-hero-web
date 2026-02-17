import React from 'react';
import ScrollReveal from './ui/ScrollReveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-night relative">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Agendar Diagnóstico de Claridad
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Deje de operar por intuición. En 30 minutos, identificamos los cuellos de botella de su operación y trazamos su ruta de digitalización.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <form className="space-y-6 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Nombre</label>
                <input 
                  type="text" 
                  className="w-full bg-night/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/50 transition-all placeholder:text-slate-700 font-light"
                  placeholder="Ej. Roberto Martínez"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Correo Corporativo</label>
                <input 
                  type="email" 
                  className="w-full bg-night/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/50 transition-all placeholder:text-slate-700 font-light"
                  placeholder="roberto@empresa.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Su Reto Principal</label>
              <textarea 
                className="w-full bg-night/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/50 transition-all placeholder:text-slate-700 h-32 resize-none font-light"
                placeholder="Ej. Necesito ver mis costos de obra en tiempo real..."
              ></textarea>
            </div>

            <button className="w-full bg-white text-night font-bold py-4 rounded-lg hover:bg-slate-200 transition-colors shadow-lg shadow-white/5 uppercase tracking-wide text-sm">
              Agendar Diagnóstico de Claridad
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;