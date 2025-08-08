import agencyVideo from '../../assets/videos/agency.mp4';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section
      className="relative h-[100vh] overflow-hidden flex items-center justify-center text-center px-4 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black"
      aria-label="About KarFamSoft Agency"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover top-0 left-0 z-0"
        aria-hidden="true"
      >
        <source src={agencyVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-3xl text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A{' '}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Creative
          </span>{' '}
          Partner for the Ambitious
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          At KarFamSoft Agency, we create digital experiences that help brands
          grow, adapt, and thrive in a changing world.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:from-indigo-700 hover:to-purple-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          aria-label="Contact KarFamSoft Agency"
        >
          Contact Us
        </motion.a>
      </motion.div>
    </section>
  );
};

export default AboutHero;
