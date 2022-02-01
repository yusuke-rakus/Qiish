import React from "react";
import { SkillTag } from "../atoms";
import { TagOutlined } from "@ant-design/icons";

// FCの型定義
type Props = {
  tags: {
    id: number;
    skill: string;
  }[];
};

// CSSの変更が加わるので明示的にonArticleとして分離
const SkillTagsOnArticle: React.FC<Props> = ({ tags }) => {
  return (
    <div className="flex flex-wrap">
      <span className="pr-2 text-xl">
        <TagOutlined />
      </span>

      {tags.map((tag) => {
        return <SkillTag key={tag.skill} {...tag} />;
      })}
    </div>
  );
};

export default SkillTagsOnArticle;
