'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';

const TOTAL_FRAMES = 40;

const scenes = [
  { id: 'origin', label: 'THE ORIGIN' },
  { id: 'strength', label: 'STRENGTH' },
  { id: 'power', label: 'POWER' },
  { id: 'discipline', label: 'DISCIPLINE' },
  { id: 'legacy', label: 'LEGACY' },
];

export default function HeroCanvasAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Load animation frames
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames/frame_${i}.webp`;
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Canvas Rendering Logic
  useEffect(() => {
    if (!canvasRef.current || images.length !== TOTAL_FRAMES || imagesLoaded !== TOTAL_FRAMES) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const render = () => {
      const progress = smoothProgress.get();
      const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES));
      const img = images[frameIndex];
      if (!img) return;

      const canvas = canvasRef.current!;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      // RESTORED: Full-screen cinematic cover fit for all devices
      const ratio = Math.max(hRatio, vRatio);
      
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    };

    const unsubscribe = smoothProgress.on('change', () => {
      animationFrameId = requestAnimationFrame(render);
    });
    render();
    return () => {
      unsubscribe();
      cancelAnimationFrame(animationFrameId);
    };
  }, [images, imagesLoaded, smoothProgress]);

  // PARALLAX DEPTH MAPPING
  
  // 1. Background Outline Text Parallax
  const outlineY = useTransform(smoothProgress, [0, 1], [0, -300]);
  const outlineOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 0.05, 0.05, 0]);

  // 2. Scene 1: ORIGIN (0 - 0.2)
  const scene1Opacity = useTransform(smoothProgress, [0, 0.15, 0.2], [1, 1, 0]);
  const scene1Scale = useTransform(smoothProgress, [0, 0.2], [1, 1.2]);
  const scene1Blur = useTransform(smoothProgress, [0, 0.15], ["blur(0px)", "blur(10px)"]);

  // 3. Scene 2: STRENGTH (0.2 - 0.4)
  const scene2Opacity = useTransform(smoothProgress, [0.18, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
  const scene2Scale = useTransform(smoothProgress, [0.18, 0.3, 0.4], [0.8, 1.1, 1.5]);
  const scene2Rotate = useTransform(smoothProgress, [0.18, 0.4], [-5, 5]);

  // 4. Scene 3: POWER (0.4 - 0.6)
  const scene3Opacity = useTransform(smoothProgress, [0.38, 0.45, 0.55, 0.6], [0, 1, 1, 0]);
  const scene3X = useTransform(smoothProgress, [0.38, 0.5, 0.6], [-100, 0, 100]);
  const scene3LetterSpacing = useTransform(smoothProgress, [0.4, 0.6], ["0.1em", "0.5em"]);

  // 5. Scene 4: DISCIPLINE (0.6 - 0.8)
  const scene4Opacity = useTransform(smoothProgress, [0.58, 0.65, 0.75, 0.8], [0, 1, 1, 0]);
  const scene4Y = useTransform(smoothProgress, [0.58, 0.7, 0.8], [50, 0, -50]);
  const scene4Tracking = useTransform(smoothProgress, [0.6, 0.8], ["1em", "0.2em"]);

  // 6. Scene 5: LEGACY / CTA (0.8 - 1.0)
  const scene5Opacity = useTransform(smoothProgress, [0.78, 0.85, 1], [0, 1, 1]);
  const scene5Scale = useTransform(smoothProgress, [0.8, 1], [0.9, 1]);

  // 7. Progress Indicator
  const progressLineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative h-[350vh] bg-[#050505] selection:bg-[#E63946] selection:text-white">
      {/* LOADING SCREEN */}
      {imagesLoaded < TOTAL_FRAMES && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white font-['Playfair_Display'] text-2xl mb-6 tracking-[0.3em] uppercase">
            Transformers
          </motion.div>
          <div className="w-48 h-[2px] bg-white/10 relative">
            <motion.div className="absolute inset-y-0 left-0 bg-[#E63946] shadow-[0_0_15px_rgba(230,57,70,0.8)]" style={{ width: `${(imagesLoaded / TOTAL_FRAMES) * 100}%` }} />
          </div>
        </div>
      )}

      {/* STICKY CONTENT CONTAINER */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* BACKGROUND CANVAS */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-80 transition-opacity duration-1000" />
        
        {/* CINEMATIC OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none z-[1]" />
        <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.95)] pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-[1]" />

        {/* 1. GIANT BACKGROUND OUTLINE TEXT (Parallax Layer) */}
        <motion.div 
          style={{ y: outlineY, opacity: outlineOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2] whitespace-nowrap overflow-hidden"
        >
          <h2 className="text-[25vw] font-black font-['Inter'] uppercase text-transparent stroke-white stroke-[1px] opacity-10 tracking-tighter">
            STRENGTH DISCIPLINE POWER
          </h2>
        </motion.div>

        {/* 2. VERTICAL PROGRESS INDICATOR (Left Side) */}
        <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-12 z-50 hidden sm:flex">
          <div className="w-[1px] h-48 bg-white/10 relative">
            <motion.div style={{ height: progressLineHeight }} className="absolute top-0 left-0 w-full bg-[#E63946] shadow-[0_0_10px_#E63946]" />
          </div>
          <div className="flex flex-col gap-8">
            {scenes.map((scene, i) => (
              <motion.div 
                key={scene.id}
                initial={false}
                animate={{ 
                  opacity: (scrollYProgress.get() >= i * 0.2 && scrollYProgress.get() < (i + 1) * 0.2) ? 1 : 0.3,
                  scale: (scrollYProgress.get() >= i * 0.2 && scrollYProgress.get() < (i + 1) * 0.2) ? 1.2 : 1
                }}
                className="text-[10px] font-bold tracking-[0.2em] text-white vertical-text uppercase [writing-mode:vertical-lr] rotate-180"
              >
                {scene.label}
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. CINEMATIC STORYTELLING OVERLAYS */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-center px-6 z-10">
          
          {/* SCENE 1: THE ORIGIN */}
          <motion.div style={{ opacity: scene1Opacity, scale: scene1Scale, filter: scene1Blur }} className="absolute w-full max-w-6xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
              className="text-[#E63946] font-bold tracking-[0.5em] uppercase text-xs md:text-sm mb-6 block"
            >
              Est. 2018 — Luxury Fitness
            </motion.span>
            <h1 className="font-['Playfair_Display'] text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter text-white uppercase leading-none mb-8">
              Transformers <br/> <span className="text-transparent stroke-white stroke-[1px]">Gym</span>
            </h1>
            <p className="font-['Inter'] text-sm md:text-xl text-zinc-400 max-w-2xl mx-auto tracking-[0.2em] uppercase font-light">
              Built for the relentless.
            </p>
          </motion.div>

          {/* SCENE 2: STRENGTH */}
          <motion.div style={{ opacity: scene2Opacity, scale: scene2Scale, rotate: scene2Rotate }} className="absolute w-full">
            <h2 className="font-['Inter'] text-[15vw] font-black text-white leading-none uppercase italic tracking-tighter drop-shadow-[0_20px_50px_rgba(230,57,70,0.3)]">
              STRENGTH
            </h2>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[1px] bg-gradient-to-r from-transparent via-[#E63946] to-transparent opacity-50" />
          </motion.div>

          {/* SCENE 3: POWER */}
          <motion.div style={{ opacity: scene3Opacity, x: scene3X, letterSpacing: scene3LetterSpacing }} className="absolute w-full">
            <h2 className="font-['Playfair_Display'] text-[12vw] font-bold text-white leading-none uppercase tracking-widest text-transparent stroke-white stroke-[2px]">
              POWER
            </h2>
          </motion.div>

          {/* SCENE 4: DISCIPLINE */}
          <motion.div style={{ opacity: scene4Opacity, y: scene4Y, letterSpacing: scene4Tracking }} className="absolute w-full max-w-4xl">
             <h2 className="font-['Inter'] text-6xl md:text-[8rem] font-bold text-white uppercase tracking-tighter leading-none mb-6">
               DISCIPLINE
             </h2>
             <div className="h-[2px] w-32 bg-[#E63946] mx-auto mb-6 shadow-[0_0_20px_#E63946]" />
             <p className="text-white/60 text-lg md:text-2xl font-light italic">&quot;Where focus meets transformation.&quot;</p>
          </motion.div>

          {/* SCENE 5: LEGACY / CTA */}
          <motion.div style={{ opacity: scene5Opacity, scale: scene5Scale }} className="absolute w-full max-w-6xl pointer-events-auto">
            
            {/* Floating Glassmorphic Panels (Stats) */}
            <div className="absolute -top-48 left-1/2 -translate-x-1/2 flex gap-4 md:gap-8 w-full justify-center px-4 overflow-hidden py-8">
              {[
                { label: 'Rating', val: '4.8★' },
                { label: 'Community', val: '5k+' },
                { label: 'Elite Trainers', val: '12+' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="px-6 py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl min-w-[120px]"
                >
                  <div className="text-[#E63946] text-xl font-bold">{stat.val}</div>
                  <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <h2 className="font-['Playfair_Display'] text-5xl sm:text-7xl md:text-[8rem] font-bold tracking-tighter text-white mb-12 uppercase leading-none">
              Build Your <br/> <span className="text-[#E63946]">Legacy</span>
            </h2>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-white text-black px-12 py-6 rounded-full tracking-[0.2em] uppercase font-['Inter'] font-black text-sm transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] inline-block"
            >
              <span className="relative z-10 flex items-center gap-4">
                Start Your Transformation
                <motion.svg 
                  className="w-5 h-5" 
                  animate={{ x: [0, 5, 0] }} 
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </span>
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
            </motion.a>
          </motion.div>

        </div>

        {/* Ambient Light Streaks */}
        <div className="absolute -bottom-1/2 -right-1/4 w-[80vw] h-[80vh] bg-[#E63946] rounded-full blur-[300px] opacity-[0.08] pointer-events-none mix-blend-screen animate-pulse" />
        <div className="absolute -top-1/2 -left-1/4 w-[60vw] h-[60vh] bg-white rounded-full blur-[300px] opacity-[0.03] pointer-events-none mix-blend-screen" />

      </div>

      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-lr;
        }
        .stroke-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
