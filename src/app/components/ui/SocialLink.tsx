import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  actionText: string;
  hoverColor?: string;
  download?: boolean;
}

export function SocialLink({ href, icon: Icon, label, actionText, hoverColor = 'group-hover:text-amber-500', download }: SocialLinkProps) {
  return (
    <a 
      href={href} 
      target={download ? undefined : "_blank"} 
      rel={download ? undefined : "noreferrer"} 
      download={download}
      className="flex items-center justify-between p-3 bg-black/20 hover:bg-black/40 rounded-xl border border-amber-950/40 hover:border-amber-500/20 transition-all group"
    >
      <div className="flex items-center gap-3">
        <Icon className={`text-xl text-gray-400 ${hoverColor} transition-colors`} />
        <span className="text-sm font-medium text-gray-300">{label}</span>
      </div>
      <span className="text-xs text-gray-600 group-hover:text-amber-500 transition-colors">{actionText}</span>
    </a>
  );
}