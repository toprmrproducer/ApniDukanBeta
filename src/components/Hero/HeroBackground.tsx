import React from 'react';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&q=80"
        alt="Digital transformation"
        className="w-full h-full object-cover"
      />
    </div>
  );
}