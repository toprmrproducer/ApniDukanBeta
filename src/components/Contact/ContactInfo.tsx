import React from 'react';
import { Mail, Phone, Instagram, Twitter } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-6">Let's Get Started</h2>
      <p className="text-gray-400 mb-8">
        Ready to transform your digital presence? Get in touch with us today and let's discuss how we can help your business grow.
      </p>
      <div className="space-y-4">
        <div className="flex items-center">
          <Mail className="w-6 h-6 mr-3" />
          <span>hello@yourapnidukan.com</span>
        </div>
        <div className="flex items-center">
          <Phone className="w-6 h-6 mr-3" />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex space-x-4 mt-6">
          <a href="#" className="hover:text-gray-400 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}