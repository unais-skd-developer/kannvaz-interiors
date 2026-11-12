import React, { useRef, useState } from 'react';
import { Home, Building2, Stethoscope } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';

const SECTORS = [
  { label: 'Residential', icon: Home, desc: 'Bespoke apartments, penthouses & luxury villas' },
  { label: 'Commercial', icon: Building2, desc: 'Dynamic corporate offices, retail & hospitality' },
  { label: 'Healthcare', icon: Stethoscope, desc: 'Ergonomic clinics, wellness centers & hospitals' },
];

// Interactive 3D Tilt Card Component
function ThreeDImageCard() {
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

      // Calculate rotation (-14deg to +14deg max)
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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

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
      className="relative w-full py-4"
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Rotating Canvas Body */}
      <div
        ref={cardRef}
        className="relative transition-transform duration-200 ease-out"
        style={{
          transform: isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.03, 1.03, 1.03)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Main Base Card with Image */}
        <div
          className="relative overflow-hidden rounded-sm shadow-2xl border border-gray-200 bg-white"
          style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}
        >
          <img
            src="/kannvas-about.jpg"
            alt="Creativity, Practicality & Craftsmanship - KANNVAS"
            className="w-full h-auto max-h-[500px] object-cover transition-transform duration-700 ease-out select-none"
            style={{ transform: isHovered ? 'scale(1.04)' : 'scale(1)' }}
          />

          {/* Dynamic 3D Glare Lighting Sheen */}
          <div
            className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
            style={{
              opacity: glare.opacity,
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 65%)`,
            }}
          />
        </div>

        {/* Floating 3D Badge (High Elevation in 3D Space) */}
        <div
          className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-6 bg-[#1a1a1a] p-6 text-white border-l-4 border-[#b07c5e] transition-all duration-300 select-none z-30"
          style={{
            transform: isHovered ? 'translateZ(75px)' : 'translateZ(30px)',
            boxShadow: isHovered
              ? '0 30px 60px -12px rgba(0, 0, 0, 0.65), 0 18px 36px -18px rgba(0, 0, 0, 0.7)'
              : '0 20px 25px -5px rgba(0, 0, 0, 0.4)',
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            className="text-3xl font-extrabold font-['Titillium_Web'] text-[#b07c5e] transition-transform duration-200"
            style={{ transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)' }}
          >
            150+
          </div>
          <div
            className="text-xs uppercase tracking-wider text-neutral-200 font-semibold mt-1 max-w-[150px] transition-transform duration-200"
            style={{ transform: isHovered ? 'translateZ(15px)' : 'translateZ(0px)' }}
          >
            Completed Projects Across India
          </div>
        </div>
      </div>
    </div>
  );
}

// 3D Mini Card for Sectors
function SectorCard({ sector }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = sector.icon;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: -(y / (rect.height / 2)) * 14,
      y: (x / (rect.width / 2)) * 14,
    });
  };

  return (
    <div
      style={{ perspective: '800px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotate({ x: 0, y: 0 });
      }}
      className="cursor-pointer"
    >
      <div
        ref={cardRef}
        className={`p-4 bg-[#F9F9F9] border text-center transition-all duration-200 ease-out ${
          isHovered
            ? 'border-[#b07c5e] bg-white shadow-xl -translate-y-1'
            : 'border-gray-200 hover:border-gray-300 shadow-sm'
        }`}
        style={{
          transform: isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.05, 1.05, 1.05)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="transition-transform duration-200"
          style={{ transform: isHovered ? 'translateZ(30px)' : 'translateZ(0px)' }}
        >
          <Icon className="w-6 h-6 text-[#b07c5e] mx-auto mb-2" />
        </div>
        <h5
          className="text-xs uppercase font-bold tracking-wider text-[#1A1A1A] transition-transform duration-200"
          style={{ transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)' }}
        >
          {sector.label}
        </h5>
      </div>
    </div>
  );
}

export default function About({ onNavigate }) {
  return (
    <section id="about-us" className="py-[110px] bg-white relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Interactive 3D Image Card with Floating Badge */}
          <div className="lg:col-span-6 relative">
            <ThreeDImageCard />
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6">
            <AnimatedHeading
              tag="[ WELCOME TO KANNVAS ]"
              title="Creativity, Practicality & Craftsmanship"
              className="mb-6"
            />

            <p className="text-[16px] leading-[28px] text-[#7A7A7A] font-light mb-6">
              At <strong className="text-[#1A1A1A] font-semibold">KANNVAS</strong>, we believe every space is a canvas waiting to tell a story. We are a creative Interior Designing firm dedicated to transforming ordinary environments into thoughtfully designed, functional, and visually inspiring spaces.
            </p>

            <p className="text-[15px] leading-[26px] text-[#7A7A7A] font-light mb-8">
              Our approach is collaborative and client-centric—listening closely to your aspirations, planning meticulously with 3D precision, and executing timely with uncompromising standards of craftsmanship.
            </p>

            {/* 3 Sectors with 3D Card Hover Effect */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-4 border-t border-gray-100">
              {SECTORS.map((s) => (
                <SectorCard key={s.label} sector={s} />
              ))}
            </div>

            <div className="ot-button pt-2">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('services');
                }}
                className="octf-btn octf-btn-dark cursor-pointer"
              >
                OUR CORE SERVICES
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
