'use client';

import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Scene } from './Scene';
import { PortalOverlay } from './PortalOverlay';
import { SkipIntroButton } from './SkipIntroButton';
import { HeroFallback } from './HeroFallback';
import { ScrollTrigger } from '@/lib/gsap';

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [skipped, setSkipped] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleSkip = () => {
    setSkipped(true);
    // Kill all ScrollTriggers related to hero
    ScrollTrigger.getAll().forEach((st) => st.kill());

    // Smooth scroll to main content
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  // Show fallback for reduced motion or mobile
  if (prefersReducedMotion || isMobile) {
    return <HeroFallback />;
  }

  // Show fallback if skipped
  if (skipped) {
    return <HeroFallback />;
  }

  return (
    <section
      ref={containerRef}
      className="hero-container relative"
      style={{ height: '400vh' }}
      aria-label="3D hero section - scroll to animate or use skip button"
    >
      <div className="sticky top-0 h-screen w-full">
        {/* R3F Canvas */}
        <Canvas
          dpr={[1, 1.5]}
          frameloop="demand"
          camera={{ position: [0, 2.5, 6], fov: 50 }}
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance',
          }}
          shadows
          className="!absolute inset-0"
          aria-hidden="true"
        >
          <color attach="background" args={['#0a0a0a']} />
          <Suspense fallback={null}>
            <Scene containerRef={containerRef} skipped={skipped} />
            <Preload all />
          </Suspense>
        </Canvas>

        {/* Portal overlay for transition */}
        <PortalOverlay />

        {/* Skip button */}
        <SkipIntroButton onSkip={handleSkip} />
      </div>
    </section>
  );
}
