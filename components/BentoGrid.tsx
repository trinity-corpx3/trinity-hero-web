import React, { useEffect, useRef, useState } from 'react';
import { HardHat, Car, Wrench, ShoppingBag, Gauge, Hotel } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';
import CursorGlow from './ui/CursorGlow';

const AnimatedBar: React.FC<{ label: string; val: number; color: string; delay: number }> = ({ label, val, color, delay }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setInView(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [delay]);

  return (
    <div ref={ref} className="group/bar">
      <div className="flex justify-between mb-1">
        <span className="text-slate-500">{label}</span>
        <span className="text-slate-300 opacity-0 group-hover/bar:opacity-100 transition-opacity">{val}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-[1500ms] ease-out`}
          style={{ width: inView ? `${val}%` : '0%' }}
        />
      </div>
    </div>
  );
};

const DashboardViz = () => (
  <div className="glass rounded-xl font-mono text-xs w-full h-full relative overflow-hidden shadow-2xl p-5">
    <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
      <div>
        <div className="text-slate-400 text-[10px] uppercase tracking-wider">Métrica Principal</div>
        <div className="text-white font-bold text-sm">Rentabilidad/Obra</div>
      </div>
      <div className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded border border-emerald-500/20">+15%</div>
    </div>
    <div className="space-y-4">
      {[
        { label: 'Torre Reforma', val: 82, color: 'bg-blue-500', delay: 0 },
        { label: 'Nave Ind. 04', val: 65, color: 'bg-indigo-500', delay: 200 },
        { label: 'Plaza Central', val: 94, color: 'bg-cyan-500', delay: 400 }
      ].map((item, i) => (
        <AnimatedBar key={i} {...item} />
      ))}
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-blue-500/10 to-transparent" />
  </div>
);

const BentoGrid: React.FC = () => {
  return (
    <section id="cases" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">Activos Digitales que <br/>Construyen Valor</h2>
            <p className="text-slate-400 text-lg max-w-xl font-light">
              Deje de gastar en "sistemas". Invierta en herramientas de precisión que pagan sus propios costos.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

          {/* Card 1: Construction - Large */}
          <ScrollReveal className="md:col-span-2 md:row-span-2 relative" delay={100} enableZoom>
            <CursorGlow className="h-full gradient-border glass glass-hover rounded-3xl p-8 transition-all">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                <HardHat size={200} />
              </div>
              <div className="flex flex-col md:flex-row gap-8 h-full">
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                      <HardHat size={24} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">Sector Construcción</h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <span className="text-xs text-slate-500 uppercase tracking-wider">El Reto</span>
                        <p className="text-slate-300">Falta de claridad en ingresos y egresos por obra.</p>
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 uppercase tracking-wider">La Solución</span>
                        <p className="text-slate-300">App web para trazabilidad administrativa y financiera en tiempo real.</p>
                      </div>
                      <div className="pt-2 border-t border-white/5">
                        <span className="text-emerald-400 font-semibold">+15% de margen de utilidad</span>
                        <span className="text-slate-500 text-xs block">al detectar fugas al momento.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 h-64 md:h-auto mt-6 md:mt-0 transform translate-x-4 translate-y-4 md:translate-y-8 md:translate-x-8 transition-transform hover:translate-x-2 hover:translate-y-4">
                  <DashboardViz />
                </div>
              </div>
            </CursorGlow>
          </ScrollReveal>

          {/* Card 2: Maintenance CMMS */}
          <ScrollReveal className="md:col-span-1 md:row-span-1" delay={200} enableZoom>
            <CursorGlow className="h-full gradient-border glass glass-hover rounded-3xl p-8 transition-colors flex flex-col">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
                <Wrench size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">Mantenimiento Industrial</h3>
              <div className="space-y-4 flex-1">
                <p className="text-slate-400 text-sm">
                  <strong className="text-slate-200">Reto:</strong> Descontrol en el progreso de cuadrillas y tiempos.
                </p>
                <p className="text-slate-400 text-sm">
                  <strong className="text-slate-200">Solución:</strong> Control total de cuadrillas con firma digital.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5">
                <span className="text-emerald-400 font-bold block">Cobro en 24 hrs</span>
                <span className="text-slate-500 text-xs">Ciclo reducido drásticamente.</span>
              </div>
            </CursorGlow>
          </ScrollReveal>

          {/* Card 3: Footwear */}
          <ScrollReveal className="md:col-span-1 md:row-span-1" delay={300} enableZoom>
            <CursorGlow className="h-full gradient-border glass glass-hover rounded-3xl p-8 transition-colors flex flex-col">
              <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 mb-6 border border-rose-500/20">
                <ShoppingBag size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">Planta de Calzado</h3>
              <div className="space-y-4 flex-1">
                <p className="text-slate-400 text-sm">
                  <strong className="text-slate-200">Reto:</strong> Limitación geográfica para ventas de mayoreo.
                </p>
                <p className="text-slate-400 text-sm">
                  <strong className="text-slate-200">Solución:</strong> E-commerce integral B2B/B2C para venta por volumen.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5">
                <span className="text-emerald-400 font-bold block">40% incremento</span>
                <span className="text-slate-500 text-xs">en alcance geográfico.</span>
              </div>
            </CursorGlow>
          </ScrollReveal>

          {/* Card 4: Carwash - Wide */}
          <ScrollReveal className="md:col-span-2" delay={400} enableZoom>
            <CursorGlow className="h-full gradient-border glass glass-hover rounded-3xl p-8 transition-colors flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/20">
                  <Car size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Smart POS & Lealtad</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Para cadenas de autolavados. Gestión ineficiente de múltiples sucursales solucionada con una plataforma cloud centralizada y lealtad por placa.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20 text-sm font-semibold">
                  <span>+25% Agilidad Operativa</span>
                </div>
              </div>
              <div className="flex-1 w-full flex items-center justify-center opacity-30 hover:opacity-50 transition-opacity">
                <div className="grid grid-cols-2 gap-2 w-48">
                  <div className="h-16 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center"><span className="w-8 h-1 bg-white/20 rounded-full" /></div>
                  <div className="h-16 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center"><span className="w-8 h-1 bg-white/20 rounded-full" /></div>
                  <div className="h-16 bg-white/5 rounded-lg border border-white/5 col-span-2 flex items-center justify-center"><span className="w-12 h-1 bg-white/20 rounded-full" /></div>
                </div>
              </div>
            </CursorGlow>
          </ScrollReveal>

          {/* Card 5: Billing Automation */}
          <ScrollReveal className="md:col-span-1" delay={500} enableZoom>
            <CursorGlow className="h-full gradient-border glass glass-hover rounded-3xl p-8 transition-colors">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 border border-amber-500/20">
                <Gauge size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Facturación Masiva</h3>
              <p className="text-slate-400 text-sm mb-4">
                Automatización total para retail y gasolineras. Procesamiento masivo de facturas.
              </p>
              <div className="pt-2 border-t border-white/5">
                <span className="text-amber-400 font-bold block">80% Ahorro</span>
                <span className="text-slate-500 text-xs">en tiempo administrativo.</span>
              </div>
            </CursorGlow>
          </ScrollReveal>

          {/* Card 6: Hotels & Motels */}
          <ScrollReveal className="md:col-span-2" delay={600} enableZoom>
            <CursorGlow className="h-full gradient-border glass glass-hover rounded-3xl p-8 transition-colors flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6 border border-violet-500/20">
                  <Hotel size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Hoteles & Moteles</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Programa de lealtad y recompensas para huéspedes frecuentes, integrado con un sistema de gestión de habitaciones para optimizar ocupación y operación diaria.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-violet-500/10 text-violet-400 rounded border border-violet-500/20 text-sm font-semibold">
                    Programa de Lealtad
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20 text-sm font-semibold">
                    Gestión de Habitaciones
                  </span>
                </div>
              </div>
              <div className="flex-1 w-full flex items-center justify-center opacity-30 hover:opacity-50 transition-opacity">
                <div className="grid grid-cols-3 gap-2 w-48">
                  <div className="h-12 bg-violet-500/10 rounded-lg border border-violet-500/10" />
                  <div className="h-12 bg-white/5 rounded-lg border border-white/5" />
                  <div className="h-12 bg-emerald-500/10 rounded-lg border border-emerald-500/10" />
                  <div className="h-12 bg-white/5 rounded-lg border border-white/5" />
                  <div className="h-12 bg-violet-500/10 rounded-lg border border-violet-500/10" />
                  <div className="h-12 bg-white/5 rounded-lg border border-white/5" />
                </div>
              </div>
            </CursorGlow>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
