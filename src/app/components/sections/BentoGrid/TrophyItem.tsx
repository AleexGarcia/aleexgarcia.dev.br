import React from 'react';
import Image from 'next/image'

export interface TrophyItemProps {
  icon: React.ComponentType<{ className?: string }> | string;
  title: string;
  subtitle: string;
  status: string;
  variant?: 'emerald' | 'amber';
}

export function TrophyItem({ icon: IconOrSrc, title, subtitle, status, variant = 'amber' }: TrophyItemProps) {
  const styles = {
    emerald: { bg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400', text: 'text-emerald-500/80' },
    amber: { bg: 'bg-amber-500/10 border-amber-500/20 text-amber-500', text: 'text-amber-500/80' }
  };

  const isImage = typeof IconOrSrc === 'string';

  return (
    <div className="flex items-start gap-3.5 p-3 bg-black/10 border border-amber-950/40 rounded-xl hover:scale-102 transition-transform">
      {isImage ? (
        <Image src={IconOrSrc} alt={title} className="w-12 h-12 object-contain" width={48} height={48}/>
      ) : (
        <div className={`p-2 rounded-lg border mt-0.5 flex items-center justify-center w-12 h-12 ${styles[variant].bg}`}>
          <IconOrSrc className="text-4xl" />
        </div>
      )}
      <div>
        <span className="text-sm font-[--font-cinzel] font-semibold text-gray-200 leading-tight">{title}</span>
        <p className="text-[11px] text-gray-400 mt-0.5">{subtitle}</p>
        <p className={`text-[10px] font-mono mt-1 ${styles[variant].text}`}>{status}</p>
      </div>
    </div>
  );
}