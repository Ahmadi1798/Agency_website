const Paragraph = ({ className = '', children, ...props }) => {
  return (
    <p
      className={[
        'text-base leading-relaxed text-secondary-text dark:text-gray-300',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
