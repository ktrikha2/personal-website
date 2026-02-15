'use client';

import { useCallback, useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Hook to detect if user prefers reduced motion
 * Returns true if reduced motion is preferred
 */
export function useReducedMotion(): boolean {
  const subscribe = useCallback((callback: () => void) => {
    const mediaQuery = window.matchMedia(QUERY);
    mediaQuery.addEventListener('change', callback);
    return () => mediaQuery.removeEventListener('change', callback);
  }, []);

  const getSnapshot = useCallback(() => {
    return window.matchMedia(QUERY).matches;
  }, []);

  const getServerSnapshot = useCallback(() => {
    return false; // Default to false on server (show full experience)
  }, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
