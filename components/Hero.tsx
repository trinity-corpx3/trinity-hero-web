import React from 'react';
import { ArrowRight, ChevronRight, ChevronDown, Building2, Zap, TrendingUp } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const stats = [
  { icon: <Building2 className="w-4 h-4" />, value: '5+', label: 'Sectores', animClass: 'float-animation' },
  { icon: <Zap className="w-4 h-4" />, value: '80%', label: 'Ahorro Promedio', animClass: 'float-animation-delayed' },
  { icon: <TrendingUp className="w-4 h-4" />, value: '+40%', label: 'Alcance', animClass: 'float-animation-delayed-2' },
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Ambient gradient mesh */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-electric/[0.07] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16">
          <div className="max-w-4xl flex-1">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-slate-300 text-xs font-semibold tracking-wider uppercase mb-8">
                <span className="relative w-1.5 h-1.5 rounded-full bg-electric">
                  <span className="absolute inset-0 rounded-full bg-electric animate-ping" />
                </span>
                Consultoría Tecnológica Elite
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[1.05] mb-4">
                Claridad Operativa. <br />
                <span className="text-shimmer">Rentabilidad Real.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="text-xs font-semibold text-electric/60 tracking-[0.25em] uppercase mb-8">
                Desde el Bajío para las PyMEs de México
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg md:text-2xl text-slate-400 max-w-3xl leading-relaxed mb-10 font-light">
                Transformamos el caos operativo de su empresa en una estructura digital de alto rendimiento. Llevamos las estrategias tecnológicas de las top industrias al corazón de las PyMEs.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a href="#contact" className="group relative px-8 py-4 bg-white text-night font-bold rounded-full text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                  <span className="relative z-10 flex items-center gap-2">
                    Agendar Diagnóstico de Claridad
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a href="#cases" className="px-8 py-4 glass glass-hover text-white rounded-full text-lg transition-all flex items-center gap-2">
                  Ver Casos de Éxito
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Floating Stats */}
          <ScrollReveal delay={400} className="hidden lg:flex flex-col gap-4 min-w-[200px]">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`glass glass-hover rounded-2xl p-5 ${stat.animClass}`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-electric">{stat.icon}</span>
                  <span className="font-display text-2xl font-bold text-white stat-number">{stat.value}</span>
                </div>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 scroll-indicator">
        <span className="text-[10px] text-slate-600 uppercase tracking-[0.2em] font-semibold">Descubra cómo</span>
        <ChevronDown className="w-4 h-4 text-slate-600" />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-night to-transparent z-10" />
    </section>
  );
};

export default Hero;
