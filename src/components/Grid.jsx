/* eslint-disable react/prop-types */
const Grid = ({ children, className }) => {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Grid;