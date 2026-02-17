import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Grid Pattern (Subtle) */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-5xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold tracking-wider uppercase mb-8 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse"></span>
              Consultoría Tecnológica Elite
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[1.05] mb-8">
              Claridad Operativa. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan-400">Rentabilidad Real.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg md:text-2xl text-slate-400 max-w-3xl leading-relaxed mb-10 font-light">
              Transformamos el caos operativo de su empresa en una estructura digital de alto rendimiento. Llevamos las estrategias tecnológicas de las top industrias al corazón de las PyMEs en México.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a href="#contact" className="group relative px-8 py-4 bg-white text-night font-bold rounded-full text-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <span className="relative z-10 flex items-center gap-2">
                  Agendar Diagnóstico de Claridad
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a href="#cases" className="px-8 py-4 bg-transparent border border-white/10 text-white rounded-full text-lg hover:bg-white/5 transition-all flex items-center gap-2">
                Ver Casos de Éxito
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Decorative gradient at bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-night to-transparent z-10"></div>
    </section>
  );
};

export default Hero;