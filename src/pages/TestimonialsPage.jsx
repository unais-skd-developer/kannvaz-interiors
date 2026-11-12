import React, { useState } from 'react';
import ParticleTypography from '../components/ParticleTypography';
import AnimatedHeading from '../components/AnimatedHeading';
import { ALL_TESTIMONIALS, TESTIMONIAL_STATS } from '../data/testimonialsData';
import {
  Star,
  Quote,
  MapPin,
  CheckCircle2,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Building2,
  Home,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';

// Lightbox for Project Photos inside Testimonials
function TestimonialLightbox({ image, title, clientName, onClose }) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4">
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-5 right-5 z-50 w-12 h-12 bg-white/10 hover:bg-[#b07c5e] text-white flex items-center justify-center transition-colors cursor-pointer"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
        <img
          src={image}
          alt={title}
          className="max-h-[75vh] w-auto max-w-full object-contain shadow-2xl border border-white/10"
        />
        <div className="mt-4 text-center">
          <h4 className="text-white text-base font-bold font-['Titillium_Web']">{title}</h4>
          <p className="text-xs text-[#b07c5e] uppercase tracking-wider font-mono mt-1">
            Executed for {clientName}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsPage({ onNavigateHome, onNavigateContact, onNavigatePortfolio }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxData, setLightboxData] = useState(null);

  const categories = [
    { id: 'all', label: 'All Reviews', count: ALL_TESTIMONIALS.length },
    { id: 'residential', label: 'Residential', count: ALL_TESTIMONIALS.filter((t) => t.category === 'residential').length },
    { id: 'commercial', label: 'Commercial & Logistics', count: ALL_TESTIMONIALS.filter((t) => t.category === 'commercial').length },
    { id: 'healthcare', label: 'Healthcare & Clinics', count: ALL_TESTIMONIALS.filter((t) => t.category === 'healthcare').length },
  ];

  const filteredTestimonials =
    activeCategory === 'all'
      ? ALL_TESTIMONIALS
      : ALL_TESTIMONIALS.filter((t) => t.category === activeCategory);

  return (
    <div className="bg-white text-[#1a1a1a] pt-[90px]">
      {/* 1. Page Header with Particle Typography */}
      <section className="relative py-20 sm:py-24 bg-[#111111] overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-banner.jpg"
            alt="Client Testimonials - KANNVAS"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/85 via-[#111111]/75 to-[#111111]" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 flex flex-col items-center">
          <span className="block text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#b07c5e] uppercase mb-2 anim-header-tag">
            [ VERIFIED CLIENT EXPERIENCES &amp; REPUTATION ]
          </span>

          <h1 className="sr-only">Client Testimonials – KANNVAS Design Studio</h1>

          {/* Particle Typography for "TESTIMONIALS" */}
          <div className="w-full max-w-2xl mx-auto my-2">
            <ParticleTypography
              text="TESTIMONIALS"
              fontSize={74}
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
            <span className="text-white">Testimonials</span>
          </div>
        </div>
      </section>

      {/* 2. Trust Metrics Bar */}
      <section className="bg-[#181818] border-b border-white/10 text-white py-8">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {TESTIMONIAL_STATS.map((stat, idx) => (
              <div key={idx} className="p-3 border-r border-white/5 last:border-r-0">
                <span className="block text-3xl sm:text-4xl font-extrabold font-['Titillium_Web'] text-[#b07c5e] mb-1">
                  {stat.value}
                </span>
                <span className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  {stat.label}
                </span>
                <span className="block text-[11px] text-neutral-400 font-light mt-0.5">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Category Filter Tabs */}
      <section className="bg-[#141414] border-b border-white/10 sticky top-[90px] z-30 shadow-md">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex items-center justify-start sm:justify-center space-x-2 sm:space-x-4 py-4 overflow-x-auto scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#b07c5e] text-white shadow-md'
                      : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-black/30 text-white' : 'bg-white/10 text-neutral-400'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Main Testimonials Grid */}
      <section className="py-20 sm:py-24 bg-[#FBFBFB]">
        <div className="max-w-[1240px] mx-auto px-6">
          {/* Section Introduction */}
          <AnimatedHeading
            tag="[ REAL VOICES OF TRUST ]"
            title="What Our Clients Say"
            subtitle="Read transparent feedback from homeowners, corporate directors, and healthcare professionals who partnered with KANNVAS."
            align="center"
            className="mb-16"
            titleClassName="text-3xl sm:text-4xl lg:text-5xl"
          />

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {filteredTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 hover:border-[#b07c5e] transition-all duration-300 shadow-sm hover:shadow-xl p-8 sm:p-10 flex flex-col justify-between relative group"
              >
                {/* Decorative Background Quote Icon */}
                <div className="absolute top-6 right-6 text-gray-100 group-hover:text-[#b07c5e]/10 transition-colors pointer-events-none">
                  <Quote className="w-16 h-16" />
                </div>

                <div>
                  {/* Top Bar: Category, Location & Star Rating */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-gray-100 relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-[#1A1A1A] text-white text-[10px] font-bold uppercase tracking-wider">
                        {item.categoryLabel}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[#b07c5e] font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>

                    {/* 5 Stars */}
                    <div className="flex items-center space-x-1 text-[#b07c5e]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Feedback Quote */}
                  <p className="text-sm sm:text-base leading-[28px] text-[#444] font-light italic mb-6 relative z-10">
                    "{item.quote}"
                  </p>
                </div>

                {/* Client Profile Footer (Without Avatar) */}
                <div className="pt-6 border-t border-gray-100 relative z-10">
                  <h5 className="text-lg font-bold text-[#1A1A1A] font-['Titillium_Web']">
                    {item.name}
                  </h5>
                  <span className="text-xs text-[#b07c5e] font-semibold tracking-wide block mt-0.5">
                    {item.role} • {item.project}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Spotlight Story: The Power of Long-Term Client Relationships */}
      <section className="py-20 bg-[#111111] text-white border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="border border-white/10 overflow-hidden shadow-2xl">
                <img
                  src="https://kannvas.in/wp-content/uploads/2026/02/kk-7-scaled.jpg"
                  alt="K.K. Logistics Execution by KANNVAS"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-6 bg-[#1A1A1A] p-6 text-white border-l-4 border-[#b07c5e] shadow-2xl max-w-[260px]">
                <span className="text-2xl font-bold font-['Titillium_Web'] text-[#b07c5e] block">
                  Repeat Clients
                </span>
                <span className="text-xs text-neutral-300 font-light mt-1 block">
                  70%+ of our new projects originate through client referrals and second-home contracts.
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="block text-xs uppercase font-semibold tracking-[0.25em] text-[#b07c5e] mb-3">
                [ LONG-TERM COMMITMENT ]
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-['Titillium_Web'] text-white leading-tight mb-4">
                Relationships Built on Accountability &amp; Craft
              </h2>
              <p className="text-base text-neutral-300 font-light leading-relaxed mb-6">
                At KANNVAS, the true measure of success isn't just the ribbon-cutting on handover day—it's having our clients return years later when they purchase their next home or expand their corporate headquarters.
              </p>
              <p className="text-base text-neutral-300 font-light leading-relaxed mb-8">
                From luxury apartments in South Mumbai to medical operatory centers in Navi Mumbai and holiday villas in Gujarat, our direct involvement under Principal Designer Pinky Mohanlal Gupta guarantees that what is committed in 3D is delivered in reality.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onNavigateContact}
                  className="octf-btn octf-btn-light cursor-pointer"
                >
                  START YOUR PROJECT
                </button>
                <button
                  onClick={onNavigatePortfolio}
                  className="octf-btn octf-btn-dark cursor-pointer"
                >
                  EXPLORE COMPLETED PORTFOLIO
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Consultation Booking CTA */}
      <section className="py-20 bg-[#0E0E0E] text-white border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <div className="bg-[#181818] border border-white/10 p-10 sm:p-16 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <span className="block text-xs uppercase font-bold tracking-[0.25em] text-[#b07c5e] mb-3">
              [ JOIN OUR LIST OF DELIGHTED CLIENTS ]
            </span>
            <h3 className="text-3xl sm:text-5xl font-bold font-['Titillium_Web'] text-white mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-base text-neutral-300 font-light max-w-2xl mx-auto mb-8">
              Book a personal site visit and design consultation with Pinky Mohanlal Gupta to begin your architectural journey.
            </p>
            <button
              onClick={onNavigateContact}
              className="octf-btn octf-btn-light cursor-pointer"
            >
              BOOK YOUR SITE CONSULTATION
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxData && (
        <TestimonialLightbox
          image={lightboxData.image}
          title={lightboxData.title}
          clientName={lightboxData.clientName}
          onClose={() => setLightboxData(null)}
        />
      )}
    </div>
  );
}

