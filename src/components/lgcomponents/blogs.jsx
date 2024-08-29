import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
function Blogs() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "50px",
      duration: 100,
      delay: 0,
      reset: false,
    });

    sr.reveal(`.scroll-bottom`, {
      opacity: 1,
      reset: true,
    });
  }, []);
  return (
    <div className="lg:mt-12 mt-7 scroll-bottom">
      <div className="flex flex-col items-center justify-center gap-10 pb-7">
        {/** First Section */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-neutral-DarkGray font-bold lg:text-[25px]  ">
            Caring is the new marketing
          </h2>
          <p className="md:text-center text-neutral-Gray text-body4  lg:text-body3 mb-2 lg:w-[42%] w-[80%] text-start">
            The Nextcent blog is the best place to read about the latest
            membership insights, trends and more. See who&apos;s joining the
            community, read about how our community are increasing their
            membership income and lot&apos;s more.
          </p>
        </div>
        {/** Second Section */}
        <div className=" rounded-lg flex  gap-7  w-[75%] lg:flex-nowrap flex-wrap">
          <div
            style={{
              backgroundImage: `url(./assets/image.jpeg)`,
            }}
            className=" h-[15.9rem] w-full bg-cover bg-no-repeat bg-center rounded-xl  relative"
          >
            <div className="absolute bg-neutral-white shadow-colorsTint-tint5 items-center shadow-lg rounded-lg flex flex-col lg:w-[90%] lg:left-4 lg:right-4  w-full md:gap-4 py-3 gap-2 px-3 bottom-0 lg:-bottom-16 ">
              <h3 className="text-center md:text-body3 text-body4  font-medium md:w-[80%] ">
                Create Streamlined Safeguarding Processes with OneRen
              </h3>
              <span className="text-primary flex justify-center items-center gap-2  md:text-base text-body4">
                Read more{" "}
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
              </span>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(./assets/image1.jpeg)`,
            }}
            className=" h-[15.9rem] w-full bg-cover bg-no-repeat bg-center   rounded-xl  relative"
          >
            <div className="absolute bg-neutral-white shadow-colorsTint-tint5 shadow-lg rounded-lg flex flex-col lg:w-[90%] lg:left-4 lg:right-4  w-full md:gap-4 py-3 gap-2 px-3 bottom-0 lg:-bottom-16 items-center ">
              <h3 className="text-center md:text-body3 text-body4  font-medium md:w-[80%]">
                What are your safeguarding responsibilities and how can you
                manage them?
              </h3>
              <span className="text-primary flex justify-center items-center gap-2  md:text-base text-body4">
                Read more{" "}
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
              </span>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(./assets/image2.jpeg)`,
            }}
            className=" h-[15.9rem] w-full bg-cover bg-no-repeat bg-center   rounded-xl  relative"
          >
            <div className="absolute bg-neutral-white  items-center shadow-colorsTint-tint5 shadow-lg rounded-lg flex flex-col lg:w-[90%] lg:left-4 lg:right-4  w-full md:gap-4 py-3 gap-2 px-3 bottom-0 lg:-bottom-16 ">
              <h3 className="text-center md:text-body3 text-[10px]  font-medium md:w-[73%]">
                Revamping the Membership Model with Triathlon Australia
              </h3>
              <span className="text-primary flex justify-center md:text-base text-body4 items-center gap-2">
                Read more{" "}
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
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
