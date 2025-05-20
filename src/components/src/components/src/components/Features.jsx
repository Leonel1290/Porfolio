import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faMobileAlt, faBell } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Features = () => {
  return (
    <section className="py-16 text-center bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-16 relative pb-4">
          Nuestras Características
          <span className="block w-20 h-1 bg-primary-green mx-auto mt-4 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            className="flex flex-col items-center p-8 bg-medium-blue-bg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <FontAwesomeIcon icon={faShieldAlt} className="text-primary-green text-6xl mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">Seguridad Total</h3>
            <p className="text-text-light text-lg">Sistema de cierre automático de válvulas para una protección eficaz.</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center p-8 bg-medium-blue-bg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            <FontAwesomeIcon icon={faMobileAlt} className="text-primary-green text-6xl mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">Monitoreo Remoto</h3>
            <p className="text-text-light text-lg">Control desde tu celular a través de nuestra app segura.</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center p-8 bg-medium-blue-bg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
          >
            <FontAwesomeIcon icon={faBell} className="text-primary-green text-6xl mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">Alertas en Tiempo Real</h3>
            <p className="text-text-light text-lg">Notificaciones inmediatas ante cualquier fuga detectada.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;