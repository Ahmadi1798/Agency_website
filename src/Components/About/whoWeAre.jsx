import teamImage from '../../assets/Images/team-working.jpg';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
  return (
    <section className="relative py-20 px-6" aria-label="About KarFamSoft Team">
      {/* Decorative Gradient Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-200 rounded-full opacity-30 blur-2xl -z-10" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300 rounded-full opacity-20 blur-2xl -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 drop-shadow-lg">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              KarFamSoft Agency
            </span>{' '}
            is a team of strategists, designers, and developers who believe in
            the power of purposeful creativity. We blend aesthetics with
            functionality to deliver digital solutions that are both visually
            compelling and strategically sound.
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Whether we're building a product from scratch or refining a
            platform, we bring full ownership, deep collaboration, and real
            curiosity to every project.
          </p>
        </motion.div>

        {/* Visual */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={teamImage}
            alt="KarFamSoft team collaborating in a creative workspace"
            className="rounded-2xl shadow-2xl border-4 border-indigo-100 dark:border-gray-900 w-full object-cover max-h-[420px]"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
