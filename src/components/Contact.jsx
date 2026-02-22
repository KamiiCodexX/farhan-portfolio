import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-text', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="contact" 
      ref={containerRef}
      className="w-full py-48 px-6 md:px-12 lg:px-24 bg-dark text-primary flex flex-col items-center text-center overflow-hidden"
    >
      <div className="flex flex-col gap-12 max-w-4xl w-full items-center">
        
        <h2 className="flex flex-col gap-2">
          <span className="contact-text font-heading font-bold text-4xl md:text-6xl tracking-tight text-primary/80">
            Let's build something
          </span>
          <span className="contact-text font-drama italic text-6xl md:text-8xl lg:text-[9rem] leading-[0.8] text-accent">
            remarkable.
          </span>
        </h2>

        <p className="contact-text font-data text-sm md:text-base text-primary/50 max-w-md">
          Ready to elevate your digital presence with high-performance WordPress architecture and precise design?
        </p>

        <button className="contact-text mt-8 bg-accent text-primary rounded-full px-12 py-5 text-xl font-bold hover:bg-white hover:text-accent hover:scale-[1.03] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
          Download CV
        </button>

        <div className="contact-text flex items-center justify-center gap-6 mt-16 border-t border-primary/10 pt-12 w-full max-w-sm">
           <a href="#" className="p-3 bg-primary/5 text-primary rounded-full hover:bg-accent hover:-translate-y-1 transition-all duration-300">
             <Github size={20} />
           </a>
           <a href="#" className="p-3 bg-primary/5 text-primary rounded-full hover:bg-accent hover:-translate-y-1 transition-all duration-300">
             <Linkedin size={20} />
           </a>
           <a href="#" className="p-3 bg-primary/5 text-primary rounded-full hover:bg-accent hover:-translate-y-1 transition-all duration-300">
             <Twitter size={20} />
           </a>
           <a href="mailto:hello@example.com" className="p-3 bg-primary/5 text-primary rounded-full hover:bg-accent hover:-translate-y-1 transition-all duration-300">
             <Mail size={20} />
           </a>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
