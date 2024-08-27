function Pricing() {
  return (
    <div className="lg:mt-12 mt-7">
      <div className="flex  gap-10 lg:gap-0 lg:justify-around md:flex-row flex-col  justify-center md:items-start items-center">
        <div className="  md:ps-0 ps-5">
          <h1 className="text-neutral-DarkGray font-bold lg:text-[25px] text-start ">
            Helping a local
          </h1>
          <h1 className="text-primary font-bold lg:text-[25px] text-start ">
            business reinvent itself
          </h1>
          <p className="text-neutral-Gray text-body4  lg:text-body3 ">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="flex flex-col items-start justify-center  gap-4 lg:w-1/3 ">
          {" "}
          <div className=" flex items-center justify-center  gap-x-14 md:gap-10">
            <span className="flex justify-center items-start gap-2">
              <img
                className=" md:size-7 size-5"
                src="./assets/2image/Icon (3).svg"
                alt=""
              />
              <div>
                <h1 className="lg:text-[19px] font-bold md:text-body2 text-body3">
                  2,245,341
                </h1>
                <p className="text-neutral-Gray md:text-body4 text-[10px]  lg:text-body3">
                  Members
                </p>
              </div>
            </span>
            <span className="flex justify-center items-start gap-2">
              <img
                className=" md:size-7 size-5"
                src="./assets/2image/Group 2.svg"
                alt=""
              />
              <div>
                <h1 className="lg:text-[19px] md:text-body2 text-body3 font-bold">
                  2,245,341
                </h1>
                <p className="text-neutral-Gray md:text-body4  text-[10px] lg:text-body3 ">
                  Clubs
                </p>
              </div>
            </span>
          </div>
          <div className=" flex items-center justify-center gap-x-14 md:gap-10">
            <span className="flex justify-center items-start gap-2">
              <img
                className=" md:size-7 size-5"
                src="./assets/2image/Icon (5).svg"
                alt=""
              />
              <div>
                <h1 className="lg:text-[19px] font-bold md:text-body2 text-body3">
                  2,245,341
                </h1>
                <p className="text-neutral-Gray md:text-body4 text-[10px]  lg:text-body3">
                  Event Bookings
                </p>
              </div>
            </span>
            <span className="flex justify-center  items-start gap-2">
              <img
                className=" md:size-7  size-5"
                src="./assets/2image/Icon (6).svg"
                alt=""
              />
              <div>
                <h1 className="lg:text-[19px] font-bold md:text-body2 text-body3">
                  2,245,341
                </h1>
                <p className="text-neutral-Gray md:text-body4 text-[10px]  lg:text-body3 ">
                  Payments
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
