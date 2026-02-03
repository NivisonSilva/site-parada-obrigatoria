import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_URL, MESSAGES, checkIsOpen } from '../constants';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(checkIsOpen());
    const interval = setInterval(() => {
      setIsOpen(checkIsOpen());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-20 bg-brand-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-4">
            Fale <span className="text-brand-red">Conosco</span>
          </h2>
          <div className="w-24 h-1 bg-brand-yellow mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: WhatsApp */}
          <div className="bg-brand-dark p-8 rounded-xl border border-gray-800 text-center flex flex-col items-center hover:border-green-500 transition-colors duration-300">
            <div className="bg-green-600/20 p-4 rounded-full mb-4">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase">WhatsApp</h3>
            <p className="text-gray-400 mb-6">Faça seu pedido ou tire dúvidas diretamente.</p>
            <Button 
              href={WHATSAPP_URL(MESSAGES.info)} 
              target="_blank" 
              variant="whatsapp"
              className="w-full"
            >
              {CONTACT_INFO.displayNumber}
            </Button>
          </div>

          {/* Card 2: Location */}
          <div className="bg-brand-dark p-8 rounded-xl border border-gray-800 text-center flex flex-col items-center hover:border-brand-red transition-colors duration-300">
            <div className="bg-brand-red/20 p-4 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase">Localização</h3>
            <p className="text-gray-400 mb-6">{CONTACT_INFO.address}</p>
            <div className="text-gray-500 text-sm italic">Venha nos visitar!</div>
          </div>

          {/* Card 3: Hours */}
          <div className="bg-brand-dark p-8 rounded-xl border border-gray-800 text-center flex flex-col items-center hover:border-brand-yellow transition-colors duration-300">
            <div className="bg-brand-yellow/20 p-4 rounded-full mb-4">
              <Clock className="w-8 h-8 text-brand-yellow" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase">Horário</h3>
            <p className="text-gray-400 mb-2">Segunda a Sexta</p>
            <p className="text-2xl font-bold text-white mb-6">17:00 - 01:00</p>
            <div className={`inline-block px-3 py-1 ${isOpen ? 'bg-green-900/50 text-green-400 border-green-800' : 'bg-red-900/50 text-red-400 border-red-800'} text-xs rounded uppercase font-bold tracking-widest border`}>
              {isOpen ? 'Aberto Agora' : 'Fechado Agora'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};