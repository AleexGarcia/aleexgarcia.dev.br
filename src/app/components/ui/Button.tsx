import React from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyle = 'font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 block text-center';
  const styles = {
    primary: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-[#110D0A] shadow-md shadow-orange-600/10',
    secondary: 'bg-gray-900 hover:bg-gray-800 text-gray-300 border border-amber-950/80 shadow-inner'
  };

  return (
    <a className={`${baseStyle} ${styles[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}