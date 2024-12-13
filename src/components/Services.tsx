import React from 'react';
import { Monitor, ShoppingBag, Paintbrush, BarChart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Monitor />,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences that delight your customers"
    },
    {
      icon: <ShoppingBag />,
      title: "E-commerce Design",
      description: "Building online stores that drive conversions and sales"
    },
    {
      icon: <Paintbrush />,
      title: "Branding",
      description: "Developing unique brand identities that make you stand out"
    },
    {
      icon: <BarChart />,
      title: "SEO Optimization",
      description: "Improving your visibility in search engines to attract more customers"
    }
  ];

  return (
    <div className="bg-zinc-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-lg bg-black hover:bg-zinc-800 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}