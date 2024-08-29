import { useEffect } from "react";
import SecondaryBtn from "../smlcomponents/secondaryBtn";
import ScrollReveal from "scrollreveal";

function Work() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "50px",
      duration: 2000,
      delay: 0,
      reset: true,
    });
    const sr2 = ScrollReveal({
      origin: "top",
      distance: "50px",
      duration: 2000,
      delay: 100,
      reset: true,
    });

    sr.reveal(`.scroll-top`, {
      opacity: 1,
      reset: true,
    });
    sr2.reveal(`.scroll-top2`, {
      opacity: 1,
      reset: false,
    });
  }, []);
  return (
    <div className="lg:mt-12 mt-7">
      <div className="flex  justify-center items-center flex-col gap-10">
        {/** First section */}
        <div className=" scroll-top flex  lg:flex-row flex-col justify-center items-center md:w-[80%]  w-3/4   gap-5">
          {/** image division */}
          <div>
            <img
              className="lg:w-[30rem] "
              src="./assets/bigImage/pana.svg"
              alt=""
            />
          </div>
          {/** text division */}
          <div className="flex flex-col items-start  gap-1 w-fit">
            <h1 className="text-neutral-DarkGray font-bold lg:text-[25px] text-start lg:w-[55%]">
              How to design your site footer like we did
            </h1>
            <p className="text-neutral-Gray text-body4  lg:text-body3 mb-2">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <SecondaryBtn label="Learn More" />
          </div>
        </div>
        {/** Second section */}
        <div className=" scroll-top2  flex  lg:flex-row flex-col justify-center items-center md:w-[80%]  w-3/4   md:gap-10 gap-2">
          {/** image division */}
          <div className="lg:w-[26rem] md:w-[20rem] lg:self-start ">
            <img
              className="w-full h-full object-cover"
              src="./assets/bigImage/image 9.svg"
              alt=""
            />
          </div>
          {/** text division */}
          <div className="flex flex-col items-start self-start  gap-1 w-fit">
            <p className="text-neutral-Gray text-body4  mb-2">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h3 className="text-primary font-semibold lg:text-body1">
              Tim Smith
            </h3>
            <p className="text-neutral-Gray lg:text-body3 text-body4 font-medium">
              British Dragon Boat Racing Association
            </p>
            <div className="flex md:flex-row flex-col items-center md:gap-10 w-full  md:w-[80%] gap-4  mt-3">
              <div className="flex flex-1  w-full justify-between  gap-2  md:gap-0">
                <img
                  className="size-6 md:size-[30px] lg:siz-14"
                  src="./assets/2image/Logo (7).svg"
                  alt=""
                />
                <img
                  className="size-6 md:size-[30px] lg:siz-14"
                  src="./assets/2image/Logo (1).svg"
                  alt=""
                />
                <img
                  className="size-6 md:size-[30px] lg:siz-14"
                  src="./assets/2image/Logo (2).svg"
                  alt=""
                />
                <img
                  className="size-6 md:size-[30px] lg:siz-14"
                  src="./assets/2image/Logo (3).svg"
                  alt=""
                />
                <img
                  className="size-6 md:size-[30px] lg:siz-14"
                  src="./assets/2image/Logo (4).svg"
                  alt=""
                />
                <img
                  className="size-6 md:size-[30px] lg:siz-14"
                  src="./assets/2image/Logo (5).svg"
                  alt=""
                />
              </div>
              <button className="flex  gap-1 items-center text-primary lg:text-body2">
                <span>Meet all customers</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
