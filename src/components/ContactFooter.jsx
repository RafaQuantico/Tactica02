import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactFooter = () => {
  return (
    <>
      <section id="contacto" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary-900">
                Hablemos de estrategia.
              </h2>
              <p className="text-lg text-gray-500 font-light max-w-xl mx-auto">
                Déjenos sus datos y nos pondremos en contacto para entender cómo podemos ayudarle.
              </p>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 max-w-2xl mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-light focus:border-accent-light transition-all outline-none"
                    placeholder="Su nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-light focus:border-accent-light transition-all outline-none"
                    placeholder="Nombre de su organización"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-light focus:border-accent-light transition-all outline-none"
                  placeholder="correo@empresa.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-light focus:border-accent-light transition-all outline-none resize-none"
                  placeholder="Cuéntenos sobre su desafío..."
                />
              </div>

              <div className="text-center pt-4">
                <button 
                  type="submit"
                  className="bg-primary-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-800 transition-colors shadow-lg hover:shadow-xl w-full md:w-auto"
                >
                  Enviar Mensaje
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      <footer className="bg-primary-900 text-white py-12 border-t border-primary-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <img src="/logo_tactica.png" alt="Táctica Logo" className="h-10 mx-auto md:mx-0 object-contain" />
              <p className="text-sm text-gray-400 mt-2">Consultoría Estratégica.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-sm string text-gray-300">
              <div className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
                <MapPin className="w-5 h-5 text-accent-light" />
                <span>Nueva Costanera 4229, Vitacura</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
                <Phone className="w-5 h-5 text-accent-light" />
                <span>(+56 2) 2216 8686</span>
              </div>
              <a href="mailto:contacto@tacticalegal.cl" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Mail className="w-5 h-5 text-accent-light group-hover:scale-110 transition-transform" />
                <span>contacto@tacticalegal.cl</span>
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-primary-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
             <p>&copy; {new Date().getFullYear()} Táctica. Todos los derechos reservados.</p>
             <a href="http://www.tacticalegal.cl" target="_blank" rel="noreferrer" className="hover:text-accent-light transition-colors">
               www.tacticalegal.cl
             </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
