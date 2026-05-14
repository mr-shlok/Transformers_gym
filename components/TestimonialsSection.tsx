"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "Best gym atmosphere in Vasai. Premium equipment and amazing trainers.",
    author: "Rahul S."
  },
  {
    id: 2,
    quote: "The interiors and lighting feel like a luxury fitness club.",
    author: "Aayush P."
  },
  {
    id: 3,
    quote: "One of the most motivating gym environments I’ve experienced.",
    author: "Karan M."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-white tracking-tight mb-4">
            Member <span className="text-[#E63946]">Stories</span>
          </h2>
          <div className="w-24 h-1 bg-[#E63946] mx-auto opacity-50" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#E63946]/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
            >
              {/* Parallax red glow border */}
              <div className="absolute inset-0 bg-[#E63946]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl rounded-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <svg className="w-10 h-10 text-[#E63946] opacity-40 mb-6" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
                </svg>
                
                <p className="text-lg md:text-xl text-white font-medium italic mb-8 leading-relaxed">
                  &quot;{test.quote}&quot;
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#111] border border-white/20 overflow-hidden flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{test.author.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{test.author}</h4>
                    <div className="flex gap-1 text-[#E63946] mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
