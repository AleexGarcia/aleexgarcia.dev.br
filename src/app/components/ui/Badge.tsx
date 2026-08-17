import React from 'react';
import { IconType } from 'react-icons';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'amber' | 'emerald';
  icon: IconType;
}

export function Badge({ children, variant = 'amber', icon: Icon }: BadgeProps) {
  const styles = {
    amber: 'text-amber-500 bg-amber-500/10 border-amber-500/10',
    emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
  };

  return (

    <div className={`flex items-center w-fit gap-1.5 uppercase tracking-widest rounded-full border ${styles[variant]} px-3 py-1 mx-auto sm:mx-0`}>
      <Icon className="text-xl shrink-0" aria-hidden="true" />
      <span className='font-[--font-cinzel] font-extrabold text-[11px] lg:text-sm'>{children}</span>
    </div>
  );
}