import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

function Sponser() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      speed: 1,
      playOnInit: true,
      pauseOnHover: false,
    }),
  ]);
  const imgArr = [
    "./assets/2image/Logo.svg",
    "./assets/2image/Logo (1).svg",
    "./assets/2image/Logo (2).svg",
    "./assets/2image/Logo (3).svg",
    "./assets/2image/Logo (4).svg",
    "./assets/2image/Logo (5).svg",
    "./assets/2image/Logo (6).svg",
  ];

  return (
    <div className="mt-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col">
          <h2 className="text-center font-semibold text-2xl">Our Clients</h2>
          <p className="text-center text-neutral-Gray text-base">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="embla w-5/6 lg:w-1/2" ref={emblaRef}>
          <div className="embla__container cursor-pointer w-full ">
            {imgArr.map((index, value) => {
              return (
                <div key={value} className="embla__slide py-4 ">
                  <img className="lg:w-12 md:w-9 w-6" src={index} alt="logo" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponser;
