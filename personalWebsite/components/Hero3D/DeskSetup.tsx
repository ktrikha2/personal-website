'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DeskSetupProps {
  progress: number;
}

export function DeskSetup({ progress }: DeskSetupProps) {
  const keyboardLightRef = useRef<THREE.PointLight>(null);
  const indicatorRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Keyboard RGB effect
    if (keyboardLightRef.current) {
      const hue = (time * 0.1) % 1;
      keyboardLightRef.current.color.setHSL(hue, 0.8, 0.5);
    }

    // Blinking indicator
    if (indicatorRef.current) {
      const material = indicatorRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = Math.sin(time * 3) * 0.5 + 0.5;
    }
  });

  return (
    <group>
      {/* Desk surface */}
      <mesh position={[0, 0.5, 0]} receiveShadow>
        <boxGeometry args={[4, 0.1, 2]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Monitor stand */}
      <mesh position={[0, 0.8, -0.3]}>
        <boxGeometry args={[0.4, 0.5, 0.3]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Monitor frame (curved ultrawide) */}
      <group position={[0, 1.5, -0.2]}>
        {/* Main monitor body */}
        <mesh castShadow>
          <boxGeometry args={[3, 1.4, 0.1]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Monitor bezel accent */}
        <mesh position={[0, -0.75, 0.01]}>
          <boxGeometry args={[0.5, 0.02, 0.05]} />
          <meshStandardMaterial
            color="#ef4444"
            emissive="#ef4444"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>

      {/* Keyboard */}
      <mesh position={[0, 0.55, 0.5]} castShadow>
        <boxGeometry args={[1.2, 0.05, 0.4]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.3} />
      </mesh>
      <pointLight
        ref={keyboardLightRef}
        position={[0, 0.6, 0.5]}
        intensity={0.3}
        distance={1}
        color="#00ff88"
      />

      {/* Mouse */}
      <mesh position={[0.9, 0.55, 0.6]} castShadow>
        <capsuleGeometry args={[0.04, 0.08, 8, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Coffee mug */}
      <group position={[-1.2, 0.55, 0.4]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.08, 0.06, 0.15, 16]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.8} />
        </mesh>
        {/* Coffee inside */}
        <mesh position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.05, 16]} />
          <meshStandardMaterial color="#3d2817" roughness={0.9} />
        </mesh>
        {/* Handle */}
        <mesh position={[0.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.05, 0.015, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.8} />
        </mesh>
      </group>

      {/* Papers/documents stack */}
      <group position={[1.4, 0.56, -0.2]}>
        {[0, 0.01, 0.02].map((y, i) => (
          <mesh
            key={i}
            position={[Math.sin(i) * 0.02, y, Math.cos(i) * 0.02]}
            rotation={[0, i * 0.1, 0]}
          >
            <boxGeometry args={[0.3, 0.005, 0.4]} />
            <meshStandardMaterial color="#f5f5f5" roughness={0.9} />
          </mesh>
        ))}
      </group>

      {/* Status indicator light */}
      <mesh ref={indicatorRef} position={[-1.5, 0.8, -0.5]}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={1}
        />
      </mesh>

      {/* LED strip under desk */}
      <mesh position={[0, 0.45, 0.95]}>
        <boxGeometry args={[3.5, 0.02, 0.02]} />
        <meshStandardMaterial
          color="#ef4444"
          emissive="#ef4444"
          emissiveIntensity={0.8 + progress * 0.5}
        />
      </mesh>
    </group>
  );
}
