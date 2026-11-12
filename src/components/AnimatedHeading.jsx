import React from 'react';
import { useInView } from '../hooks/useInView';

export default function AnimatedHeading({
  tag,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  showLine = true,
  className = '',
  titleClassName = '',
}) {
  const [ref, inView] = useInView({ threshold: 0.15 });

  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div
      ref={ref}
      className={`ot-heading ${isCenter ? 'text-center flex flex-col items-center' : 'text-left'} ${className}`}
    >
      {/* 1. Pre-title Tag with Minimal Tracking Expansion & Soft Fade */}
      {tag && (
        <span
          className={`block text-xs uppercase font-bold text-[#b07c5e] mb-2.5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            inView
              ? 'opacity-100 translate-y-0 tracking-[2px]'
              : 'opacity-0 translate-y-2 tracking-[0.5px]'
          }`}
        >
          {tag}
        </span>
      )}

      {/* 2. Main Title with Minimal Soft Lift */}
      <h2
        className={`text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.2] font-bold font-['Titillium_Web'] tracking-tight transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDark ? 'text-white' : 'text-[#1A1A1A]'
        } ${titleClassName} ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3.5'
        }`}
      >
        {title}
      </h2>

      {/* 3. Minimal Architectural Hairline Bronze Line */}
      {showLine && (
        <div
          className={`h-[2px] bg-[#b07c5e] my-3.5 transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isCenter ? 'origin-center' : 'origin-left'
          } ${inView ? 'scale-x-100 opacity-100 w-12' : 'scale-x-0 opacity-0 w-12'}`}
        />
      )}

      {/* 4. Subtitle Paragraph with Soft Fade */}
      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed font-light mt-1 max-w-2xl transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isDark ? 'text-neutral-300' : 'text-[#7A7A7A]'
          } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

