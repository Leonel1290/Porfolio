import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Ajusta para la altura del navbar fijo y un pequeño margen
      const offset = document.querySelector('nav').offsetHeight + 10;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 shadow-sm transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-dark-blue-bg/80' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a className="font-bold text-2xl text-text-light hover:text-primary-green transition-colors" href="#" onClick={() => scrollToSection('inicio')}>ASG</a>

        <button
          className="lg:hidden text-text-light focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        <AnimatePresence>
          {(isOpen || window.innerWidth >= 1024) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`lg:flex lg:items-center lg:w-auto w-full absolute lg:relative top-full left-0 bg-dark-blue-bg/90 lg:bg-transparent lg:shadow-none shadow-lg py-4 lg:py-0 ${isOpen ? 'block' : 'hidden'}`}
            >
              <ul className="lg:flex lg:space-x-8 lg:items-center flex flex-col lg:flex-row items-center">
                <li>
                  <a
                    className="nav-link block px-4 py-2 text-text-light hover:text-primary-green transition-colors"
                    href="#contact"
                    onClick={() => scrollToSection('contact')}
                  >
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    className="btn-custom block px-6 py-2 rounded-full font-semibold transition-colors mt-4 lg:mt-0"
                    href="/comprar"
                  >
                    Comprar Dispositivo
                  </a>
                </li>
                <li>
                  <a
                    className="btn-custom block px-6 py-2 rounded-full font-semibold transition-colors mt-4 lg:mt-0"
                    href="/loginobtener"
                  >
                    Inicia Sesión
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;