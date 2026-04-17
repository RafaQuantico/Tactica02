import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Identity from './components/Identity';
import Services from './components/Services';
import Team from './components/Team';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="font-sans text-primary-900 bg-background antialiased selection:bg-accent-light selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Identity />
      <Team />
      <ContactFooter />
    </div>
  );
}

export default App;
