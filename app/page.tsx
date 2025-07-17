"use client";

import Navigation from '@/components/Navigation';
import HomeSection from '@/components/sections/HomeSection';
import ProjectSection from '@/components/sections/ProjectSection';
import AboutSection from '@/components/sections/AboutSection';
import { useScrollWheel } from '@/hooks/useScrollWheel';

export default function Home() {
  // 启用滚轮监听，增强滚动体验
  useScrollWheel(true);

  return (
    <div className="relative">
      <Navigation />
      
      {/* 单页滚动结构 */}
      <main>
        <HomeSection />
        <ProjectSection />
        <AboutSection />
      </main>
    </div>
  );
}
