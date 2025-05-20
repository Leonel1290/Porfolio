import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-medium-blue-bg rounded-lg p-8 md:p-12 text-white shadow-lg max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nosotros</h2>
          <p className="text-lg text-text-light mb-4">
            Somos **AgainSafeGas**, una empresa dedicada a la seguridad del hogar mediante soluciones innovadoras de detección de fugas de gas. Nuestra misión es brindarte tranquilidad y proteger lo que más valoras.
          </p>
          <p className="text-lg text-text-light">
            Con tecnología de vanguardia y un equipo comprometido, ofrecemos sistemas inteligentes que detectan, alertan y actúan ante cualquier indicio de fuga, garantizando la integridad de tu familia y tu patrimonio.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;