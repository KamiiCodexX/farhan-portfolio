import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-6 w-[90%] md:w-auto max-w-5xl left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] rounded-full px-6 py-3 flex items-center justify-between gap-8 border ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-xl border-dark/10 shadow-lg text-dark'
          : 'bg-transparent border-transparent text-primary'
      }`}
    >
      <div className="font-heading font-bold text-lg tracking-tight whitespace-nowrap">
        Muhammad Farhan
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:-translate-y-[1px] transition-transform duration-300"
          >
            {item}
          </a>
        ))}
      </div>

      <a href="#contact" className="hidden md:block bg-primary text-dark rounded-full px-5 py-2 text-sm font-bold hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
        Download CV
      </a>
    </nav>
  );
};

export default Navbar;
