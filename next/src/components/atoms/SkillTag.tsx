type Props = {
  id: number;
  skill: string;
};

const SkillTag: React.FC<Props> = ({ skill }) => {
  return (
    <span
      key={skill}
      className={
        "m-1 px-3 py-1 bg-orange-400 text-white text-center font-sans text-xs rounded-sm"
      }
    >
      {skill}
    </span>
  );
};

export default SkillTag;
