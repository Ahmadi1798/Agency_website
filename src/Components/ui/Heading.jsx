const Heading = ({ as = 'h2', className = '', children, ...props }) => {
  const TagName = as;

  return (
    <TagName
      className={[
        'font-extrabold tracking-tight text-primary-text dark:text-white',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </TagName>
  );
};

export default Heading;
