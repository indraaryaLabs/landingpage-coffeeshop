import React, { useState } from 'react';
import { Coffee, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Add a brief subtle fade out to the current view before scrolling for a "transition" feel
      document.body.style.opacity = '0.7';
      setTimeout(() => {
        const offset = 80; // offset for fixed navbar
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Restore opacity after scroll starts
        setTimeout(() => {
          document.body.style.opacity = '1';
          document.body.style.transition = 'opacity 0.5s ease';
        }, 100);
      }, 150);
      
      setMobileMenuOpen(false);
    }
  };
  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Coffee className="w-8 h-8 text-amber-500" />
          <span className="text-2xl font-serif font-bold tracking-widest text-white">LUMINA</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide text-zinc-300">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-amber-500 transition-colors">EXPERIENCE</a>
          <a href="#menu" onClick={(e) => handleNavClick(e, 'menu')} className="hover:text-amber-500 transition-colors">MENU</a>
          <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className="hover:text-amber-500 transition-colors">GALLERY</a>
          <a href="#location" onClick={(e) => handleNavClick(e, 'location')} className="hover:text-amber-500 transition-colors">LOCALE</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="https://wa.me/6281234567890?text=Halo%20Lumina,%20saya%20ingin%20reservasi/bertanya." target="_blank" rel="noreferrer"
             className="px-6 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 flex items-center gap-2 group">
            Reserve Table
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t border-white/10 flex flex-col p-6 gap-6">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-lg font-medium text-white">Experience</a>
          <a href="#menu" onClick={(e) => handleNavClick(e, 'menu')} className="text-lg font-medium text-white">Menu</a>
          <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className="text-lg font-medium text-white">Gallery</a>
          <a href="#location" onClick={(e) => handleNavClick(e, 'location')} className="text-lg font-medium text-white">Locale</a>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="w-full text-center px-6 py-3 rounded-full bg-amber-500 text-white font-semibold mt-2">
            Book via WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};
