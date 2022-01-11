import React from "react";
import SkillTag from "../atoms/SkillTag";

// FCの型定義
type Props = {
  tags: {
    user_info_id: number;
    skill_id: number;
    skill_name: string;
  }[];
};

// CSSの変更が加わるので明示的にonProfileとして分離
const SkillTagsOnProfile: React.FC<Props> = ({ tags }) => {
  return (
    <div className="m-1">
      {tags.map((tag) => {
        return <SkillTag key={tag.skill_id} {...tag} />;
      })}
    </div>
  );
};

export default SkillTagsOnProfile;
