"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Strength Training",
    description: "Professional strength training programs designed for muscle growth, endurance, and peak athletic performance.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Personal Training",
    description: "Certified trainers providing personalized workout plans and transformation guidance.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Functional Fitness",
    description: "High-intensity functional workouts to improve agility, mobility, and body control.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Zumba & Cardio",
    description: "Energetic cardio and dance sessions designed for endurance and fat loss.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden border-y border-white/5">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E63946] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-white tracking-tight mb-4">
            Elite <span className="text-[#E63946]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-[#E63946] mx-auto opacity-50" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative p-8 md:p-10 rounded-2xl bg-[#050505] border border-white/10 hover:border-[#E63946]/50 transition-colors duration-300 overflow-hidden"
            >
              {/* Premium shadow on hover */}
              <div className="absolute inset-0 bg-[#E63946]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[#E63946] group-hover:scale-110 group-hover:bg-[#E63946] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gym-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
