import React, { useState } from 'react';
import ParticleTypography from '../components/ParticleTypography';
import AnimatedHeading from '../components/AnimatedHeading';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  Building2,
  Calendar,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, LinkedinIcon, TwitterIcon } from '../components/SocialIcons';

export default function ContactPage({ onNavigateHome, onNavigateServices, onNavigatePortfolio }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Site Visit & Consultation',
    propertyType: 'Residential Flat / Apartment',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Site Visit & Consultation',
      propertyType: 'Residential Flat / Apartment',
      message: '',
    });
    setSubmitted(false);
  };

  const whatsappUrl =
    'https://wa.me/919892803126?text=' +
    encodeURIComponent(
      'Hi KANNVAS team, I would like to enquire about your interior design, architectural planning, and consultation services.'
    );

  const faqs = [
    {
      q: 'How does the initial Site Visit & Consultation work?',
      a: 'During our on-site consultation, our principal designer evaluates your spatial layout, natural light, structural constraints, and functional requirements. We take precise measurements, discuss your lifestyle or business workflow, and outline conceptual ideas tailored to your budget.',
    },
    {
      q: 'Which regions in Maharashtra does KANNVAS cover?',
      a: 'We actively undertake residential, commercial, and healthcare projects across Mumbai (South Mumbai, Central Suburbs, Western Suburbs, Ghatkopar, Chembur, Goregaon, Borivali), Thane, Navi Mumbai (Airoli, Ghansoli, Vashi), and Pune.',
    },
    {
      q: 'Do you offer 100% turnkey execution along with design?',
      a: 'Yes. Beyond 2D space planning and 3D realistic visualizations, we manage end-to-end site execution—including civil works, electrical, plumbing, bespoke carpentry, false ceilings, modular fittings, and premium material procurement.',
    },
    {
      q: 'Can we integrate Vaastu Shastra with modern luxury design?',
      a: 'Absolutely. We specialize in scientific, non-invasive Vaastu planning. Our layouts harmonize structural energy balance (room placements, orientations, kitchen fire zone, master bedroom stability) with clean, contemporary luxury aesthetics without compromising modern ergonomics.',
    },
  ];

  return (
    <div className="bg-white text-[#1a1a1a] pt-[90px]">
      {/* 1. Page Header with Particle Typography */}
      <section className="relative py-20 sm:py-24 bg-[#111111] overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-banner.jpg"
            alt="Contact KANNVAS Design Studio"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/85 via-[#111111]/75 to-[#111111]" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 flex flex-col items-center">
          <span className="block text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#b07c5e] uppercase mb-2 anim-header-tag">
            [ GET IN TOUCH &amp; CONSULTATIONS ]
          </span>

          <h1 className="sr-only">Contact Us – KANNVAS Design Studio Mumbai</h1>

          {/* Particle Typography */}
          <div className="w-full max-w-2xl mx-auto my-2">
            <ParticleTypography
              text="CONTACT US"
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
            <span className="text-white">Contact</span>
          </div>
        </div>
      </section>

      {/* 2. Top Quick Connect Cards (Phone, WhatsApp, Email, Office Address) */}
      <section className="relative -mt-10 z-20 max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Direct Phone */}
          <div className="bg-white border border-gray-100 shadow-xl p-8 hover:border-[#b07c5e] transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-[#111111] text-[#b07c5e] group-hover:bg-[#b07c5e] group-hover:text-white transition-colors flex items-center justify-center mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#b07c5e] block mb-1">
                DIRECT CALL
              </span>
              <h3 className="text-lg font-bold text-[#111111] font-['Titillium_Web'] mb-2">
                Talk to Our Architects
              </h3>
              <p className="text-xs text-[#7A7A7A] mb-4">
                Mon – Sat: 10:00 AM – 6:00 PM
              </p>
            </div>
            <a
              href="tel:+919892803126"
              className="text-base font-bold text-[#111111] group-hover:text-[#b07c5e] transition-colors flex items-center gap-2"
            >
              +91 9892803126
            </a>
          </div>

          {/* Card 2: WhatsApp Integration */}
          <div className="bg-white border border-gray-100 shadow-xl p-8 hover:border-[#25D366] transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-[#111111] text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs uppercase font-bold tracking-widest text-[#25D366]">
                  WHATSAPP CHAT
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              </div>
              <h3 className="text-lg font-bold text-[#111111] font-['Titillium_Web'] mb-2">
                Instant Chat &amp; Queries
              </h3>
              <p className="text-xs text-[#7A7A7A] mb-4">
                Fast responses for floor plans &amp; rates
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#25D366] hover:underline"
            >
              Open WhatsApp Chat <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Email Address */}
          <div className="bg-white border border-gray-100 shadow-xl p-8 hover:border-[#b07c5e] transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-[#111111] text-[#b07c5e] group-hover:bg-[#b07c5e] group-hover:text-white transition-colors flex items-center justify-center mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#b07c5e] block mb-1">
                OFFICIAL EMAIL
              </span>
              <h3 className="text-lg font-bold text-[#111111] font-['Titillium_Web'] mb-2">
                Send Project Briefs
              </h3>
              <p className="text-xs text-[#7A7A7A] mb-4">
                Detailed design inquiries &amp; drawings
              </p>
            </div>
            <a
              href="mailto:contact@kannvas.in"
              className="text-base font-bold text-[#111111] group-hover:text-[#b07c5e] transition-colors truncate"
            >
              contact@kannvas.in
            </a>
          </div>

          {/* Card 4: Office Address */}
          <div className="bg-white border border-gray-100 shadow-xl p-8 hover:border-[#b07c5e] transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-[#111111] text-[#b07c5e] group-hover:bg-[#b07c5e] group-hover:text-white transition-colors flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#b07c5e] block mb-1">
                OFFICE ADDRESS
              </span>
              <h3 className="text-lg font-bold text-[#111111] font-['Titillium_Web'] mb-2">
                Studio Location
              </h3>
              <p className="text-xs text-[#7A7A7A] mb-4">
                Ghatkopar West, Mumbai 400086
              </p>
            </div>
            <a
              href="https://maps.google.com/maps?q=Ghatkopar%20West%2C%20Mumbai%20400086"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-wider text-[#b07c5e] hover:underline flex items-center gap-1"
            >
              View on Map <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. Main Section: Contact Form + Studio Credential Showcase */}
      <section className="py-20 max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FBFBFB] border border-gray-200 p-8 sm:p-12 shadow-sm">
            <AnimatedHeading
              tag="[ DIRECT ENQUIRY FORM ]"
              title="Schedule Your Consultation"
              subtitle="Fill in your project requirements below. Our principal designer, Pinky Mohanlal Gupta, will review your brief and reach out within 24 hours."
              className="mb-8"
              titleClassName="text-2xl sm:text-3xl"
            />

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-300 text-center">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-emerald-900 font-['Titillium_Web'] mb-2">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-sm text-emerald-800 mb-6 max-w-md mx-auto">
                  Thank you, <strong>{formData.name || 'valued client'}</strong>. We have received your
                  request for <strong>{formData.service}</strong>. A design consultant will contact you
                  shortly at <strong>{formData.phone}</strong>.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="octf-btn bg-[#25D366] text-white hover:bg-[#1EBE5D] flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" /> Chat on WhatsApp Now
                  </a>
                  <button
                    onClick={resetForm}
                    className="octf-btn octf-btn-dark"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-[#111111] mb-2 tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Mahindra"
                      className="w-full bg-white border border-gray-300 px-4 py-3.5 text-sm text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#b07c5e] transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-[#111111] mb-2 tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98928 03126"
                      className="w-full bg-white border border-gray-300 px-4 py-3.5 text-sm text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#b07c5e] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-[#111111] mb-2 tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-white border border-gray-300 px-4 py-3.5 text-sm text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#b07c5e] transition-colors"
                    />
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-[#111111] mb-2 tracking-wider">
                      Service Requested
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-white border border-gray-300 px-4 py-3.5 text-sm text-[#111111] focus:outline-none focus:border-[#b07c5e] transition-colors"
                    >
                      <option value="Site Visit & Consultation">Site Visit &amp; Consultation</option>
                      <option value="Interior & Exterior Design">Interior &amp; Exterior Design</option>
                      <option value="3D Visual Representation">3D Visual Representation</option>
                      <option value="Vaastu Consultation">Vaastu Consultation</option>
                      <option value="Residential Projects">Residential Turnkey Projects</option>
                      <option value="Commercial Projects">Commercial / Office Interiors</option>
                      <option value="Healthcare Projects">Healthcare &amp; Clinic Setup</option>
                    </select>
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-xs uppercase font-bold text-[#111111] mb-2 tracking-wider">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full bg-white border border-gray-300 px-4 py-3.5 text-sm text-[#111111] focus:outline-none focus:border-[#b07c5e] transition-colors"
                  >
                    <option value="2 BHK / 2+1 BHK Jodi Flat">2 BHK / 2+1 BHK Jodi Flat</option>
                    <option value="3 BHK / 3.5 BHK Apartment">3 BHK / 3.5 BHK Luxury Apartment</option>
                    <option value="4 BHK / Penthouse / Villa">4 BHK / Penthouse / Villa</option>
                    <option value="Bachelor Pad / Studio">Bachelor Pad / Studio Apartment</option>
                    <option value="Corporate Office / CA Firm / Logistics">Corporate Office / Commercial Space</option>
                    <option value="Hospital / Clinic / Laboratory">Dental Clinic / Specialty Clinic / Lab</option>
                    <option value="Cafe / Restaurant / Hospitality">Cafe / Restaurant / Lounge</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase font-bold text-[#111111] mb-2 tracking-wider">
                    Project Details &amp; Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your space location (e.g., Chembur, Goregaon, Kandivali), estimated carpet area, timeline, and any specific design vision..."
                    className="w-full bg-white border border-gray-300 px-4 py-3.5 text-sm text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#b07c5e] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="octf-btn octf-btn-dark w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> SUBMIT ENQUIRY
                  </button>
                  <span className="text-xs text-neutral-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#b07c5e]" /> We respect your privacy. No spam.
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Studio Credentials & Direct Touch (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Dark Theratio Card */}
            <div
              className="relative p-8 sm:p-10 bg-[#111111] text-white border border-white/10 shadow-2xl overflow-hidden"
              style={{
                backgroundImage: `url('/portfolio/applaud-83/1.Living-and-dining.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Deep dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/95 via-[#111111]/90 to-[#111111]/98" />

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-[#b07c5e]/20 border border-[#b07c5e]/40 text-[#b07c5e] text-[11px] font-bold uppercase tracking-widest mb-4">
                  DESIGN LEADERSHIP
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold font-['Titillium_Web'] text-white mb-2">
                  Kannvas Design and Interiors
                </h3>

                <p className="text-sm text-[#b07c5e] font-semibold mb-6">
                  Led by Pinky Mohanlal Gupta <span className="text-white/60 font-normal">(MBA - Interior Design)</span>
                </p>

                <p className="text-sm text-white/80 font-light leading-relaxed mb-8">
                  Every space is a canvas waiting to tell a story. With over 16+ years of mastery, we
                  bring architectural rigor, 3D visualization, and Vaastu harmony to projects across
                  Mumbai, Thane, Navi Mumbai, and Pune.
                </p>

                {/* Key Highlights */}
                <div className="space-y-4 border-t border-white/10 pt-6 mb-8 text-xs text-neutral-300">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-[#b07c5e] shrink-0" />
                    <span><strong>170+ Projects Completed</strong> spanning luxury homes, offices &amp; clinics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building2 className="w-4 h-4 text-[#b07c5e] shrink-0" />
                    <span><strong>400+ 3D Renders</strong> with 100% realistic material mapping</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#b07c5e] shrink-0" />
                    <span><strong>200+ Vaastu Plans</strong> aligned with non-invasive spatial harmony</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#b07c5e] shrink-0" />
                    <span><strong>Studio Hours:</strong> Monday – Saturday (10:00 AM to 6:00 PM)</span>
                  </div>
                </div>

                {/* Direct WhatsApp Callout */}
                <div className="bg-white/5 border border-white/10 p-5 rounded-none flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-white/60 block font-semibold">
                      DIRECT CHAT:
                    </span>
                    <span className="text-sm font-bold text-white">+91 9892803126</span>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </div>

                {/* Social Channels */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                    Follow Our Design Journey
                  </span>
                  <div className="flex items-center space-x-2">
                    <a
                      href="https://kannvas.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#b07c5e] text-white flex items-center justify-center transition-colors text-xs"
                    >
                      <InstagramIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://kannvas.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#b07c5e] text-white flex items-center justify-center transition-colors text-xs"
                    >
                      <FacebookIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://kannvas.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#b07c5e] text-white flex items-center justify-center transition-colors text-xs"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://kannvas.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#b07c5e] text-white flex items-center justify-center transition-colors text-xs"
                    >
                      <TwitterIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Google Maps Location Section */}
      <section className="bg-[#111111] text-white py-16 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <AnimatedHeading
                tag="[ STUDIO LOCATION & ACCESSIBILITY ]"
                title="Visit KANNVAS in Mumbai"
                theme="dark"
                titleClassName="text-3xl sm:text-4xl"
              />
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://maps.google.com/maps?q=Ghatkopar%20West%2C%20Mumbai%20400086"
                target="_blank"
                rel="noopener noreferrer"
                className="octf-btn octf-btn-light inline-flex items-center gap-2 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#b07c5e]" /> Get Driving Directions
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Responsive Google Map with Studio Overlay */}
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="relative w-full h-[450px] sm:h-[500px] border border-white/10 shadow-2xl overflow-hidden">
            <iframe
              title="KANNVAS Design Studio - Ghatkopar West Mumbai"
              src="https://maps.google.com/maps?q=Ghatkopar%20West%2C%20Mumbai%20400086&t=m&z=15&output=embed&iwloc=near"
              className="w-full h-full border-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              allowFullScreen
            />

            {/* Studio Badge Floating Card */}
            <div className="absolute top-6 left-6 z-10 max-w-sm bg-[#111111]/90 backdrop-blur-md border border-white/20 p-5 text-left text-white shadow-2xl hidden sm:block">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#b07c5e] tracking-wider mb-1">
                <MapPin className="w-4 h-4" /> KANNVAS STUDIO
              </div>
              <h4 className="text-base font-bold font-['Titillium_Web'] text-white mb-1">
                Ghatkopar West, Mumbai 400086
              </h4>
              <p className="text-xs text-neutral-400 mb-3">
                Centrally located with convenient connectivity to Eastern Express Highway, LBS Marg, and Metro Line 1.
              </p>
              <div className="text-[11px] text-white/80 border-t border-white/10 pt-2 flex items-center justify-between">
                <span>Hours: 10 AM – 6 PM</span>
                <span className="text-[#b07c5e] font-semibold">+91 9892803126</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions (FAQ Accordion) */}
      <section className="py-20 max-w-[940px] mx-auto px-6">
        <AnimatedHeading
          tag="[ COMMON QUESTIONS ]"
          title="Everything You Need to Know Before Starting"
          align="center"
          className="mb-12"
          titleClassName="text-2xl sm:text-3xl"
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 transition-colors duration-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-base text-[#111111] font-['Titillium_Web'] hover:text-[#b07c5e] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#b07c5e] shrink-0" />
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#b07c5e] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#7A7A7A] font-light leading-relaxed border-t border-gray-100 pt-4 bg-[#FBFBFB]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 bg-[#F9F9F9] border border-gray-200 p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-lg font-bold font-['Titillium_Web'] text-[#111111]">
              Ready to explore our completed projects?
            </h4>
            <p className="text-xs text-[#7A7A7A] mt-1">
              Browse 23 signature residential, commercial, and healthcare transformations.
            </p>
          </div>
          <button
            onClick={onNavigatePortfolio}
            className="octf-btn octf-btn-dark shrink-0 cursor-pointer"
          >
            VIEW PORTFOLIO
          </button>
        </div>
      </section>
    </div>
  );
}

