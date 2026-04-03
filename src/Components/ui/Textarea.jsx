const Textarea = ({ className = '', rows = 4, ...props }) => {
  return (
    <textarea
      rows={rows}
      className={[
        'w-full rounded-lg border border-border-color bg-secondary px-4 py-2.5 text-primary-text',
        'placeholder:text-secondary-text focus:outline-none focus:ring-2 focus:ring-brand-indigo',
        'dark:border-gray-700 dark:bg-gray-900 dark:text-white',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  );
};

export default Textarea;
