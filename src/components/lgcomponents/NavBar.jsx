import React, { useState } from "react";
import PrimaryBtn from "../smlcomponents/primaryBtn";

function NavBar() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const navArr = ["Home", "Features", "Community", "Blog", "Pricing"];
  return (
    <div className="font-fontFAm">
      <nav className="flex lg:justify-between bg-red-300 justify-between items-center px-20 py-4 fixed w-full">
        <div className=" ">
          {" "}
          <a href="/">
            <img
              className="xl:w-44 lg:w-40 md:w-32 w-28"
              src="./assets/logImage/Logo (1).svg"
              alt="image"
            />{" "}
          </a>
        </div>
        <div
          className={`flex-grow   bg-slate-500 lg:block ${
            active ? " block absolute top-[72px]  left-0 right-0 " : "hidden"
          }`}
        >
          <ul className="flex lg:flex-row flex-col items-center lg:gap-10 gap-5 lg:pt-0 pt-5 justify-end pe-10">
            {navArr.map((index, value) => {
              return (
                <li key={value}>
                  <a
                    className="hover:underline underline-offset-2 hover:text-colorsTint-tint3 transition-all duration-100 ease-in-out"
                    href="/"
                  >
                    {index}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <PrimaryBtn label={"Register Now"} />
          <button onClick={handleClick} className="lg:hidden block ">
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
