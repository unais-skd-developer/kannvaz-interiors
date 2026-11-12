import React, { useState } from 'react';
import { Quote, Star } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';

const KANNVAS_TESTIMONIALS = [
  {
    name: 'Ankit Sawla',
    role: 'Customer',
    project: 'Holiday Home, Vadodara',
    avatar: 'https://kannvas.in/wp-content/uploads/2026/02/men1.png',
    quote:
      "I was searching for an interior decorator to design my holiday home in Vadodara (Gujarat). That's when a friend suggested me the name Kannvas. I surfed the internet for images of sites done by them and was glad at what they had to display. Overall an exceptional experience!",
  },
  {
    name: 'Ketan Sawant',
    role: 'Customer',
    project: 'Residential Flat, Mumbai',
    avatar: 'https://kannvas.in/wp-content/uploads/2026/02/men1.png',
    quote:
      'Great work done of our residential flat. Completely changed the look of our flat into a lavish look. Totally client oriented service. Fully satisfied with the work of Kannvas. Work done as per our comfort and need. Now looking forward for renovation of our office from Kannvas team.',
  },
  {
    name: 'Richa Samant',
    role: 'Customer',
    project: 'Residence Styling',
    avatar: 'https://kannvas.in/wp-content/uploads/2026/02/female1.png',
    quote:
      'I was assisting my friend in doing up his place with the assistance of Pinky. I have seen them implement the idea and they were very professional in their approach. Eye for detail is something that Kannvas is all about! Fab job guys!! Cheers!',
  },
];

export default function Testimonials({ onNavigate }) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section id="testimonial" className="py-[110px] bg-white relative">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Heading */}
        <AnimatedHeading
          tag="[ TESTIMONIALS ]"
          title="Client Testimonials"
          subtitle="Hear directly from homeowners and commercial clients who trusted KANNVAS with their dream spaces."
          align="center"
          className="mb-16"
        />

        {/* 3 Testimonials in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {KANNVAS_TESTIMONIALS.map((item, idx) => (
            <div
              key={item.name}
              className="bg-[#FBFBFB] p-8 border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 relative group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center space-x-1 text-[#b07c5e] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-[14px] sm:text-[15px] leading-[26px] text-[#555] font-light italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h6 className="text-[17px] font-bold text-[#1A1A1A] font-['Titillium_Web']">
                  {item.name}
                </h6>
                <span className="text-[12px] text-[#b07c5e] font-semibold tracking-wide block mt-0.5">
                  {item.role} • {item.project}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <button
            onClick={() => {
              if (onNavigate) onNavigate('testimonials');
              else window.location.hash = '/testimonials';
            }}
            className="octf-btn octf-btn-dark cursor-pointer"
          >
            VIEW ALL 8 CLIENT STORIES
          </button>
          <a href="#contact" className="octf-btn octf-btn-light cursor-pointer">
            START YOUR PROJECT
          </a>
        </div>
      </div>
    </section>
  );
}
