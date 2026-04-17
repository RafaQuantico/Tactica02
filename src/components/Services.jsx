import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Asesoría Estratégica",
    description: "Diseñamos estrategias corporativas integrales para hacer frente a desafíos complejos, con múltiples stakeholders.",
  },
  {
    title: "Gestión de Crisis",
    description: "Creadores del modelo SMGCD y su plataforma on line PriesgoMR. Previenen de manera única las crisis, monitoreando las variables sensibles de riesgo de cada organización, en forma anticipada y dinámica.",
  },
  {
    title: "Regulatorio y Legal",
    description: "Brindamos asesoría especializada en los principales mercados regulados, con una perspectiva integradora de factores legales, normativos, financieros, económicos y ambientales.",
  },
  {
    title: "Asuntos Públicos",
    description: "Identificamos los nudos clave para la sana ejecución de cada proyecto y gestionamos las condiciones de entorno en los ámbitos local y nacional. Expertos en monitoreo y prospección legislativa y regulatoria.",
  },
  {
    title: "Comunicación Estratégica",
    description: "Diseñamos estrategias coherentes y eficaces, alineando el propósito, el plan de negocio, la narrativa y la vinculación con los stakeholders, para potenciar la incidencia interna y externa.",
  },
  {
    title: "Cultura Organizacional",
    description: "Facilitamos la adaptación de la cultura interna a los desafíos de la estrategia corporativa, en coherencia con los valores y el propósito del negocio. Acompañamos cambios profundos.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-widest text-primary-900 uppercase mb-8"
          >
            Enfoque Sistémico
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-primary-900 leading-tight md:leading-tight lg:leading-[1.15] tracking-tight max-w-[90%]"
          >
            Con un enfoque sistémico, integramos disciplinas como asuntos públicos, regulación económica, asuntos legales, sostenibilidad, comunicación estratégica, cultura organizacional y gestión integral de crisis.
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 border-t border-gray-200 pt-16"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`px-4 sm:px-8 border-l border-gray-200 ${
                index % 3 === 0 ? 'lg:border-l-0 lg:pl-0' : ''
              } ${
                index % 2 === 0 ? 'md:border-l-0 md:pl-0 lg:border-l lg:pl-8' : ''
              } ${
                index === 0 ? 'border-l-0 pl-0' : ''
              }`}
            >
              <h3 className="text-lg font-medium tracking-tight text-primary-900 mb-4">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
