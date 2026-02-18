import React from 'react';
import { Logo } from './ui/Logo';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

const WHATSAPP_NUMBER = '527222921659';

const Footer: React.FC = () => {
  return (
    <footer className="bg-night pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Logo className="w-8 h-8 text-white" />
              <span className="font-display text-xl font-bold text-white">Trinity Corp</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-4">
              Consultoría Tecnológica Boutique.<br/>
              Referente #1 en PyMEs para el Bajío, Centro y Norte de México.
            </p>
            <div className="flex items-start gap-2 text-slate-500 text-sm mb-8">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>CDMX · Metepec · Toluca · Querétaro · Monterrey</span>
            </div>
            <div className="flex gap-4">
              <a
                href="mailto:trinity.corpx3@gmail.com"
                className="w-10 h-10 rounded-full glass glass-hover flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me interesa un Diagnóstico de Claridad para mi empresa.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass glass-hover flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Explorar</h4>
            <ul className="space-y-4">
              <li><a href="#cases" className="text-slate-400 hover:text-electric transition-colors">Casos de Éxito</a></li>
              <li><a href="#process" className="text-slate-400 hover:text-electric transition-colors">Proceso</a></li>
              <li><a href="#philosophy" className="text-slate-400 hover:text-electric transition-colors">Filosofía</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-electric transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-electric transition-colors">Privacidad</a></li>
              <li><a href="#" className="text-slate-400 hover:text-electric transition-colors">Términos</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Trinity Corp. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Diseñado con precisión
            <span className="inline-block w-4 h-3 rounded-sm overflow-hidden mx-1">
              <span className="block h-1/3 bg-green-600" />
              <span className="block h-1/3 bg-white" />
              <span className="block h-1/3 bg-red-600" />
            </span>
            en México
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
