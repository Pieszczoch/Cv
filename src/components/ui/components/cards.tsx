import { PortfolioTypes } from '@/components/content/portfolioContent';
import { SkillsTypes } from '@/components/content/skillsContent';

const CardSkill = ({ content }: { content: SkillsTypes }) => {
  return (
    <div className="shadow-xl p-3 flex w-[401px] gap-6 w-full flex-col border-4 rounded-lg border-white bg-[#14110f]">
      <h3 className="text-center text-neutral-100 text-4xl">{content.title}</h3>
      <ul className="list-disc">
        {content.skillList.map((item) => {
          return <li className="text-neutral-100 text-2xl ml-6">{item}</li>;
        })}
      </ul>
    </div>
  );
};

const CardPortfolio = ({ content }: { content: PortfolioTypes }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <h3 className="text-neutral-100 text-3xl font-medium">{content.title}</h3>
      <a href={content.href} target="_blank">
        <img
          src={content.img}
          alt={content.title}
          className="rounded-lg border-2 shadow-light"
        />
      </a>
    </div>
  );
};

export { CardSkill, CardPortfolio };
