import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            At Your Apni Dukan, we believe in the power of simplicity and innovation. 
            Like the philosophy of Issey Miyake, we create designs that are both timeless 
            and revolutionary, where form follows function in perfect harmony.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Palette className="w-8 h-8" />,
              title: "Creative Design",
              description: "We transform ideas into visually stunning experiences"
            },
            {
              icon: <Code className="w-8 h-8" />,
              title: "Clean Code",
              description: "Built with the latest technologies for optimal performance"
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Fast Delivery",
              description: "Quick turnaround without compromising on quality"
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-zinc-900">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}