import { hatch } from "ldrs";

hatch.register();
const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <l-hatch size="28" stroke="4" speed="3.5" color="white"></l-hatch>;
    </div>
  );
};

export default Spinner;
