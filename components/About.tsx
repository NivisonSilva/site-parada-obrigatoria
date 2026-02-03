import React from 'react';
import { Star, Clock, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative">
            <div className="absolute inset-0 border-4 border-brand-yellow transform translate-x-4 translate-y-4 rounded-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000&auto=format&fit=crop" 
              alt="Hambúrguer Artesanal" 
              className="relative rounded-lg shadow-2xl hover:scale-[1.02] transition-all duration-500 w-full object-cover h-[500px]"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-6">
              A Parada <span className="text-brand-red">Obrigatória</span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Mais do que apenas uma refeição, oferecemos uma experiência. Nascemos com a missão de trazer o verdadeiro sabor da comida de rua com qualidade de restaurante.
            </p>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Ingredientes selecionados, molhos artesanais e aquele tempero que você só encontra aqui. Seja para um lanche rápido ou um jantar especial, nós somos a sua escolha certa.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-brand-black p-4 rounded border border-gray-800 text-center hover:border-brand-red transition-colors">
                <Star className="w-8 h-8 text-brand-yellow mx-auto mb-2" />
                <h4 className="text-white font-bold uppercase text-sm">Qualidade Premium</h4>
              </div>
              <div className="bg-brand-black p-4 rounded border border-gray-800 text-center hover:border-brand-red transition-colors">
                <Clock className="w-8 h-8 text-brand-yellow mx-auto mb-2" />
                <h4 className="text-white font-bold uppercase text-sm">Entrega Rápida</h4>
              </div>
              <div className="bg-brand-black p-4 rounded border border-gray-800 text-center hover:border-brand-red transition-colors">
                <ShieldCheck className="w-8 h-8 text-brand-yellow mx-auto mb-2" />
                <h4 className="text-white font-bold uppercase text-sm">Higiene Total</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};