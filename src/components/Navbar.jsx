import React, { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { id: 'home', label: 'HOME', href: '#home' },
  { id: 'about-us', label: 'ABOUT US', href: '#about-us' },
  { id: 'services', label: 'SERVICES', href: '#services' },
  { id: 'portfolio', label: 'PORTFOLIO', href: '#portfolio' },
  { id: 'testimonial', label: 'TESTIMONIAL', href: '#testimonial' },
  { id: 'contact', label: 'CONTACT', href: '#contact' },
];

export default function Navbar({ currentPage = 'home', onNavigate }) {
  const [activeSection, setActiveSection] = useState(
    currentPage === 'about'
      ? 'about-us'
      : currentPage === 'services'
      ? 'services'
      : currentPage === 'portfolio'
      ? 'portfolio'
      : currentPage === 'testimonials'
      ? 'testimonial'
      : currentPage === 'contact'
      ? 'contact'
      : 'home'
  );
  const [hoveredSection, setHoveredSection] = useState(null);
  const [arrowStyle, setArrowStyle] = useState({ left: 0, opacity: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRefs = useRef({});

  useEffect(() => {
    if (currentPage === 'about') {
      setActiveSection('about-us');
    } else if (currentPage === 'services') {
      setActiveSection('services');
    } else if (currentPage === 'portfolio') {
      setActiveSection('portfolio');
    } else if (currentPage === 'testimonials') {
      setActiveSection('testimonial');
    } else if (currentPage === 'contact') {
      setActiveSection('contact');
    }
  }, [currentPage]);

  // Update arrow indicator position when activeSection or hoveredSection changes
  useEffect(() => {
    const updatePosition = () => {
      const currentTarget = hoveredSection || activeSection;
      const el = navRefs.current[currentTarget];
      if (el) {
        setArrowStyle({
          left: el.offsetLeft + el.offsetWidth / 2,
          opacity: 1,
        });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [activeSection, hoveredSection]);

  // Optimized scroll spy for single-page mode (throttled with rAF & state deduplication)
  useEffect(() => {
    if (currentPage !== 'home') return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const navHeight = 92;

        // Top of page
        if (scrollY < 120) {
          setActiveSection((prev) => (prev !== 'home' ? 'home' : prev));
          ticking = false;
          return;
        }

        // Reached page bottom
        if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60) {
          setActiveSection((prev) => (prev !== 'contact' ? 'contact' : prev));
          ticking = false;
          return;
        }

        // Scan all sections in order
        for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
          const item = NAV_ITEMS[i];
          const el = document.getElementById(item.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= navHeight + 80) {
              setActiveSection((prev) => (prev !== item.id ? item.id : prev));
              break;
            }
          }
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // Smooth navigation handler
  const handleNavClick = (e, item) => {
    e.preventDefault();
    setHoveredSection(null);
    setMobileMenuOpen(false);

    // 1. Navigate to dedicated About Us Page
    if (item.id === 'about-us') {
      setActiveSection('about-us');
      if (onNavigate) {
        onNavigate('about');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // 2. Navigate to dedicated Services Page
    if (item.id === 'services') {
      setActiveSection('services');
      if (onNavigate) {
        onNavigate('services');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // 3. Navigate to dedicated Portfolio Page
    if (item.id === 'portfolio') {
      setActiveSection('portfolio');
      if (onNavigate) {
        onNavigate('portfolio');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // 4. Navigate to dedicated Testimonials Page
    if (item.id === 'testimonial') {
      setActiveSection('testimonial');
      if (onNavigate) {
        onNavigate('testimonials');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // 5. Navigate to dedicated Contact Page
    if (item.id === 'contact') {
      setActiveSection('contact');
      if (onNavigate) {
        onNavigate('contact');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // 6. When on About, Services, Portfolio, Testimonials, or Contact page, navigate back to Home and scroll to section
    if (currentPage !== 'home') {
      setActiveSection(item.id);
      if (onNavigate) {
        onNavigate('home', item.id);
      }
      return;
    }

    // 7. In-page scroll on Home page
    setActiveSection(item.id);
    const el = document.getElementById(item.id);
    if (el) {
      const navOffset = 90;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(0, elementPosition - navOffset + 2),
        behavior: 'smooth',
      });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home', 'home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentDisplaySection = hoveredSection || activeSection;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A] transition-all duration-300 border-b border-white/5">
      <div className="max-w-[1240px] mx-auto px-6 h-[90px] flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <a
            href="#home"
            onClick={handleLogoClick}
            className="flex items-center group py-1"
          >
            <img
              src="/kannvas-logo.png"
              alt="KANNVAS"
              className="h-[58px] sm:h-[64px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>

        {/* Right: Nav Menu with Sliding Active/Hover Arrow Indicator */}
        <nav
          className="relative hidden lg:flex items-center space-x-9 h-full"
          onMouseLeave={() => setHoveredSection(null)}
        >
          {NAV_ITEMS.map((item) => {
            const isTargeted = currentDisplaySection === item.id;
            return (
              <a
                key={item.id}
                ref={(el) => {
                  if (el) navRefs.current[item.id] = el;
                }}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                onMouseEnter={() => setHoveredSection(item.id)}
                className={`relative h-full flex items-center text-[13px] tracking-[1.5px] uppercase transition-colors duration-200 cursor-pointer ${
                  isTargeted ? 'text-white font-bold' : 'text-white/80 hover:text-white font-semibold'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          {/* Smooth Sliding Arrow (Triangle) Indicator */}
          <span
            className="absolute bottom-0 w-0 h-0 border-solid border-b-[6px] border-b-white border-x-[6px] border-x-transparent pointer-events-none transition-all duration-300 ease-out"
            style={{
              left: `${arrowStyle.left}px`,
              transform: 'translateX(-50%)',
              opacity: arrowStyle.opacity,
            }}
          />
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="text-white p-2 focus:outline-none"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1A1A1A] border-t border-white/10 px-6 py-6 shadow-2xl">
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`block text-sm font-semibold tracking-wider uppercase py-2 transition-colors ${
                      isActive ? 'text-[#b07c5e]' : 'text-white/90 hover:text-[#b07c5e]'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
