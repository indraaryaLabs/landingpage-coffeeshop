import React from 'react';
import { MapPin, Clock, Coffee, Camera, Globe } from 'lucide-react';

export const LocationAndFooter = () => {
  return (
    <>
      <section id="location" className="py-32 bg-zinc-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="reveal">
              <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold mb-4 block">Visit Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-10">Sanctuary of Coffee</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium text-lg mb-2">Location</h4>
                    <p className="text-zinc-400 font-light">Jl. Senopati No. 99, Kebayoran Baru<br/>Jakarta Selatan, 12190</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <Clock className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium text-lg mb-2">Operating Hours</h4>
                    <ul className="text-zinc-400 font-light space-y-2">
                      <li className="flex justify-between w-48"><span>Mon - Fri:</span> <span>07:00 - 22:00</span></li>
                      <li className="flex justify-between w-48"><span>Sat - Sun:</span> <span>08:00 - 23:30</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Maps Embed - Styled to be dark */}
            <div className="glass-card rounded-3xl p-2 h-[400px] reveal reveal-delay-1 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20 pointer-events-none z-10 rounded-3xl"></div> {/* Darkener overlay */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.93883803623!2d106.74548028795551!3d-6.248386377759868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x100c5ea600100000!2sSenopati%2C%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan!5e0!3m2!1sen!2sid!4v1682000000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1.2rem', filter: 'grayscale(100%) invert(90%) contrast(80%)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lumina Location"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Coffee className="w-6 h-6 text-amber-500" />
            <span className="text-xl font-serif font-bold tracking-widest text-white">LUMINA</span>
          </div>
          
          <p className="text-zinc-600 text-sm font-light text-center">
            © {new Date().getFullYear()} Lumina Coffee Roastery. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Camera className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </>
  );
};
