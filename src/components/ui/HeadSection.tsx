import ReactLogo from '@/assets/react-logo.png';

const HeadSection = () => {
  return (
    <section className="bg-[#14110f] w-screen relative">
      <div className="absolute inset-0 shadow-borderShadow z-10 h-1 bg-[#14110f]" />
      <div className="flex justify-between gap-40 mx-auto items-center max-w-[1200px] py-20">
        <div className="flex flex-col gap-6">
          <h1 className="text-neutral-100 text-[48px] leading-[62px]">
            Welcom to my own website
          </h1>
          <p className="text-2xl text-neutral-100">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis impedit debitis eveniet sint. Officiis quas nemo,
            necessitatibus, reiciendis neque quasi veniam deleniti quidem labore
            dignissimos et! Ut nemo corporis rerum.
          </p>
        </div>

        <img
          src={ReactLogo}
          alt="react-logo"
          width={420}
          className="animate-[spin_60s_linear_infinite]"
        />
      </div>
    </section>
  );
};

export default HeadSection;
