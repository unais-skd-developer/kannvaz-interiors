import React from 'react';
import { TwitterIcon, FacebookIcon } from './SocialIcons';

const TEAM = [
  {
    name: 'Christina Torres',
    role: 'Company Founder',
    image: 'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/04/member1.jpg',
  },
  {
    name: 'Jesica Lina',
    role: 'Marketing Manager',
    image: 'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/04/member2.jpg',
  },
  {
    name: 'Robert Cooper',
    role: 'Finance Manager',
    image: 'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/04/member3.jpg',
  },
  {
    name: 'Olivia Peterson',
    role: 'CEO of Company',
    image: 'https://wpdemo.archiwp.com/theratio/wp-content/uploads/sites/5/2020/04/member4.jpg',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-[110px] bg-[#F4F4F4]">
      <div className="max-w-[1540px] mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="block text-[14px] uppercase font-semibold tracking-[2px] text-[#7A7A7A] mb-3">
            [ our professionals ]
          </span>
          <h2 className="text-[34px] sm:text-[42px] leading-[1.2] font-bold text-[#1A1A1A] font-['Titillium_Web'] tracking-tight">
            Meet Our Skilled Team
          </h2>
        </div>

        {/* 4 Team Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <div key={member.name} className="group relative overflow-hidden bg-white shadow-sm">
              {/* Member Photo */}
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Info Overlay */}
              <div className="p-6 text-center bg-white border-t border-gray-100">
                <h4 className="text-[20px] font-bold text-[#1A1A1A] font-['Titillium_Web'] mb-1">
                  {member.name}
                </h4>
                <div className="text-[13px] text-[#7A7A7A] font-medium tracking-wider mb-4">
                  [ {member.role} ]
                </div>

                {/* Social icons */}
                <div className="flex items-center justify-center space-x-3 text-neutral-500">
                  <a
                    href="#team"
                    aria-label="Twitter"
                    className="w-8 h-8 rounded-full border border-gray-200 hover:border-[#1a1a1a] hover:text-[#1a1a1a] flex items-center justify-center transition-colors"
                  >
                    <TwitterIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#team"
                    aria-label="Facebook"
                    className="w-8 h-8 rounded-full border border-gray-200 hover:border-[#1a1a1a] hover:text-[#1a1a1a] flex items-center justify-center transition-colors"
                  >
                    <FacebookIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
