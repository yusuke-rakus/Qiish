type Props = {
  article_id: number;
  skill_id: number;
  skill_name: string;
};

const SkillTag: React.FC<Props> = ({ skill_name }) => {
  return (
    <span
      key={skill_name}
      className={
        "m-1 py-1 px-1 bg-orange-500 text-white text-center font-sans text-xs shadow-md rounded"
      }
    >
      {skill_name}
    </span>
  );
};

export default SkillTag;
