import { motion } from 'framer-motion';

/**
 * Card — reusable surface / content-card component.
 *
 * Props:
 *  hover    – boolean: enable lift-on-hover animation  (default: true)
 *  padding  – 'sm' | 'md' | 'lg'                       (default: 'md')
 *  className – extra Tailwind classes
 *  children
 */

const paddingClasses = {
  sm: 'p-4',
  md: 'p-8',
  lg: 'p-12',
};

const Card = ({
  hover = true,
  padding = 'md',
  className = '',
  children,
  ...props
}) => {
  const base =
    'bg-white dark:bg-gray-900 rounded-[--radius-card] border border-indigo-100 dark:border-gray-800 shadow-[--shadow-card]';
  const classes = [base, paddingClasses[padding], className]
    .filter(Boolean)
    .join(' ');

  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: 'var(--shadow-card-hover)' } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={classes}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
