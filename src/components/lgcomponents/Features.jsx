import { useEffect } from "react";
import SecondaryBtn from "../smlcomponents/secondaryBtn";
import ScrollReveal from "scrollreveal";
function Feature() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "50px",
      duration: 2000,
      delay: 0,
      reset: true,
    });

    sr.reveal(`.scroll-top`);
  }, []);
  return (
    <div className="lg:mt-10 mt-7 scroll-top">
      <div className="flex justify-evenly items-center lg:flex-row flex-col lg:gap-0 gap-7">
        <div className="">
          <img className="h-full" src="./assets/bigImage/Frame 35.svg" alt="" />
        </div>
        <div className="lg:w-1/2 w-2/3 flex flex-col gap-3  items-start">
          <h1 className="text-neutral-DarkGray text-start  font-bold lg:text-heading3 text-heading5  md:w-full lg:w-[75%] w-full">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="text-start  text-neutral-Gray lg:text-body3 md:text-body3 text-body4 lg:w-[95%] w-full ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <SecondaryBtn label="Learn More" icons={""} />
        </div>
      </div>
    </div>
  );
}

export default Feature;
