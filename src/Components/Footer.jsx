import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800"
      aria-label="Site Footer"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="/" aria-label="KarFamSoft Home" className="mb-6 lg:mb-0">
            <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight drop-shadow-lg select-none transition-transform duration-300 hover:scale-105">
              KarFamSoft
            </span>
          </a>
          <nav aria-label="Social Media">
            <ul className="flex gap-5">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
                  aria-label="Twitter"
                >
                  <FaXTwitter size={20} />
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 text-sm text-gray-600 dark:text-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                >
                  Meet the Team
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
              Helpful Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/contact"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/faqs"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/accessibility"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
              Stay in the Loop
            </h4>
            <p className="mb-4 text-sm">
              Get updates on our latest work and projects.
            </p>
            <form
              className="flex items-center"
              aria-label="Subscribe to newsletter"
            >
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-sm rounded-l-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-r-lg hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Subscribe"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </motion.div>

        <motion.p
          className="mt-10 text-center text-xs text-gray-400 dark:text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          &copy; 2025 KarFamSoft. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
