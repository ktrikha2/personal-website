'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AmbientEffectsProps {
  progress: number;
}

export function AmbientEffects({ progress }: AmbientEffectsProps) {
  const particlesRef = useRef<THREE.Points>(null);

  // Create particle positions with useMemo to avoid impure function in render
  const positions = useMemo(() => {
    const particleCount = 50;
    const pos = new Float32Array(particleCount * 3);
    // Use seeded random-like values for deterministic positions
    for (let i = 0; i < particleCount; i++) {
      const seed = i * 0.1;
      pos[i * 3] = (Math.sin(seed * 12.9898) * 0.5) * 8;
      pos[i * 3 + 1] = ((Math.sin(seed * 78.233) + 1) * 0.5) * 4;
      pos[i * 3 + 2] = (Math.sin(seed * 43.2189) * 0.5) * 4;
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.1} />

      {/* Main key light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Monitor glow light */}
      <pointLight
        position={[0, 1.5, 0.5]}
        intensity={0.5 + progress * 1}
        distance={4}
        color="#4a90d9"
      />

      {/* Red accent light */}
      <pointLight
        position={[-2, 1, 2]}
        intensity={0.3}
        distance={5}
        color="#ef4444"
      />

      {/* Green accent light */}
      <pointLight
        position={[2, 0.5, 1]}
        intensity={0.2}
        distance={4}
        color="#22c55e"
      />

      {/* Floating dust particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#ffffff"
          transparent
          opacity={0.3}
          sizeAttenuation
        />
      </points>

      {/* Floor */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 3, -3]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial color="#0f0f0f" roughness={0.95} />
      </mesh>

      {/* Fog for depth */}
      <fog attach="fog" args={['#000000', 5, 15]} />
    </>
  );
}
