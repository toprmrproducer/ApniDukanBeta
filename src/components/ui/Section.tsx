import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <div className={`py-24 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        {children}
      </div>
    </div>
  );
}