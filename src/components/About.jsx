import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text reveal for the manifesto
      gsap.from('.manifesto-line', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // Status board fade up
      gsap.from('.status-item', {
        scrollTrigger: {
          trigger: '.status-board',
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-dark text-primary overflow-hidden"
    >
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center mix-blend-overlay max-w-none"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000&auto=format&fit=crop")' }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-24">
        
        <div className="flex flex-col gap-8 max-w-4xl">
          <p className="manifesto-line font-heading text-lg md:text-2xl text-primary/60 tracking-tight">
            Most developers focus on: checking boxes and shipping code over the wall.
          </p>
          <h2 className="manifesto-line font-drama italic text-4xl md:text-6xl lg:text-8xl leading-[1.1]">
            I focus on: <span className="text-accent underline decoration-1 underline-offset-8">growth</span> and <span className="text-accent underline decoration-1 underline-offset-8">performance</span>. I craft digital experiences where design meets pure execution.
          </h2>
        </div>

        <div className="status-board grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-primary/20 pt-12">
          {[
            { label: 'Role', value: 'WP Developer' },
            { label: 'Focus', value: 'Performance' },
            { label: 'Stack', value: 'PHP/React' },
            { label: 'Location', value: 'Remote' }
          ].map((stat, i) => (
            <div key={i} className="status-item flex flex-col gap-2">
              <span className="font-data text-xs text-primary/50 uppercase tracking-widest">{stat.label}</span>
              <span className="font-heading font-bold text-xl md:text-2xl">{stat.value}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
