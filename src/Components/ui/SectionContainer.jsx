import { motion } from 'framer-motion';

/**
 * SectionContainer — reusable full-width section wrapper.
 *
 * Props:
 *  as            – rendered element (default: 'section')
 *  maxWidth      – inner content cap: 'sm' | 'md' | 'lg' | 'xl' | '2xl' (default: 'xl')
 *  centered      – center-align inner content (default: false)
 *  noPadding     – skip the default vertical padding token (default: false)
 *  className     – extra Tailwind classes applied to the outer section
 *  innerClassName – extra Tailwind classes applied to the inner max-width div
 *  children
 *  All other props (e.g. aria-label, id) forwarded to the outer element.
 */

const maxWidthClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  '2xl': 'max-w-screen-2xl',
};

const SectionContainer = ({
  as = 'section',
  maxWidth = 'xl',
  centered = false,
  noPadding = false,
  className = '',
  innerClassName = '',
  children,
  ...props
}) => {
  const outerClasses = [
    noPadding ? '' : 'py-[--spacing-section]',
    'px-4 lg:px-8',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const innerClasses = [
    'mx-auto',
    maxWidthClasses[maxWidth],
    centered ? 'text-center' : '',
    innerClassName,
  ]
    .filter(Boolean)
    .join(' ');

  const MotionTag = motion(as);

  return (
    <MotionTag
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={outerClasses}
      {...props}
    >
      <div className={innerClasses}>{children}</div>
    </MotionTag>
  );
};

export default SectionContainer;
