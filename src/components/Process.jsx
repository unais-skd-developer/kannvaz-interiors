import React from 'react';
import { Award, Compass, Clock, CheckCircle2 } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';

const REASONS = [
  {
    num: '01',
    title: 'Tailored Client-Centric Approach',
    desc: 'We don’t believe in cookie-cutter templates. Every layout, color tone, and functional detail is customized around your routine, aesthetic tastes, and space limitations.',
    icon: Compass,
  },
  {
    num: '02',
    title: 'Photorealistic 3D Visuals',
    desc: 'Eliminate guesswork with true-to-life 3D renders before civil work begins, letting you preview textures, lighting moods, and finishes with complete certainty.',
    icon: Award,
  },
  {
    num: '03',
    title: 'Vaastu-Aligned Harmonization',
    desc: 'Seamlessly weaving Vaastu principles into contemporary aesthetics to foster tranquility, positive energy, and balanced spatial flow in residential and office spaces.',
    icon: CheckCircle2,
  },
  {
    num: '04',
    title: 'Strict Timelines & Turnkey Quality',
    desc: 'From initial structural evaluation to on-site quality audits and handover, we respect your time and budget with transparent project milestone execution.',
    icon: Clock,
  },
];

const KANNVAS_STATS = [
  { num: '150', suffix: '+', label: 'Projects Completed' },
  { num: '400', suffix: '+', label: '3D Renders Created' },
  { num: '200', suffix: '+', label: 'Vaastu Consultations' },
  { num: '100', suffix: '%', label: 'Happy Customers' },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-[110px] relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/05/bg2-process.jpg')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1A1A1A]/80" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <AnimatedHeading
          tag="[ WHY CHOOSE KANNVAS ]"
          title="Trust Your Vision to Mumbai's Finest"
          subtitle="Blending architectural creativity, practical utility, and master craftsmanship across Mumbai, Pune, and beyond."
          align="center"
          theme="dark"
          className="mb-16"
        />

        {/* 4 Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.num}
                className="p-8 bg-[#1f1f1f]/80 border border-white/10 hover:border-[#b07c5e] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <span className="font-mono text-3xl font-extrabold text-[#b07c5e]">
                      {reason.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#b07c5e]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-[19px] font-bold font-['Titillium_Web'] text-white mb-3">
                    {reason.title}
                  </h3>

                  <p className="text-[13px] leading-[22px] text-neutral-300 font-light">
                    {reason.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Authentic Statistics from kannvas.in */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 mb-14">
          {KANNVAS_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[44px] sm:text-[54px] font-bold font-['Titillium_Web'] text-white leading-none mb-2">
                <span className="text-[#b07c5e]">[</span>
                <span className="mx-1">{stat.num}</span>
                <span className="text-[#b07c5e]">{stat.suffix}]</span>
              </div>
              <h6 className="text-[13px] sm:text-[14px] uppercase tracking-wider text-neutral-300 font-semibold">
                {stat.label}
              </h6>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="#contact" className="octf-btn octf-btn-light">
            BOOK CONSULTATION
          </a>
        </div>
      </div>
    </section>
  );
}
