import React from 'react';


interface BentoCardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function BentoCard({ children, className = '', subtitle, title }: BentoCardProps) {
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
      {title && subtitle && (
        <div>
          <h2 className="text-lg font-bold text-gray-200">{title}</h2>
          <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
        </div>
      )}
      {children}
    </div>
  );
}