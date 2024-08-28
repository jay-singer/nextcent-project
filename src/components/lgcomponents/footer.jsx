import SecondaryBtn from "../smlcomponents/secondaryBtn";

function Footer() {
  const footerLinks = [
    "About Us",
    "Blog",
    "Contact Us",
    "Pricing",
    "Testimonials",
  ];
  const footerLinks2 = [
    "Help center",
    "Terms of Services",
    "Legal",
    "Privacy Policy",
    "Status",
  ];
  return (
    <div className="lg:mt-16 mt-7">
      <div className="flex flex-col items-center gap-5 ">
        {/** first section */}
        <div className=" flex items-center flex-col gap-3">
          <h1 className="text-neutral-DarkGray font-bold lg:text-[25px] text-center lg:w-[75%]">
            Pellentesque suscipit fringilla libero eu.
          </h1>
          <SecondaryBtn
            label="Get Started"
            icons={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            }
          />
        </div>
        {/** second section */}
        <div className="bg-neutral-Black md:flex-row flex-col items-center flex w-full justify-around md:items-start py-10">
          {/** first division */}
          <div className="flex flex-col gap-8">
            <div>
              <img src="./assets/logImage/Logo.svg" alt="" />
            </div>
            <div className="flex md:flex-col flex-row md:gap-3 gap-1 text-neutral-silver text-body4">
              <span>Copyright © 2020 Landify UI Kit.</span>
              <span>All rights reserved</span>
            </div>
            <div className="flex md:justify-start justify-center gap-5">
              <span className="  bg-neutral-DarkGray rounded-full p-1 flex justify-center items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 24 24"
                  className="size-5"
                >
                  <path
                    fill="white"
                    d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008a3.004 3.004 0 0 1 0 6.008"
                  ></path>
                  <circle
                    cx={16.806}
                    cy={7.207}
                    r={1.078}
                    fill="white"
                  ></circle>
                  <path
                    fill="white"
                    d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42a4.6 4.6 0 0 0-2.633 2.632a6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632a6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419a4.6 4.6 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688a3 3 0 0 1-1.712 1.711a5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055c-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311a3 3 0 0 1-1.719-1.711a5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311a3 3 0 0 1 1.712 1.712a5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z"
                  ></path>
                </svg>
              </span>

              <span className="  bg-neutral-DarkGray rounded-full p-1 flex justify-center items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 48 48"
                  className="size-5"
                >
                  <path
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M24 2.5v43c-6.573 0-11.902-9.626-11.902-21.5S17.427 2.5 24 2.5S35.902 12.126 35.902 24S30.573 45.5 24 45.5M45.5 24h-43m40.12-10.75H5.38m37.24 21.5H5.38"
                  ></path>
                  <path
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.5 24c0 11.874 9.626 21.5 21.5 21.5S45.5 35.874 45.5 24S35.874 2.5 24 2.5S2.5 12.126 2.5 24"
                  ></path>
                </svg>
              </span>
              <span className=" bg-neutral-DarkGray rounded-full p-1 flex justify-center items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 24 24"
                  className="size-5"
                >
                  <path
                    fill="white"
                    d="M19.633 7.997c.013.175.013.349.013.523c0 5.325-4.053 11.461-11.46 11.461c-2.282 0-4.402-.661-6.186-1.809c.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721a4.04 4.04 0 0 1-3.767-2.793c.249.037.499.062.761.062c.361 0 .724-.05 1.061-.137a4.03 4.03 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.02 4.02 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.46 11.46 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a8 8 0 0 0 2.556-.973a4.02 4.02 0 0 1-1.771 2.22a8 8 0 0 0 2.319-.624a8.7 8.7 0 0 1-2.019 2.083"
                  ></path>
                </svg>
              </span>
              <span className="  bg-neutral-DarkGray rounded-full p-1 flex justify-center items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 24 24"
                  className="size-5"
                >
                  <path
                    fill="white"
                    d="M21.593 7.203a2.5 2.5 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765c1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.52 2.52 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831M9.996 15.005l.005-6l5.207 3.005z"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          {/** second division */}
          <div className="flex justify-center items-start md:flex-row flex-col  md:gap-8 gap-4">
            {/**  first Sub-division */}
            <div className="flex flex-row gap-8 mt-4 md:mt-0 justify-between w-full md:w-fit">
              {" "}
              <div className=" text-neutral-silver gap-2 flex-col flex">
                <h3 className="font-semibold text-body4">Company</h3>
                <div>
                  <ul className="flex flex-col gap-2 ">
                    {footerLinks.map((link, index) => (
                      <li
                        className="text-[10px] hover:underline underline-offset-2 transition-all duration-150"
                        key={index}
                      >
                        <a href="/">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/**  second Sub-division */}
              <div className=" text-neutral-silver gap-2 flex-col flex ">
                <h3 className="font-semibold text-body4">Company</h3>
                <div>
                  <ul className="flex flex-col gap-2 ">
                    {footerLinks2.map((link, index) => (
                      <li
                        className="text-[10px] hover:underline underline-offset-2 transition-all duration-150"
                        key={index}
                      >
                        <a href="/">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/**  third Sub-division */}
            <div className=" text-neutral-silver gap-4 flex-col flex">
              <h3 className="font-semibold text-body4">Stay up to date</h3>
              <div className="flex bg-neutral-DarkGray rounded-md py-2 px-3 text-neutral-silver items-center">
                <input
                  className="bg-transparent text-neutral-silver placeholder:text-neutral-white placeholder:text-body4 outline-none text-body4"
                  type="email"
                  placeholder="Enter email address"
                />

                <img className="size-5" src="./assets/logImage/send.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
