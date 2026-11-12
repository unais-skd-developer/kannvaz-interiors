import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { TwitterIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from './SocialIcons';
import AnimatedHeading from './AnimatedHeading';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Site Visit & Consultation',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Site Visit & Consultation',
        message: '',
      });
    }, 5000);
  };

  return (
    <section id="contact" className="relative z-20 pt-10">
      {/* Floating Two-Column Card Container */}
      <div className="max-w-[1140px] mx-auto px-6 mb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 shadow-2xl overflow-hidden border border-gray-100">
          {/* Left: Contact / Enquiry Form (White Background) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-14">
            <AnimatedHeading
              tag="[ QUICK ENQUIRY ]"
              title="Book Your Design Consultation Today"
              subtitle="Connect with our principal architects and interior designers in Mumbai to discuss your vision."
              className="mb-8"
            />

            {sent ? (
              <div className="p-6 bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm flex flex-col items-center text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mb-2" />
                <h4 className="font-bold text-base mb-1">Enquiry Submitted Successfully!</h4>
                <p className="text-xs text-emerald-700">
                  Thank you! Our design team at KANNVAS will reach out to schedule your consultation within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#F9F9F9] border border-gray-200 px-4 py-3 text-sm text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#1a1a1a]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-600 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98928 03126"
                      className="w-full bg-[#F9F9F9] border border-gray-200 px-4 py-3 text-sm text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#1a1a1a]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-600 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@example.com"
                      className="w-full bg-[#F9F9F9] border border-gray-200 px-4 py-3 text-sm text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#1a1a1a]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-600 mb-1">
                      Required Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#F9F9F9] border border-gray-200 px-4 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a]"
                    >
                      <option value="Site Visit & Consultation">Site Visit & Consultation</option>
                      <option value="Interior & Exterior Design">Interior & Exterior Design</option>
                      <option value="3D Visual Representation">3D Visual Representation</option>
                      <option value="Vaastu Consultation">Vaastu Consultation</option>
                      <option value="Complete Turnkey Project">Complete Turnkey Project</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-neutral-600 mb-1">
                    Tell us about your space & timeline
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Project location, square footage, property type (2BHK, 3BHK, office, clinic)..."
                    className="w-full bg-[#F9F9F9] border border-gray-200 px-4 py-3 text-sm text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#1a1a1a] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="octf-btn octf-btn-dark w-full sm:w-auto"
                >
                  SEND ENQUIRY
                </button>
              </form>
            )}
          </div>

          {/* Right: Info Card with bg-pinfo.jpg */}
          <div
            className="lg:col-span-5 p-8 sm:p-14 bg-cover bg-center text-white relative flex flex-col justify-between"
            style={{
              backgroundImage: `url('https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2019/11/bg-pinfo.jpg')`,
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10">
              <span className="block text-[13px] uppercase font-semibold tracking-[2px] text-[#b07c5e] mb-2">
                [ CONTACT KANNVAS ]
              </span>
              <h3 className="text-[28px] sm:text-[34px] font-bold text-white font-['Titillium_Web'] mb-4">
                Let's Craft Your Space
              </h3>
              <p className="text-[14px] leading-[24px] text-white/80 font-light mb-8">
                Give us a call or send your project requirements anytime. We endeavour to reply to all design consultations promptly.
              </p>

              <div className="space-y-6 text-sm mb-8">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#b07c5e] shrink-0 mt-0.5" />
                  <div>
                    <h6 className="text-[11px] uppercase tracking-wider text-white/60 font-semibold">
                      DIRECT CALL:
                    </h6>
                    <a
                      href="tel:+919892803126"
                      className="text-white text-base font-bold hover:text-[#b07c5e] transition-colors"
                    >
                      +91 9892803126
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#b07c5e] shrink-0 mt-0.5" />
                  <div>
                    <h6 className="text-[11px] uppercase tracking-wider text-white/60 font-semibold">
                      EMAIL ADDRESS:
                    </h6>
                    <a
                      href="mailto:contact@kannvas.in"
                      className="text-white font-medium hover:text-[#b07c5e] transition-colors"
                    >
                      contact@kannvas.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#b07c5e] shrink-0 mt-0.5" />
                  <div>
                    <h6 className="text-[11px] uppercase tracking-wider text-white/60 font-semibold">
                      STUDIO LOCATION:
                    </h6>
                    <p className="text-white font-medium">Mumbai, Maharashtra 400086, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="relative z-10 flex items-center space-x-3 pt-6 border-t border-white/20">
              <a
                href="#contact"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/40 hover:border-white hover:bg-white hover:text-black text-white flex items-center justify-center transition-all text-xs"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/40 hover:border-white hover:bg-white hover:text-black text-white flex items-center justify-center transition-all text-xs"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/40 hover:border-white hover:bg-white hover:text-black text-white flex items-center justify-center transition-all text-xs"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full border border-white/40 hover:border-white hover:bg-white hover:text-black text-white flex items-center justify-center transition-all text-xs"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Grayscale Google Map for Mumbai */}
      <div className="w-full h-[420px] relative">
        <iframe
          title="KANNVAS Mumbai Studio Location"
          src="https://maps.google.com/maps?q=Mumbai,%20Maharashtra%20400086&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 grayscale contrast-125"
          loading="lazy"
        />
      </div>
    </section>
  );
}
