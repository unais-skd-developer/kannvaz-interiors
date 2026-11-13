import React from 'react';
import ParticleTypography from './ParticleTypography';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[90px] bg-[#111111]"
    >
      {/* Single static banner image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/slideshow2-onepage.jpg"
          alt="Spaces Crafted Beautifully - KANNVAS"
          className="w-full h-full object-cover object-center"
        />
        {/* Deep dark architectural overlay for high text contrast */}
        <div className="absolute inset-0 bg-[#111111]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/75 via-[#1a1a1a]/50 to-[#111111]/85" />
      </div>

      {/* Hero Content with Cursor-Driven Particle Typography */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 text-center py-12 sm:py-16 flex flex-col items-center justify-center">
        {/* Accessible SEO Heading */}
        <h1 className="sr-only">Spaces Crafted Beautifully – KANNVAS Design Studio</h1>

        {/* Interactive Particle Typography (Disperses & Reassembles with Spring Physics) */}
        <div className="w-full mb-8">
          <ParticleTypography
            text={"Spaces Crafted\nBeautifully"}
            fontSize={100}
            fontFamily="'Titillium Web', sans-serif"
            fontWeight="700"
            particleSize={1.6}
            particleDensity={3.0}
            dispersionStrength={18}
            returnSpeed={0.08}
            color="#FFFFFF"
          />
        </div>

        {/* Signature Offset Button */}
        <div className="pt-2 z-20">
          <a
            href="#portfolio"
            className="octf-btn-light"
          >
            VIEW PROJECT
          </a>
        </div>
      </div>
    </section>
  );
}
