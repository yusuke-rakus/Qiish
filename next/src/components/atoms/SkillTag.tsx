type Props = {
  user_info_id?: number;
  article_id?: number;
  skill_id: number;
  skill_name: string;
};

const SkillTag: React.FC<Props> = ({ skill_id, skill_name }) => {
  return (
    <span
      key={skill_id}
      className={
        "m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded-lg"
      }
    >
      {skill_name}
    </span>
  );
};

export default SkillTag;
