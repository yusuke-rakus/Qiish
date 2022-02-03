import React from "react";
import { SkillTag } from "../atoms";
import { TagOutlined } from "@ant-design/icons";

// FCの型定義
type Props = {
  tags: {
    id: number;
    skill: string;
  }[];
  onClickTag: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

// CSSの変更が加わるので明示的にonArticleとして分離
const SkillTagsOnArticle: React.FC<Props> = ({ tags, onClickTag }) => {
  return (
    <div className="flex flex-wrap">
      <span className="pr-2 text-xl">
        <TagOutlined />
      </span>

      {tags.map((tag) => {
        return <SkillTag key={tag.skill} {...tag} onClickTag={onClickTag} />;
      })}
    </div>
  );
};

export default SkillTagsOnArticle;
