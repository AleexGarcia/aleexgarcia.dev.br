import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`
      bg-[#1A1410] 
      bg-gradient-to-b from-[#221A15] to-[#1A1410]
      rounded-3xl 
      p-6 
      border border-amber-950/60 
      shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_4px_20px_rgba(0,0,0,0.4)]
      hover:border-amber-500/30 
      hover:shadow-[0_0_20px_rgba(245,158,11,0.03)]
      transition-all 
      duration-300
      flex 
      flex-col 
      justify-between
      overflow-hidden
      relative
      group
      ${className}
    `}>
      {children}
    </div>
  );
}