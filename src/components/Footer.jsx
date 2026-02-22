import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-dark text-primary py-12 px-6 md:px-12 lg:px-24 rounded-t-[4rem] flex flex-col items-center mt-[-4rem] relative z-20">
      <div className="max-w-7xl w-full flex flex-col gap-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-primary/10 pb-12">
          <div className="flex flex-col gap-2">
            <h3 className="font-heading font-bold text-2xl tracking-tight">Muhammad Farhan</h3>
            <p className="font-data text-sm text-primary/60">WordPress Developer & Graphic Designer</p>
          </div>
          
          <div className="flex items-center gap-3 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span className="font-data text-xs font-bold tracking-widest uppercase text-primary/80">Available for Work</span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-data text-primary/40">
          <p>© {new Date().getFullYear()} Muhammad Farhan. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
