const Tag = ({ className = '', children }) => {
  return (
    <span
      className={[
        'inline-flex items-center rounded-md border border-border-color bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-text',
        'dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  );
};

export default Tag;
