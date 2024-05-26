import ReactLogo from '@/assets/react-logo.png';

const HeadSection = () => {
  return (
    <section className="bg-[#14110f] w-full relative">
      <div className="absolute inset-0 shadow-borderShadow z-10 h-1 bg-[#14110f]" />
      <div className="flex md:flex-row flex-col justify-between lg:gap-20 gap-8 md:gap-10 xl:gap-40 mx-auto items-center max-w-[1280px] px-10 py-20">
        <div className="flex flex-col gap-6">
          <h1 className="text-neutral-100 text-3xl md:text-5xl">
            Welcom to my own website
          </h1>
          <p className="text-lg lg:text-2xl text-neutral-100">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis impedit debitis eveniet sint. Officiis quas nemo,
            necessitatibus, reiciendis neque quasi veniam deleniti quidem labore
            dignissimos et! Ut nemo corporis rerum.
          </p>
        </div>

        <img
          src={ReactLogo}
          alt="react-logo"
          className="xl:w-[420px] xl:h-[420px] lg:w-[320px] lg:h-[320px] md:w-[220px] md:h-[220px] animate-[spin_60s_linear_infinite]"
        />
      </div>
    </section>
  );
};

export default HeadSection;
