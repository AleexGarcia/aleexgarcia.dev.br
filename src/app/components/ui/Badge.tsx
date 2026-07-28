import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'amber' | 'emerald';
}

export function Badge({ children, variant = 'amber' }: BadgeProps) {
  const styles = {
    amber: 'text-amber-500 bg-amber-500/10 border-amber-500/10',
    emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
  };

  return (
    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${styles[variant]}`}>
      {children}
    </span>
  );
}