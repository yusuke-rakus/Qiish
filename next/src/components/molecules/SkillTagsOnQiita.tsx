import React from "react";
import { SkillTagQiita } from "../atoms";

// FCの型定義
type Props = {
  tags: {
    name: string;
    version?: any;
  }[];
};

// CSSの変更が加わるので明示的にonArticleとして分離
const SkillTagsOnQiita: React.FC<Props> = ({ tags }) => {
  return (
    <div className="m-1 flex flex-wrap">
      {tags.map((tag) => {
        return <SkillTagQiita key={tag.name} {...tag} />;
      })}
    </div>
  );
};

export default SkillTagsOnQiita;
