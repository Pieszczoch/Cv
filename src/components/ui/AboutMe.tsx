import GigaChad from '@/assets/giga-chad.png';

const AboutMe = () => {
  return (
    <article className="bg-[#14110f] py-10">
      <div className="flex justify-center gap-10 max-w-[1200px] mx-auto items-center ">
        <img
          src={GigaChad}
          alt="giga-chad"
          width={360}
          className="border-4 shadow-borderShadowInset"
        />
        <div className="flex flex-col gap-6 items-center max-w-[600px]">
          <h2 className="text-neutral-100 text-[40px] leading-[54px]">
            About me
          </h2>
          <p className="text-2xl text-neutral-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            unde vero vitae maiores id quis qui ab quod voluptatibus autem!
            Deleniti ipsam in tenetur. Sunt quas deserunt ducimus soluta sequi.
          </p>
        </div>
      </div>
    </article>
  );
};

export default AboutMe;
