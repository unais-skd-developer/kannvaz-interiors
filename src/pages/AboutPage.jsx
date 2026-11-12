import React, { useState, useRef } from 'react';
import ParticleTypography from '../components/ParticleTypography';
import AnimatedHeading from '../components/AnimatedHeading';
import {
  Home,
  Building2,
  Stethoscope,
  Compass,
  CheckCircle2,
  Award,
  Sparkles,
  Users,
  Layers,
  Clock,
  ShieldCheck,
  Quote,
} from 'lucide-react';

// Reusable 3D Perspective Tilt Card
function ThreeDCard({ children, className = '', containerClassName = '' }) {
  const cardRef = useRef(null);
  const rAFRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current || rAFRef.current) return;
    const clientX = e.clientX;
    const clientY = e.clientY;

    rAFRef.current = requestAnimationFrame(() => {
      rAFRef.current = null;
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -((y - centerY) / centerY) * 12;
      const rotateY = ((x - centerX) / centerX) * 12;

      setRotate({ x: rotateX, y: rotateY });
      setGlare({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.35,
      });
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    if (rAFRef.current) {
      cancelAnimationFrame(rAFRef.current);
      rAFRef.current = null;
    }
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      className={`relative ${containerClassName}`}
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className={`relative transition-transform duration-200 ease-out ${className}`}
        style={{
          transform: isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.025, 1.025, 1.025)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {children(isHovered, glare)}
      </div>
    </div>
  );
}

export default function AboutPage({ onNavigateHome, onNavigateContact }) {
  return (
    <div className="bg-white text-[#1a1a1a] pt-[90px]">
      {/* 1. Page Header / Breadcrumb Banner with Particle Typography */}
      <section className="relative py-20 sm:py-24 bg-[#111111] overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-banner.jpg"
            alt="About KANNVAS Architecture & Interior Design"
            className="w-full h-full object-cover object-center opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/85 via-[#111111]/75 to-[#111111]" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 flex flex-col items-center">
          <span className="block text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#b07c5e] uppercase mb-2 anim-header-tag">
            [ GET TO KNOW US ]
          </span>

          {/* Accessible Heading for SEO */}
          <h1 className="sr-only">About Us – KANNVAS Design Studio</h1>

          {/* Particle Typography for "ABOUT US" */}
          <div className="w-full max-w-2xl mx-auto my-2">
            <ParticleTypography
              text="ABOUT US"
              fontSize={82}
              fontFamily="'Titillium Web', sans-serif"
              fontWeight="bold"
              particleSize={1.8}
              particleDensity={4}
              dispersionStrength={20}
              returnSpeed={0.08}
              color="#FFFFFF"
              className="h-[140px] sm:h-[170px]"
            />
          </div>

          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-neutral-400 font-medium mt-3 anim-header-sub">
            <button
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-[#b07c5e]">/</span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* 2. Section: Company Introduction with 3D Tilt Card */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Interactive 3D Card with Floating Badge */}
            <div className="lg:col-span-6 relative">
              <ThreeDCard containerClassName="w-full py-4">
                {(isHovered, glare) => (
                  <>
                    <div
                      className="relative overflow-hidden rounded-sm shadow-2xl border border-gray-200 bg-white"
                      style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}
                    >
                      <img
                        src="/kannvas-about.jpg"
                        alt="KANNVAS Interior Architecture"
                        className="w-full h-auto max-h-[500px] object-cover transition-transform duration-700 ease-out select-none"
                        style={{ transform: isHovered ? 'scale(1.04)' : 'scale(1)' }}
                      />
                      {/* Dynamic 3D Glare */}
                      <div
                        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
                        style={{
                          opacity: glare.opacity,
                          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 65%)`,
                        }}
                      />
                    </div>

                    {/* Floating 3D Badge */}
                    <div
                      className="absolute -bottom-6 -right-4 sm:bottom-8 sm:-right-6 bg-[#1a1a1a] p-6 text-white border-l-4 border-[#b07c5e] transition-all duration-300 select-none z-30"
                      style={{
                        transform: isHovered ? 'translateZ(75px)' : 'translateZ(30px)',
                        boxShadow: isHovered
                          ? '0 30px 60px -12px rgba(0, 0, 0, 0.65), 0 18px 36px -18px rgba(0, 0, 0, 0.7)'
                          : '0 20px 25px -5px rgba(0, 0, 0, 0.4)',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <div
                        className="text-4xl font-extrabold font-['Titillium_Web'] text-[#b07c5e] transition-transform duration-200"
                        style={{ transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)' }}
                      >
                        16+
                      </div>
                      <div
                        className="text-xs uppercase tracking-wider text-neutral-200 font-semibold mt-1 max-w-[160px] transition-transform duration-200"
                        style={{ transform: isHovered ? 'translateZ(15px)' : 'translateZ(0px)' }}
                      >
                        Years of Architectural &amp; Interior Mastery
                      </div>
                    </div>
                  </>
                )}
              </ThreeDCard>
            </div>

            {/* Right Column: Company Story */}
            <div className="lg:col-span-6">
              <AnimatedHeading
                tag="[ COMPANY INTRODUCTION ]"
                title="Every Space Is a Canvas Waiting to Tell a Story"
                className="mb-6"
                titleClassName="text-3xl sm:text-4xl lg:text-5xl"
              />
              <p className="text-base text-[#666] leading-relaxed font-light mb-6">
                At <strong className="text-[#1A1A1A] font-semibold">KANNVAS</strong>, we are a premier creative interior design and architectural consultancy firm dedicated to transforming ordinary environments into thoughtfully designed, functional, and visually inspiring spaces.
              </p>
              <p className="text-base text-[#666] leading-relaxed font-light mb-8">
                With over <strong className="text-[#1A1A1A] font-semibold">16 years of legacy</strong> across Mumbai, Thane, Navi Mumbai, and Pune, our portfolio reflects 170+ completed projects spanning luxury residences, dynamic commercial hubs, and state-of-the-art healthcare facilities. We seamlessly unite artistic intuition with structured construction rigor.
              </p>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-extrabold font-['Titillium_Web'] text-[#1A1A1A]">
                    170<span className="text-[#b07c5e]">+</span>
                  </div>
                  <div className="text-xs text-[#7A7A7A] uppercase tracking-wider font-semibold mt-1">
                    Projects Done
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold font-['Titillium_Web'] text-[#1A1A1A]">
                    400<span className="text-[#b07c5e]">+</span>
                  </div>
                  <div className="text-xs text-[#7A7A7A] uppercase tracking-wider font-semibold mt-1">
                    3D Renders
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold font-['Titillium_Web'] text-[#1A1A1A]">
                    200<span className="text-[#b07c5e]">+</span>
                  </div>
                  <div className="text-xs text-[#7A7A7A] uppercase tracking-wider font-semibold mt-1">
                    Vaastu Plans
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold font-['Titillium_Web'] text-[#1A1A1A]">
                    100<span className="text-[#b07c5e]">%</span>
                  </div>
                  <div className="text-xs text-[#7A7A7A] uppercase tracking-wider font-semibold mt-1">
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section: Design Philosophy */}
      <section className="py-24 bg-[#141414] text-white relative">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedHeading
              tag="[ OUR DESIGN PHILOSOPHY ]"
              title="Interiors That Endure & Echo Your Lifestyle"
              align="center"
              theme="dark"
              titleClassName="text-3xl sm:text-5xl"
            />
            <blockquote className="text-lg sm:text-xl font-light italic text-neutral-300 leading-relaxed mt-4">
              "KANNVAS creates interiors that endure, cohesive expressions of your memories and lifestyle. No two projects tell the same story."
            </blockquote>
          </div>

          {/* 4 Pillars of Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-[#1f1f1f] border border-white/10 hover:border-[#b07c5e] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-lg">
              <div>
                <span className="text-3xl font-extrabold font-mono text-[#b07c5e] block mb-4">
                  01
                </span>
                <h3 className="text-xl font-bold font-['Titillium_Web'] text-white mb-3">
                  Enduring Timelessness
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  We look beyond ephemeral trends, engineering timeless spatial compositions that retain their beauty, value, and relevance for decades.
                </p>
              </div>
            </div>

            <div className="p-8 bg-[#1f1f1f] border border-white/10 hover:border-[#b07c5e] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-lg">
              <div>
                <span className="text-3xl font-extrabold font-mono text-[#b07c5e] block mb-4">
                  02
                </span>
                <h3 className="text-xl font-bold font-['Titillium_Web'] text-white mb-3">
                  Tailored Expression
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  No two clients are alike. Every layout, millwork contour, and palette choice is uniquely sculpted around your daily routines, aspirations, and family needs.
                </p>
              </div>
            </div>

            <div className="p-8 bg-[#1f1f1f] border border-white/10 hover:border-[#b07c5e] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-lg">
              <div>
                <span className="text-3xl font-extrabold font-mono text-[#b07c5e] block mb-4">
                  03
                </span>
                <h3 className="text-xl font-bold font-['Titillium_Web'] text-white mb-3">
                  Scientific Vaastu Harmony
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  Harmonizing directional energy fields, natural daylight vectors, and ventilation paths to infuse balance, prosperity, and peace into your living ecosystem.
                </p>
              </div>
            </div>

            <div className="p-8 bg-[#1f1f1f] border border-white/10 hover:border-[#b07c5e] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-lg">
              <div>
                <span className="text-3xl font-extrabold font-mono text-[#b07c5e] block mb-4">
                  04
                </span>
                <h3 className="text-xl font-bold font-['Titillium_Web'] text-white mb-3">
                  Honest Craftsmanship
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  Partnering with specialized vendors, master carpenters, and stonemasons to deliver zero-compromise precision and flawless finishes on every surface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: Founder Profile – Pinky Mohanlal Gupta with 3D Card */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Founder Portrait in Interactive 3D Card */}
            <div className="lg:col-span-5 relative">
              <ThreeDCard containerClassName="w-full py-4">
                {(isHovered, glare) => (
                  <>
                    <div
                      className="relative overflow-hidden shadow-2xl border-2 border-gray-200 bg-white"
                      style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}
                    >
                      <img
                        src="/pinky-gupta.jpg"
                        alt="Pinky Mohanlal Gupta - Principal Designer & Founder of KANNVAS"
                        className="w-full h-[460px] sm:h-[520px] object-cover object-top transition-transform duration-700 ease-out select-none"
                        style={{ transform: isHovered ? 'scale(1.03)' : 'scale(1)' }}
                      />
                      {/* Dynamic 3D Glare */}
                      <div
                        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
                        style={{
                          opacity: glare.opacity,
                          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 65%)`,
                        }}
                      />
                    </div>

                    {/* Offset Decorative Brackets in 3D */}
                    <div
                      className="hidden sm:block absolute -top-4 -left-4 w-28 h-28 border-t-2 border-l-2 border-[#b07c5e] transition-transform duration-300 pointer-events-none"
                      style={{ transform: isHovered ? 'translateZ(40px)' : 'translateZ(10px)' }}
                    />
                    <div
                      className="hidden sm:block absolute -bottom-4 -right-4 w-28 h-28 border-b-2 border-r-2 border-[#b07c5e] transition-transform duration-300 pointer-events-none"
                      style={{ transform: isHovered ? 'translateZ(40px)' : 'translateZ(10px)' }}
                    />

                    {/* Floating 3D Nameplate */}
                    <div
                      className="bg-[#1A1A1A] text-white p-6 shadow-2xl mt-4 border-l-4 border-[#b07c5e] transition-all duration-300 select-none z-30"
                      style={{
                        transform: isHovered ? 'translateZ(65px)' : 'translateZ(25px)',
                        boxShadow: isHovered
                          ? '0 25px 50px -12px rgba(0, 0, 0, 0.65)'
                          : '0 15px 25px -5px rgba(0, 0, 0, 0.35)',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <h4
                        className="text-xl font-bold font-['Titillium_Web'] text-white transition-transform duration-200"
                        style={{ transform: isHovered ? 'translateZ(15px)' : 'translateZ(0px)' }}
                      >
                        Pinky Mohanlal Gupta
                      </h4>
                      <p
                        className="text-xs uppercase tracking-widest text-[#b07c5e] font-semibold mt-1 transition-transform duration-200"
                        style={{ transform: isHovered ? 'translateZ(10px)' : 'translateZ(0px)' }}
                      >
                        Founder &amp; Principal Designer
                      </p>
                    </div>
                  </>
                )}
              </ThreeDCard>
            </div>

            {/* Founder Biography & Credentials */}
            <div className="lg:col-span-7">
              <AnimatedHeading
                tag="[ FOUNDER PROFILE ]"
                title="Pinky Mohanlal Gupta"
                subtitle="Leading KANNVAS with Astute Vision & Meticulous Craftsmanship"
                className="mb-6"
                titleClassName="text-3xl sm:text-4xl lg:text-5xl"
              />

              <div className="space-y-4 text-base text-[#666] leading-relaxed font-light mb-8">
                <p>
                  With <strong className="text-[#1A1A1A] font-semibold">over 16 years transforming Mumbai’s most discerning spaces</strong>, Pinky Mohanlal Gupta leads KANNVAS with astute vision and meticulous craftsmanship. Her extensive portfolio spans luxury high-rise residences, commercial workspaces, and specialized healthcare projects.
                </p>
                <p>
                  Pinky's design leadership is characterized by an uncompromising eye for detail, deep material intelligence, and a client-first collaborative mindset. She believes true design excellence is achieved when aesthetic grandeur seamlessly serves everyday comfort and practical living.
                </p>
                <p>
                  Supported by specialized vendors, advanced 3D visualization modelers, accredited Vaastu consultants, and dedicated on-site execution teams, she ensures every project transitions smoothly from initial 3D sketch to turnkey reality on time and on budget.
                </p>
              </div>

              {/* Founder Quote Card */}
              <div className="p-6 bg-[#F9F9F9] border-l-4 border-[#b07c5e] flex items-start space-x-4 mb-8">
                <Quote className="w-8 h-8 text-[#b07c5e] shrink-0 opacity-80" />
                <div>
                  <p className="text-sm sm:text-base italic text-[#444] font-medium leading-relaxed">
                    "Design is not merely what is visible to the eye; it is the rhythm of how an environment breathes, energizes, and comforts those who live within it."
                  </p>
                  <span className="block text-xs uppercase font-bold tracking-wider text-[#1A1A1A] mt-2">
                    — Pinky Mohanlal Gupta
                  </span>
                </div>
              </div>

              {/* Call to action */}
              <button
                onClick={onNavigateContact}
                className="octf-btn octf-btn-dark cursor-pointer"
              >
                CONNECT WITH OUR FOUNDER
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section: Mission & Vision */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="block text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#b07c5e] uppercase mb-3">
              [ GUIDING PRINCIPLES ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-['Titillium_Web'] text-[#1A1A1A] leading-tight">
              Our Mission &amp; Vision
            </h2>
            <p className="text-base text-[#7A7A7A] font-light mt-4">
              The driving purpose and enduring aspirations that guide every blueprint we draft and every home we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="p-10 bg-[#1A1A1A] text-white border-t-4 border-[#b07c5e] shadow-xl flex flex-col justify-between hover:-translate-y-1.5 transition-transform duration-300">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Sparkles className="w-8 h-8 text-[#b07c5e]" />
                  <h3 className="text-2xl sm:text-3xl font-bold font-['Titillium_Web'] text-white">
                    Our Mission
                  </h3>
                </div>
                <p className="text-base text-neutral-300 font-light leading-relaxed mb-6">
                  To democratize visionary interior architecture across India by blending aesthetic majesty with everyday practicality, absolute budget transparency, and turnkey execution that consistently surpasses client expectations.
                </p>
                <div className="space-y-3 pt-6 border-t border-white/10 text-sm text-neutral-300">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 bg-[#b07c5e] rounded-full" />
                    <span>Transparent costing with zero hidden surprise charges</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 bg-[#b07c5e] rounded-full" />
                    <span>Strict adherence to committed milestone delivery dates</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 bg-[#b07c5e] rounded-full" />
                    <span>Continuous client involvement from 3D render to key handover</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-10 bg-[#F9F9F9] border-t-4 border-[#1A1A1A] border-x border-b border-gray-200 shadow-xl flex flex-col justify-between hover:-translate-y-1.5 transition-transform duration-300">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Award className="w-8 h-8 text-[#b07c5e]" />
                  <h3 className="text-2xl sm:text-3xl font-bold font-['Titillium_Web'] text-[#1A1A1A]">
                    Our Vision
                  </h3>
                </div>
                <p className="text-base text-[#666] font-light leading-relaxed mb-6">
                  To be acknowledged as Mumbai and India's most trusted interior design studio, benchmarked for sculpting soulful, sustainable, and structurally flawless spaces that elevate human happiness and daily life.
                </p>
                <div className="space-y-3 pt-6 border-t border-gray-200 text-sm text-[#555]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 bg-[#1A1A1A] rounded-full" />
                    <span>Pioneering sustainable and green material integration</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 bg-[#1A1A1A] rounded-full" />
                    <span>Setting new benchmarks for artisan finish and joinery</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 bg-[#1A1A1A] rounded-full" />
                    <span>Cultivating lifelong relationships with our homeowners</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Section: Why Choose Us (Why Mumbai Chooses KANNVAS) */}
      <section className="py-24 bg-[#141414] text-white relative">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="block text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#b07c5e] uppercase mb-3">
              [ WHY MUMBAI CHOOSES KANNVAS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-['Titillium_Web'] text-white leading-tight">
              Trust Your Vision to Mumbai's Finest
            </h2>
            <p className="text-base text-neutral-300 font-light mt-4">
              Here is why homeowners and businesses across Mumbai, Thane, and Navi Mumbai place their confidence in KANNVAS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-[#1c1c1c] border border-white/10 hover:border-[#b07c5e] transition-colors">
              <Layers className="w-10 h-10 text-[#b07c5e] mb-5" />
              <h4 className="text-xl font-bold font-['Titillium_Web'] text-white mb-2">
                170+ Completed Projects
              </h4>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                A verified track record across Mumbai's iconic towers (Centrio, Ajmera Zeon, Borivali, Dahisar, Kandivali, Pune).
              </p>
            </div>

            <div className="p-8 bg-[#1c1c1c] border border-white/10 hover:border-[#b07c5e] transition-colors">
              <ShieldCheck className="w-10 h-10 text-[#b07c5e] mb-5" />
              <h4 className="text-xl font-bold font-['Titillium_Web'] text-white mb-2">
                End-to-End Turnkey Execution
              </h4>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Zero stress for you. We manage civil work, plumbing, electricals, carpentry, painting, and final detailing under one roof.
              </p>
            </div>

            <div className="p-8 bg-[#1c1c1c] border border-white/10 hover:border-[#b07c5e] transition-colors">
              <Sparkles className="w-10 h-10 text-[#b07c5e] mb-5" />
              <h4 className="text-xl font-bold font-['Titillium_Web'] text-white mb-2">
                Immersive 3D Visual Previews
              </h4>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Experience your home in high-resolution 3D before committing. What you approve in render is what we deliver on site.
              </p>
            </div>

            <div className="p-8 bg-[#1c1c1c] border border-white/10 hover:border-[#b07c5e] transition-colors">
              <Clock className="w-10 h-10 text-[#b07c5e] mb-5" />
              <h4 className="text-xl font-bold font-['Titillium_Web'] text-white mb-2">
                Milestone-Driven Timelines
              </h4>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Rigid project schedules backed by milestone tracking, weekly client updates, and on-time handover guarantees.
              </p>
            </div>

            <div className="p-8 bg-[#1c1c1c] border border-white/10 hover:border-[#b07c5e] transition-colors">
              <Compass className="w-10 h-10 text-[#b07c5e] mb-5" />
              <h4 className="text-xl font-bold font-['Titillium_Web'] text-white mb-2">
                Integrated Vaastu Shastra
              </h4>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Every layout is audited by seasoned Vaastu specialists to align energy flow without compromising modern luxury aesthetics.
              </p>
            </div>

            <div className="p-8 bg-[#1c1c1c] border border-white/10 hover:border-[#b07c5e] transition-colors">
              <Users className="w-10 h-10 text-[#b07c5e] mb-5" />
              <h4 className="text-xl font-bold font-['Titillium_Web'] text-white mb-2">
                Direct Founder Involvement
              </h4>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Benefit directly from Pinky Mohanlal Gupta's personal creative oversight and 16+ years of problem-solving experience.
              </p>
            </div>
          </div>

          {/* CTA Box inside dark section */}
          <div className="bg-[#1f1f1f] border border-white/10 p-10 sm:p-14 text-center max-w-4xl mx-auto relative overflow-hidden">
            <h3 className="text-2xl sm:text-4xl font-bold font-['Titillium_Web'] text-white mb-4">
              Book Your Design Consultation Today
            </h3>
            <p className="text-base text-neutral-300 font-light max-w-2xl mx-auto mb-8">
              Discuss your space, layout preferences, and budget directly with Pinky Mohanlal Gupta and our senior design architects.
            </p>
            <button
              onClick={onNavigateContact}
              className="octf-btn octf-btn-light cursor-pointer"
            >
              SCHEDULE A SITE VISIT
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
