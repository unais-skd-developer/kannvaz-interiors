import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import Preloader from './components/Preloader';

// Code-split dedicated secondary pages to dramatically optimize initial load time on low networks
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  // Sync with browser hash on initial load & popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#/about' || hash === '#about' || hash === '#about-us' || hash === '#about-page') {
        setCurrentPage('about');
        window.scrollTo(0, 0);
      } else if (hash.startsWith('#/services') || hash.startsWith('#services')) {
        setCurrentPage('services');
        window.scrollTo(0, 0);
      } else if (hash === '#/portfolio' || hash === '#portfolio' || hash === '#portfolio-page') {
        setCurrentPage('portfolio');
        window.scrollTo(0, 0);
      } else if (
        hash === '#/testimonials' ||
        hash === '#/testimonial' ||
        hash === '#testimonial' ||
        hash === '#testimonials' ||
        hash === '#testimonials-page'
      ) {
        setCurrentPage('testimonials');
        window.scrollTo(0, 0);
      } else if (
        hash === '#/contact' ||
        hash === '#/contact-us' ||
        hash === '#contact-us' ||
        hash === '#contact-page'
      ) {
        setCurrentPage('contact');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page, sectionId) => {
    if (page === 'about') {
      window.location.hash = '/about';
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'services') {
      window.location.hash = '/services';
      setCurrentPage('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'portfolio') {
      window.location.hash = '/portfolio';
      setCurrentPage('portfolio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'testimonials') {
      window.location.hash = '/testimonials';
      setCurrentPage('testimonials');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'contact') {
      window.location.hash = '/contact';
      setCurrentPage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = sectionId && sectionId !== 'home' ? `#${sectionId}` : '';
      setCurrentPage('home');
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            const navOffset = 90;
            const elementPosition = el.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: Math.max(0, elementPosition - navOffset + 2),
              behavior: 'smooth',
            });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] selection:bg-[#b07c5e] selection:text-white">
      {/* Preloader with Componentry Signature Animation */}
      <Preloader />

      {/* 1. Header / Navbar with Multi-Page & Section Routing */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main>
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          {currentPage === 'about' ? (
            /* 2. Dedicated About Us Page */
            <AboutPage
              onNavigateHome={() => handleNavigate('home', 'home')}
              onNavigateContact={() => handleNavigate('contact')}
            />
          ) : currentPage === 'services' ? (
            /* 3. Dedicated Services Page (4 Core Services Deep Dive) */
            <ServicesPage
              onNavigateHome={() => handleNavigate('home', 'home')}
              onNavigateContact={() => handleNavigate('contact')}
            />
          ) : currentPage === 'portfolio' ? (
            /* 4. Dedicated Portfolio Page (23 Projects across 3 Categories) */
            <PortfolioPage
              onNavigateHome={() => handleNavigate('home', 'home')}
              onNavigateContact={() => handleNavigate('contact')}
            />
          ) : currentPage === 'testimonials' ? (
            /* 5. Dedicated Testimonials Page (Verified Client Reviews) */
            <TestimonialsPage
              onNavigateHome={() => handleNavigate('home', 'home')}
              onNavigateContact={() => handleNavigate('contact')}
              onNavigatePortfolio={() => handleNavigate('portfolio')}
            />
          ) : currentPage === 'contact' ? (
            /* 6. Dedicated Contact Us Page (Interactive Form, Maps, WhatsApp, Details) */
            <ContactPage
              onNavigateHome={() => handleNavigate('home', 'home')}
              onNavigateServices={() => handleNavigate('services')}
              onNavigatePortfolio={() => handleNavigate('portfolio')}
            />
          ) : (
            /* 1. Home Page Sections */
            <>
              {/* 2. Hero Introduction with Particle Typography */}
              <Hero />

              {/* 3. Introduction to KANNVAS with 3D Tilt Card */}
              <About onNavigate={handleNavigate} />

              {/* 4. Why Choose KANNVAS (Process & Experience) */}
              <Process />

              {/* 5. Core Services */}
              <Services onNavigate={handleNavigate} />

              {/* 6. Featured Projects */}
              <Portfolio
                onNavigate={handleNavigate}
                onSelectProject={(project) => setSelectedProject(project)}
              />

              {/* 7. Client Testimonials */}
              <Testimonials onNavigate={handleNavigate} />

              {/* 8. Enquiry / Contact CTA */}
              <Contact />
            </>
          )}
        </Suspense>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
