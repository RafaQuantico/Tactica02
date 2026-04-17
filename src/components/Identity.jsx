import React from 'react';
import { motion } from 'framer-motion';

const Identity = () => {
  return (
    <section id="identidad" className="py-24 md:py-32 bg-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-1 bg-accent-light"></div>
              <h3 className="text-sm font-bold tracking-widest text-accent-dark uppercase">
                Identidad y Sello
              </h3>
            </motion.div>
          </div>
          
          <div className="md:w-2/3">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-extrabold mb-8 text-primary-900 leading-tight"
            >
              Construir confianza basada en evidencia y facilitar la colaboración es nuestro sello.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed font-light"
            >
              Trabajamos con empresas, gremios, instituciones públicas y organizaciones sin fines de lucro. Nos comprometemos con los desafíos de nuestros clientes, desde el diseño hasta la gestión.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
