"use client";

import { useState, useEffect } from 'react';

const navItems = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#project', label: 'Project', id: 'project' },
  { href: '#about', label: 'About', id: 'about' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  // 监听滚动事件来更新活跃的导航项
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'project', 'about'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化检查
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-white">
            个人网站
          </div>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-300 hover:text-blue-300 ${
                  activeSection === item.id 
                    ? "text-blue-300 font-semibold border-b-2 border-blue-300" 
                    : "text-white/80"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 