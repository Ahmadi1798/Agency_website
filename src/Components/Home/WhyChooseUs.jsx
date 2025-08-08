import { motion } from 'framer-motion';

const features = [
  'Proven experience with modern tech stacks',
  'Human-centered, design-first thinking',
  'Speed, responsiveness, and clean code',
  'Collaborative and transparent communication',
];

const WhyChooseUs = () => {
  return (
    <motion.section
      className="py-20 px-6 "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      aria-label="Why Choose Us"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Why Choose KarFamSoft?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We bring clarity, design, and code together to help you build
          experiences that matter.
        </motion.p>
        <motion.ul
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {features.map((point, i) => (
            <motion.li
              key={i}
              className="flex items-start bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-indigo-100 dark:border-gray-800 transition-all group"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="mr-4 flex-shrink-0">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 text-white text-lg font-bold shadow-lg group-hover:scale-110 transition-transform">
                  ✓
                </span>
              </span>
              <span className="text-base md:text-lg text-gray-800 dark:text-gray-200">
                {point}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
