import { Code, Brush, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    icon: Code,
    description:
      'High-performance websites using modern stacks like React and Tailwind.',
  },
  {
    title: 'UI/UX Design',
    icon: Brush,
    description:
      'User-first designs that balance aesthetics and functionality.',
  },
  {
    title: 'Digital Strategy',
    icon: BarChart3,
    description:
      'Clear and actionable strategies to launch and grow your product.',
  },
];

const ServicesPreview = () => {
  return (
    <motion.section
      className="py-20 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      aria-label="Our Services"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          What We Do
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We help brands build user-focused digital experiences with scalable
          design and code.
        </motion.p>

        <motion.div
          className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-indigo-100 dark:border-gray-800 flex flex-col items-center group"
            >
              <div className="bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 p-4 rounded-full mb-5 shadow-lg group-hover:scale-105 transition-transform">
                <service.icon
                  className="text-white"
                  size={36}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="/services"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="View all services"
          >
            View All Services
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesPreview;
