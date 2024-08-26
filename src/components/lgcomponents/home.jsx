import SecondaryBtn from "../smlcomponents/secondaryBtn";

function Home() {
  return (
    <div className=" text-fontFAm ">
      <div className=" mt-[72px] mx-auto container w-full flex justify-around lg:flex-row flex-col items-center gap-10  lg:gap-40 lg:pt-10">
        <div className="  flex flex-col justify-evenly gap-5">
          <h1 className="lg:text-fontXl text-lg md:text-4xl font-bold flex md:flex-col  md:justify-start justify-center md:gap-3 gap-1 md:items-start items-center">
            <span className="md:text-start text-center whitespace-nowrap">
              Lessons and insights
            </span>{" "}
            <span className="text-primary md:text-start text-center whitespace-nowrap">
              from 8 years
            </span>
          </h1>
          <p className="text-neutral-Gray lg:text-regular-body1 text-sm md:text-start text-center lg:px-0 px-3">
            Where to grow your business as a photographer: site or social media?
          </p>
          <SecondaryBtn label={"Register"} icons={""} />
        </div>
        <div>
          <img
            className="lg:w-[280px]"
            src="./assets/bigImage/Illustration.svg"
            alt="illustration"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-[6px] mt-20">
        <span className="h-[7px] w-[7px] bg-primary rounded-full  cursor-pointer"></span>
        <span className="h-[7px] w-[7px] bg-colorsTint-tint3 rounded-full  cursor-pointer"></span>
        <span className="h-[7px] w-[7px] bg-colorsTint-tint4 rounded-full  cursor-pointer"></span>
      </div>
    </div>
  );
}

export default Home;
