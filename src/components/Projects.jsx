import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: '01',
    name: 'WP-Bridge (White-Label Platform)',
    desc: 'Contributed to a scalable white-label WordPress platform serving multiple client deployments.',
    tags: ['WordPress', 'PHP', 'Multisite Architecture'],
    svgType: 'radar'
  },
  {
    id: '02',
    name: 'Custom Theme Architecture',
    desc: 'Designed and developed high-performance custom themes and plugins from concept to launch.',
    tags: ['HTML/CSS', 'PHP', 'UI/UX Design'],
    svgType: 'laser'
  },
  {
    id: '03',
    name: 'Laptopy.net (E-Commerce Platform)',
    desc: 'Developed and optimized a WordPress-based e-commerce site with SEO-driven growth strategy.',
    tags: ['WooCommerce', 'SEO Optimization', 'Growth'],
    svgType: 'waveform'
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (i === 0) return; // Skip the first card
        
        gsap.to(cardsRef.current[i - 1], {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
          scale: 0.9,
          filter: 'blur(10px)',
          opacity: 0.5,
          y: -50,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="relative w-full bg-dark text-primary py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center"
    >
      <div className="max-w-7xl w-full mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <h2 className="font-heading font-bold text-5xl md:text-7xl tracking-tighter shadow-sm flex flex-col">
          <span className="text-primary/50 text-xl font-data uppercase tracking-widest mb-2">Archive</span>
          Selected
          <span className="font-drama italic text-accent ml-8">Deployments.</span>
        </h2>
      </div>

      <div className="w-full max-w-6xl relative flex flex-col gap-[10dvh] md:pb-[30dvh]">
        {projects.map((project, i) => (
          <div 
            key={project.id}
            ref={el => cardsRef.current[i] = el}
            className="sticky top-24 md:top-32 w-full h-[60dvh] md:h-[70dvh] rounded-[2rem] md:rounded-[3rem] bg-background text-dark p-8 md:p-16 border border-dark/10 shadow-2xl overflow-hidden flex flex-col justify-between group origin-top"
          >
            {/* SVG Background Animation Elements */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden flex items-center justify-center">
              {project.svgType === 'radar' && (
                <svg viewBox="0 0 100 100" className="w-[150%] h-[150%] animate-[spin_60s_linear_infinite]">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M 50 50 L 90 50" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                </svg>
              )}
              {project.svgType === 'laser' && (
                <div className="w-full h-full relative" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                   <div className="absolute top-0 left-0 w-full h-2 bg-accent shadow-[0_0_15px_rgba(230,59,46,0.8)] animate-[ping_4s_ease-in-out_infinite]"></div>
                </div>
              )}
              {project.svgType === 'waveform' && (
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full opacity-50">
                  <path d="M 0 50 C 20 50, 20 20, 40 50 S 60 80, 80 50 S 100 50, 100 50" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1000" strokeDashoffset="1000" className="animate-[dash_5s_linear_infinite]" />
                   <style>{`@keyframes dash { to { stroke-dashoffset: 0; } }`}</style>
                </svg>
              )}
            </div>

            {/* Content */}
            <div className="relative z-10 flex justify-between items-start">
              <span className="font-data text-xl md:text-3xl font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                {project.id}
              </span>
              <a href="#" className="flex items-center gap-2 font-heading font-bold text-accent hover:opacity-70 transition-opacity">
                View Project <ArrowUpRight size={20} />
              </a>
            </div>
            
            <div className="relative z-10 flex flex-col gap-6 max-w-3xl">
              <h3 className="font-heading font-bold text-4xl md:text-6xl tracking-tight leading-[1.1]">
                {project.name}
              </h3>
              <p className="font-data text-sm md:text-lg text-dark/70 max-w-xl">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-4">
                 {project.tags.map(tag => (
                   <span key={tag} className="font-data text-xs py-2 px-4 rounded-full border border-dark/20 bg-dark/5 backdrop-blur-sm">
                     {tag}
                   </span>
                 ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
