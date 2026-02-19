import React, { useState, FormEvent } from 'react';
import { MessageCircle, Loader2 } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

/*
 * ┌────────────────────────────────────────────────┐
 * │  CONFIGURACIÓN — Actualiza estos valores:      │
 * │                                                │
 * │  WEB3FORMS_KEY: obtén uno gratis en            │
 * │  https://web3forms.com (solo email)            │
 * └────────────────────────────────────────────────┘
 */
const WHATSAPP_NUMBER = '527222921659';
const WEB3FORMS_KEY = '7654d81d-2516-487a-b78e-5ed6ff392de8';

const sectors = ['Construcción', 'Autolavados', 'Manufactura', 'Retail / Gasolineras', 'Mantenimiento', 'Hoteles / Moteles', 'Otro'];

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [selectedSector, setSelectedSector] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('subject', `Nuevo Diagnóstico de Claridad — ${formData.get('name')}`);
    formData.append('from_name', 'Trinity Corp Website');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="contact" className="py-32 bg-night relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center glass rounded-3xl p-12 md:p-16">
              <div className="success-scale inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                <svg className="w-10 h-10 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path className="checkmark-path" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Solicitud Recibida
              </h2>
              <p className="text-slate-400 text-lg max-w-md mx-auto mb-8">
                Nuestro equipo revisará su caso y le contactará en las próximas 24 horas para agendar su Diagnóstico de Claridad.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="text-electric hover:text-white transition-colors text-sm font-medium"
              >
                Enviar otra solicitud
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

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
          <form onSubmit={handleSubmit} className="space-y-6 glass rounded-3xl p-8 md:p-12 shadow-2xl">
            <input type="hidden" name="sector" value={selectedSector} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Nombre</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-night/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/50 transition-all placeholder:text-slate-700 font-light"
                  placeholder="Ej. Roberto Martínez"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Correo Corporativo</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-night/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/50 transition-all placeholder:text-slate-700 font-light"
                  placeholder="roberto@empresa.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Sector / Industria</label>
              <div className="flex flex-wrap gap-2">
                {sectors.map((sector) => (
                  <button
                    key={sector}
                    type="button"
                    onClick={() => setSelectedSector(sector)}
                    className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                      selectedSector === sector
                        ? 'bg-electric/10 border-electric/30 text-white'
                        : 'border-white/10 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Su Reto Principal</label>
              <textarea
                name="message"
                required
                className="w-full bg-night/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/50 transition-all placeholder:text-slate-700 h-32 resize-none font-light"
                placeholder="Ej. Necesito ver mis costos de obra en tiempo real..."
              />
            </div>

            {status === 'error' && (
              <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                Hubo un error al enviar. Intente de nuevo o contáctenos por WhatsApp.
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex-1 bg-white text-night font-bold py-4 rounded-lg hover:bg-slate-200 transition-colors shadow-lg shadow-white/5 uppercase tracking-wide text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Agendar Diagnóstico de Claridad'
                )}
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me interesa un Diagnóstico de Claridad para mi empresa.')}`}
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
