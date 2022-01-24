import React from "react";
import { SkillTag } from "../atoms";

// FCの型定義
type Props = {
  tags: {
    article_id: number;
    skill_id: number;
    skill_name: string;
  }[];
};

// CSSの変更が加わるので明示的にonArticleとして分離
const SkillTagsOnArticle: React.FC<Props> = ({ tags }) => {
  return (
    <div className="m-1 flex flex-wrap">
      {tags.map((tag) => {
        return <SkillTag key={tag.skill_name} {...tag} />;
      })}
    </div>
  );
};

export default SkillTagsOnArticle;
