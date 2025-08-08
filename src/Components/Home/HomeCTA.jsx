import { motion } from 'framer-motion';

const HomeCTA = () => {
  return (
    <motion.section
      className="relative py-20 px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-700 overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      aria-label="Call to Action"
    >
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-400 opacity-20 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-pink-400 opacity-20 rounded-full blur-2xl -z-10" />

      <div className="max-w-4xl mx-auto text-center text-white relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ready to bring your vision to life?
        </motion.h2>
        <motion.p
          className="text-lg md:text-2xl mb-8 text-indigo-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let’s collaborate on something impactful and innovative.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-white text-indigo-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-50 transition text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          aria-label="Start a Project"
        >
          Start a Project
        </motion.a>
      </div>
    </motion.section>
  );
};

export default HomeCTA;
