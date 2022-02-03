import getCookie from "../../lib/cookie/handleCookie";
import { fetchSearchedTag } from "../../lib/api/fetchData";

type Props = {
  id: number;
  skill: string;
  onClickTag: (id: number) => void;
};

const SkillTag: React.FC<Props> = ({ id, skill, onClickTag }) => {
  const guestId = getCookie();
  return (
    <button
      key={skill}
      onClick={() => onClickTag(id)}
      className={
        "m-1 px-3 py-1 bg-orange-400 text-white text-center font-sans text-xs rounded-sm no-underline hover:underline hover:text-black"
      }
    >
      {skill}
    </button>
  );
};

export default SkillTag;
