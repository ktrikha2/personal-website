'use client';

import { useEffect, useState, useMemo } from 'react';
import { ScrollTrigger } from '@/lib/gsap';
import { cn } from '@/lib/utils';

export function PortalOverlay() {
  const [opacity, setOpacity] = useState(0);
  const [showContent, setShowContent] = useState(false);

  // Pre-calculate motion line positions to avoid Math.random in render
  const motionLinePositions = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => {
      // Use deterministic pseudo-random based on index
      const seed = i * 0.1;
      return (Math.sin(seed * 12.9898 + seed * 78.233) + 1) * 50;
    });
  }, []);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: '.hero-container',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        // Start fading in at 70% progress
        if (self.progress > 0.7) {
          const fadeProgress = (self.progress - 0.7) / 0.3;
          setOpacity(fadeProgress);
          setShowContent(fadeProgress > 0.5);
        } else {
          setOpacity(0);
          setShowContent(false);
        }
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <>
      {/* Vignette overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `radial-gradient(circle at center, transparent 0%, rgba(0,0,0,${
            0.3 + opacity * 0.7
          }) 100%)`,
        }}
      />

      {/* Portal transition overlay */}
      <div
        className={cn(
          'absolute inset-0 z-15 pointer-events-none',
          'bg-neutral-950 transition-opacity duration-300'
        )}
        style={{ opacity }}
      />

      {/* Motion lines effect during portal */}
      {opacity > 0 && opacity < 1 && (
        <div className="absolute inset-0 z-12 pointer-events-none overflow-hidden">
          {motionLinePositions.map((position, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-transparent via-white/10 to-transparent"
              style={{
                top: `${position}%`,
                left: '-100%',
                width: '200%',
                height: '2px',
                transform: `translateX(${opacity * 100}%)`,
                opacity: opacity * 0.5,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Intro text that fades in */}
      {showContent && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center"
          style={{ opacity: Math.min(1, (opacity - 0.5) * 2) }}
        >
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Keshav Trikha
            </h1>
            <p className="text-xl text-neutral-400">
              Software Engineer & ML Enthusiast
            </p>
          </div>
        </div>
      )}
    </>
  );
}
