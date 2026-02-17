import React from 'react';
import { Logo } from './ui/Logo';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-night pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Logo className="w-8 h-8 text-white" />
              <span className="text-xl font-bold text-white">Trinity Corp</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8">
              Consultoría Tecnológica Boutique.<br/>
              Referente #1 en PyMEs para el Bajío y Centro de México.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Explorar</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-electric transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="text-slate-400 hover:text-electric transition-colors">Servicios</a></li>
              <li><a href="#" className="text-slate-400 hover:text-electric transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-slate-400 hover:text-electric transition-colors">Blog</a></li>
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
          <p className="mt-2 md:mt-0">Diseñado en México.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;