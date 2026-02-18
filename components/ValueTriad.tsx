import React from 'react';
import { Wind, Crosshair, Users } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';
import { Logo } from './ui/Logo';

const pillars = [
  {
    icon: <Wind className="w-6 h-6" />,
    title: 'Agilidad Operativa',
    description: 'Eliminamos procesos lentos antes de digitalizarlos. No solo aceleramos; simplificamos para que su equipo fluya.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    icon: <Crosshair className="w-6 h-6" />,
    title: 'Precisión Tecnológica',
    description: 'Soluciones robustas que crecen con el negocio. Construimos herramientas sin margen de error para decisiones críticas.',
    color: 'text-white',
    bg: 'bg-white/10',
    border: 'border-white/10',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Cercanía Estratégica',
    description: 'Trato directo con los dueños. Entendemos que detrás de cada sistema hay una visión de negocio que debemos proteger.',
    color: 'text-electric',
    bg: 'bg-electric/10',
    border: 'border-electric/20',
  }
];

const ValueTriad: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none transform scale-150 mix-blend-overlay">
        <Logo className="w-[600px] h-[600px] text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-xs font-bold text-slate-500 tracking-[0.2em] uppercase mb-4">La Tríada Trinity</h2>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-white">Ingeniería aplicada al negocio</h3>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="h-full flex flex-col items-center text-center p-8 rounded-2xl glass glass-hover backdrop-blur-sm">
                <div className={`w-16 h-16 rounded-2xl ${pillar.bg} ${pillar.color} border ${pillar.border} flex items-center justify-center mb-6 shadow-lg shadow-black/50`}>
                  {pillar.icon}
                </div>
                <h4 className="font-display text-xl font-bold text-white mb-4">{pillar.title}</h4>
                <p className="text-slate-400 leading-relaxed font-light">{pillar.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueTriad;
