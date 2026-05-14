"use client";

import { motion } from "framer-motion";

export default function LocationContact() {
  return (
    <section id="contact" className="py-16 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full space-y-10"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] text-white tracking-tight mb-4 uppercase">
                Find <span className="text-[#E63946]">Transformers</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gym-text-secondary leading-relaxed">
                Your journey begins here. Visit our premium facility and experience the difference.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[#E63946]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-gym-text-secondary leading-relaxed max-w-sm">
                    Transformers Gym<br/>
                    The BOX, Yashwant Smart City,<br/>
                    Vasai East, Maharashtra 401208
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[#E63946]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Hours</h4>
                  <p className="text-gym-text-secondary">Open Daily — 5:30 AM to 11:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[#E63946]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-gym-text-secondary">+91 72766 06684</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="tel:+917276606684"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(230,57,70,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#E63946] text-white font-medium uppercase tracking-wide text-sm border border-[#E63946]/50 transition-colors inline-block"
              >
                Call Now
              </motion.a>
              <motion.a
                href="https://maps.google.com/?q=The+BOX,+Yashwant+Smart+City,+Vasai+East,+Maharashtra+401208"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/5 text-white font-medium uppercase tracking-wide text-sm border border-white/10 hover:bg-white/10 transition-colors inline-block"
              >
                Get Directions
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Map Embedded */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
              <div className="absolute inset-0 bg-[#E63946]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.535697669528!2d72.8256!3d19.3875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIzJzE1LjAiTiA3MsKwNDknMzIuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }} 
                allowFullScreen={true} 
                loading="lazy" 
                className="absolute inset-0"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
