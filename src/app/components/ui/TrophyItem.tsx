import React from 'react';

interface TrophyItemProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  status: string;
  variant?: 'emerald' | 'amber';
}

export function TrophyItem({ icon: Icon, title, subtitle, status, variant = 'amber' }: TrophyItemProps) {
  const styles = {
    emerald: { bg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400', text: 'text-emerald-500/80' },
    amber: { bg: 'bg-amber-500/10 border-amber-500/20 text-amber-500', text: 'text-amber-500/80' }
  };

  return (
    <div className="flex items-start gap-3.5 p-3 bg-black/10 border border-amber-950/40 rounded-xl">
      <div className={`p-2 rounded-lg border mt-0.5 ${styles[variant].bg}`}>
        <Icon className="text-xl" />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-200 leading-tight">{title}</h4>
        <p className="text-[11px] text-gray-500 mt-0.5">{subtitle}</p>
        <p className={`text-[10px] font-mono mt-1 ${styles[variant].text}`}>{status}</p>
      </div>
    </div>
  );
}