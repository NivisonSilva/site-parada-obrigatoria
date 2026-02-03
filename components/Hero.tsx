import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { WHATSAPP_URL, MESSAGES, CONTACT_INFO, checkIsOpen } from '../constants';
import { ShoppingBag, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(checkIsOpen());
    const interval = setInterval(() => {
      setIsOpen(checkIsOpen());
    }, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" 
          alt="Hambúrguer delicioso" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        {isOpen ? (
          <div className="mb-6 inline-block bg-brand-yellow text-brand-black px-4 py-1 font-bold text-sm tracking-widest uppercase rounded animate-pulse">
            Aberto agora • Delivery Rápido
          </div>
        ) : (
          <div className="mb-6 inline-block bg-brand-red text-white px-4 py-1 font-bold text-sm tracking-widest uppercase rounded">
            Fechado no momento
          </div>
        )}
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 uppercase tracking-tight drop-shadow-xl">
          Sabor que <span className="text-brand-red">Vicia</span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light">
          A verdadeira <span className="text-brand-yellow font-bold">Parada Obrigatória</span> para quem busca qualidade, sabor e o melhor atendimento da região.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            href={CONTACT_INFO.menuLink} 
            target="_blank" 
            variant="primary" 
            className="w-full sm:w-auto text-lg px-8 py-4"
            icon={<ShoppingBag size={20} />}
          >
            Ver Cardápio Completo
          </Button>
          
          <Button 
            href={WHATSAPP_URL(MESSAGES.order)} 
            target="_blank" 
            variant="whatsapp" 
            className="w-full sm:w-auto text-lg px-8 py-4"
            icon={<MessageCircle size={20} />}
          >
            Pedir no WhatsApp
          </Button>
        </div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-black to-transparent z-10"></div>
    </section>
  );
};