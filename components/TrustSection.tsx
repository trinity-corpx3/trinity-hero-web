import React from 'react';
import { HardHat, Car, Wrench, ShoppingBag, Fuel, Hotel } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const clients = [
  { icon: <HardHat className="w-6 h-6" />, sector: 'Construcción', label: 'Constructoras del Bajío' },
  { icon: <Car className="w-6 h-6" />, sector: 'Autolavados', label: 'Cadenas de Autolavado' },
  { icon: <Wrench className="w-6 h-6" />, sector: 'Mantenimiento', label: 'Servicios Industriales' },
  { icon: <ShoppingBag className="w-6 h-6" />, sector: 'Calzado', label: 'Plantas Manufactureras' },
  { icon: <Fuel className="w-6 h-6" />, sector: 'Gasolineras', label: 'Estaciones y Retail' },
  { icon: <Hotel className="w-6 h-6" />, sector: 'Hospitalidad', label: 'Hoteles y Moteles' },
];

const TrustSection: React.FC = () => {
  return (
    <section className="py-16 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-center text-xs font-semibold text-slate-600 uppercase tracking-[0.25em] mb-10">
            Sectores que confían en Trinity Corp
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {clients.map((client, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 px-6 py-3 rounded-full glass glass-hover transition-all duration-300 cursor-default"
              >
                <span className="text-slate-600 group-hover:text-electric transition-colors duration-300">
                  {client.icon}
                </span>
                <span className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors duration-300 font-medium">
                  {client.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-center text-slate-700 text-xs mt-8">
            + empresas en el Bajío, Centro y Norte de México
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustSection;
