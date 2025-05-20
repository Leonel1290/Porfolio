import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-medium-blue-bg rounded-lg p-8 md:p-12 text-white shadow-lg max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contáctanos</h2>
          <address className="not-italic text-lg text-text-light leading-relaxed">
            <p><strong className="text-white">Empresa:</strong> AgainSafeGas Solutions</p>
            <p><strong className="text-white">Dirección:</strong> Río Tercero, Córdoba, Argentina</p>
            <p><strong className="text-white">Teléfono:</strong> <a href="tel:+543571623889" className="text-primary-green hover:underline">3571-623889</a></p>
            <p><strong className="text-white">Email:</strong> <a href="mailto:againsafegas.ascii@gmail.com" className="text-primary-green hover:underline">againsafegas.ascii@gmail.com</a></p>
            <p><strong className="text-white">Sitio Web:</strong> <a href="https://www.gassafe.com" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:underline">www.AgainSafeGas.com</a></p>
          </address>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;