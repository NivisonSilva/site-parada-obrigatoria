import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL, MESSAGES } from '../constants';

export const WhatsAppFloater: React.FC = () => {
  return (
    <a
      href={WHATSAPP_URL(MESSAGES.order)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-500 transition-all duration-300 transform hover:scale-110 flex items-center gap-2 group border-4 border-brand-black"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">
        Faça seu pedido
      </span>
    </a>
  );
};