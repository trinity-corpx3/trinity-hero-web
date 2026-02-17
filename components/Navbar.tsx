import React, { useState, useEffect } from 'react';
import { Logo } from './ui/Logo';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Soluciones', href: '#cases' },
    { name: 'Filosofía', href: '#philosophy' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-night/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-white group-hover:text-electric transition-colors duration-300">
             <Logo className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Trinity Corp</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-white/5 hover:bg-white/10 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-white/10 backdrop-blur-sm hover:border-white/20">
            Iniciar Evolución
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-night/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-200 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-2 bg-electric text-white w-full py-3 rounded-lg font-bold text-center">
            Iniciar Evolución
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;