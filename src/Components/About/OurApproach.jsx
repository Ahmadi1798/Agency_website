import { Search, PenTool, Code2, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description:
      'We listen deeply and define what success looks like — grounded in user needs and business goals.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description:
      'We translate ideas into visual systems and intuitive experiences that elevate your brand.',
  },
  {
    icon: Code2,
    title: 'Develop',
    description:
      'We build scalable, clean, and responsive systems using modern, maintainable technologies.',
  },
  {
    icon: RefreshCw,
    title: 'Deliver & Evolve',
    description:
      'We launch, optimize, and support continuous growth — because good digital never stops.',
  },
];

const OurApproach = () => {
  return (
    <motion.section
      className="py-20 px-6 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
      aria-label="Our Approach"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 drop-shadow-lg">
          Our Approach
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          We combine strategy, design, and technology in a collaborative process
          that drives clarity, speed, and results.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
        {steps.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={i}
            className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-xl border border-indigo-100 dark:border-gray-800 flex flex-col items-center group transition-all hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 p-4 rounded-full mb-5 shadow-lg group-hover:scale-110 transition-transform">
              <Icon className="text-white" size={36} aria-hidden="true" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default OurApproach;
