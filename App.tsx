import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuPreview } from './components/MenuPreview';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloater } from './components/WhatsAppFloater';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <MenuPreview />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloater />
    </div>
  );
}

export default App;