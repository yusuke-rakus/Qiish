import getCookie from "../../lib/cookie/handleCookie";

type Props = {
  id: number;
  skill: string;
  onClickTag: (id: number) => void;
};

const SkillTag: React.FC<Props> = ({ id, skill, onClickTag }) => {
  return (
    <button
      key={skill}
      onClick={() => onClickTag(id)}
      className={
        "m-1 px-3 py-2 bg-sky-400 text-white text-center font-normal text-xs no-underline hover:underline hover:text-black hover:bg-sky-200 rounded-sm"
      }
    >
      {skill}
    </button>
  );
};

export default SkillTag;
