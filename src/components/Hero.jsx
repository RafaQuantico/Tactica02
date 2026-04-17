import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary-900 text-white">
      {/* Background Media & Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="/fotos/hero1.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
        >
          <source src="/fotos/hero1.mov" type="video/mp4" />
        </video>
        {/* Capa de protección de legibilidad oscura elegante */}
        <div className="absolute inset-0 bg-primary-900/70 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center md:text-left text-balance">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight font-sans"
          >
            Asesores Estratégicos. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent-dark">
              Gestión de desafíos complejos.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl font-light"
          >
            Somos una consultora experta en asesoría estratégica para enfrentar desafíos complejos multistakeholder.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a 
              href="#servicios"
              className="inline-flex items-center gap-2 bg-white text-primary-900 px-8 py-4 rounded-full font-bold text-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-100 shadow-lg hover:shadow-xl"
            >
              Conozca nuestro enfoque
              <ChevronRight className="w-5 h-5 text-accent-dark" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
