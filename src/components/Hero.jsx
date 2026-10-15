import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';

export const Hero = () => {
  const handleHeroClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      document.body.style.opacity = '0.7';
      setTimeout(() => {
        const offset = 80; 
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        setTimeout(() => {
          document.body.style.opacity = '1';
          document.body.style.transition = 'opacity 0.5s ease';
        }, 100);
      }, 150);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden pt-20">
      {/* Background with parallax/zoom effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/20 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-transparent to-zinc-950 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=2000" 
          alt="Cinematic dark coffee pouring" 
          className="w-full h-full object-cover object-right md:object-center animate-pulse-slow scale-105"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Content - Editorial Typography */}
        <div className="max-w-3xl w-full">
          <div className="flex items-center gap-4 mb-8 reveal">
            <div className="h-[2px] w-12 bg-amber-600"></div>
            <span className="text-amber-500 font-semibold tracking-[0.25em] uppercase text-xs md:text-sm">
              Elevate Your Daily Ritual
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-serif font-bold text-white leading-[0.95] md:leading-[0.9] mb-8 reveal reveal-delay-1 tracking-tight">
            Mastering <br/>
            <span className="italic font-light text-zinc-400">The Brew.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 font-light mb-12 max-w-xl border-l-2 border-amber-600/50 pl-6 reveal reveal-delay-2">
            We blend artisanal craftsmanship with modern precision to deliver an unparalleled coffee experience. Sourced ethically, roasted to perfection.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-5 reveal reveal-delay-3">
            <a href="#menu" onClick={(e) => handleHeroClick(e, 'menu')} className="px-8 py-4 rounded-full bg-amber-500 text-black font-bold hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center group shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] active:scale-95">
              View Our Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" onClick={(e) => handleHeroClick(e, 'about')} className="px-8 py-4 rounded-full glass border border-white/20 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center group shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95">
              <Play className="w-5 h-5 fill-transparent group-hover:fill-black transition-colors" />
              Behind the Beans
            </a>
          </div>
        </div>

        {/* Right Content - Floating Glass Widget (Desktop Only) */}
        <div className="hidden lg:flex flex-col items-end justify-center w-full max-w-sm reveal reveal-delay-3">
          <div className="glass-card p-8 rounded-2xl w-full relative overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-colors"></div>
            
            <Star className="w-6 h-6 text-amber-500 mb-6" />
            <p className="text-xs text-amber-500 uppercase tracking-widest mb-2 font-semibold">Current Highlight</p>
            <h3 className="text-3xl font-serif text-white mb-3">Panama Geisha</h3>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              Experience delicate notes of jasmine, peach, and bergamot. Scored 96 by the Specialty Coffee Association.
            </p>
            <a href="#menu" className="inline-flex items-center gap-2 text-sm text-white uppercase tracking-wider hover:text-amber-500 transition-colors border-b border-transparent hover:border-amber-500 pb-1">
              Taste It Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-6 md:left-12 z-10 flex flex-col items-center gap-4 pb-10 reveal reveal-delay-3">
        <div className="w-[1px] h-16 bg-gradient-to-b from-amber-500 to-transparent"></div>
        <span className="text-[10px] text-amber-500 uppercase tracking-[0.3em] origin-left -rotate-90 translate-y-12 translate-x-1.5 whitespace-nowrap">
          Scroll Down
        </span>
      </div>
    </section>
  );
};
