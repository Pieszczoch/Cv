import { portfolioContent } from '../content/portfolioContent';
import { CardPortfolio } from './components/cards';

const Portfolio = () => {
  return (
    <section className="bg-[#14110f] py-16" id="portfolio">
      <div className="flex flex-col justify-center max-w-[1200px] mx-auto items-center gap-6 px-10 md:px-4">
        <h2 className="text-neutral-100 text-[72px] font-semibold">
          Portfolio
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          {portfolioContent.map((item) => {
            return <CardPortfolio content={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
