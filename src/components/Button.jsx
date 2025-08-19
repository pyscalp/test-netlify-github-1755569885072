import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button = ({ children, className, variant = 'primary', ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-colors duration-200';
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-blue-700',
    secondary: 'bg-secondary text-white hover:bg-indigo-700',
    accent: 'bg-accent text-white hover:bg-purple-700',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
  };

  return (
    <button
      className={twMerge(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;