"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "Rating", value: 4.8, suffix: "★", decimals: 1 },
  { label: "Reviews", value: 401, suffix: "+", decimals: 0 },
  { label: "Since", value: 2018, suffix: "", decimals: 0 },
  { label: "Transformations", value: 5000, suffix: "+", decimals: 0 }
];

const Counter = ({ value, suffix, decimals }: { value: number; suffix: string; decimals: number }) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={nodeRef} className="flex items-baseline justify-center">
      <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] text-white tracking-tighter">
        {decimals ? count.toFixed(decimals) : Math.floor(count)}
      </span>
      <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E63946] ml-1">
        {suffix}
      </span>
    </div>
  );
};

export default function PremiumStats() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-[#0A0A0A] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 hover:border-[#E63946]/30 transition-all duration-300"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-[#E63946]/5 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              
              <span className="mt-4 text-sm md:text-base text-gym-text-secondary font-medium tracking-wide uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
