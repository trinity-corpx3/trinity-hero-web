import React from 'react';
import { Search, PenTool, Rocket } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const steps = [
  {
    number: '01',
    icon: <Search className="w-6 h-6" />,
    title: 'Diagnóstico de Claridad',
    description: 'En 30 minutos identificamos sus cuellos de botella, fugas de dinero y oportunidades de digitalización inmediata.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    number: '02',
    icon: <PenTool className="w-6 h-6" />,
    title: 'Diseño de Solución',
    description: 'Arquitectamos la herramienta exacta que su operación necesita. Sin deuda técnica. Sin funciones innecesarias.',
    color: 'text-electric',
    bg: 'bg-electric/10',
    border: 'border-electric/20',
  },
  {
    number: '03',
    icon: <Rocket className="w-6 h-6" />,
    title: 'Implementación & Acompañamiento',
    description: 'Entregamos, capacitamos y acompañamos. No desaparecemos después del deploy. Somos su brazo tecnológico permanente.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric/10 to-transparent -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-slate-500 tracking-[0.2em] uppercase mb-4">Cómo Trabajamos</h2>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight">De diagnóstico a resultados <br/>en semanas, no meses</h3>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline connector line (desktop) */}
          <div className="hidden md:block absolute top-[72px] left-0 right-0 h-px z-0">
            <ScrollReveal>
              <div className="w-full h-px bg-gradient-to-r from-cyan-400/30 via-electric/30 to-emerald-400/30 timeline-line" />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 200}>
                <div className="flex flex-col items-center text-center">
                  {/* Step number + icon */}
                  <div className="relative mb-8">
                    <div className={`w-[72px] h-[72px] rounded-2xl ${step.bg} ${step.color} border ${step.border} flex items-center justify-center shadow-lg shadow-black/30 bg-night`}>
                      {step.icon}
                    </div>
                    <span className={`absolute -top-2 -right-2 text-[10px] font-bold ${step.color} ${step.bg} border ${step.border} rounded-full w-6 h-6 flex items-center justify-center`}>
                      {step.number}
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-slate-400 leading-relaxed font-light max-w-xs">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
