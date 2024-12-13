import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import AboutContent from './AboutContent';
import FeatureCard from './FeatureCard';
import Section from '../ui/Section';

const features = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Creative Design",
    description: "We transform ideas into visually stunning experiences that captivate your audience"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Modern Technology",
    description: "Built with cutting-edge tech for optimal performance and scalability"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Rapid Development",
    description: "Quick turnaround without compromising on quality or attention to detail"
  }
];

export default function About() {
  return (
    <Section>
      <AboutContent />
      <div className="grid md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </Section>
  );
}