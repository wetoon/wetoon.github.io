
import { motion } from 'framer-motion';

const ScrollAnimation = () => {
  return (
    <div className="min-h-[200vh]">
      <motion.div
        className="min-h-screen flex items-center justify-center bg-gray-100"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-800">Section 1</h1>
          <p className="mt-4 text-lg text-gray-600">Fades in on scroll!</p>
        </div>
      </motion.div>

      <motion.div
        className="min-h-screen flex items-center justify-center bg-gray-200"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-800">Section 2</h1>
          <p className="mt-4 text-lg text-gray-600">Using Framer Motion with Tailwind.</p>
        </div>
      </motion.div>

      <motion.div
        className="min-h-screen flex items-center justify-center bg-gray-300"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-800">Section 3</h1>
          <p className="mt-4 text-lg text-gray-600">Scroll-triggered animation.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;