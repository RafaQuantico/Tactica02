import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary-900/95 backdrop-blur-md shadow-lg py-3 border-b border-primary-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="flex items-center">
          <img src="/logo_tactica.png" alt="Táctica Logo" className="h-10 md:h-12 object-contain" />
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          <a href="#inicio" className="hover:text-accent-light transition-colors">Inicio</a>
          <a href="#servicios" className="hover:text-accent-light transition-colors">Servicios</a>
          <a href="#identidad" className="hover:text-accent-light transition-colors">Nuestro Enfoque</a>
          <a href="#equipo" className="hover:text-accent-light transition-colors">Equipo</a>
          <a href="#contacto" className="px-5 py-2.5 rounded-full border border-white/30 hover:border-accent-light hover:bg-accent-light hover:text-white transition-all">Hablemos</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-accent-light focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary-900 border-b border-primary-800 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-white/90">
          <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent-light transition-colors">Inicio</a>
          <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent-light transition-colors">Servicios</a>
          <a href="#identidad" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent-light transition-colors">Nuestro Enfoque</a>
          <a href="#equipo" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent-light transition-colors">Equipo</a>
          <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="inline-block text-center mt-2 px-5 py-2.5 rounded-full border border-white/30 hover:border-accent-light hover:bg-accent-light hover:text-white transition-all">Hablemos</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
