"use client";

import { motion } from "framer-motion";

export default function PremiumFooter() {
  return (
    <footer className="bg-[#050505] pt-16 md:pt-24 pb-8 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          
          {/* Animated Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-bold font-['Playfair_Display'] text-white tracking-tighter">
              TRANSFORMERS<span className="text-[#E63946]">GYM</span>
            </h2>
            <p className="text-gym-text-secondary mt-2 text-sm tracking-widest uppercase">
              Forge Strength. Transform Lives.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex gap-4"
          >
            {['Instagram', 'Facebook', 'YouTube'].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 hover:border-[#E63946] hover:text-[#E63946] hover:shadow-[0_0_15px_rgba(230,57,70,0.4)] transition-all"
              >
                {/* Placeholder initials for social icons */}
                <span className="text-xs font-bold">{social.charAt(0)}</span>
              </motion.a>
            ))}
          </motion.div>

        </div>

        {/* Glowing Divider */}
        <div className="relative w-full h-px bg-white/10 mb-8">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[#E63946] to-transparent opacity-50" />
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gym-text-secondary text-sm">
            © 2026 Transformers Gym — Built for Strength & Transformation
          </p>
        </div>

      </div>
    </footer>
  );
}
