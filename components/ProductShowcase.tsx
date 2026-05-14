'use client';

import { motion } from 'framer-motion';
import { gymProducts } from '@/data/products';
import { Star } from 'lucide-react';
import Image from 'next/image';

export default function ProductShowcase() {
  return (
    <section className="py-16 md:py-32 bg-[#050505] relative z-10" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#F5F5F5] mb-6 uppercase tracking-tight">
            Elite <span className="text-[#E63946]">Equipment</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E63946] to-[#B91C1C] mx-auto mb-6"></div>
          <p className="font-['Inter'] text-sm sm:text-base md:text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            Precision engineered for performance. Discover our premium range of professional gym equipment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {gymProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-[#151515] border border-[#2A2A2A] rounded-2xl overflow-hidden hover:border-[#E63946]/50 transition-colors duration-500"
            >
              <div className="relative h-80 w-full bg-[#0A0A0A] overflow-hidden flex items-center justify-center">
                {/* Fallback to frame_10 for placeholder if missing */}
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent opacity-80"></div>
              </div>
              
              <div className="p-8 relative">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#F5F5F5]">
                    {product.name}
                  </h3>
                  <span className="font-['Inter'] text-xl font-bold text-[#E63946]">
                    {product.price}
                  </span>
                </div>
                
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-[#E63946] fill-[#E63946]' : 'text-[#2A2A2A]'}`} />
                  ))}
                  <span className="ml-2 text-sm text-[#A1A1AA]">{product.rating}</span>
                </div>

                <p className="font-['Inter'] text-[#A1A1AA] text-sm mb-6 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {product.features.map(feature => (
                    <span key={feature} className="text-xs font-['Inter'] px-3 py-1 bg-[#0A0A0A] border border-[#2A2A2A] rounded-full text-[#C0C0C0]">
                      {feature}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => alert(`${product.name} added to cart!`)}
                  className="group relative w-full py-4 overflow-hidden rounded-xl bg-[#111] border border-white/5 text-white font-['Inter'] font-semibold tracking-wide uppercase text-sm transition-all duration-500 hover:border-[#E63946]/50 hover:shadow-[0_0_30px_rgba(230,57,70,0.2)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-[#E63946] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Add to Cart
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E63946] to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out opacity-20" />
                  <div className="absolute inset-0 bg-[#E63946] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
