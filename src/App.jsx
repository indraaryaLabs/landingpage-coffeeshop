import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuTabs } from './components/MenuTabs';
import { Gallery } from './components/Gallery';
import { LocationAndFooter } from './components/LocationAndFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event for navbar glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize scroll reveal animations
  useScrollReveal();

  return (
    <div className="relative antialiased selection:bg-amber-500/30">
      <div className="film-grain"></div>
      
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <About />
        <MenuTabs />
        <Gallery />
        <LocationAndFooter />
      </main>

      <FloatingWhatsApp />
    </div>
  );
}
