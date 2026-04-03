const Select = ({ className = '', children, ...props }) => {
  return (
    <select
      className={[
        'w-full rounded-lg border border-border-color bg-secondary px-4 py-2.5 text-primary-text',
        'focus:outline-none focus:ring-2 focus:ring-brand-indigo',
        'dark:border-gray-700 dark:bg-gray-900 dark:text-white',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
