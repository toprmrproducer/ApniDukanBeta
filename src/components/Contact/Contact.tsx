import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Section from '../ui/Section';

export default function Contact() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-16">
        <ContactInfo />
        <ContactForm />
      </div>
    </Section>
  );
}