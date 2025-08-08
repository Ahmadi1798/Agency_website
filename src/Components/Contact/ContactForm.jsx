import { TfiLinkedin } from 'react-icons/tfi';
import { TfiFacebook } from 'react-icons/tfi';
import { RiTwitterXLine } from 'react-icons/ri';
import { LuGithub } from 'react-icons/lu';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center mx-auto bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-20 px-4 md:px-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      aria-label="Contact KarFamSoft Agency"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-lg">
          Let’s Connect
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Got a project in mind? Fill out the form or reach out via email — we’d
          love to hear from you.
        </p>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto items-center grid md:grid-cols-2 gap-12 p-10 rounded-2xl shadow-2xl bg-white dark:bg-gray-900 border border-indigo-100 dark:border-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Contact Details */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Email Address
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            <a
              href="mailto:support@karfamsoft.com"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
              itemProp="email"
            >
              support@karfamsoft.com
            </a>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Office Location
          </h2>
          <p className="text-gray-600 dark:text-gray-300" itemProp="address">
            703 Bartley-Chester Rd, Virginia, USA
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Phone Number
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            <a
              href="tel:+15551234567"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
              itemProp="telephone"
            >
              +1 (555) 123-4567
            </a>
          </p>

          <hr className="my-6 border-gray-300 dark:border-gray-700" />

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Social Media
          </h2>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
              aria-label="LinkedIn"
            >
              <TfiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
              aria-label="Facebook"
            >
              <TfiFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
              aria-label="Twitter"
            >
              <RiTwitterXLine className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
              aria-label="GitHub"
            >
              <LuGithub className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          itemScope
          itemType="http://schema.org/ContactPage"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                htmlFor="fullName"
              >
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Devid Wonder"
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                required
                itemProp="name"
                autoComplete="name"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                required
                itemProp="email"
                autoComplete="email"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                htmlFor="phone"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+009 3342 3432"
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                itemProp="telephone"
                autoComplete="tel"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Type your subject"
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                required
              />
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Message"
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full text-sm shadow-lg transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default ContactForm;
