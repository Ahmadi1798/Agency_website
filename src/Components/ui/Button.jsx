import { motion } from 'framer-motion';

/**
 * Button — reusable base button component.
 *
 * Props:
 *  variant  – 'primary' | 'outline' | 'ghost'   (default: 'primary')
 *  size     – 'sm' | 'md' | 'lg'                (default: 'md')
 *  as       – rendered element: 'button' | 'a'  (default: 'button')
 *  All other native button/anchor props are forwarded.
 */

const variantClasses = {
  primary:
    'bg-gradient-to-r from-brand-indigo to-brand-purple hover:from-brand-indigo-hover hover:to-brand-purple-hover text-white shadow-lg focus:ring-2 focus:ring-brand-indigo',
  outline:
    'bg-white dark:bg-gray-900 border border-brand-indigo text-brand-indigo dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 shadow focus:ring-2 focus:ring-brand-indigo',
  ghost:
    'bg-transparent text-brand-indigo dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 focus:ring-2 focus:ring-brand-indigo',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm rounded-md',
  md: 'px-7 py-3 text-base rounded-lg',
  lg: 'px-9 py-4 text-lg rounded-xl',
};

const Button = ({
  variant = 'primary',
  size = 'md',
  as = 'button',
  className = '',
  children,
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center font-semibold transition focus:outline-none select-none';
  const classes = [base, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(' ');

  const MotionTag = motion(as);

  return (
    <MotionTag
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export default Button;
