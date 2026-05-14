'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';

const TOTAL_FRAMES = 40;

export default function HeroCanvasAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Snappier spring configuration for premium feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 28,
    mass: 0.5,
    restDelta: 0.001
  });

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

  useEffect(() => {
    if (!canvasRef.current || images.length !== TOTAL_FRAMES || imagesLoaded !== TOTAL_FRAMES) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const progress = smoothProgress.get();
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(progress * TOTAL_FRAMES)
      );

      const img = images[frameIndex];
      if (!img) return;

      const canvas = canvasRef.current!;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      
      // Responsive Scaling: Contain fit for mobile to avoid cropping the dumbbell
      // Cover fit for desktop for cinematic fill
      const isMobile = canvas.width < 768;
      const ratio = isMobile ? Math.min(hRatio, vRatio) * 0.9 : Math.max(hRatio, vRatio);
      
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
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

  useEffect(() => {
    const handleResize = () => {
      if (images.length > 0 && imagesLoaded === TOTAL_FRAMES) {
         smoothProgress.set(smoothProgress.get() + 0.000001);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, imagesLoaded, smoothProgress]);

  // Responsive opacity and position mapping
  const section1Opacity = useTransform(smoothProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const section1Y = useTransform(smoothProgress, [0, 0.2], [0, -50]);
  const section1Scale = useTransform(smoothProgress, [0, 0.2], [1, 0.9]);

  const section2Opacity = useTransform(smoothProgress, [0.15, 0.25, 0.4], [0, 1, 0]);
  const section2Y = useTransform(smoothProgress, [0.15, 0.25, 0.4], [50, 0, -50]);

  const section3Opacity = useTransform(smoothProgress, [0.35, 0.45, 0.6], [0, 1, 0]);
  const section3Y = useTransform(smoothProgress, [0.35, 0.45, 0.6], [50, 0, -50]);

  const section4Opacity = useTransform(smoothProgress, [0.55, 0.7, 1], [0, 1, 1]);
  const section4Y = useTransform(smoothProgress, [0.55, 0.7], [50, 0]);

  return (
    <div ref={containerRef} className="relative h-[280vh] bg-[#050505]">
      {imagesLoaded < TOTAL_FRAMES && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-[#F5F5F5] font-['Playfair_Display'] text-xl md:text-2xl mb-4 tracking-wider uppercase"
          >
            Entering Transformers
          </motion.div>
          <div className="w-48 md:w-64 h-1 bg-[#151515] rounded-full overflow-hidden">
             <div 
               className="h-full bg-[#E63946] transition-all duration-300" 
               style={{ width: `${(imagesLoaded / TOTAL_FRAMES) * 100}%` }}
             />
          </div>
        </div>
      )}

      <div className="sticky top-0 h-screen w-full overflow-hidden will-change-transform">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-contain md:object-cover mix-blend-screen opacity-90 transition-opacity duration-700" 
        />
        
        {/* Cinematic Premium Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-transparent to-[#050505] pointer-events-none z-[1]" />
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-[url('/gym/chalk-particle.png')] bg-repeat opacity-30 animate-float mix-blend-screen pointer-events-none z-[1]" />
        <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-[#E63946] rounded-full blur-[250px] opacity-[0.1] pointer-events-none mix-blend-screen z-[1]" />

        {/* Text Overlays */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-6 sm:px-10 z-[10]">
          
          <motion.div 
            style={{ opacity: section1Opacity, y: section1Y, scale: section1Scale }} 
            className="absolute w-full max-w-5xl"
            initial={{ filter: 'blur(10px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-7xl lg:text-[9rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[#A1A1AA] drop-shadow-[0_0_40px_rgba(230,57,70,0.4)] mb-4 md:mb-8 uppercase leading-tight">
              Transformers <br className="hidden md:block"/> Gym
            </h1>
            <p className="font-['Inter'] text-sm sm:text-base md:text-lg lg:text-2xl text-[#E63946] font-semibold tracking-[0.2em] uppercase">
              Forge Strength. Transform Lives.
            </p>
          </motion.div>

          <motion.div style={{ opacity: section2Opacity, y: section2Y }} className="absolute w-full max-w-4xl">
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] mb-4 md:mb-6 uppercase">
              Elite Fitness <br className="md:hidden" /> Experience
            </h2>
            <p className="font-['Inter'] text-sm sm:text-base md:text-lg lg:text-xl text-zinc-400 max-w-xl mx-auto tracking-wide leading-relaxed">
              Premium equipment engineered for the world's most dedicated athletes.
            </p>
          </motion.div>

          <motion.div style={{ opacity: section3Opacity, y: section3Y }} className="absolute w-full max-w-4xl">
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] mb-4 md:mb-6 uppercase">
              Power Beyond <br className="md:hidden" /> Limits
            </h2>
            <p className="font-['Inter'] text-sm sm:text-base md:text-lg lg:text-xl text-zinc-400 max-w-xl mx-auto tracking-wide leading-relaxed">
              Train inside Vasai’s most cinematic luxury gym environment.
            </p>
          </motion.div>

          <motion.div style={{ opacity: section4Opacity, y: section4Y }} className="absolute pointer-events-auto w-full max-w-5xl">
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(230,57,70,0.3)] mb-8 md:mb-12 uppercase leading-tight">
              Build Your <br className="md:hidden" /> Legacy
            </h2>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/20 text-white px-8 py-4 md:px-12 md:py-6 rounded-full tracking-widest uppercase font-['Inter'] font-bold text-xs md:text-sm transition-all duration-500 hover:border-[#E63946]/80 hover:shadow-[0_0_40px_rgba(230,57,70,0.5)] inline-block"
            >
              <span className="relative z-10 flex items-center gap-3">
                Join Transformers Gym 
                <span className="group-hover:translate-y-1 transition-transform duration-300">&darr;</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E63946]/30 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
