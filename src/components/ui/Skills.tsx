import { arrayContent } from '@/components/content/skillsContent';
import { CardSkill } from './components/cards';

const Skills = () => {
  return (
    <article className="bg-[#EEE5E9] py-4" id="skills">
      <div className="flex max-w-[1400px] mx-auto items-center flex-col gap-8 px-10 md:px-4">
        <h2 className="text-slate-900 text-[72px] font-bold">Skills</h2>
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-[32px]">
          {arrayContent.map((item) => (
            <CardSkill content={item} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Skills;
