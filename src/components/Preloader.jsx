import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Signature from './Signature';

export default function Preloader({ minDuration = 2400, onFinished }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Smooth architectural progress counter from 0 to 100
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / minDuration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
          setTimeout(() => {
            setIsVisible(false);
            if (onFinished) onFinished();
          }, 600);
        }, 350);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [minDuration, onFinished]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } }}
          className="fixed inset-0 z-[99999] bg-[#070708] text-white flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center_40%,rgba(197,138,105,0.16)_0%,rgba(14,61,47,0.08)_40%,transparent_70%)]" />

          {/* Architectural Blueprint Grid Pattern in Background */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="preloader-grid" width="36" height="36" patternUnits="userSpaceOnUse">
                  <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.7" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#preloader-grid)" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center px-4 max-w-lg w-full text-center">
            {/* 1. Circular KANNVAS Medallion (Scales gracefully on mobile) */}
            <motion.div
              initial={false}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative mb-2 sm:mb-3 flex items-center justify-center"
            >
              {/* Outer soft glowing neon halo */}
              <div className="absolute -inset-4 rounded-full bg-[#c58a69]/25 blur-xl pointer-events-none" />
              <div className="absolute -inset-1 rounded-full bg-white/15 blur-md pointer-events-none" />

              {/* Exact Medallion Graphic from Logo */}
              <div className="relative w-[78px] h-[78px] sm:w-[96px] sm:h-[96px] rounded-full shadow-[0_0_24px_rgba(197,138,105,0.45)] flex items-center justify-center">
                <img
                  src="/kannvas-emblem-clean.png"
                  alt="KANNVAS Emblem"
                  className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(212,155,115,0.4)] select-none pointer-events-none"
                  loading="eager"
                  decoding="sync"
                />
              </div>
            </motion.div>

            {/* 2. Handwritten Animated Signature "Kannvas" (Responsive width, fits all mobile dimensions) */}
            <div className="relative flex justify-center items-center w-full max-w-[76vw] sm:max-w-[440px] mx-auto -mt-1 sm:-mt-2 px-1">
              <Signature
                text="Kannvas"
                fontSize={64}
                color="#FFFFFF"
                duration={0.9}
                delay={0.05}
                fontUrl="/LastoriaBoldRegular.otf"
                className="drop-shadow-[0_0_12px_rgba(255,255,255,0.85)] drop-shadow-[0_0_24px_rgba(255,255,255,0.35)]"
              />
            </div>

            {/* 3. Animated Underline Swoop Arc (Scales proportionally) */}
            <svg
              className="w-44 sm:w-56 h-4 sm:h-5 -mt-2 sm:-mt-3 mb-2 overflow-visible"
              viewBox="0 0 240 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M 15 8 Q 120 18 225 8"
                stroke="#c58a69"
                strokeWidth="2.2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.6, ease: 'easeOut' }}
              />
            </svg>

            {/* 4. Subtitle: "DESIGN & INTERIORS" in warm copper with wide tracking */}
            <motion.div
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="text-[10px] sm:text-[12px] uppercase font-semibold tracking-[0.3em] sm:tracking-[0.36em] text-[#c58a69] mb-6 sm:mb-8 font-['Titillium_Web'] select-none"
            >
              Design &amp; Interiors
            </motion.div>

            {/* 5. Minimalist Architectural Progress Bar & Counter (200px mobile, 250px desktop) */}
            <div className="w-48 sm:w-[250px] flex flex-col items-center gap-2">
              <div className="w-full h-[2px] bg-[#222226] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#c58a69] via-[#e5ab87] to-white rounded-full shadow-[0_0_8px_rgba(229,171,135,0.6)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>

              <div className="flex items-center justify-between w-full text-[10px] sm:text-[11px] font-mono tracking-widest pt-1">
                <span className="text-[#55555c]">INITIALIZING</span>
                <span className="text-[#c58a69] font-semibold">{String(progress).padStart(2, '0')}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
