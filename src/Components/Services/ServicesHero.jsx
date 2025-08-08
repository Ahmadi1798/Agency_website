import { motion } from 'framer-motion';

const ServicesHero = () => {
  return (
    <motion.section
      className="relative py-24 px-6 flex items-center justify-center text-center overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      aria-label="KarFamSoft Services"
    >
      {/* Decorative Gradient Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-200 rounded-full opacity-30 blur-2xl -z-10" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300 rounded-full opacity-20 blur-2xl -z-10" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Our{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Services
          </span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From concept to execution — we craft scalable, strategic digital
          solutions to help your business grow.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ServicesHero;
