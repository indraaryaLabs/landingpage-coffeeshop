import React from 'react';
import { Camera } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';

export const Gallery = () => {
  return (
    <section id="gallery" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16 reveal">
          <div>
            <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold mb-4 block">Atmosphere</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Visual Story</h2>
          </div>
          <div className="hidden md:flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <Camera className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 img-zoom-container rounded-2xl h-[400px] reveal reveal-delay-1">
            <img src={GALLERY_IMAGES[0].url} alt={GALLERY_IMAGES[0].alt} className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div className="img-zoom-container rounded-2xl h-[400px] reveal reveal-delay-2">
            <img src={GALLERY_IMAGES[1].url} alt={GALLERY_IMAGES[1].alt} className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div className="img-zoom-container rounded-2xl h-[400px] reveal reveal-delay-1">
            <img src={GALLERY_IMAGES[2].url} alt={GALLERY_IMAGES[2].alt} className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div className="md:col-span-2 img-zoom-container rounded-2xl h-[400px] reveal reveal-delay-2">
            <img src={GALLERY_IMAGES[3].url} alt={GALLERY_IMAGES[3].alt} className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
