import React, { useEffect, useRef, useState } from 'react';
import { HardHat, Car, Wrench, ShoppingBag, Fuel, Hotel, Quote } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const AnimatedCounter: React.FC<{ target: string; suffix?: string; duration?: number }> = ({
  target,
  suffix = '',
  duration = 2000,
}) => {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numericTarget = parseInt(target.replace(/\D/g, ''), 10);
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * numericTarget);
            setDisplay(String(current));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [target, duration]);

  const prefix = target.startsWith('+') ? '+' : '';

  return (
    <span ref={ref} className="stat-number">
      {prefix}{display}{suffix}
    </span>
  );
};

const stats = [
  { value: '6', suffix: '+', label: 'Sectores Transformados', icon: <HardHat className="w-5 h-5" /> },
  { value: '80', suffix: '%', label: 'Ahorro Promedio en Tiempo', icon: <Fuel className="w-5 h-5" /> },
  { value: '+40', suffix: '%', label: 'Incremento en Alcance', icon: <ShoppingBag className="w-5 h-5" /> },
  { value: '24', suffix: 'h', label: 'Cobro Post-Servicio', icon: <Wrench className="w-5 h-5" /> },
];

const testimonials = [
  {
    quote: 'Antes volábamos a ciegas. Hoy veo la rentabilidad de cada obra en tiempo real desde mi celular. Trinity cambió la forma en que tomo decisiones.',
    name: 'Ing. Roberto M.',
    role: 'Director General — Constructora',
    icon: <HardHat className="w-5 h-5" />,
  },
  {
    quote: 'Pasamos de manejar 3 sucursales con hojas de Excel a una plataforma que nos da control total. La inversión se pagó sola en 2 meses.',
    name: 'Carlos V.',
    role: 'Fundador — Cadena de Autolavados',
    icon: <Car className="w-5 h-5" />,
  },
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="text-center p-6 rounded-2xl glass glass-hover">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-electric/10 text-electric mb-4 border border-electric/20">
                  {stat.icon}
                </div>
                <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonials */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">Lo que dicen nuestros socios</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="glass glass-hover rounded-3xl p-8 md:p-10 relative">
                <Quote className="w-8 h-8 text-electric/20 mb-4" />
                <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric/20 to-cyan-500/20 flex items-center justify-center text-electric border border-electric/20">
                    {t.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{t.name}</p>
                    <p className="text-slate-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
