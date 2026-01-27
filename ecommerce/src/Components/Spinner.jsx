const Spinner = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-6 w-6 border-2',
    md: 'h-12 w-12 border-3',
    lg: 'h-16 w-16 border-4',
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-t-purple-500 border-b-purple-500 border-transparent`}
      />
    </div>
  );
};

export default Spinner;
