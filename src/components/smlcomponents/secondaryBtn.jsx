import { useState } from "react";
import PropTypes from "prop-types";
function SecondaryBtn({ label, icons }) {
  const [active, setActive] = useState(false);
  const handleMove = () => {
    setActive(!active);
  };
  const handleLeave = () => {
    setActive(false);
  };
  return (
    <div className=" flex md:justify-start justify-center">
      <button
        onMouseEnter={handleMove}
        onMouseLeave={handleLeave}
        className=" bg-primary whitespace-nowrap text-neutral-white md:w-[93px] w-1/2 justify-center  flex text-medium-body4 px-4 py-2 rounded-sm gap-1 items-center "
      >
        <span> {label}</span>
        <span
          className={` ${
            active && "translate-x-2 transition-all duration-400 ease-in-out "
          } `}
        >
          {icons}
        </span>
        {}
      </button>
    </div>
  );
}
SecondaryBtn.propTypes = {
  label: PropTypes.string.isRequired, // label should be a required string
  icons: PropTypes.element, // icons should be a React element (like an SVG or JSX component)
};
export default SecondaryBtn;
