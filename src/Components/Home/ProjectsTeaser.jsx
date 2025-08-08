import { motion } from 'framer-motion';

const projects = [
  {
    title: 'TechNova Redesign',
    image: '/images/1.jpg',
    description:
      'We helped TechNova boost engagement by 48% with a new brand and platform.',
  },
  {
    title: 'GlowCare Mobile App',
    image: '/images/2.jpg',
    description:
      'Designed a smooth, wellness-first mobile app experience with React Native.',
  },
  {
    title: 'NovaFin Dashboard UI',
    image: '/images/3.jpg',
    description:
      'Created a dashboard interface with real-time charts for a fintech client.',
  },
];

const ProjectsTeaser = () => {
  return (
    <motion.section
      className="py-20 px-6 "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      aria-label="Featured Projects"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A quick look at the work we’ve done for forward-thinking brands.
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
          {projects.map((project, i) => (
            <motion.article
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-indigo-100 dark:border-gray-800 flex flex-col group"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={`Project: ${project.title}`}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-6 flex flex-col flex-1 text-left">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="/portfolio"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="View full portfolio"
          >
            View Full Portfolio
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsTeaser;
