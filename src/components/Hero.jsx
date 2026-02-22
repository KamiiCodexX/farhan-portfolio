import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const texts = gsap.utils.toArray('.hero-text');
      
      gsap.from(texts, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.from('.hero-cta', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-[100dvh] w-full flex flex-col justify-end p-6 md:p-12 lg:p-24 overflow-hidden"
    >
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1595411425732-e69c1abe2763?q=80&w=2070&auto=format&fit=crop")' }}
      />
      {/* Base dark overlay to dim bright areas */}
      <div className="absolute inset-0 z-0 bg-dark/50" />
      {/* Heavy gradient from bottom up */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark via-dark/90 to-transparent" />

      <div className="relative z-20 max-w-5xl pt-24 md:pt-0">
        <h1 className="flex flex-col gap-2 mb-6">
          <span className="hero-text text-primary font-heading font-bold text-4xl md:text-6xl lg:text-8xl tracking-tight leading-[0.9]">
            Craft the
          </span>
          <span className="hero-text text-accent font-drama italic text-6xl md:text-8xl lg:text-[10rem] leading-[0.8] ml-2 md:ml-8">
            Art.
          </span>
        </h1>
        
        <p className="hero-text text-primary/80 font-data text-sm md:text-base mb-12 max-w-xl">
          Muhammad Farhan — WordPress Developer & Graphic Designer
        </p>

        <button className="hero-cta bg-accent text-primary rounded-full px-8 py-4 text-lg font-bold hover:bg-white hover:text-accent hover:scale-[1.03] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex items-center gap-3">
           Download CV
        </button>
      </div>
    </section>
  );
};

export default Hero;
