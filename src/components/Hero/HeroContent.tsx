import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function HeroContent() {
  return (
    <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
        Elevate Your Online Presence with Your Apni Dukan
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
        We craft stunning websites and digital strategies that drive results
      </p>
      <Button>
        Get a Free Consultation
        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
}