import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 2500); // Overlay visible por 2.5 segundos (ajusta si es necesario)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            id="explosionOverlay"
            className="fixed inset-0 bg-dark-blue-bg z-[1001] flex justify-center items-center opacity-1"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1, delay: 1.5 } }}
          >
            <h1 className="text-white text-4xl font-bold animate-pulse">ASG</h1>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>
      <footer className="bg-dark-blue-bg text-center py-4 text-sm mt-auto border-t-4 border-primary-green">
        <p>&copy; 2025 AgainSafeGas Solutions | Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;