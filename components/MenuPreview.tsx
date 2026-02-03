import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Button } from './Button';
import { ExternalLink } from 'lucide-react';

const categories = [
  {
    name: "Hambúrgueres",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
    desc: "Artesanais, suculentos e com molhos especiais."
  },
  {
    name: "Pizzas",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
    desc: "Massa crocante e recheio caprichado."
  },
  {
    name: "Petiscos",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop",
    desc: "A porção perfeita para acompanhar sua bebida."
  },
  {
    name: "Bebidas",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop",
    desc: "Refrigerantes gelados, sucos e cervejas."
  }
];

export const MenuPreview: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-4">
            Nosso <span className="text-brand-yellow">Cardápio</span>
          </h2>
          <div className="w-24 h-1 bg-brand-red mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Explore nossas delícias. Clique em uma categoria ou acesse o cardápio digital completo para fazer seu pedido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl bg-brand-dark border border-gray-800 hover:border-brand-red transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 relative z-10 bg-brand-dark">
                <h3 className="text-xl font-bold text-white mb-2 uppercase">{cat.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{cat.desc}</p>
                <a 
                  href={CONTACT_INFO.menuLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-brand-yellow font-bold text-sm uppercase flex items-center gap-1 hover:text-white transition-colors"
                >
                  Ver Opções <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-brand-dark p-8 rounded-2xl border border-brand-red/30 inline-flex flex-col items-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Pronto para pedir?</h3>
            <p className="text-gray-400 mb-6">Acesse nosso cardápio digital completo com preços atualizados e faça seu pedido agora mesmo.</p>
            <Button 
              href={CONTACT_INFO.menuLink} 
              target="_blank" 
              variant="secondary" 
              className="px-10 py-4 text-xl"
            >
              ACESSAR CARDÁPIO COMPLETO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};