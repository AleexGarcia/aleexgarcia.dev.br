
export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  mobile?: boolean;
}

export function NavLink({ href, children, onClick, mobile = false }: NavLinkProps) {
  if (mobile) {
    return (
      <a
        href={href}
        onClick={onClick}
        className="flex items-center justify-between p-4 bg-black/20 border border-amber-950/40 hover:border-amber-500/20 rounded-xl text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-amber-500 transition-all group"
      >
        <span>{children}</span>
        <span className="text-xs text-amber-900 group-hover:text-amber-500 transition-colors">➔</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      className="font-[--font-cinzel] text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-white px-4 py-2 rounded-lg hover:bg-amber-950/30 transition-all duration-200"
    >
      {children}
    </a>
  );
}