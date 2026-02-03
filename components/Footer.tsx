import React from 'react';
import { Utensils, Instagram } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        
        <div className="flex items-center gap-2 mb-6 opacity-70">
           <div className="bg-brand-red p-2 rounded-full">
              <Utensils className="h-5 w-5 text-white" />
           </div>
           <span className="text-xl font-bold text-white uppercase display-font tracking-tighter">Parada Obrigatória</span>
        </div>

        <div className="flex gap-6 mb-8">
           <a 
             href={CONTACT_INFO.instagram} 
             target="_blank" 
             rel="noreferrer"
             className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-brand-red transition-colors"
             aria-label="Instagram"
           >
             <Instagram size={20} />
           </a>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Parada Obrigatória. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs text-center font-medium">
            Desenvolvido pela <span className="text-brand-yellow/70">Millenium S_T</span>
          </p>
        </div>
      </div>
    </footer>
  );
};