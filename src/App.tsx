import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="bg-black">
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;