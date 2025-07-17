"use client";

interface ScrollArrowProps {
  direction: 'up' | 'down';
  targetId?: string;
  onClick?: () => void;
  className?: string;
}

export default function ScrollArrow({ direction, targetId, onClick, className = "" }: ScrollArrowProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        group flex items-center justify-center w-12 h-12 
        bg-white/20 hover:bg-white/30 backdrop-blur-sm 
        rounded-full border-2 border-white/40 hover:border-white/60
        transition-all duration-300 hover:scale-110
        ${className}
      `}
      title={direction === 'up' ? '向上滚动' : '向下滚动'}
    >
      <svg 
        className={`w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110 ${
          direction === 'up' ? 'rotate-180' : ''
        }`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </button>
  );
} 