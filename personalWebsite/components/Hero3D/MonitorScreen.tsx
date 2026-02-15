'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

interface MonitorScreenProps {
  progress: number;
}

export function MonitorScreen({ progress }: MonitorScreenProps) {
  const screenRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);

  useFrame((_, delta) => {
    timeRef.current += delta;
  });

  // Calculate opacity based on progress (fade out during portal)
  const opacity = progress > 0.7 ? 1 - ((progress - 0.7) / 0.3) : 1;

  return (
    <group position={[0, 1.5, -0.15]}>
      {/* Monitor screen surface */}
      <mesh ref={screenRef}>
        <planeGeometry args={[2.8, 1.2]} />
        <meshBasicMaterial color="#0a0a0a" />
      </mesh>

      {/* Telemetry UI overlay */}
      <Html
        transform
        occlude
        position={[0, 0, 0.01]}
        style={{
          width: '560px',
          height: '240px',
          opacity: opacity,
          transition: 'opacity 0.3s ease',
        }}
      >
        <div className="w-full h-full bg-neutral-950 p-4 font-mono text-xs overflow-hidden">
          {/* Top bar */}
          <div className="flex justify-between items-center mb-3 text-neutral-500">
            <span className="text-red-500 font-bold">RACE CONTROL</span>
            <span>LAP 42 / 57</span>
            <span className="text-emerald-400">LIVE</span>
          </div>

          {/* Main telemetry grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* Track map placeholder */}
            <div className="col-span-1 bg-neutral-900 rounded p-2">
              <div className="text-neutral-600 text-[10px] mb-1">TRACK MAP</div>
              <div className="h-16 flex items-center justify-center">
                <svg viewBox="0 0 100 60" className="w-full h-full">
                  <path
                    d="M20,30 Q20,10 50,10 Q80,10 80,30 Q80,50 50,50 Q20,50 20,30"
                    fill="none"
                    stroke="#333"
                    strokeWidth="3"
                  />
                  <circle cx="50" cy="10" r="3" fill="#ef4444" />
                </svg>
              </div>
            </div>

            {/* Lap times */}
            <div className="col-span-1 bg-neutral-900 rounded p-2">
              <div className="text-neutral-600 text-[10px] mb-1">LAP TIMES</div>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-neutral-400">BEST</span>
                  <span className="text-purple-400">1:23.456</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">LAST</span>
                  <span className="text-white">1:24.123</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">DELTA</span>
                  <span className="text-red-400">+0.667</span>
                </div>
              </div>
            </div>

            {/* Tire data */}
            <div className="col-span-1 bg-neutral-900 rounded p-2">
              <div className="text-neutral-600 text-[10px] mb-1">TIRES</div>
              <div className="grid grid-cols-2 gap-1 text-center">
                <div className="bg-neutral-800 rounded p-1">
                  <div className="text-amber-400">FL</div>
                  <div className="text-[10px]">98°C</div>
                </div>
                <div className="bg-neutral-800 rounded p-1">
                  <div className="text-amber-400">FR</div>
                  <div className="text-[10px]">102°C</div>
                </div>
                <div className="bg-neutral-800 rounded p-1">
                  <div className="text-amber-400">RL</div>
                  <div className="text-[10px]">95°C</div>
                </div>
                <div className="bg-neutral-800 rounded p-1">
                  <div className="text-amber-400">RR</div>
                  <div className="text-[10px]">97°C</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom status bar */}
          <div className="mt-3 flex justify-between items-center text-[10px] text-neutral-600">
            <span>SESSION: RACE</span>
            <div className="flex gap-2">
              <span className="text-emerald-500">● DRS ENABLED</span>
              <span className="text-amber-500">● TRACK LIMITS</span>
            </div>
            <span>AIR: 24°C | TRACK: 42°C</span>
          </div>
        </div>
      </Html>

      {/* Screen glow effect */}
      <mesh position={[0, 0, -0.02]}>
        <planeGeometry args={[3, 1.4]} />
        <meshBasicMaterial
          color="#1a1a2e"
          transparent
          opacity={0.3 + progress * 0.5}
        />
      </mesh>
    </group>
  );
}
