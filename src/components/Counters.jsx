import React from 'react';
import { Users, Clock, Trophy, Globe } from 'lucide-react';

const STATS = [
  { num: '180', suffix: '+', label: 'Current Clients', icon: Users },
  { num: '10', suffix: '+', label: 'Years of Experience', icon: Clock },
  { num: '35', suffix: '+', label: 'Awards Winning', icon: Trophy },
  { num: '5', suffix: '+', label: 'Offices Worldwide', icon: Globe },
];

export default function Counters() {
  return (
    <section className="bg-[#141414] py-16 border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center p-6 bg-[#181818]/50 border border-white/5 relative group hover:border-[#b07c5e]/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-white/5 text-[#b07c5e] group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex items-baseline justify-center font-mono font-extrabold text-4xl sm:text-5xl text-white mb-2">
                  <span>{stat.num}</span>
                  <span className="text-[#b07c5e] ml-1">{stat.suffix}</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-400">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

