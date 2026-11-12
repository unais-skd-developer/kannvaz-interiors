import React, { useState, useRef, useEffect } from 'react';
import ParticleTypography from '../components/ParticleTypography';
import AnimatedHeading from '../components/AnimatedHeading';
import { ALL_PROJECTS, PORTFOLIO_CATEGORIES } from '../data/projectsData';
import {
  MapPin,
  Tag,
  ArrowRight,
  ArrowLeft,
  X,
  Maximize2,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Eye,
} from 'lucide-react';

// Fullscreen Image Lightbox Modal
function GalleryLightbox({ images, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, images]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-5 right-5 z-50 w-12 h-12 bg-white/10 hover:bg-[#b07c5e] text-white flex items-center justify-center transition-colors cursor-pointer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          onClick={prevImage}
          aria-label="Previous Image"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-[#b07c5e] text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={nextImage}
          aria-label="Next Image"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-[#b07c5e] text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main image container */}
      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
        <img
          src={images[currentIndex]}
          alt={`Gallery View ${currentIndex + 1}`}
          className="max-h-[75vh] w-auto max-w-full object-contain shadow-2xl border border-white/10"
        />
        <div className="mt-4 text-white text-xs uppercase tracking-widest font-mono">
          Photo {currentIndex + 1} of {images.length}
        </div>
      </div>
    </div>
  );
}

// Individual Project Detail View
function ProjectDetailView({ project, onBack, onNavigateContact, onSelectProject }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Scroll to top of detail view when opened
  useEffect(() => {
    window.scrollTo({ top: 380, behavior: 'smooth' });
  }, [project.id]);

  // Find previous and next project for navigation
  const currentIndex = ALL_PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? ALL_PROJECTS[currentIndex - 1] : ALL_PROJECTS[ALL_PROJECTS.length - 1];
  const nextProject = currentIndex < ALL_PROJECTS.length - 1 ? ALL_PROJECTS[currentIndex + 1] : ALL_PROJECTS[0];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Navigation Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-200">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#b07c5e] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#b07c5e]" />
            Back to All Projects
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-[#1A1A1A] bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              Prev
            </button>
            <span className="text-xs text-neutral-400 font-mono">
              {currentIndex + 1} / {ALL_PROJECTS.length}
            </span>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-[#1A1A1A] bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Project Header Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-8">
            <span className="inline-block text-xs font-bold uppercase tracking-[2px] text-[#b07c5e] mb-3">
              [ {project.category} PROJECT ]
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-['Titillium_Web'] text-[#1A1A1A] leading-tight mb-4">
              {project.name}
            </h1>
            <p className="flex items-center gap-2 text-sm text-[#7A7A7A] mb-6">
              <MapPin className="w-4 h-4 text-[#b07c5e] shrink-0" />
              <span>{project.location}</span>
            </p>
            <p className="text-base sm:text-lg text-[#555] font-light leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          {/* Project Quick Specs Box */}
          <div className="lg:col-span-4">
            <div className="bg-[#1A1A1A] text-white p-8 border-l-4 border-[#b07c5e] shadow-xl">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#b07c5e] mb-6 pb-3 border-b border-white/10">
                Project Parameters
              </h3>
              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-neutral-400 uppercase tracking-wider block font-semibold mb-1">
                    Design Scope
                  </span>
                  <span className="text-white text-sm font-medium">{project.scope}</span>
                </div>
                <div>
                  <span className="text-neutral-400 uppercase tracking-wider block font-semibold mb-1">
                    Project Location
                  </span>
                  <span className="text-white text-sm font-medium">{project.location}</span>
                </div>
                <div>
                  <span className="text-neutral-400 uppercase tracking-wider block font-semibold mb-1">
                    Total Carpet Area
                  </span>
                  <span className="text-white text-sm font-medium">{project.area}</span>
                </div>
                <div>
                  <span className="text-neutral-400 uppercase tracking-wider block font-semibold mb-1">
                    Execution Timeline
                  </span>
                  <span className="text-white text-sm font-medium">{project.timeline}</span>
                </div>
                <div>
                  <span className="text-neutral-400 uppercase tracking-wider block font-semibold mb-1">
                    Principal Firm
                  </span>
                  <span className="text-white text-sm font-medium">KANNVAS Design Studio</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={onNavigateContact}
                  className="octf-btn octf-btn-light w-full text-center cursor-pointer"
                >
                  INQUIRE FOR SIMILAR SPACE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Design Highlights Section */}
        <div className="mb-16 bg-[#FBFBFB] p-8 sm:p-12 border border-gray-200">
          <span className="block text-xs font-bold uppercase tracking-[2px] text-[#b07c5e] mb-3">
            [ ARCHITECTURAL MASTERY ]
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-['Titillium_Web'] text-[#1A1A1A] mb-6">
            Key Design &amp; Execution Highlights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-white border border-gray-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#b07c5e] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#444] font-light leading-relaxed">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
            <div>
              <span className="block text-xs font-bold uppercase tracking-[2px] text-[#b07c5e] mb-1">
                [ COMPLETE GALLERY ]
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Titillium_Web'] text-[#1A1A1A]">
                Project Photo Gallery ({project.gallery.length} Images)
              </h3>
            </div>
            <p className="text-xs text-neutral-400 font-mono hidden sm:block">
              Click any photo to expand
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.gallery.map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className="relative h-64 overflow-hidden border border-gray-200 shadow-sm group cursor-pointer bg-neutral-900"
              >
                <img
                  src={imgUrl}
                  alt={`${project.name} - Photo ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-[#1A1A1A] flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4 text-[#b07c5e]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Project Navigation CTA */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="octf-btn octf-btn-dark cursor-pointer"
          >
            EXPLORE ALL PORTFOLIO
          </button>

          <button
            onClick={onNavigateContact}
            className="octf-btn octf-btn-light cursor-pointer"
          >
            START YOUR DESIGN CONSULTATION
          </button>
        </div>
      </div>

      {/* Lightbox for Gallery */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          images={project.gallery}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}

export default function PortfolioPage({ onNavigateHome, onNavigateContact, initialProjectId = null }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedProject, setSelectedProject] = useState(
    initialProjectId ? ALL_PROJECTS.find((p) => p.id === initialProjectId) || null : null
  );

  // Filter projects by category
  const filteredProjects =
    activeCategory === 'all'
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category.toLowerCase() === activeCategory);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setVisibleCount(8);
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleBackToGrid = () => {
    setSelectedProject(null);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-[#1a1a1a] pt-[90px]">
      {/* 1. Header Banner with Particle Typography */}
      <section className="relative py-20 sm:py-24 bg-[#111111] overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-banner.jpg"
            alt="Portfolio - KANNVAS Design Studio"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/85 via-[#111111]/75 to-[#111111]" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 flex flex-col items-center">
          <span className="block text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#b07c5e] uppercase mb-2 anim-header-tag">
            [ COMPLETED ARCHITECTURAL WORKS ]
          </span>

          <h1 className="sr-only">Portfolio – KANNVAS Design Studio</h1>

          {/* Particle Typography for "PORTFOLIO" */}
          <div className="w-full max-w-2xl mx-auto my-2">
            <ParticleTypography
              text="PORTFOLIO"
              fontSize={78}
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
          <div className="flex flex-wrap items-center justify-center space-x-2 text-xs uppercase tracking-widest text-neutral-400 font-medium mt-3 anim-header-sub">
            <button
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-[#b07c5e]">/</span>
            {selectedProject ? (
              <button
                onClick={handleBackToGrid}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Portfolio
              </button>
            ) : (
              <span className={activeCategory === 'all' ? 'text-white' : 'text-neutral-400'}>
                Portfolio
              </span>
            )}

            {/* Dynamic Category and Project Breadcrumbs */}
            {selectedProject ? (
              <>
                <span className="text-[#b07c5e]">/</span>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setActiveCategory(selectedProject.category.toLowerCase());
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer capitalize"
                >
                  {selectedProject.category}
                </button>
                <span className="text-[#b07c5e]">/</span>
                <span className="text-[#b07c5e] font-semibold">
                  {selectedProject.name.includes('–')
                    ? selectedProject.name.split('–')[0].trim()
                    : selectedProject.name}
                </span>
              </>
            ) : (
              activeCategory !== 'all' && (
                <>
                  <span className="text-[#b07c5e]">/</span>
                  <span className="text-[#b07c5e] font-semibold capitalize">
                    {activeCategory}
                  </span>
                </>
              )
            )}
          </div>
        </div>
      </section>

      {/* Conditional Rendering: Either Individual Project Page View OR Full Portfolio Grid */}
      {selectedProject ? (
        <ProjectDetailView
          project={selectedProject}
          onBack={handleBackToGrid}
          onNavigateContact={onNavigateContact}
          onSelectProject={handleSelectProject}
        />
      ) : (
        <>
          {/* 2. Category Filter Navigation Bar */}
          <section className="bg-[#181818] border-b border-white/10 sticky top-[90px] z-30 shadow-md">
            <div className="max-w-[1240px] mx-auto px-6">
              <div className="flex items-center justify-start sm:justify-center space-x-2 sm:space-x-4 py-4 overflow-x-auto scrollbar-none">
                {PORTFOLIO_CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                        isActive
                          ? 'bg-[#b07c5e] text-white shadow-md'
                          : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isActive ? 'bg-black/30 text-white' : 'bg-white/10 text-neutral-400'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 3. Editorial Showcase Header */}
          <section className="pt-20 pb-12 bg-[#0B0B0C] text-white border-b border-white/5 relative">
            <div className="max-w-[1240px] mx-auto px-6 text-center">
              <AnimatedHeading
                tag="PORTFOLIO"
                title="Crafted Spaces, Realized Dreams"
                subtitle={`Showing ${filteredProjects.length} bespoke projects. Click any project to explore full architectural details and image galleries.`}
                align="center"
                theme="dark"
                className="mb-2"
                titleClassName="text-3xl sm:text-5xl"
              />
            </div>
          </section>

          {/* Alternating Crisp Luxury White and Obsidian Black Project Rows */}
          <div className="relative">
            {displayedProjects.map((project, idx) => {
              // First project (idx 0) is White, second (idx 1) is Black
              const isWhite = idx % 2 === 0;
              const formattedIndex = String(idx + 1).padStart(2, '0');
              const totalCount = String(filteredProjects.length).padStart(2, '0');

              return (
                <section
                  key={project.id}
                  onClick={() => handleSelectProject(project)}
                  className={`py-20 sm:py-28 transition-colors duration-300 group cursor-pointer relative overflow-hidden ${
                    isWhite
                      ? 'bg-[#FFFFFF] hover:bg-[#FAFAFA] text-[#1A1A1A] border-y border-gray-200 shadow-sm'
                      : 'bg-[#0B0B0C] hover:bg-[#101114] text-white'
                  }`}
                >
                  <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                      {/* Image Column */}
                      <div
                        className={`lg:col-span-7 ${
                          isWhite ? 'lg:order-1' : 'lg:order-2'
                        }`}
                      >
                        <div
                          className={`relative overflow-hidden aspect-[16/10] transition-all duration-500 ${
                            isWhite
                              ? 'bg-gray-100 border border-gray-200 group-hover:border-[#b07c5e]/80 shadow-xl'
                              : 'bg-neutral-900 border border-white/10 group-hover:border-[#b07c5e]/80 shadow-2xl'
                          }`}
                        >
                          <img
                            src={project.featuredImage}
                            alt={project.name}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out select-none group-hover:scale-105"
                            loading="lazy"
                            decoding="async"
                          />
                          {/* Subtle gradient overlay for depth */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity ${
                              isWhite
                                ? 'opacity-30 group-hover:opacity-10'
                                : 'opacity-40 group-hover:opacity-20'
                            }`}
                          />

                          {/* Floating category badge on image */}
                          <span className="absolute top-4 left-4 px-3 py-1 bg-black/85 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider border border-white/10">
                            {project.category}
                          </span>

                          {/* Photo counter tag */}
                          <span className="absolute bottom-4 right-4 px-2.5 py-1 bg-black/85 backdrop-blur-sm text-[#b07c5e] text-[11px] font-mono font-bold tracking-wider border border-white/10 flex items-center gap-1.5">
                            <Eye className="w-3.5 h-3.5" />
                            {project.gallery.length} Photos
                          </span>
                        </div>
                      </div>

                      {/* Text & Specs Column */}
                      <div
                        className={`lg:col-span-5 relative ${
                          isWhite ? 'lg:order-2' : 'lg:order-1'
                        }`}
                      >
                        {/* Architectural Blueprint Wireframe Grid Accent */}
                        <div
                          className={`absolute pointer-events-none hidden sm:block ${
                            isWhite
                              ? '-top-10 -left-6 opacity-10 text-[#1A1A1A]'
                              : '-top-10 -right-6 opacity-20 text-white'
                          }`}
                        >
                          <svg
                            className="w-24 h-24"
                            viewBox="0 0 80 80"
                            fill="none"
                            stroke="currentColor"
                          >
                            <line x1="0" y1="20" x2="80" y2="20" strokeWidth="0.8" />
                            <line x1="0" y1="40" x2="80" y2="40" strokeWidth="0.8" />
                            <line x1="0" y1="60" x2="80" y2="60" strokeWidth="0.8" />
                            <line x1="20" y1="0" x2="20" y2="80" strokeWidth="0.8" />
                            <line x1="40" y1="0" x2="40" y2="80" strokeWidth="0.8" />
                            <line x1="60" y1="0" x2="60" y2="80" strokeWidth="0.8" />
                          </svg>
                        </div>

                        <div className="relative z-10">
                          {/* Category Label */}
                          <span className="block text-xs uppercase font-bold tracking-[0.25em] text-[#b07c5e] mb-3">
                            {project.category}
                          </span>

                          {/* Project Title */}
                          <h3
                            className={`text-2xl sm:text-3xl lg:text-4xl font-bold font-['Titillium_Web'] mb-4 group-hover:text-[#b07c5e] transition-colors leading-tight ${
                              isWhite ? 'text-[#1A1A1A]' : 'text-white'
                            }`}
                          >
                            {project.name}
                          </h3>

                          {/* Location & Specs */}
                          <div
                            className={`flex flex-wrap items-center gap-3 text-xs font-medium mb-4 ${
                              isWhite ? 'text-[#7A7A7A]' : 'text-neutral-400'
                            }`}
                          >
                            <span
                              className={`flex items-center gap-1 ${
                                isWhite ? 'text-[#1A1A1A]' : 'text-neutral-300'
                              }`}
                            >
                              <MapPin className="w-3.5 h-3.5 text-[#b07c5e] shrink-0" />
                              {project.location}
                            </span>
                            <span className={isWhite ? 'text-neutral-300' : 'text-neutral-600'}>•</span>
                            <span className="font-mono text-[#b07c5e] font-semibold">{project.area}</span>
                            <span className={isWhite ? 'text-neutral-300' : 'text-neutral-600'}>•</span>
                            <span>{project.timeline}</span>
                          </div>

                          {/* Description */}
                          <p
                            className={`text-sm sm:text-[15px] font-light leading-relaxed mb-6 line-clamp-3 ${
                              isWhite ? 'text-[#666]' : 'text-neutral-400'
                            }`}
                          >
                            {project.description}
                          </p>

                          {/* Interactive View Project Link */}
                          <div
                            className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[1.5px] uppercase group-hover:text-[#b07c5e] transition-colors pb-2 ${
                              isWhite ? 'text-[#1A1A1A]' : 'text-white'
                            }`}
                          >
                            <span>View Project</span>
                            <span className="text-base transition-transform duration-300 group-hover:translate-x-2">
                              →
                            </span>
                          </div>

                          {/* Minimalist Index Line & Counter */}
                          <div
                            className={`flex items-center gap-3 pt-6 mt-6 ${
                              isWhite
                                ? 'border-t border-gray-200 justify-start'
                                : 'border-t border-white/10 justify-end'
                            }`}
                          >
                            <div
                              className={`w-12 h-[1px] transition-colors ${
                                isWhite
                                  ? 'bg-gray-300 group-hover:bg-[#b07c5e]'
                                  : 'bg-neutral-700 group-hover:bg-[#b07c5e]'
                              }`}
                            />
                            <span
                              className={`text-xs font-mono tracking-widest ${
                                isWhite ? 'text-neutral-500 font-semibold' : 'text-neutral-400'
                              }`}
                            >
                              {formattedIndex} / {totalCount}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          {/* Progressive Load More Projects Bar */}
          {visibleCount < filteredProjects.length && (
            <div className="text-center py-16 bg-[#0B0B0C] border-t border-white/5">
              <button
                onClick={() => setVisibleCount((prev) => prev + 8)}
                className="octf-btn octf-btn-light cursor-pointer !py-3.5 !px-8 text-xs tracking-[2px]"
              >
                LOAD MORE PROJECTS ({filteredProjects.length - visibleCount} REMAINING)
              </button>
            </div>
          )}

          {/* 4. Closing Consultation Call to Action */}
          <section className="py-20 bg-[#111111] text-white border-t border-white/10">
            <div className="max-w-[1240px] mx-auto px-6 text-center">
              <div className="bg-[#1c1c1c] border border-white/10 p-10 sm:p-16 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
                <span className="block text-xs uppercase font-bold tracking-[0.25em] text-[#b07c5e] mb-3">
                  [ START YOUR NEXT PROJECT ]
                </span>
                <h3 className="text-3xl sm:text-5xl font-bold font-['Titillium_Web'] text-white mb-4">
                  Envisioning a Space Like These?
                </h3>
                <p className="text-base text-neutral-300 font-light max-w-2xl mx-auto mb-8">
                  Connect with Principal Designer Pinky Mohanlal Gupta to discuss your residential, commercial, or healthcare requirements.
                </p>
                <button
                  onClick={onNavigateContact}
                  className="octf-btn octf-btn-light cursor-pointer"
                >
                  SCHEDULE YOUR INITIAL CONSULTATION
                </button>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

