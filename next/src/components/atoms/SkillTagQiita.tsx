type Props = {
  name: string;
};

const SkillTagQiita: React.FC<Props> = ({ name }) => {
  return (
    <span
      key={name}
      className={
        "m-1 py-1 px-1 bg-blue-500 text-white text-center font-sans text-xs shadow-md rounded"
      }
    >
      {name}
    </span>
  );
};

export default SkillTagQiita;
