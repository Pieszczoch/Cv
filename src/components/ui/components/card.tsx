import { SkillsTypes } from '@/components/content/skillsContent';

const CardCompoent = ({ content }: { content: SkillsTypes }) => {
  return (
    <div className="shadow-xl p-3 flex w-[400px] gap-6 w-full flex-col border-4 rounded-lg border-white bg-[#14110f]">
      <h3 className="text-center text-neutral-100 text-4xl">{content.title}</h3>
      <ul className="list-disc">
        {content.skillList.map((item) => {
          return <li className="text-neutral-100 text-2xl ml-6">{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default CardCompoent;
