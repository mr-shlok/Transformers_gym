"use client";

import { motion } from "framer-motion";

const features = [
  "Personal Training",
  "Strength Training",
  "Cardio Zone",
  "Zumba Classes",
  "Air Conditioned",
  "Locker Facility",
  "Sauna & Shower",
  "Parking Available"
];

export default function PremiumGymIntro() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#050505] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E63946] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-8"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold font-['Playfair_Display'] leading-tight tracking-tight text-white"
          >
            The Ultimate <span className="text-[#E63946]">Fitness Experience</span> in Vasai
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gym-text-secondary leading-relaxed max-w-xl"
          >
            Transformers Gym delivers elite-level fitness experiences with world-class equipment, expert trainers, luxury interiors, and an environment designed to push human performance beyond limits.
          </motion.p>
          
          <div className="flex flex-wrap gap-3 pt-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm font-medium text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
              >
                {feature}
              </motion.div>
            ))}
          </div>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 40px rgba(230,57,70,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-[#E63946] text-white font-semibold rounded-none tracking-wider uppercase text-sm border border-[#E63946]/50 shadow-[0_0_20px_rgba(230,57,70,0.25)] transition-colors hover:bg-[#d62828] inline-block"
          >
            Book Free Trial
          </motion.a>
        </motion.div>
        
        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full"
        >
          <div className="relative aspect-[4/5] md:aspect-square w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
            {/* Dark cinematic overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
            
            {/* Use an Unsplash placeholder for luxury gym equipment */}
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop" 
              alt="Transformers Gym Facility" 
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#E63946] z-20 opacity-50" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#E63946] z-20 opacity-50" />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
