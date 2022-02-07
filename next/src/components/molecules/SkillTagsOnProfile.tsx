import React from "react";
import { SkillTag } from "../atoms";

// FCの型定義
type Props = {
  tags: {
    id: number;
    skill: string;
  }[];
};

// CSSの変更が加わるので明示的にonProfileとして分離
const SkillTagsOnProfile: React.FC<Props> = ({ tags }) => {
  const onClickTag = () => {};
  return (
    <div className="m-1 flex flex-wrap">
      {tags.map((tag) => {
        return <SkillTag key={tag.id} {...tag} onClickTag={onClickTag} />;
      })}
    </div>
  );
};

export default SkillTagsOnProfile;
