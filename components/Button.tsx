import React from 'react';
import { ExternalLink, MessageCircle } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  icon,
  href,
  target,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-bold rounded-md transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-red hover:bg-red-700 focus:ring-red-500 shadow-lg shadow-red-900/50",
    secondary: "border-transparent text-brand-black bg-brand-yellow hover:bg-yellow-500 focus:ring-yellow-500 shadow-lg shadow-yellow-900/50",
    outline: "border-brand-red text-brand-red hover:bg-brand-red hover:text-white focus:ring-red-500",
    whatsapp: "border-transparent text-white bg-green-600 hover:bg-green-700 focus:ring-green-500 shadow-lg shadow-green-900/50"
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={combinedClasses} rel="noopener noreferrer">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};