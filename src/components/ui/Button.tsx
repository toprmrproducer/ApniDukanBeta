import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export default function Button({ children, className = '' }: ButtonProps) {
  return (
    <button 
      className={`group bg-white text-black px-8 py-4 rounded-full font-medium text-lg 
        inline-flex items-center transition-all hover:bg-gray-100 ${className}`}
    >
      {children}
    </button>
  );
}