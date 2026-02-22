import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { Code2, Server, Smartphone, PenTool, Database, Search } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Set initial states to prevent flashing
    gsap.set('.skills-header, .skill-card-container, .design-grid-item', { opacity: 0, y: 40 });
    gsap.set('.design-grid-item', { scale: 0.8 });

    const ctx = gsap.context(() => {
      // 1. Initial Scroll Entrance Animations
      gsap.to('.skills-header', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.to('.skill-card-container', {
        scrollTrigger: {
          trigger: '.skills-header',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.to('.design-grid-item', {
        scrollTrigger: {
          trigger: '.skill-card-container',
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        },
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        delay: 0.5,
      });

      // 2. Infinite Loop: Diagnostic Shuffler (Full Card 1)
      const shufflerTl = gsap.timeline({ repeat: -1, delay: 1 });
      
      // Move front card back
      shufflerTl.to('.front-full-card', {
        y: 20,
        scale: 0.95,
        zIndex: 0,
        opacity: 0.5,
        duration: 0.8,
        ease: 'power3.inOut'
      }, 'swap1');
      
      // Move back card front
      shufflerTl.to('.back-full-card', {
        y: -20,
        scale: 1,
        zIndex: 10,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.inOut'
      }, 'swap1');
      
      // Hold for 3 seconds
      shufflerTl.to({}, { duration: 3 });

      // Move them back to original positions
      shufflerTl.to('.back-full-card', {
        y: 0,
        scale: 0.95,
        zIndex: 0,
        opacity: 0.5,
        duration: 0.8,
        ease: 'power3.inOut'
      }, 'swap2');

      shufflerTl.to('.front-full-card', {
        y: 0,
        scale: 1,
        zIndex: 10,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.inOut'
      }, 'swap2');

      shufflerTl.to({}, { duration: 3 });


      // 3. Infinite Loop: Telemetry Typewriter (Card 2)
      const telemetryTl = gsap.timeline({ repeat: -1, delay: 0.5 });
      
      // Type out lines character by character
      telemetryTl.to('.line-1', { duration: 0.8, text: "> Initializing WordPress Core...", ease: "none" })
                 .to('.line-2', { duration: 0.8, text: "> Loading PHP 8.2 Environment...", ease: "none" })
                 .to('.line-3', { duration: 0.6, text: "> Connecting to MySQL Database...", ease: "none" })
                 .to('.line-3-ok', { duration: 0.2, text: " OK", ease: "none" })
                 .to('.line-4', { duration: 0.8, text: "> Compiling Custom Theme Assets...", ease: "none" });
      
      // Hold reading time
      telemetryTl.to({}, { duration: 3 });

      // Clear terminal (empty all text instantly)
      telemetryTl.set('.typewriter-text', { text: "" });

      // Brief pause before restarting
      telemetryTl.to({}, { duration: 0.5 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="skills" 
      ref={containerRef}
      className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-background text-dark"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col gap-4">
          <h2 className="skills-header font-heading font-bold text-4xl md:text-6xl tracking-tighter">
            System Capabilities
          </h2>
          <p className="skills-header font-data text-dark/60 max-w-xl">
            Interactive functional artifacts visualizing core competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Diagnostic Shuffler (Full Cards) */}
          <div className="skill-card-container relative h-[450px] perspective-1000">
            {/* Front Card */}
            <div className="front-full-card absolute top-0 left-0 w-full h-full bg-primary border border-dark/10 rounded-[2rem] p-8 shadow-sm flex flex-col justify-between z-10 origin-bottom flex-shrink-0">
               <div className="flex flex-col gap-2 relative z-10">
                 <h3 className="font-heading font-bold text-2xl">Frontend Architecture</h3>
                 <p className="text-sm font-data text-dark/60">Client-side rendering & semantic DOM structures.</p>
               </div>
               <div className="flex flex-col gap-6">
                 <div className="p-4 bg-accent/10 w-fit rounded-2xl text-accent"><Code2 size={48} /></div>
                 <h4 className="font-heading font-bold text-4xl">HTML5 / CSS3</h4>
               </div>
            </div>

            {/* Back Card */}
            <div className="back-full-card absolute top-4 left-0 w-full h-[calc(100%-1rem)] bg-[#E0DDD7] border border-dark/10 rounded-[2rem] p-8 shadow-sm flex flex-col justify-between z-0 opacity-50 scale-[0.95] origin-bottom flex-shrink-0">
               <div className="flex flex-col gap-2 relative z-10">
                 <h3 className="font-heading font-bold text-2xl text-dark">Component Systems</h3>
                 <p className="text-sm font-data text-dark/60">Reactive UI states & hook lifecycles.</p>
               </div>
               <div className="flex flex-col gap-6 opacity-80">
                 <div className="p-4 bg-dark/10 w-fit rounded-2xl text-dark"><Smartphone size={48} /></div>
                 <h4 className="font-heading font-bold text-4xl text-dark">React 19</h4>
               </div>
            </div>
          </div>

          {/* Card 2: Telemetry Typewriter (Backend/WP) */}
          <div className="skill-card-container bg-dark text-primary border border-dark/10 rounded-[2rem] p-8 shadow-sm flex flex-col gap-6 overflow-hidden hover:border-accent/30 transition-colors duration-500 cursor-crosshair h-[450px]">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <h3 className="font-heading font-bold text-2xl">Core Systems</h3>
                <p className="text-sm font-data text-primary/60">Server-side logic & CMS deployment.</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-accent/20 text-accent rounded-full border border-accent/20">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span className="text-xs font-data font-bold">LIVE</span>
              </div>
            </div>

            <div className="telemetry-container bg-[#0a0a0a] rounded-xl p-6 flex-1 font-data text-sm flex flex-col gap-3 border border-primary/10 overflow-hidden relative">
              <p className="line-1 typewriter-text text-accent"></p>
              <p className="line-2 typewriter-text text-primary/70"></p>
              <p className="text-primary/70"><span className="line-3 typewriter-text"></span><span className="line-3-ok typewriter-text text-green-400"></span></p>
              <p className="line-4 typewriter-text text-primary/70"></p>
              <p className="animate-pulse text-accent mt-2">_</p>
              
              <div className="absolute right-[-10px] bottom-[-10px] w-32 h-32 opacity-5 flex items-center justify-center animate-[spin_15s_linear_infinite] pointer-events-none"><Database size={120}/></div>
            </div>
          </div>

          {/* Card 3: Cursor Protocol Scheduler (Design/SEO) */}
          <div className="skill-card-container bg-primary border border-dark/10 rounded-[2rem] p-8 shadow-sm flex flex-col gap-8 overflow-hidden group h-[450px]">
            <div className="flex flex-col gap-2">
              <h3 className="font-heading font-bold text-2xl">Growth & Design</h3>
              <p className="text-sm font-data text-dark/60">Visual synthesis & search velocity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 flex-1 cursor-pointer">
               <div className="design-grid-item bg-background border border-dark/5 rounded-xl p-6 flex flex-col justify-between hover:bg-dark hover:text-primary transition-colors duration-300 hover:shadow-lg hover:-translate-y-1 group/item">
                  <PenTool className="text-accent group-hover/item:scale-110 transition-transform" size={28} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">UI/UX Design</h4>
                    <span className="text-xs font-data opacity-60">Photoshop / Figma</span>
                  </div>
               </div>
               <div className="design-grid-item bg-background border border-dark/5 rounded-xl p-6 flex flex-col justify-between hover:bg-dark hover:text-primary transition-colors duration-300 hover:shadow-lg hover:-translate-y-1 group/item">
                  <Search className="text-accent group-hover/item:scale-110 transition-transform" size={28} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">SEO</h4>
                    <span className="text-xs font-data opacity-60">Keyword Optimization</span>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
