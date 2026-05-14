'use client';

import { motion } from 'framer-motion';
import { features } from '@/data/features';
import Image from 'next/image';

export default function FeatureSection() {
  return (
    <section className="py-16 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative particles */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/gym/chalk-particle.png')] bg-repeat opacity-10 animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col gap-16 sm:gap-32">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${feature.position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}
            >
              <motion.div 
                initial={{ opacity: 0, x: feature.position === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden group">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80"
                  />
                  <div className="absolute inset-0 border border-[#2A2A2A] rounded-2xl z-10 mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-transparent opacity-80"></div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: feature.position === 'left' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2"
              >
                <h3 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6 leading-tight uppercase tracking-tight">
                  {feature.title}
                </h3>
                <p className="font-['Inter'] text-sm sm:text-base md:text-lg text-[#A1A1AA] leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-8">
                   <div className="h-[1px] w-24 bg-gradient-to-r from-[#E63946] to-transparent"></div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
