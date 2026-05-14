"use client";

import { motion } from "framer-motion";

const features = [
  "Imported Equipment",
  "Luxury Interiors",
  "Expert Trainers",
  "Steam & Shower",
  "Smart Lockers",
  "Premium Lighting",
  "24/7 CCTV Security",
  "Fitness Community"
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-['Playfair_Display'] text-white tracking-tight mb-4 uppercase">
            Why <span className="text-[#E63946]">Choose Us</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gym-text-secondary max-w-2xl mx-auto leading-relaxed">
            Experience the pinnacle of fitness in an environment built for champions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-6 flex flex-col items-center justify-center text-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              {/* Floating glow animation on hover */}
              <div className="absolute inset-0 bg-[#E63946]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
              
              <div className="w-12 h-12 mb-4 rounded-full bg-[#111] flex items-center justify-center border border-white/10 group-hover:border-[#E63946]/50 group-hover:shadow-[0_0_20px_rgba(230,57,70,0.4)] transition-all duration-300">
                <div className="w-4 h-4 bg-[#E63946] rounded-full opacity-50 group-hover:opacity-100" />
              </div>
              
              <span className="text-sm md:text-base font-semibold text-white tracking-wide">
                {feature}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
