'use client';

import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden bg-[#050505] border-t border-[#2A2A2A]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#E63946]/10"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-7xl font-bold text-[#F5F5F5] mb-8 tracking-tight uppercase">
            Unlock Your <br className="sm:hidden" /> Full Potential
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base md:text-xl text-[#A1A1AA] mb-12 max-w-2xl mx-auto leading-relaxed">
            Train with elite equipment built for champions
          </p>
          
          <a 
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 font-['Inter'] font-bold text-sm md:text-lg text-white transition-all duration-300 ease-in-out bg-[#E63946] rounded-full hover:bg-[#B91C1C] overflow-hidden uppercase tracking-widest"
          >
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 ease-out group-hover:scale-100 group-hover:bg-white/10"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
