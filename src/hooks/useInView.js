import { useState, useEffect, useRef } from 'react';

/**
 * Minimal zero-dependency IntersectionObserver hook for subtle scroll-reveal animations.
 * Activates once when the element enters the viewport and immediately disconnects.
 */
export function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(el);
      }
    }, options);

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, isInView];
}

