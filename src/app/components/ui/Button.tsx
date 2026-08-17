import React from 'react';
interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'custom';
  className?: string;
}

export function Button({ children , variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyle = 'font-[--font-cinzel] font-black px-4 py-2.5 rounded-xl transition-all duration-200 block text-center uppercase ';
  const styles = {
    primary: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-[#110D0A] shadow-md shadow-orange-600/10',
    secondary: 'bg-transparent hover:bg-amber-950 text-gray-300 border border-amber-950/80 shadow-inner',
    custom: '',
  };

  return (
    <a className={`flex items-center justify-center gap-2 tracking-tight text-sm ${baseStyle} ${styles[variant]} ${className}`} {...props}>

      {children}
      
    </a>
  );
}