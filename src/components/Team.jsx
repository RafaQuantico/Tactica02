import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: "Christian Torres", role: "Socio", image: "/fotos/torres.jpg" },
  { name: "Rodrigo Castillo", role: "Socio", image: "/fotos/castillo.jpg" },
  { name: "Ricardo Eberle", role: "Socio", image: "/fotos/eberie.jpg" },
  { name: "Lucas Murillo", role: "Asociado", image: "/fotos/murillo.png" },
  { name: "Francisco Figueroa", role: "Asociado", image: "/fotos/figueroa.png" },
  { name: "María Paz Epelman", role: "Consultora Senior", image: "/fotos/epelman.png" },
  { name: "Sixto Carrasco", role: "Consultor Senior", image: "/fotos/carrasco.png" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Team = () => {
  return (
    <section id="equipo" className="py-24 md:py-32 bg-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary-900">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Somos un equipo de expertos con reconocida trayectoria en el sector público y privado de nuestro país. Hemos liderado con éxito importantes instituciones, gremios, empresas y proyectos complejos.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-accent-light transition-colors duration-300 shadow-sm text-center group"
            >
              <div className="w-32 h-32 bg-gray-50 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-gray-100 group-hover:border-accent-light transition-colors duration-300 overflow-hidden relative shadow-inner">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <span className="text-2xl font-bold text-primary-900/40 group-hover:text-accent-light transition-colors">
                    {member.name.charAt(0)}{member.name.split(' ').length > 1 ? member.name.split(' ')[1].charAt(0) : ''}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-primary-900 mb-1">{member.name}</h3>
              <p className="text-sm text-accent-dark font-medium">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
