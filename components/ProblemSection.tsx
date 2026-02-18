import React from 'react';
import ScrollReveal from './ui/ScrollReveal';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 relative border-t border-white/5 bg-night/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">

          <div className="w-full md:w-1/2 sticky top-24">
            <ScrollReveal>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                ¿Su negocio crece, pero su <span className="text-slate-500">tranquilidad disminuye?</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-electric to-transparent rounded-full" />
            </ScrollReveal>
          </div>

          <div className="w-full md:w-1/2 space-y-10">
            <ScrollReveal delay={200}>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                Muchos dueños de PyMEs operan <span className="text-white font-medium">"a ciegas"</span>, confiando en procesos manuales y hojas de cálculo que no escalan.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed mt-4">
                En Trinity Corp, eliminamos la incertidumbre. No solo implementamos tecnología; creamos la estructura necesaria para que usted recupere el control total y la visión clara de su rentabilidad.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl glass">
                  <h3 className="text-white font-semibold mb-2">Antes</h3>
                  <p className="text-sm text-slate-400">Decisiones por intuición. Fugas de dinero invisibles. Estrés operativo.</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-electric/10 to-transparent border border-electric/20">
                  <h3 className="text-white font-semibold mb-2">Con Trinity</h3>
                  <p className="text-sm text-slate-300">Decisiones con datos. Rentabilidad blindada. Estructura que escala.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
