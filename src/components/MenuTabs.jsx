import React, { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { MENU_DATA, MENU_CATEGORIES } from '../data';

export const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState(MENU_CATEGORIES[0]);

  return (
    <section id="menu" className="py-32 relative bg-zinc-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 reveal">
          <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold mb-4 block">Curated Selection</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">The Menu</h2>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center gap-4 md:gap-8 mb-16 reveal reveal-delay-1">
          {MENU_CATEGORIES.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                  : 'text-zinc-400 hover:text-white glass'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal reveal-delay-2">
          {MENU_DATA[activeTab].map((item) => (
            <div key={item.id} className="glass-card rounded-2xl hover:border-amber-500/50 transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col hover:-translate-y-1">
              {/* Menu Image */}
              <div className="w-full h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0 pointer-events-none"></div>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                <span className="absolute bottom-4 right-4 text-xl font-serif text-amber-500 z-10 drop-shadow-md">{item.price}</span>
                
                {/* Recommended Badge */}
                {item.recommended && (
                  <div className="absolute top-4 left-4 z-10 glass bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-amber-500/30">
                    Recommended
                  </div>
                )}
              </div>

              {/* Menu Content */}
              <div className="p-6 flex-grow flex flex-col justify-start">
                <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors mb-2 leading-snug">{item.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span className="text-zinc-300 text-sm font-medium">{item.rating}</span>
                  <span className="text-zinc-600 text-xs ml-1">(120+)</span>
                </div>

                <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action below menu */}
        <div className="mt-16 text-center reveal reveal-delay-3">
          <p className="text-zinc-500 mb-6 italic">Craving something not on the menu? Ask our master baristas.</p>
          <a href="https://wa.me/6281234567890?text=Halo%20Lumina,%20saya%20ingin%20memesan/takeaway..." 
             target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 text-amber-500 hover:text-white transition-colors border-b border-amber-500 hover:border-white pb-1">
             Order Takeaway via WhatsApp <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
