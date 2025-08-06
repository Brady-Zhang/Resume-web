"use client";

import { useEffect, useRef, useState } from 'react';

interface VantaBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export default function VantaBackground({ children, className = "" }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<ReturnType<typeof import('vanta/dist/vanta.halo.min.js').HALO> | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const loadVanta = async () => {
      try {
        if (typeof window === 'undefined' || !vantaRef.current) return;

        // Dynamic import of Three.js and Vanta
        const [THREE, VANTA] = await Promise.all([
          import('three'),
          import('vanta/dist/vanta.halo.min.js')
        ]);

        // Set global THREE object
        (window as unknown as { THREE: typeof THREE })['THREE'] = THREE;

        // Wait a bit to ensure libraries are fully loaded
        await new Promise(resolve => setTimeout(resolve, 100));

        // Check if VANTA is available
        const vantaLib = (window as any).VANTA || VANTA;

        if (vantaLib && vantaLib.HALO && vantaRef.current && !vantaEffect.current) {
          vantaEffect.current = vantaLib.HALO({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            backgroundColor: 0x61a31,  // Using user-provided color
            xOffset: 0.21,            // Using user-provided parameter
            size: 1.40               // Using user-provided parameter
          });
        }
      } catch (error) {
        console.error('Failed to load Vanta effect:', error);
      }
    };

    const timeoutId = setTimeout(loadVanta, 200);

    return () => {
      clearTimeout(timeoutId);
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (error) {
          console.warn('Error destroying Vanta effect:', error);
        }
        vantaEffect.current = null;
      }
    };
  }, []);

  // Render simple background on server-side
  if (!isMounted) {
    return (
      <div
        ref={vantaRef}
        className={`relative ${className}`}
        style={{ width: '100%', height: '100%' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900" />
        {children}
      </div>
    );
  }

  return (
    <div
      ref={vantaRef}
      className={`relative ${className}`}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </div>
  );
} 