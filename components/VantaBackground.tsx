"use client";

import { useEffect, useRef, useState } from 'react';

interface VantaBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export default function VantaBackground({ children, className = "" }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const loadVanta = async () => {
      try {
        if (typeof window === 'undefined' || !vantaRef.current) return;

        // 动态导入Three.js和Vanta
        const [THREE, VANTA] = await Promise.all([
          import('three'),
          import('vanta/dist/vanta.halo.min.js')
        ]);

        // 设置全局THREE对象
        (window as any).THREE = THREE;

        // 等待一下确保库完全加载
        await new Promise(resolve => setTimeout(resolve, 100));

        // 检查VANTA是否可用
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
            backgroundColor: 0x61a31,  // 使用你提供的颜色
            xOffset: 0.21,            // 使用你提供的参数
            size: 1.40               // 使用你提供的参数
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

  // 服务器端渲染时显示简单背景
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