import React from "react";
import SkillTag from "../atoms/SkillTag";

// FCの型定義
type Props = {
  tags: {
    name: string;
    version?: any;
  }[];
};

// CSSの変更が加わるので明示的にonArticleとして分離
const SkillTagsOnArticle: React.FC<Props> = ({ tags }) => {
  return (
    <div className="m-1 flex flex-wrap">
      {tags.map((tag) => {
        return <SkillTag key={tag.name} {...tag} />;
      })}
    </div>
  );
};

export default SkillTagsOnArticle;
