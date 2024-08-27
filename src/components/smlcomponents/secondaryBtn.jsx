import PropTypes from "prop-types";
function SecondaryBtn({ label, icons }) {
  return (
    <div className=" flex md:justify-start justify-center ">
      <button className=" bg-primary whitespace-nowrap text-neutral-white md:w-[93px]  justify-center  flex text-medium-body4 px-4 py-2 rounded-sm gap-1 items-center ">
        <span className="text-body3"> {label}</span>
        <span>{icons}</span>
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
