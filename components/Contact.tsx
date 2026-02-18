import React from 'react';
import { MessageCircle } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const sectors = ['Construcción', 'Autolavados', 'Manufactura', 'Retail / Gasolineras', 'Mantenimiento', 'Otro'];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-night relative">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Agendar Diagnóstico de Claridad
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Deje de operar por intuición. En 30 minutos, identificamos los cuellos de botella de su operación y trazamos su ruta de digitalización.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <form className="space-y-6 glass rounded-3xl p-8 md:p-12 shadow-2xl">
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

            {/* Sector Selection */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Sector / Industria</label>
              <div className="flex flex-wrap gap-2">
                {sectors.map((sector) => (
                  <label key={sector} className="cursor-pointer">
                    <input type="radio" name="sector" value={sector} className="peer hidden" />
                    <span className="inline-block px-4 py-2 rounded-lg border border-white/10 text-sm text-slate-400 peer-checked:bg-electric/10 peer-checked:border-electric/30 peer-checked:text-white transition-all hover:border-white/20">
                      {sector}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Su Reto Principal</label>
              <textarea
                className="w-full bg-night/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/50 transition-all placeholder:text-slate-700 h-32 resize-none font-light"
                placeholder="Ej. Necesito ver mis costos de obra en tiempo real..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button type="submit" className="flex-1 bg-white text-night font-bold py-4 rounded-lg hover:bg-slate-200 transition-colors shadow-lg shadow-white/5 uppercase tracking-wide text-sm">
                Agendar Diagnóstico de Claridad
              </button>
              <a
                href="https://wa.me/524771234567?text=Hola%2C%20me%20interesa%20un%20Diagn%C3%B3stico%20de%20Claridad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-all text-sm font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
