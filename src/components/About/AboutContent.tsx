import React from 'react';
import { Quote } from 'lucide-react';

export default function AboutContent() {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-8">Your Vision, Our Expertise</h2>
      <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-12">
        At Your Apni Dukan, we believe design isn't just about aesthetics; it's about creating 
        impactful experiences that connect with your audience. We are a team of passionate digital 
        strategists and designers dedicated to helping businesses like yours thrive in the online world.
      </p>
      <blockquote className="flex flex-col items-center">
        <Quote className="w-8 h-8 mb-4 text-gray-500" />
        <p className="text-xl text-gray-300 italic mb-2">
          "Design is not for philosophy, it's for life."
        </p>
        <cite className="text-gray-500">- Issey Miyake</cite>
      </blockquote>
    </div>
  );
}