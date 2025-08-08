import { motion } from 'framer-motion';

const posts = [
  {
    title: 'The Power of Purposeful Design',
    image: '/blogs/1.webp',
    date: 'May 2025',
    link: '#',
    description:
      'Discover how intentional design choices drive business growth and user engagement.',
  },
  {
    title: 'Top 5 Tools We Use to Build Scalable Websites',
    image: '/blogs/2.webp',
    date: 'April 2025',
    link: '#',
    description:
      'Explore our favorite tools for building robust, scalable digital products.',
  },
  {
    title: 'Why Every Brand Needs a Design System',
    image: '/blogs/3.webp',
    date: 'March 2025',
    link: '#',
    description:
      'Learn why a unified design system is essential for brand consistency and speed.',
  },
];

const BlogTeaser = () => {
  return (
    <motion.section
      className="py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      aria-label="Latest Blog Posts"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          From the Blog
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Insights and ideas from the KarFamSoft team to inspire your next
          project.
        </motion.p>
        <motion.div
          className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {posts.map((post, i) => (
            <motion.article
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-indigo-100 dark:border-gray-800 flex flex-col"
            >
              <div className="relative group">
                <img
                  src={post.image}
                  alt={`Blog post: ${post.title}`}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                  {post.date}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                  {post.description}
                </p>
                <a
                  href={post.link}
                  className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-5 py-2 rounded-full shadow hover:from-indigo-700 hover:to-purple-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More →
                </a>
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
            href="/blog"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Visit our full blog"
          >
            Visit Blog
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BlogTeaser;
