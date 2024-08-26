import { useState } from "react";

function PrimaryBtn({ label }) {
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
        className=" bg-primary whitespace-nowrap text-neutral-white flex text-medium-body4 px-4 py-2 rounded-md gap-1 items-center "
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${
            active && "translate-x-2 transition-all duration-400 ease-in-out "
          } `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
}

export default PrimaryBtn;
