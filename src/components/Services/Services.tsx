import React from 'react';
import { Monitor, Search, Megaphone, Bot } from 'lucide-react';
import ServiceCard from './ServiceCard';
import Section from '../ui/Section';

const services = [
  {
    icon: <Monitor />,
    title: "Web Design",
    description: "We craft visually stunning, user-friendly websites that leave a lasting impression. From simple landing pages to complex e-commerce platforms, we deliver pixel-perfect designs that convert."
  },
  {
    icon: <Search />,
    title: "SEO",
    description: "Increase your online visibility and attract more organic traffic. Our SEO experts will optimize your website and content to rank higher in search engine results."
  },
  {
    icon: <Megaphone />,
    title: "Digital Marketing",
    description: "Reach your target audience across multiple channels with our comprehensive digital marketing strategies. We leverage social media, paid advertising, and content marketing."
  },
  {
    icon: <Bot />,
    title: "AI Automations",
    description: "Streamline your business processes and boost efficiency with cutting-edge AI solutions. We implement AI-powered tools for tasks like customer service, marketing, and sales."
  }
];

export default function Services() {
  return (
    <Section className="bg-zinc-900">
      <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </Section>
  );
}