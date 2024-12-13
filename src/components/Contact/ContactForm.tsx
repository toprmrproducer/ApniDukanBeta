import React from 'react';
import Button from '../ui/Button';

export default function ContactForm() {
  return (
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
        <input
          type="tel"
          placeholder="Your Phone"
          className="w-full bg-zinc-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </div>
      <div>
        <textarea
          rows={4}
          placeholder="Tell us about your project"
          className="w-full bg-zinc-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
        ></textarea>
      </div>
      <Button>Submit</Button>
    </form>
  );
}