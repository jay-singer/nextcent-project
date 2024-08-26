import { useState } from "react";
import PropTypes from "prop-types";
function PrimaryBtn({ label, icons }) {
  const [active, setActive] = useState(false);
  const handleMove = () => {
    setActive(!active);
  };
  const handleLeave = () => {
    setActive(false);
  };
  return (
    <div className="lg:block hidden">
      <button
        onMouseEnter={handleMove}
        onMouseLeave={handleLeave}
        className=" bg-primary whitespace-nowrap text-neutral-white flex text-medium-body4 px-4 py-2 rounded-sm gap-1 items-center "
      >
        {label}
        {icons}
        {}
      </button>
    </div>
  );
}
PrimaryBtn.propTypes = {
  label: PropTypes.string.isRequired, // label should be a required string
  icons: PropTypes.element, // icons should be a React element (like an SVG or JSX component)
};
export default PrimaryBtn;
