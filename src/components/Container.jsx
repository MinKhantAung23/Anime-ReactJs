/* eslint-disable react/prop-types */

const Container = ({ children, className }) => {
  return (
    <div
      className={`w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
