import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/6281234567890?text=Halo%20Lumina%20Coffee,%20saya%20ingin%20info%20reservasi/menu..." 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:scale-110 hover:shadow-[0_4px_25px_rgba(34,197,94,0.6)] transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-zinc-800 text-white text-sm font-medium py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-50"></span>
    </a>
  );
};
