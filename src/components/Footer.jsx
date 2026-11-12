import React, { useState } from 'react';
import { ArrowUp, Send, Check, Phone, Mail, MapPin } from 'lucide-react';
import { TwitterIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from './SocialIcons';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-neutral-400 border-t border-white/5 pt-20 pb-10 relative">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          {/* Column 1: Brand & Bio */}
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('home', 'home');
                else scrollToTop();
              }}
              className="inline-block mb-6 group cursor-pointer"
            >
              <img
                src="/kannvas-logo.png"
                alt="KANNVAS"
                className="h-[55px] w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
              />
            </a>
            <p className="text-sm leading-relaxed mb-6 font-light">
              At KANNVAS, we believe every space is a canvas waiting to tell a story. High-end residential, commercial, and healthcare interior &amp; exterior design firm based in Mumbai.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="#social"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#b07c5e] text-white flex items-center justify-center transition-colors text-xs"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="#social"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#b07c5e] text-white flex items-center justify-center transition-colors text-xs"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="#social"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#b07c5e] text-white flex items-center justify-center transition-colors text-xs"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="#social"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#b07c5e] text-white flex items-center justify-center transition-colors text-xs"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Contacts */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-6 pb-2 border-b border-white/10">
              Contact Info
            </h4>
            <div className="space-y-4 text-sm font-light">
              <div>
                <span className="text-neutral-500 block text-xs uppercase tracking-wider mb-1 font-semibold">
                  Studio Location
                </span>
                <span className="text-white flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#b07c5e] shrink-0 mt-0.5" />
                  Mumbai, Maharashtra 400086, India
                </span>
              </div>
              <div>
                <span className="text-neutral-500 block text-xs uppercase tracking-wider mb-1 font-semibold">
                  Direct Line
                </span>
                <a
                  href="tel:+919892803126"
                  className="text-white hover:text-[#b07c5e] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#b07c5e] shrink-0" />
                  +91 9892803126
                </a>
              </div>
              <div>
                <span className="text-neutral-500 block text-xs uppercase tracking-wider mb-1 font-semibold">
                  Official Email
                </span>
                <a
                  href="mailto:contact@kannvas.in"
                  className="text-white hover:text-[#b07c5e] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#b07c5e] shrink-0" />
                  contact@kannvas.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Featured Projects */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-6 pb-2 border-b border-white/10">
              Featured Work
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    if (onNavigate) onNavigate('portfolio');
                    else window.location.hash = '/portfolio';
                  }}
                  className="group flex items-center gap-3 text-sm text-neutral-300 hover:text-[#b07c5e] transition-colors text-left cursor-pointer"
                >
                  <img
                    src="https://kannvas.in/wp-content/uploads/2026/06/1.Living-and-dining.jpg"
                    alt="Applaud 83 Jodi Flat"
                    className="w-12 h-12 object-cover shrink-0 border border-white/10 group-hover:border-[#b07c5e]"
                  />
                  <div>
                    <span className="block text-white font-medium group-hover:text-[#b07c5e] transition-colors text-xs">
                      2+1 BHK Jodi – Applaud 83
                    </span>
                    <span className="text-[11px] text-neutral-500">Residential • Goregaon</span>
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onNavigate) onNavigate('portfolio');
                    else window.location.hash = '/portfolio';
                  }}
                  className="group flex items-center gap-3 text-sm text-neutral-300 hover:text-[#b07c5e] transition-colors text-left cursor-pointer"
                >
                  <img
                    src="https://kannvas.in/wp-content/uploads/2026/02/DSC5437-Copy-scaled.jpg"
                    alt="Ajmera Zeon"
                    className="w-12 h-12 object-cover shrink-0 border border-white/10 group-hover:border-[#b07c5e]"
                  />
                  <div>
                    <span className="block text-white font-medium group-hover:text-[#b07c5e] transition-colors text-xs">
                      2 BHK – Ajmera Zeon
                    </span>
                    <span className="text-[11px] text-neutral-500">Luxury Residential • Wadala</span>
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onNavigate) onNavigate('portfolio');
                    else window.location.hash = '/portfolio';
                  }}
                  className="group flex items-center gap-3 text-sm text-neutral-300 hover:text-[#b07c5e] transition-colors text-left cursor-pointer"
                >
                  <img
                    src="https://kannvas.in/wp-content/uploads/2026/05/1.2-entrance.jpg"
                    alt="Cafe Antiquity"
                    className="w-12 h-12 object-cover shrink-0 border border-white/10 group-hover:border-[#b07c5e]"
                  />
                  <div>
                    <span className="block text-white font-medium group-hover:text-[#b07c5e] transition-colors text-xs">
                      Cafe Antiquity
                    </span>
                    <span className="text-[11px] text-neutral-500">Hospitality • Karjat</span>
                  </div>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-6 pb-2 border-b border-white/10">
              Stay Inspired
            </h4>
            <p className="text-sm leading-relaxed mb-4 font-light">
              Follow our monthly insights on interior styling, 3D visualization trends, and Vaastu tips for contemporary Indian homes.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-[#b07c5e] bg-[#b07c5e]/10 p-3 border border-[#b07c5e]/30">
                <Check className="w-4 h-4" />
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#b07c5e]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#b07c5e] hover:bg-[#96654a] text-white flex items-center justify-center transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>
            Copyright © 2026 KANNVAS. All Rights Reserved.
          </p>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('about');
                else window.location.hash = '/about';
              }}
              className="hover:text-[#b07c5e] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => {
                if (onNavigate) onNavigate('services');
                else window.location.hash = '/services';
              }}
              className="hover:text-[#b07c5e] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => {
                if (onNavigate) onNavigate('portfolio');
                else window.location.hash = '/portfolio';
              }}
              className="hover:text-[#b07c5e] transition-colors cursor-pointer"
            >
              Portfolio
            </button>
            <button
              onClick={() => {
                if (onNavigate) onNavigate('testimonials');
                else window.location.hash = '/testimonials';
              }}
              className="hover:text-[#b07c5e] transition-colors cursor-pointer"
            >
              Testimonials
            </button>
            <button
              onClick={() => {
                if (onNavigate) onNavigate('contact');
                else window.location.hash = '/contact';
              }}
              className="hover:text-[#b07c5e] transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-8 h-8 bg-white/5 hover:bg-[#b07c5e] text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
