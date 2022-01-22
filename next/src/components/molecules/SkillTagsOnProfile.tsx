import React from "react";
import { SkillTag } from "../atoms";

// FCの型定義
type Props = {
  tags: {
    name: string;
    version?: any;
  }[];
};

// CSSの変更が加わるので明示的にonProfileとして分離
const SkillTagsOnProfile: React.FC<Props> = ({ tags }) => {
  return (
    <div className="m-1 flex flex-wrap">
      {tags.map((tag) => {
        return <SkillTag key={tag.name} {...tag} />;
      })}
    </div>
  );
};

export default SkillTagsOnProfile;
