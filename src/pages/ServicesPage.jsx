import React, { useState, useRef, useEffect } from 'react';
import ParticleTypography from '../components/ParticleTypography';
import AnimatedHeading from '../components/AnimatedHeading';
import {
  Compass,
  Palette,
  Box,
  Sun,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Building2,
  Home,
  Clock,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Maximize2,
} from 'lucide-react';

// Reusable 3D Tilt Card Component for Services
function ThreeDServiceCard({ children, className = '', containerClassName = '' }) {
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

      const rotateX = -((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * 10;

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
      style={{ perspective: '1100px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className={`relative transition-transform duration-200 ease-out h-full ${className}`}
        style={{
          transform: isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {children(isHovered, glare)}
      </div>
    </div>
  );
}

export const SERVICES_DATA = [
  {
    id: 'site-visit',
    num: '01',
    title: 'Site Visit & Consultation',
    shortTitle: 'SITE VISIT',
    tagline: 'On-Site Precision Auditing, Spatial Measurement & Feasibility Blueprint',
    shortDesc:
      'In-person evaluation and expert consultation to understand your architectural space, lifestyle requirements, and structural feasibility in detail.',
    image: '/service-site-visit.jpg',
    badge: 'Direct Oversight',
    badgeSub: 'Personally led by Principal Designer Pinky Mohanlal Gupta',
    scopeItems: [
      {
        title: '1. On-Site Measurement & Structural Audit',
        desc: 'Laser-measured spatial dimensions, ceiling heights, column locations, and wall alignment verifications.',
      },
      {
        title: '2. MEP & Ventilation Assessment',
        desc: 'Evaluating mechanical, electrical, plumbing routing, air conditioning ducting, and natural light vectors.',
      },
      {
        title: '3. Scope Definition & Realistic Budget Roadmap',
        desc: 'Transparent cost structuring based on actual carpet area and material expectations with zero hidden surprise charges.',
      },
    ],
    deliverables: [
      'Comprehensive on-site spatial measurement & photographic audit',
      'Civil, plumbing, HVAC & electrical routing feasibility review',
      'One-on-one lifestyle discovery interview with Principal Designer',
      'Preliminary space allocation & tentative investment roadmap',
    ],
    details:
      'A great design begins with deeply understanding physical reality. During our on-site visit, Principal Designer Pinky Mohanlal Gupta and our structural team personally examine natural daylight angles, ventilation drafts, structural load lines, and room proportions across Mumbai, Navi Mumbai, Thane, or Pune to craft an optimized execution strategy.',
    faqs: [
      {
        q: 'What should I keep ready for the initial site visit?',
        a: 'Having a copy of your sanctioned floor plan or builder blueprint and any specific lifestyle references or requirements is very helpful.',
      },
      {
        q: 'Does the consultation cover cost estimations?',
        a: 'Yes, we provide realistic investment ranges based on square footage, material selections, and turnkey scope during our consultation.',
      },
      {
        q: 'Which regions across Maharashtra do you visit?',
        a: 'We actively cover all zones across Mumbai (South Mumbai, Western Suburbs, Central Suburbs), Thane, Navi Mumbai, and Pune.',
      },
    ],
  },
  {
    id: 'interior-exterior',
    num: '02',
    title: 'Interior & Exterior Design',
    shortTitle: 'INTERIOR DESIGN',
    tagline: 'Bespoke Turnkey Residential, Commercial & Facade Transformations',
    shortDesc:
      'Thoughtfully designed interiors and architectural exteriors that blend sophisticated aesthetics, functional ergonomics, and timeless craftsmanship.',
    image: '/service-interior-exterior.jpg',
    badge: '170+ Homes',
    badgeSub: 'Bespoke residential & commercial turnkey executions',
    scopeItems: [
      {
        title: '1. Architectural Drafting & CAD Blueprinting',
        desc: 'Precision 2D layouts, furniture spatial zoning, electrical/switching diagrams, and plumbing schematics.',
      },
      {
        title: '2. Custom Millwork & Modular Joinery',
        desc: 'Engineered wardrobes, German hardware fittings, bespoke veneer finishes, and ergonomic modular kitchens.',
      },
      {
        title: '3. Facade Engineering & Exterior Treatments',
        desc: 'Durable weatherproofing, modern composite louvers, texture coatings, and landscaping integration.',
      },
    ],
    deliverables: [
      'Full architectural working drawings & precision CAD layouts',
      'Custom joinery, modular wardrobe & German kitchen detailing',
      'Curation of natural veneers, Italian marbles & acoustic finishes',
      'Exterior elevation treatments, weatherproofing & balcony styling',
    ],
    details:
      'From luxurious South Mumbai penthouses and boutique corporate headquarters to high-end dental clinics, we engineer end-to-end interior and exterior solutions. Every millwork contour and lighting tier is custom-fabricated to reflect your identity while ensuring low-maintenance longevity.',
    faqs: [
      {
        q: 'Do you handle both civil work and interior decor?',
        a: 'Yes, our complete turnkey service encompasses civil alterations, masonry, plumbing, electrical, carpentry, false ceilings, painting, and soft furnishings.',
      },
      {
        q: 'Can we retain existing furniture or structural elements?',
        a: 'Absolutely. We seamlessly blend heirloom pieces or preferred existing elements into the updated modern layout with harmonious finishes.',
      },
      {
        q: 'How are material qualities and durability guaranteed?',
        a: 'We partner directly with established European and Indian suppliers for certified marine-grade plywood, natural stone, and German hardware mechanisms.',
      },
    ],
  },
  {
    id: '3d-visual',
    num: '03',
    title: '3D Visual Representation',
    shortTitle: '3D VISUALS',
    tagline: 'Photorealistic 4K Renders & Immersive Virtual Walkthroughs',
    shortDesc:
      'Realistic 3D visualizations that bring your design concept to life before execution—eliminating surprises and ensuring flawless alignment.',
    image: '/service-3d-visual.jpg',
    badge: '400+ Renders',
    badgeSub: 'Hyper-realistic 3D renders created for Mumbai residences',
    scopeItems: [
      {
        title: '1. Photorealistic Texture & Finish Mapping',
        desc: 'Exact simulation of chosen veneers, metallic accents, stone veins, and upholstery colors.',
      },
      {
        title: '2. Day & Night Architectural Lighting Simulation',
        desc: 'Verifying cove lighting, task illumination, and accent pendants under daytime and twilight conditions.',
      },
      {
        title: '3. 360° Virtual Panoramic Walkthroughs',
        desc: 'Step inside your future living room on your phone or laptop and experience room scales first-hand.',
      },
    ],
    deliverables: [
      'Ultra-HD 4K photorealistic architectural interior renders',
      'Daytime vs. night-time artificial illumination simulations',
      'Accurate material texture, fabric sheen & marble veining preview',
      'Interactive 360-degree virtual room walkthroughs',
    ],
    details:
      'We believe you should see and love your home before a single tile is laid. Our advanced 3D visual representations showcase micro-details: exact wood grains, paint undertones under warm lighting, and reflections on polished floors, guaranteeing that what you approve is exactly what is delivered.',
    faqs: [
      {
        q: 'How many revisions are included in the 3D renders?',
        a: 'We include iterative reviews so you can experiment with color schemes, veneers, and furniture arrangements until you are completely confident.',
      },
      {
        q: 'How close are the 3D visuals to the finished project?',
        a: 'Because we map actual available materials and exact spatial dimensions, our completed projects achieve 95%+ visual match to the approved renders.',
      },
    ],
  },
  {
    id: 'vaastu',
    num: '04',
    title: 'Vaastu Consultation',
    shortTitle: 'VAASTU',
    tagline: 'Scientific Energy Balancing & Non-Invasive Harmonious Living',
    shortDesc:
      'Vaastu-compliant design solutions that enhance harmony, prosperity, and positive energy in your space without compromising modern luxury.',
    image: '/service-vaastu.jpg',
    badge: '200+ Plans',
    badgeSub: 'Scientific directional energy alignment',
    scopeItems: [
      {
        title: '1. 16-Zone Energy Grid Analysis',
        desc: 'Dividing your floor plan into 16 energetic directions according to magnetic North to identify functional strengths and remedies.',
      },
      {
        title: '2. Vital Element Placement',
        desc: 'Aligning the Kitchen (Agni/Fire), Master Suite (Nairutya/Stability), and Mandir/Study (Ishanya/Clarity).',
      },
      {
        title: '3. Non-Invasive Spatial Remedies',
        desc: 'Correcting directional imbalances using elemental metals (brass, copper), specific color frequencies, and directional lighting.',
      },
    ],
    deliverables: [
      '16-Zone spatial energy grid mapping & 32-entrance analysis',
      'Directional alignment for Master Bedroom, Mandir, & Kitchen (Agni)',
      'Non-invasive elemental balancing with color, light, & metals',
      'Holistic alignment of Earth, Water, Fire, Air, and Space elements',
    ],
    details:
      'Vaastu Shastra at KANNVAS is applied as an ancient spatial science rather than rigid superstition. We seamlessly weave energetic principles into modern layouts—optimizing positive prana flow, restful sleep zones, and focused work environments without breaking walls or sacrificing luxury aesthetic.',
    faqs: [
      {
        q: 'Do we need to break walls for Vaastu compliance?',
        a: 'No! We specialize in non-invasive remedies through furniture orientation, color frequencies, brass/copper element strips, and lighting corrections.',
      },
      {
        q: 'Can commercial offices and clinics benefit from Vaastu?',
        a: 'Yes. We optimize reception flow, cashier/accounts positioning, and director cabin orientations to foster productivity, trust, and growth.',
      },
    ],
  },
];

// Dedicated Single Service Detail Page Component
function ServiceDetailPage({ service, onBack, onNavigateContact, onSelectService }) {
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 380, behavior: 'smooth' });
  }, [service.id]);

  const currentIndex = SERVICES_DATA.findIndex((s) => s.id === service.id);
  const prevService = currentIndex > 0 ? SERVICES_DATA[currentIndex - 1] : SERVICES_DATA[SERVICES_DATA.length - 1];
  const nextService = currentIndex < SERVICES_DATA.length - 1 ? SERVICES_DATA[currentIndex + 1] : SERVICES_DATA[0];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-gray-200">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#b07c5e] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#b07c5e]" />
            Back to All Services
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectService(prevService)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-[#1A1A1A] bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              Prev
            </button>
            <span className="text-xs text-neutral-400 font-mono">
              {currentIndex + 1} / {SERVICES_DATA.length}
            </span>
            <button
              onClick={() => onSelectService(nextService)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-[#1A1A1A] bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Deep Dive Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Scope & Narrative */}
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-bold uppercase tracking-[2px] text-[#b07c5e] mb-3">
              [ SERVICE 0{service.num} • DEEP DIVE ]
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-['Titillium_Web'] text-[#1A1A1A] leading-tight mb-4">
              {service.title}
            </h1>
            <h3 className="text-lg font-semibold text-[#b07c5e] mb-6">
              {service.tagline}
            </h3>
            <p className="text-base sm:text-lg text-[#555] font-light leading-relaxed mb-6">
              {service.details}
            </p>

            {/* Scope Breakdown */}
            <div className="space-y-4 mb-8 pt-4">
              {service.scopeItems.map((item, idx) => (
                <div key={idx} className="p-5 bg-[#FBFBFB] border-l-4 border-[#b07c5e] shadow-sm">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#7A7A7A] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Deliverables Checklist */}
            <div className="mb-8 pt-4 border-t border-gray-100">
              <h4 className="text-xs uppercase font-bold tracking-widest text-[#1A1A1A] mb-4">
                Key Deliverables Included:
              </h4>
              <ul className="space-y-2.5">
                {service.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#555]">
                    <CheckCircle2 className="w-4 h-4 text-[#b07c5e] shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onNavigateContact}
              className="octf-btn octf-btn-dark cursor-pointer mt-2"
            >
              BOOK THIS SERVICE
            </button>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-[120px]">
              <div className="relative shadow-2xl overflow-hidden border border-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[460px] sm:h-[520px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:bottom-8 sm:-right-6 bg-[#1A1A1A] p-6 text-white border-l-4 border-[#b07c5e] shadow-2xl max-w-[260px]">
                <div className="text-2xl font-bold font-['Titillium_Web'] text-[#b07c5e]">
                  {service.badge}
                </div>
                <div className="text-xs text-neutral-300 font-light mt-1">
                  {service.badgeSub}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service FAQs Accordion */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="mb-20 pt-12 border-t border-gray-200 max-w-3xl">
            <span className="block text-xs font-bold uppercase tracking-[2px] text-[#b07c5e] mb-2">
              [ SERVICE FAQS ]
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-['Titillium_Web'] text-[#1A1A1A] mb-8">
              Frequently Asked Questions About {service.title}
            </h3>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => {
                const isOpen = expandedFaq === idx;
                return (
                  <div key={idx} className="border border-gray-200 bg-white">
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#111111] font-['Titillium_Web'] hover:text-[#b07c5e] transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2.5">
                        <HelpCircle className="w-4 h-4 text-[#b07c5e] shrink-0" />
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#b07c5e] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-[#7A7A7A] font-light leading-relaxed border-t border-gray-100 pt-3 bg-[#FBFBFB]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom CTA Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="octf-btn octf-btn-dark cursor-pointer"
          >
            VIEW ALL 4 SERVICES
          </button>

          <button
            onClick={onNavigateContact}
            className="octf-btn octf-btn-light cursor-pointer"
          >
            SCHEDULE CONSULTATION NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage({ onNavigateHome, onNavigateContact, initialServiceId = null }) {
  const [selectedService, setSelectedService] = useState(
    initialServiceId ? SERVICES_DATA.find((s) => s.id === initialServiceId) || null : null
  );

  // Synchronize with URL hash if it targets a specific service
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('/services/')) {
        const slug = hash.split('/services/')[1]?.split('?')[0];
        const matched = SERVICES_DATA.find((s) => s.id === slug);
        if (matched) {
          setSelectedService(matched);
        }
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleOpenService = (service) => {
    setSelectedService(service);
    window.location.hash = `/services/${service.id}`;
  };

  const handleBackToOverview = () => {
    setSelectedService(null);
    window.location.hash = '/services';
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-[#1a1a1a] pt-[90px]">
      {/* 1. Page Header with Particle Typography */}
      <section className="relative py-20 sm:py-24 bg-[#111111] overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-banner.jpg"
            alt="Services at KANNVAS Design Studio"
            className="w-full h-full object-cover object-center opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/85 via-[#111111]/75 to-[#111111]" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 flex flex-col items-center">
          <span className="block text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#b07c5e] uppercase mb-2 anim-header-tag">
            {selectedService ? `[ SERVICE 0${selectedService.num} • DEEP DIVE ]` : '[ COMPREHENSIVE ARCHITECTURAL SERVICES ]'}
          </span>

          <h1 className="sr-only">
            {selectedService ? `${selectedService.title} – KANNVAS Design Studio` : 'Our Services – KANNVAS Design Studio'}
          </h1>

          {/* Particle Typography */}
          <div className="w-full max-w-2xl mx-auto my-2">
            <ParticleTypography
              text={selectedService ? selectedService.shortTitle : 'OUR SERVICES'}
              fontSize={78}
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

          {/* Dynamic Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center justify-center space-x-2 text-xs uppercase tracking-widest text-neutral-400 font-medium mt-3 anim-header-sub">
            <button
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-[#b07c5e]">/</span>
            {selectedService ? (
              <button
                onClick={handleBackToOverview}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Services
              </button>
            ) : (
              <span className="text-white">Services</span>
            )}

            {selectedService && (
              <>
                <span className="text-[#b07c5e]">/</span>
                <span className="text-[#b07c5e] font-semibold">
                  {selectedService.title}
                </span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Conditional: Either Individual Dedicated Service Page OR Main Services Cards Overview */}
      {selectedService ? (
        <ServiceDetailPage
          service={selectedService}
          onBack={handleBackToOverview}
          onNavigateContact={onNavigateContact}
          onSelectService={handleOpenService}
        />
      ) : (
        <>
          {/* 2. Section: 4 Core Services Cards Grid */}
          <section className="py-24 bg-white relative">
            <div className="max-w-[1240px] mx-auto px-6">
              <AnimatedHeading
                tag="[ WHAT WE DO BEST ]"
                title="Tailored Architecture & Interior Solutions"
                subtitle="From the very first site visit to the final turnkey handover, we offer full-spectrum design and engineering capabilities across Mumbai, Pune, and India."
                align="center"
                className="mb-16"
                titleClassName="text-3xl sm:text-5xl"
              />

              {/* 4 Cards Grid with 3D Tilt */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {SERVICES_DATA.map((service) => (
                  <ThreeDServiceCard key={service.id} containerClassName="h-full">
                    {(isHovered, glare) => (
                      <div
                        className={`bg-white border transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between h-full shadow-md ${
                          isHovered ? 'border-[#b07c5e] shadow-2xl' : 'border-gray-200'
                        }`}
                      >
                        <div>
                          {/* Top Bar with Number & Badge */}
                          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                            <span className="text-3xl font-extrabold font-mono text-[#b07c5e]">
                              {service.num}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-[#1A1A1A] text-white">
                              KANNVAS SPECIALTY
                            </span>
                          </div>

                          {/* Image Preview with Elevation */}
                          <div
                            className="relative h-56 sm:h-64 overflow-hidden mb-6 shadow-md border border-gray-100 cursor-pointer"
                            style={{ transform: 'translateZ(25px)' }}
                            onClick={() => handleOpenService(service)}
                          >
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover transition-transform duration-700 ease-out select-none"
                              style={{ transform: isHovered ? 'scale(1.06)' : 'scale(1)' }}
                            />
                            {/* 3D Glare */}
                            <div
                              className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
                              style={{
                                opacity: glare.opacity,
                                background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
                              }}
                            />
                          </div>

                          <h3
                            className="text-2xl sm:text-3xl font-bold font-['Titillium_Web'] text-[#1A1A1A] mb-3 transition-transform duration-200 cursor-pointer hover:text-[#b07c5e]"
                            style={{ transform: isHovered ? 'translateZ(15px)' : 'translateZ(0px)' }}
                            onClick={() => handleOpenService(service)}
                          >
                            {service.title}
                          </h3>

                          <p className="text-sm text-[#666] font-light leading-relaxed mb-6">
                            {service.shortDesc}
                          </p>

                          {/* Deliverables Checklist */}
                          <ul className="space-y-2.5 pt-4 border-t border-gray-100 text-xs text-[#555] mb-6">
                            {service.deliverables.map((d, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-[#b07c5e] shrink-0 mt-0.5" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                          <button
                            onClick={() => handleOpenService(service)}
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#b07c5e] transition-colors cursor-pointer"
                          >
                            Read Deep Dive Details
                            <ArrowRight className="w-4 h-4 text-[#b07c5e]" />
                          </button>

                          <button
                            onClick={onNavigateContact}
                            className="octf-btn octf-btn-dark !py-2.5 !px-5 !text-[11px] cursor-pointer"
                          >
                            Enquire
                          </button>
                        </div>
                      </div>
                    )}
                  </ThreeDServiceCard>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Section: Execution Methodology */}
          <section className="py-24 bg-[#141414] text-white">
            <div className="max-w-[1240px] mx-auto px-6">
              <AnimatedHeading
                tag="[ EXECUTION METHODOLOGY ]"
                title="Our 4-Stage Architectural Process"
                subtitle="A disciplined, transparent journey designed to eliminate stress and deliver flawless results."
                align="center"
                theme="dark"
                className="mb-16"
                titleClassName="text-3xl sm:text-5xl"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-8 bg-[#1f1f1f] border border-white/10 hover:border-[#b07c5e] transition-all duration-300">
                  <span className="text-4xl font-extrabold font-mono text-[#b07c5e] block mb-4">
                    01
                  </span>
                  <h4 className="text-xl font-bold font-['Titillium_Web'] text-white mb-3">
                    Discovery &amp; Site Audit
                  </h4>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    In-person spatial audit, structural assessment, lifestyle discovery, and preliminary timeline structuring.
                  </p>
                </div>

                <div className="p-8 bg-[#1f1f1f] border border-white/10 hover:border-[#b07c5e] transition-all duration-300">
                  <span className="text-4xl font-extrabold font-mono text-[#b07c5e] block mb-4">
                    02
                  </span>
                  <h4 className="text-xl font-bold font-['Titillium_Web'] text-white mb-3">
                    3D Modeling &amp; Vaastu
                  </h4>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    Interactive 4K photorealistic 3D visualization, material texture mapping, and Vaastu spatial alignment.
                  </p>
                </div>

                <div className="p-8 bg-[#1f1f1f] border border-white/10 hover:border-[#b07c5e] transition-all duration-300">
                  <span className="text-4xl font-extrabold font-mono text-[#b07c5e] block mb-4">
                    03
                  </span>
                  <h4 className="text-xl font-bold font-['Titillium_Web'] text-white mb-3">
                    Material Procurement
                  </h4>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    Direct sourcing of Italian marbles, imported veneers, bespoke joinery, and specialized hardware.
                  </p>
                </div>

                <div className="p-8 bg-[#1f1f1f] border border-white/10 hover:border-[#b07c5e] transition-all duration-300">
                  <span className="text-4xl font-extrabold font-mono text-[#b07c5e] block mb-4">
                    04
                  </span>
                  <h4 className="text-xl font-bold font-['Titillium_Web'] text-white mb-3">
                    Turnkey Handover
                  </h4>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    Precision on-site execution, multi-point quality inspection, deep cleaning, and ceremonial key handover.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Closing Consultation Call to Action */}
          <section className="py-20 bg-[#111111] text-white border-t border-white/10">
            <div className="max-w-[1240px] mx-auto px-6 text-center">
              <div className="bg-[#1c1c1c] border border-white/10 p-10 sm:p-16 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
                <span className="block text-xs uppercase font-bold tracking-[0.25em] text-[#b07c5e] mb-3">
                  [ START YOUR DESIGN JOURNEY ]
                </span>
                <h3 className="text-3xl sm:text-5xl font-bold font-['Titillium_Web'] text-white mb-4">
                  Ready to Design Your Dream Space?
                </h3>
                <p className="text-base text-neutral-300 font-light max-w-2xl mx-auto mb-8">
                  Schedule a personalized site consultation with Principal Designer Pinky Mohanlal Gupta and receive an expert feasibility roadmap for your home or commercial space.
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
        </>
      )}
    </div>
  );
}
