import React from 'react';
import baristaImg from '../assets/barista.jpg';
import latteArtImg from '../assets/latte-art.jpg';

export const About = () => {
  return (
    <section id="about" className="py-32 relative bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6 reveal">
              <div className="w-12 h-[1px] bg-amber-500"></div>
              <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold">The Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight reveal reveal-delay-1">
              Sourced globally, <br/> crafted locally.
            </h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8 reveal reveal-delay-2">
              We believe every cup tells a story. From the high altitudes of Ethiopian farms to the precise temperature of our custom espresso machines, we control every variable to deliver perfection. Our minimalist space is designed to remove distractions, allowing you to focus entirely on the sensory experience of world-class coffee.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-12 reveal reveal-delay-3">
              <div>
                <h4 className="text-3xl font-serif text-white mb-2">100%</h4>
                <p className="text-sm text-zinc-500">Arabica Specialty Beans</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-white mb-2">94°C</h4>
                <p className="text-sm text-zinc-500">Optimal Brewing Temp</p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 relative">
            <div className="mt-12 img-zoom-container rounded-2xl reveal">
              <img src={baristaImg} alt="Barista working" className="w-full h-[300px] object-cover rounded-2xl grayscale hover:grayscale-0" />
            </div>
            <div className="img-zoom-container rounded-2xl reveal reveal-delay-1">
              <img src={latteArtImg} alt="Latte art" className="w-full h-[400px] object-cover rounded-2xl grayscale hover:grayscale-0" />
            </div>
            {/* Aesthetic blur blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-600/20 blur-[100px] rounded-full z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
