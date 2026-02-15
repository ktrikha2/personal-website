'use client';

import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import * as THREE from 'three';

interface CameraRigProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  onProgress?: (progress: number) => void;
}

export function CameraRig({ containerRef, onProgress }: CameraRigProps) {
  const { camera, invalidate } = useThree();
  const progressRef = useRef({ value: 0 });
  const targetRef = useRef(new THREE.Vector3(0, 1.2, 0));

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
        onUpdate: (self) => {
          progressRef.current.value = self.progress;
          onProgress?.(self.progress);
          invalidate();
        },
      });
    });

    return () => ctx.revert();
  }, [containerRef, invalidate, onProgress]);

  useFrame(() => {
    const p = progressRef.current.value;

    // Camera position keyframes based on scroll progress
    // Phase 1 (0-0.4): Overview of desk - camera stays back
    // Phase 2 (0.4-0.7): Slow approach toward monitor
    // Phase 3 (0.7-1.0): Fast push through monitor (portal)

    let z: number;
    let y: number;
    let targetY: number;

    if (p < 0.4) {
      // Phase 1: Overview
      const localP = p / 0.4;
      z = THREE.MathUtils.lerp(6, 4.5, localP);
      y = THREE.MathUtils.lerp(2.5, 2.2, localP);
      targetY = THREE.MathUtils.lerp(1.2, 1.3, localP);
    } else if (p < 0.7) {
      // Phase 2: Approach
      const localP = (p - 0.4) / 0.3;
      z = THREE.MathUtils.lerp(4.5, 2, localP);
      y = THREE.MathUtils.lerp(2.2, 1.8, localP);
      targetY = THREE.MathUtils.lerp(1.3, 1.4, localP);
    } else {
      // Phase 3: Portal push
      const localP = (p - 0.7) / 0.3;
      z = THREE.MathUtils.lerp(2, 0.1, localP * localP); // Ease in
      y = THREE.MathUtils.lerp(1.8, 1.5, localP);
      targetY = THREE.MathUtils.lerp(1.4, 1.5, localP);
    }

    targetRef.current.set(0, targetY, 0);
    camera.position.set(0, y, Math.max(0.1, z));
    camera.lookAt(targetRef.current);
  });

  return null;
}
