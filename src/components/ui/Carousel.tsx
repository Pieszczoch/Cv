import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import react from '@/assets/logos/react-logo.png';
import gatsby from '@/assets/logos/gatsby-logo.png';
import headless from '@/assets/logos/headless-log.png';
import js from '@/assets/logos/js-logo.png';
import mantine from '@/assets/logos/mantine-logo.png';
import next from '@/assets/logos/next-logo.png';
import reactQuery from '@/assets/logos/react-query-logo.png';
import redux from '@/assets/logos/redux-logo.png';
import rhf from '@/assets/logos/rhf-logo.png';
import sb from '@/assets/logos/storybook-logo.png';
import tailwind from '@/assets/logos/tailwind-logo.png';
import ts from '@/assets/logos/ts-logo.png';
import vite from '@/assets/logos/vite-logo.png';
import sass from '@/assets/logos/sass-logo.png';

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      startIndex: 4,
    },
    [
      AutoScroll({
        stopOnInteraction: false,
        startDelay: 0,
        stopOnFocusIn: false,
        speed: 1,
      }),
    ]
  );

  const logoCarousel = [
    {
      src: react,
      alt: 'react-img',
    },
    {
      src: gatsby,
      alt: 'gatsby-img',
    },
    {
      src: headless,
      alt: 'headless-img',
    },
    {
      src: js,
      alt: 'js-img',
    },
    {
      src: mantine,
      alt: 'mantine-img',
    },
    {
      src: next,
      alt: 'next-img',
    },
    {
      src: reactQuery,
      alt: 'react-query-img',
    },
    {
      src: redux,
      alt: 'redux-img',
    },
    {
      src: rhf,
      alt: 'rhf-logo',
    },
    {
      src: sass,
      alt: 'sass-img',
    },
    {
      src: sb,
      alt: 'sb-img',
    },
    {
      src: tailwind,
      alt: 'tailwind-img',
    },
    {
      src: ts,
      alt: 'ts-img',
    },
    {
      src: vite,
      alt: 'vite-img',
    },
  ];

  return (
    <section className="mx-auto text-center py-3">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-10 xl:gap-x-20 max-h-[100px] xl:max-h-[150px]">
          {logoCarousel.map((item, index) => (
            <img
              src={item.src}
              alt={`${index}-${item.alt}`}
              className="w-auto h-[100px] last:pr-10 last:xl:pr-20"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
