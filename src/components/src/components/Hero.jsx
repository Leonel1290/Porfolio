import React from 'react';
import GasEffect from './GasEffect';
import { motion } from 'framer-motion';
import GasIllustration from '../assets/gas-illustration.png';

const Hero = () => {
  return (
    <section id="inicio" className="relative flex items-center justify-center min-h-[600px] py-24 text-center text-white overflow-hidden
      bg-gradient-to-r from-dark-blue-bg to-medium-blue-bg
      lg:text-left lg:pt-32">
      
      <GasEffect />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <motion.h1
              className="text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Protege lo que más importa
            </motion.h1>
            <motion.div
              className="w-20 h-1 bg-primary-green mx-auto lg:mx-0 mb-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            ></motion.div>
            <motion.p
              className="text-lg lg:text-xl text-text-light mb-10 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Tu hogar seguro con ASG. Detección precisa de fugas de gas en tiempo real.
            </motion.p>
            <motion.a
              href="/loginobtener"
              className="btn-custom text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-dark-hover hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3, type: "spring", stiffness: 120 }}
            >
              Inicia Sesión
            </motion.a>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <motion.img
              src={GasIllustration}
              alt="Ilustración de fuga de gas"
              className="max-w-full h-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7, type: "spring", stiffness: 50 }}
              style={{ animation: 'float 6s ease-in-out infinite' }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;