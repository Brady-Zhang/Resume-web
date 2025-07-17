"use client";

import { useEffect } from 'react';

export function useScrollWheel(enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;

    let isScrolling = false;
    const sections = ['home', 'project', 'about'];

    const handleWheel = (event: WheelEvent) => {
      // 防止频繁触发
      if (isScrolling) {
        event.preventDefault();
        return;
      }

      const delta = event.deltaY;
      const threshold = 50; // 滚动阈值

      if (Math.abs(delta) > threshold) {
        isScrolling = true;
        
        // 获取当前活跃的section
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        let currentSectionIndex = 0;

        for (let i = 0; i < sections.length; i++) {
          const element = document.getElementById(sections[i]);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              currentSectionIndex = i;
              break;
            }
          }
        }

        // 根据滚动方向决定目标section
        let targetIndex;
        if (delta > 0) {
          // 向下滚动
          targetIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
        } else {
          // 向上滚动
          targetIndex = Math.max(currentSectionIndex - 1, 0);
        }

        // 滚动到目标section
        const targetElement = document.getElementById(sections[targetIndex]);
        if (targetElement && targetIndex !== currentSectionIndex) {
          event.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        // 重置滚动状态
        setTimeout(() => {
          isScrolling = false;
        }, 800);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [enabled]);
} 