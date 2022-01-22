type Props = {
  name: string;
};

const SkillTag: React.FC<Props> = ({ name }) => {
  return (
    <span
      key={name}
      className={
        "m-1 py-1 px-1 bg-orange-500 text-white text-center font-sans text-xs shadow-md rounded"
      }
    >
      {name}
    </span>
  );
};

export default SkillTag;
