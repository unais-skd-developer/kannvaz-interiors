import React from 'react';
import { X, MapPin, Mail, Phone } from 'lucide-react';
import { TwitterIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from './SocialIcons';

const GALLERY = [
  'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/05/p3-gallery4-150x150.jpg',
  'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/05/p4-gallery1-150x150.jpg',
  'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2019/11/project1-720x720.jpg',
  'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2019/11/project2-720x720.jpg',
  'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2019/11/project3.jpg',
  'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2019/11/project4-720x720.jpg',
];

export default function OffCanvas({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#181818] border-l border-white/10 p-8 sm:p-12 overflow-y-auto flex flex-col justify-between shadow-2xl relative">
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors p-2"
          >
            <X className="w-6 h-6" />
          </button>

          <div>
            {/* Logo */}
            <div className="mb-8">
              <img
                src="https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/03/logo-footer.svg"
                alt="Theratio"
                className="h-9 w-auto"
              />
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed font-light mb-10">
              Theratio is an architectural and luxury interior design studio known for creating bespoke environments tailored with precision and exquisite craftsmanship.
            </p>

            {/* Gallery */}
            <div className="mb-10">
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-white/10">
                Our Gallery
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {GALLERY.map((img, i) => (
                  <div key={i} className="aspect-square overflow-hidden bg-black/40 border border-white/5 group">
                    <img
                      src={img}
                      alt={`Gallery ${i}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-8">
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-white/10">
                Contact Info
              </h4>
              <div className="space-y-3 text-xs text-neutral-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#b07c5e] shrink-0" />
                  <span>411 University St, Seattle, USA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#b07c5e] shrink-0" />
                  <span>theratio_interior@mail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#b07c5e] shrink-0" />
                  <span>+1 800 456 789 123</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="pt-6 border-t border-white/10 flex items-center space-x-3">
            <a
              href="#social"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#b07c5e] text-white flex items-center justify-center transition-colors text-xs"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="#social"
              aria-label="Twitter"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#b07c5e] text-white flex items-center justify-center transition-colors text-xs"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
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
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#b07c5e] text-white flex items-center justify-center transition-colors text-xs"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
