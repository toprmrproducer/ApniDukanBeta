import React from 'react';
import { Mail, Phone, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's Create Something Amazing</h2>
            <p className="text-gray-400 mb-8">
              Ready to transform your digital presence? Get in touch with us today.
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
          
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-zinc-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-zinc-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full bg-zinc-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
              ></textarea>
            </div>
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}