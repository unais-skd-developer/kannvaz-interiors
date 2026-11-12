import React, { useState } from 'react';
import { Compass, Palette, Box, Sun, ArrowUpRight } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';

const CORE_SERVICES = [
  {
    id: 'site-visit',
    num: '01',
    title: 'Site Visit & Consultation',
    desc: 'On-site evaluation and expert consultation to understand your space, needs, and vision in detail.',
    icon: Compass,
    details: ['Spatial measurement audits', 'Structural feasibility review', 'One-on-one design brief'],
    bg: 'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/05/bg-iconbox1.jpg',
  },
  {
    id: 'interior-exterior',
    num: '02',
    title: 'Interior & Exterior Design',
    desc: 'Thoughtfully designed interiors and exteriors that blend aesthetics, functionality, and your lifestyle.',
    icon: Palette,
    details: ['Full architectural drafting', 'Color & material palette curation', 'Custom joinery & lighting plans'],
    bg: 'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/05/bg-iconbox2.jpg',
  },
  {
    id: '3d-visual',
    num: '03',
    title: '3D Visual Representation',
    desc: 'Realistic 3D visualizations that bring your design concept to life before execution.',
    icon: Box,
    details: ['Photorealistic walkthroughs', 'Material finish previews', 'Accurate lighting simulations'],
    bg: 'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/05/bg-iconbox3.jpg',
  },
  {
    id: 'vaastu',
    num: '04',
    title: 'Vaastu Consultation',
    desc: 'Vaastu-compliant design solutions that enhance harmony, balance, and positive energy in your space.',
    icon: Sun,
    details: ['Zonal energy balancing', 'Entrance & directional alignment', 'Remedial structural adjustments'],
    bg: 'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/05/bg-iconbox1.jpg',
  },
];

export default function Services({ onNavigate }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const handleCardClick = (service) => {
    window.location.hash = `/services/${service.id}`;
    if (onNavigate) {
      onNavigate('services');
    }
  };

  return (
    <section id="services" className="py-[110px] bg-[#F9F9F9] relative border-t border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Heading */}
        <AnimatedHeading
          tag="[ SERVICES WE OFFER ]"
          title="Our Core Services"
          subtitle="Comprehensive design solutions crafted from initial site conceptualization to final turnkey execution."
          align="center"
          className="mb-16"
        />

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SERVICES.map((s, idx) => {
            const Icon = s.icon;
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={s.title}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => handleCardClick(s)}
                className={`relative p-[45px_30px_35px] text-center border transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden cursor-pointer ${
                  isHovered
                    ? 'border-[#141414] bg-[#141414] text-white'
                    : 'border-[#eee] bg-white text-[#7A7A7A]'
                }`}
              >
                {/* 1. Base Blueprint Background (Normal state) */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 pointer-events-none ${
                    isHovered ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{
                    backgroundImage: `url(${s.bg})`,
                  }}
                />

                {/* 2. Direct Black Background Overlay (Turns immediately black on hover without white flicker) */}
                <div
                  className={`absolute inset-0 bg-[#141414] transition-opacity duration-200 pointer-events-none ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {/* Subtle architectural wireframe accent in dark state */}
                  <div className="absolute -top-8 -right-8 opacity-10 text-white pointer-events-none">
                    <svg className="w-36 h-36" viewBox="0 0 80 80" fill="none" stroke="currentColor">
                      <line x1="0" y1="20" x2="80" y2="20" strokeWidth="0.8" />
                      <line x1="0" y1="40" x2="80" y2="40" strokeWidth="0.8" />
                      <line x1="0" y1="60" x2="80" y2="60" strokeWidth="0.8" />
                      <line x1="20" y1="0" x2="20" y2="80" strokeWidth="0.8" />
                      <line x1="40" y1="0" x2="40" y2="80" strokeWidth="0.8" />
                      <line x1="60" y1="0" x2="60" y2="80" strokeWidth="0.8" />
                    </svg>
                  </div>
                </div>

                {/* Card Foreground Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Icon & Number */}
                    <div
                      className={`flex items-center justify-between mb-8 pb-4 border-b transition-colors duration-200 ${
                        isHovered ? 'border-white/15' : 'border-gray-100'
                      }`}
                    >
                      <div
                        className={`w-14 h-14 shadow-md flex items-center justify-center transition-colors duration-200 ${
                          isHovered ? 'bg-[#242424] text-[#b07c5e]' : 'bg-white text-[#b07c5e]'
                        }`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <span
                        className={`font-mono text-3xl font-extrabold transition-colors duration-200 ${
                          isHovered ? 'text-white/40' : 'text-neutral-300'
                        }`}
                      >
                        {s.num}
                      </span>
                    </div>

                    <h3
                      className={`text-[20px] font-bold font-['Titillium_Web'] mb-3 transition-colors duration-200 ${
                        isHovered ? 'text-white' : 'text-[#1A1A1A]'
                      }`}
                    >
                      {s.title}
                    </h3>

                    <p
                      className={`text-[14px] leading-[24px] font-light mb-6 transition-colors duration-200 ${
                        isHovered ? 'text-neutral-300' : 'text-[#7A7A7A]'
                      }`}
                    >
                      {s.desc}
                    </p>

                    <ul
                      className={`space-y-1.5 text-left mb-6 pt-4 border-t text-xs transition-colors duration-200 ${
                        isHovered ? 'border-white/15 text-neutral-300' : 'border-gray-100 text-[#555]'
                      }`}
                    >
                      {s.details.map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-[#b07c5e] rounded-full shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[12px] font-bold font-['Raleway'] tracking-[1.5px] uppercase transition-colors duration-200 ${
                        isHovered ? 'text-white group-hover:text-[#b07c5e]' : 'text-[#1A1A1A] group-hover:text-[#b07c5e]'
                      }`}
                    >
                      Explore Service
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
          <button
            onClick={() => {
              if (onNavigate) onNavigate('services');
            }}
            className="octf-btn octf-btn-dark cursor-pointer"
          >
            VIEW ALL SERVICES &amp; DETAILS
          </button>
          <a href="#contact" className="octf-btn octf-btn-light cursor-pointer">
            SCHEDULE A SITE VISIT
          </a>
        </div>
      </div>
    </section>
  );
}
