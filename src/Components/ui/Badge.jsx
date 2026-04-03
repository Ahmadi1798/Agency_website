const Badge = ({ className = '', children }) => {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-brand-indigo',
        'dark:bg-indigo-950 dark:text-indigo-300',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  );
};

export default Badge;
