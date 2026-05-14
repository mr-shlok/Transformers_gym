"use client";

import { motion } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    alt: "Athletes Training",
    className: "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop",
    alt: "Luxury Gym Interior",
    className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1471&auto=format&fit=crop",
    alt: "Heavy Workout Environment",
    className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1637666217646-0ce8a47ba9ba?q=80&w=1470&auto=format&fit=crop",
    alt: "Dumbbells",
    className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1469&auto=format&fit=crop",
    alt: "Personal Training",
    className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop",
    alt: "Gym Lighting",
    className: "col-span-1 row-span-1 md:col-span-2 md:row-span-1",
  }
];

export default function HighEndGallery() {
  return (
    <section className="w-full py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-white tracking-tight mb-4">
            The <span className="text-[#E63946]">Facility</span>
          </h2>
          <p className="text-gym-text-secondary text-lg max-w-2xl mx-auto">
            Step into an environment engineered for greatness. Every corner is meticulously designed to inspire your transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative group overflow-hidden rounded-xl bg-white/5 border border-white/5 ${img.className}`}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/10 transition-colors duration-500 z-10" />
              
              <img 
                src={img.src} 
                alt={img.alt} 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out grayscale-[0.5] group-hover:grayscale-0"
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] z-20 pointer-events-none" />
              
              {/* Label */}
              <div className="absolute bottom-4 left-6 z-30 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white font-medium text-sm md:text-base tracking-wider uppercase border-l-2 border-[#E63946] pl-3">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
