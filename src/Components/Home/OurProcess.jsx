import { Search, PenTool, Code2, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Discover',
    icon: Search,
    description: 'We listen, align on goals, and explore opportunities.',
  },
  {
    title: 'Design',
    icon: PenTool,
    description: 'We craft intuitive, elegant, and user-focused visuals.',
  },
  {
    title: 'Develop',
    icon: Code2,
    description: 'We build clean, scalable, and responsive digital products.',
  },
  {
    title: 'Deliver & Evolve',
    icon: RefreshCw,
    description: 'We launch, measure, and improve continuously.',
  },
];

const OurProcess = () => {
  return (
    <motion.section
      className="py-20 px-6 "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      aria-label="Our Process"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          How We Work
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our process merges strategy, design, and development into one seamless
          journey.
        </motion.p>
        <motion.div
          className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-indigo-100 dark:border-gray-800 flex flex-col items-center group"
            >
              <div className="bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 p-4 rounded-full mb-5 shadow-lg group-hover:scale-105 transition-transform">
                <step.icon
                  className="text-white"
                  size={36}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurProcess;
