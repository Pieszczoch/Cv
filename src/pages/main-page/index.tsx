import HeadSection from '@/components/ui/HeadSection';
import Carousel from '@/components/ui/Carousel';
import AboutMe from '@/components/ui/AboutMe';
import Skills from '@/components/ui/Skills';
import Portfolio from '@/components/ui/Portfolio';

const MainPage = () => {
  return (
    <>
      <HeadSection />
      <Carousel />
      <AboutMe />
      <Skills />
      <Portfolio />
    </>
  );
};

export default MainPage;
