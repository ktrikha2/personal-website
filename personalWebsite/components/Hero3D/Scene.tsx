'use client';

import { useState } from 'react';
import { CameraRig } from './CameraRig';
import { DeskSetup } from './DeskSetup';
import { MonitorScreen } from './MonitorScreen';
import { AmbientEffects } from './AmbientEffects';

interface SceneProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  skipped: boolean;
}

export function Scene({ containerRef, skipped }: SceneProps) {
  const [progress, setProgress] = useState(0);

  if (skipped) {
    return null;
  }

  return (
    <>
      <CameraRig containerRef={containerRef} onProgress={setProgress} />
      <AmbientEffects progress={progress} />
      <DeskSetup progress={progress} />
      <MonitorScreen progress={progress} />
    </>
  );
}
