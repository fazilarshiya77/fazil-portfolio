import React from 'react';

interface SparkleStarProps {
  className?: string;
  size?: number;
  delay?: 0 | 1 | 2;
}

export const SparkleStar: React.FC<SparkleStarProps> = ({ 
  className = "text-white", 
  size = 24,
  delay = 0 
}) => {
  const animClass = delay === 1 ? 'animate-twinkle-delay-1' : delay === 2 ? 'animate-twinkle-delay-2' : 'animate-twinkle';

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={`${animClass} ${className} pointer-events-none select-none`}
      aria-hidden="true"
    >
      <path d="M12 0 C12 7.5, 12 7.5, 24 12 C12 12, 12 12, 12 24 C12 16.5, 12 16.5, 0 12 C12 12, 12 12, 12 0 Z" />
    </svg>
  );
};

