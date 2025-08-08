import { motion } from 'framer-motion';

const posts = [
  {
    title: 'The Power of Purposeful Design',
    excerpt:
      'How intentional design choices improve user engagement and brand trust.',
    image: '/blogs/1.webp',
    datePublished: '2025-05-01',
    date: 'May 2025',
    link: '#',
  },
  {
    title: 'Top 5 Tools We Use to Build Scalable Websites',
    excerpt: 'From design to deployment, here’s our go-to tech stack in 2025.',
    image: '/blogs/2.webp',
    datePublished: '2025-04-01',
    date: 'April 2025',
    link: '#',
  },
  {
    title: 'Why Every Brand Needs a Design System',
    excerpt:
      'A design system is more than visuals — it’s your brand’s operating manual.',
    image: '/blogs/3.webp',
    datePublished: '2025-03-01',
    date: 'March 2025',
    link: '#',
  },
  {
    title: 'Dark Mode Design: Tips for Better UX',
    excerpt:
      'How to design inclusive, legible, and stylish dark interfaces in 2025.',
    image: '/blogs/4.webp',
    datePublished: '2025-02-01',
    date: 'February 2025',
    link: '#',
  },
  {
    title: 'How We Approach Mobile-First Design',
    excerpt:
      'Learn why starting with mobile changes the way we build for the web.',
    image: '/blogs/5.webp',
    datePublished: '2025-01-01',
    date: 'January 2025',
    link: '#',
  },
  {
    title: 'Web Performance in 2025: What Actually Matters',
    excerpt:
      'Speed, accessibility, and user flow — the new performance checklist.',
    image: '/blogs/6.webp',
    datePublished: '2024-12-01',
    date: 'December 2024',
    link: '#',
  },
];

const BlogPosts = () => {
  return (
    <motion.section
      className="py-16 px-6 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      aria-label="KarFamSoft Blog Posts"
    >
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {posts.map((post, i) => (
          <motion.article
            key={i}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-indigo-100 dark:border-gray-800 flex flex-col group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            itemScope
            itemType="http://schema.org/BlogPosting"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={`Blog post: ${post.title}`}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                itemProp="image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="p-6 flex flex-col flex-1 text-left">
              <span
                className="text-sm text-gray-500 dark:text-gray-400 mb-2"
                itemProp="datePublished"
              >
                {post.date}
              </span>
              <h3
                className="font-bold text-lg text-gray-900 dark:text-white mb-2"
                itemProp="headline"
              >
                {post.title}
              </h3>
              <p
                className="text-base text-gray-600 dark:text-gray-300 flex-1"
                itemProp="description"
              >
                {post.excerpt}
              </p>
              <a
                href={post.link}
                className="text-indigo-600 dark:text-indigo-400 text-sm font-medium inline-block mt-4 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                itemProp="url"
                aria-label={`Read more: ${post.title}`}
              >
                Read More →
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default BlogPosts;
