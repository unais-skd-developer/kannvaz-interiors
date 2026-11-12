import React from 'react';
import { X, MapPin, Tag, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl bg-white shadow-2xl overflow-hidden my-8 border border-gray-200">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/70 text-white hover:bg-[#b07c5e] flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Image */}
          <div className="md:col-span-7 bg-[#1A1A1A] relative max-h-[500px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[12px] font-bold font-mono tracking-widest text-[#b07c5e] uppercase block mb-2">
                [ {project.category} ]
              </span>
              <h3 className="text-2xl font-bold font-['Titillium_Web'] text-[#1A1A1A] mb-4 leading-tight">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#7A7A7A] leading-relaxed font-light mb-6">
                {project.desc}
              </p>

              <div className="space-y-3 pt-4 border-t border-gray-100 text-xs">
                <div className="flex items-center justify-between text-[#7A7A7A]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#b07c5e]" />
                    Location:
                  </span>
                  <span className="text-[#1A1A1A] font-semibold">{project.location || 'Mumbai'}</span>
                </div>
                <div className="flex items-center justify-between text-[#7A7A7A]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Tag className="w-3.5 h-3.5 text-[#b07c5e]" />
                    Firm:
                  </span>
                  <span className="text-[#1A1A1A] font-semibold">KANNVAS Design Studio</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <a
                href="#contact"
                onClick={onClose}
                className="octf-btn octf-btn-dark w-full text-center"
              >
                INQUIRE FOR SIMILAR PROJECT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
