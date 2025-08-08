import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutCTA = () => {
  return (
    <motion.section
      className="relative py-20 px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-700 text-white overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      aria-label="Agency Call to Action"
    >
      {/* Decorative Gradient Circles */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-400 opacity-20 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-400 opacity-20 rounded-full blur-2xl -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let’s Build Something Meaningful Together
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-8 text-indigo-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether you’re launching a new brand, building a product, or
          reimagining your digital experience — KarFamSoft Agency is ready to
          partner with you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/contact" aria-label="Contact KarFamSoft Agency">
            <button className="inline-block bg-gradient-to-r from-white via-indigo-100 to-purple-200 text-indigo-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-50 transition text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutCTA;
