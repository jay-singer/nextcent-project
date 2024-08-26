import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PrimaryBtn from "../smlcomponents/primaryBtn";

function NavBar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setActive(false); // Ensures the menu is always visible on large screens
    } else {
      setActive(true); // Hides the menu on smaller screens
    }
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 140) {
      document.getElementById("nav").style =
        " box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);";
    } else {
      document.getElementById("nav").style = "";
    }
  });

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navArr = ["Home", "Features", "Community", "Blog", "Pricing"];

  return (
    <div className="font-fontFAm">
      <nav
        id="nav"
        className="flex lg:justify-between justify-between items-center px-20 py-4 fixed w-full"
      >
        <div>
          <a href="/">
            <img
              className="xl:w-44 lg:w-40 md:w-32 w-28"
              src="./assets/logImage/Logo (1).svg"
              alt="image"
            />
          </a>
        </div>

        <div
          className={`flex-grow  lg:block overflow-hidden ${
            active ? "block absolute top-[72px] left-0 right-0" : "hidden"
          }`}
        >
          <ul className="flex lg:flex-row flex-col items-center lg:gap-10 gap-5 lg:pt-0 pt-5 justify-end pe-10">
            {navArr.map((item, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                custom={index}
                initial="visible"
                className="lg:block lg:bg-transparent bg-colorsTint-tint5 lg:p-0 px-5 py-1 lg-rounded-none rounded-md"
              >
                <motion.a
                  href="/"
                  // Scale effect on hover
                  className="lg:hover:underline underline-offset-2 lg:hover:text-colorsTint-tint3 transition-all duration-100 ease-in-out"
                >
                  {item}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <PrimaryBtn label={"Register Now"} />
          <button onClick={handleClick} className="lg:hidden block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:size-10 size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
