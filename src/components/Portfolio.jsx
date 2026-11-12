import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';

const CATEGORIES = ['All', 'Residential', '3D Visuals', 'Commercial'];

const KANNVAS_PROJECTS = [
  {
    id: 1,
    title: 'Centrio – 2 BHK',
    category: 'Residential',
    tags: ['Residential'],
    image: 'https://kannvas.in/wp-content/uploads/2022/06/main-2bhk.jpg',
    location: 'Mumbai',
    desc: 'Contemporary 2 BHK residential apartment designed with warm wood veneers, modern lighting, and optimized space planning.',
  },
  {
    id: 2,
    title: 'Pune – 3.5 BHK',
    category: 'Residential',
    tags: ['Residential'],
    image: 'https://kannvas.in/wp-content/uploads/2022/06/pune-main1.jpg',
    location: 'Pune',
    desc: 'Luxurious 3.5 BHK home showcasing custom Italian marble accents, bespoke joinery, and an open layout aesthetic.',
  },
  {
    id: 3,
    title: 'Ajmera Zeon – 2 BHK',
    category: 'Residential',
    tags: ['Residential'],
    image: 'https://kannvas.in/wp-content/uploads/2022/06/main-ajmera-260x473.jpg',
    location: 'Bhakti Park, Wadala',
    desc: 'Sleek, minimalist residential interior designed for modern urban living with neutral palettes and clean geometric lines.',
  },
  {
    id: 4,
    title: 'Borivali – 4 BHK (3D Views)',
    category: '3D Visuals',
    tags: ['3D Visuals', 'Residential'],
    image: 'https://kannvas.in/wp-content/uploads/2022/06/main-4bhk-1-260x473.jpg',
    location: 'Borivali, Mumbai',
    desc: 'High-end 4 BHK photorealistic 3D visual representation previewing materials, furniture arrangements, and false ceiling lighting.',
  },
  {
    id: 5,
    title: 'Dahisar – 2 BHK (3D Views)',
    category: '3D Visuals',
    tags: ['3D Visuals', 'Residential'],
    image: 'https://kannvas.in/wp-content/uploads/2022/06/main-3d-2-260x473.jpg',
    location: 'Dahisar, Mumbai',
    desc: 'Comprehensive 3D concept render illustrating space-saving modular kitchen solutions and balanced bedroom layouts.',
  },
  {
    id: 6,
    title: 'Kandivali – 2 BHK',
    category: 'Residential',
    tags: ['Residential'],
    image: 'https://kannvas.in/wp-content/uploads/2022/06/main-k1-260x473.jpg',
    location: 'Kandivali, Mumbai',
    desc: 'Complete turnkey interior execution blending practical storage utilities with tasteful aesthetic finishing.',
  },
];

export default function Portfolio({ onSelectProject, onNavigate }) {
  const [activeTab, setActiveTab] = useState('All');

  const filtered =
    activeTab === 'All'
      ? KANNVAS_PROJECTS
      : KANNVAS_PROJECTS.filter((p) => p.tags.includes(activeTab));

  return (
    <section id="portfolio" className="py-[110px] bg-white relative">
      <div className="max-w-[1240px] mx-auto px-6 mb-12">
        {/* Section Heading */}
        <AnimatedHeading
          tag="[ PORTFOLIO ]"
          title="Featured Projects"
          subtitle="A glimpse into residential, commercial, and 3D architectural representations completed by KANNVAS."
          align="center"
          className="mb-10"
        />

        {/* Filter Tabs */}
        <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {CATEGORIES.map((tab) => {
            const isSelected = activeTab === tab;
            return (
              <li key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`text-[13px] font-bold font-['Raleway'] uppercase tracking-[2px] pb-2 transition-all duration-300 relative ${
                    isSelected
                      ? 'text-[#1A1A1A] border-b-2 border-[#1A1A1A]'
                      : 'text-[#7A7A7A] hover:text-[#1A1A1A]'
                  }`}
                >
                  {tab}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Projects Grid: 3 columns with high quality card presentation */}
      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject && onSelectProject(project)}
            className="group relative cursor-pointer overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-400"
          >
            {/* Image Container */}
            <div className="aspect-[4/3] overflow-hidden relative bg-[#1A1A1A]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#1A1A1A]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="w-12 h-12 border border-white/40 rounded-full flex items-center justify-center text-white transform scale-75 group-hover:scale-100 transition-transform">
                  <Plus className="w-6 h-6" />
                </span>
              </div>
            </div>

            {/* Project Details Below Image */}
            <div className="p-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#b07c5e] block mb-1">
                {project.category} • {project.location}
              </span>
              <h4 className="text-[20px] font-bold font-['Titillium_Web'] text-[#1A1A1A] group-hover:text-[#b07c5e] transition-colors mb-2">
                {project.title}
              </h4>
              <p className="text-[13px] leading-[22px] text-[#7A7A7A] line-clamp-2 font-light">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Button */}
      <div className="text-center mt-14">
        <button
          onClick={() => {
            if (onNavigate) onNavigate('portfolio');
            else window.location.hash = '/portfolio';
          }}
          className="octf-btn octf-btn-dark cursor-pointer"
        >
          VIEW ALL 23 COMPLETED PROJECTS
        </button>
      </div>
    </section>
  );
}
