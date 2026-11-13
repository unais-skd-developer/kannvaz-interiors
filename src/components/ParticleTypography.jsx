import React, { useEffect, useRef } from 'react';

class Particle {
  constructor(x, y, size, color, dispersion, returnSpd) {
    // Exact grid coordinates initially - no random scattering at rest
    this.x = x;
    this.y = y;
    this.originX = x;
    this.originY = y;
    this.vx = 0;
    this.vy = 0;
    this.size = size;
    this.color = color;
    this.dispersion = dispersion;
    this.returnSpd = returnSpd;
  }

  update(mouseX, mouseY) {
    let moved = false;
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distanceSq = dx * dx + dy * dy;

    // Interaction radius (130px -> 16900 distanceSq)
    const interactionRadius = 130;
    const radiusSq = interactionRadius * interactionRadius;

    if (distanceSq < radiusSq && mouseX !== -1000 && mouseY !== -1000) {
      const distance = Math.sqrt(distanceSq);
      const forceDirectionX = dx / (distance || 1);
      const forceDirectionY = dy / (distance || 1);
      const force = (interactionRadius - distance) / interactionRadius;

      // Cursor repulsion force
      this.vx -= forceDirectionX * force * this.dispersion;
      this.vy -= forceDirectionY * force * this.dispersion;
      moved = true;
    }

    // Spring physics returning to original grid position
    const diffX = this.originX - this.x;
    const diffY = this.originY - this.y;

    this.vx += diffX * this.returnSpd;
    this.vy += diffY * this.returnSpd;

    // Damping friction
    this.vx *= 0.86;
    this.vy *= 0.86;

    this.x += this.vx;
    this.y += this.vy;

    // Check if still moving
    if (Math.abs(this.vx) > 0.05 || Math.abs(this.vy) > 0.05 || Math.abs(diffX) > 0.2 || Math.abs(diffY) > 0.2) {
      moved = true;
    } else {
      // Snap to origin when nearly settled to guarantee pristine grid alignment
      if (mouseX === -1000 && mouseY === -1000) {
        this.x = this.originX;
        this.y = this.originY;
        this.vx = 0;
        this.vy = 0;
      }
    }

    return moved;
  }
}

export default function ParticleTypography({
  text = 'Spaces Crafted\nBeautifully',
  fontSize = 100,
  fontFamily = "'Titillium Web', sans-serif",
  fontWeight = '700',
  particleSize = 1.6,
  particleDensity = 3.2,
  dispersionStrength = 18,
  returnSpeed = 0.08,
  color = '#FFFFFF',
  className = '',
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId = null;
    let particles = [];
    let mouseX = -1000;
    let mouseY = -1000;
    let containerWidth = 0;
    let containerHeight = 0;
    let isVisible = true;
    let isRunning = false;
    let idleFrames = 0;

    const init = () => {
      if (!container || !canvas) return;

      containerWidth = container.clientWidth;
      containerHeight = container.clientHeight;

      if (containerWidth === 0 || containerHeight === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(containerWidth * dpr);
      canvas.height = Math.round(containerHeight * dpr);
      canvas.style.width = `${containerWidth}px`;
      canvas.style.height = `${containerHeight}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, containerWidth, containerHeight);

      // Responsive font sizing based on container width
      const lines = text.split('\n');
      const maxLineLength = Math.max(...lines.map((l) => l.length));
      const widthBasedSize = Math.floor((containerWidth * 0.94) / (maxLineLength * 0.58));
      const effectiveFontSize = Math.min(fontSize, Math.max(34, widthBasedSize));
      const lineHeight = effectiveFontSize * 1.15;

      ctx.fillStyle = color;
      ctx.font = `${fontWeight} ${effectiveFontSize}px ${fontFamily}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const totalTextHeight = (lines.length - 1) * lineHeight;
      const startY = containerHeight / 2 - totalTextHeight / 2;

      lines.forEach((line, index) => {
        ctx.fillText(line.trim(), containerWidth / 2, startY + index * lineHeight);
      });

      // Sample pixels
      const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, containerWidth, containerHeight);

      particles = [];
      // Dense, crisp particle sampling ensuring letters are completely filled with dots
      const step = Math.max(1, Math.round(particleDensity * dpr));

      for (let y = 0; y < textCoordinates.height; y += step) {
        for (let x = 0; x < textCoordinates.width; x += step) {
          const index = (y * textCoordinates.width + x) * 4;
          const alpha = textCoordinates.data[index + 3] || 0;

          // Capture solid letter core with crisp threshold
          if (alpha > 75) {
            particles.push(
              new Particle(
                x / dpr,
                y / dpr,
                particleSize,
                color,
                dispersionStrength,
                returnSpeed
              )
            );
          }
        }
      }

      // Initial draw
      renderFrame();
      wakeUp();
    };

    const renderFrame = () => {
      ctx.clearRect(0, 0, containerWidth, containerHeight);

      // Batched draw call for all particles for silky-smooth 60 FPS
      ctx.fillStyle = color;
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.moveTo(p.x + p.size, p.y);
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      }
      ctx.fill();
    };

    const animate = () => {
      if (!isVisible) {
        isRunning = false;
        return;
      }

      let anyMoved = false;
      for (let i = 0; i < particles.length; i++) {
        if (particles[i].update(mouseX, mouseY)) {
          anyMoved = true;
        }
      }

      renderFrame();

      // If nothing moved and mouse is not interacting, enter sleep after 20 idle frames
      if (!anyMoved && mouseX === -1000 && mouseY === -1000) {
        idleFrames++;
        if (idleFrames > 20) {
          isRunning = false;
          animationFrameId = null;
          return; // Sleep! 0% CPU usage
        }
      } else {
        idleFrames = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const wakeUp = () => {
      idleFrames = 0;
      if (!isRunning && isVisible) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      wakeUp();
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
      wakeUp();
    };

    const handleTouchMove = (e) => {
      if (!e.touches[0]) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.touches[0].clientX - rect.left;
      mouseY = e.touches[0].clientY - rect.top;
      wakeUp();
    };

    // Intersection Observer: Pause completely when scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          wakeUp();
        } else {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
          }
          isRunning = false;
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Ensure fonts are loaded before rasterizing text
    let timeoutId;
    if (document.fonts) {
      document.fonts.ready.then(() => {
        init();
      });
    } else {
      timeoutId = setTimeout(() => {
        init();
      });
    }

    const resizeObserver = new ResizeObserver(() => {
      init();
    });
    resizeObserver.observe(container);

    canvas.addEventListener('mousemove', handleMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    canvas.addEventListener('touchstart', handleTouchMove, { passive: true });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleMouseLeave);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchstart', handleTouchMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleMouseLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [
    text,
    fontSize,
    fontFamily,
    fontWeight,
    particleSize,
    particleDensity,
    dispersionStrength,
    returnSpeed,
    color,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full flex items-center justify-center select-none ${
        className.includes('h-') ? className : `h-[260px] sm:h-[300px] md:h-[340px] ${className}`
      }`}
    >
      <canvas ref={canvasRef} className="block w-full h-full cursor-crosshair" />
    </div>
  );
}
