import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Utensils } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="bg-brand-red p-2 rounded-full group-hover:bg-brand-yellow transition-colors">
                 <Utensils className="h-6 w-6 text-white group-hover:text-brand-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white uppercase leading-none display-font tracking-tighter">Parada</span>
                <span className="text-sm font-bold text-brand-yellow uppercase tracking-widest leading-none">Obrigatória</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-gray-300 hover:text-brand-yellow font-medium transition-colors uppercase text-sm tracking-wider">Cardápio</a>
            <a href="#about" className="text-gray-300 hover:text-brand-yellow font-medium transition-colors uppercase text-sm tracking-wider">Sobre</a>
            <a href="#contact" className="text-gray-300 hover:text-brand-yellow font-medium transition-colors uppercase text-sm tracking-wider">Contato</a>
            <a 
              href={CONTACT_INFO.menuLink} 
              target="_blank" 
              className="bg-brand-red px-5 py-2 rounded font-bold text-white hover:bg-red-700 transition-colors uppercase text-sm"
            >
              Pedir Agora
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-brand-dark border-t border-gray-800 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="flex flex-col p-4 space-y-4">
          <a href="#menu" className="text-white hover:text-brand-yellow font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>CARDÁPIO</a>
          <a href="#about" className="text-white hover:text-brand-yellow font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>SOBRE NÓS</a>
          <a href="#contact" className="text-white hover:text-brand-yellow font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>CONTATO</a>
          <a 
            href={CONTACT_INFO.menuLink} 
            target="_blank"
            className="bg-brand-yellow text-brand-black font-bold text-center py-3 rounded hover:bg-yellow-500 uppercase"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Acessar Cardápio Digital
          </a>
        </div>
      </div>
    </header>
  );
};