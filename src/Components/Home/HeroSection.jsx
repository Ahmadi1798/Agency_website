import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <header>
      <section
        className="relative min-h-screen flex items-center "
        aria-label="Hero Section"
      >
        {/* Decorative Gradient Circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 rounded-full opacity-30 blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full opacity-20 blur-3xl -z-10" />

        <div className="max-w-screen-2xl mx-auto px-4 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-10"
          >
            <span className="inline-block mb-4 px-4 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold tracking-wide shadow">
              Award-winning Agency
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white mb-6 drop-shadow-lg">
              Elevate Your Brand with{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Exceptional Digital Experiences
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
              KarFamSoft crafts scalable, user-focused websites and digital
              products that help businesses thrive. Let’s turn your vision into
              reality with creativity and technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio" aria-label="View our portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-7 py-3 rounded-lg shadow-lg transition text-base font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  View Portfolio
                </motion.button>
              </Link>
              <Link to="/contact" aria-label="Contact us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white dark:bg-gray-900 border border-indigo-600 text-indigo-700 dark:text-indigo-400 px-7 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition text-base font-semibold shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex justify-center z-10"
          >
            <img
              src="/images/heroImage.webp"
              alt="Creative agency team collaborating on digital project"
              className="w-full max-w-md md:max-w-lg rounded-2xl shadow-2xl border-4 border-indigo-100 dark:border-gray-900"
              loading="eager"
            />
          </motion.div>
        </div>
      </section>
    </header>
  );
};

export default HeroSection;
